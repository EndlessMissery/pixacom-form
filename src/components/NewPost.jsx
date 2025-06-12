import { useForm, Controller } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { createPost, updatePost, fetchComments } from '../api/axios';
import QuillEditor from './fragments/QuillEditor';
import CommentsTable from './fragments/CommentsTable';
import PostFormButtons from './fragments/PostFormButtons';
import Loader from './fragments/Loader';
import './NewPost.css';

const NewPost = ({ post, onCreate, onUpdate, closeModal }) => {
  const isEdit = Boolean(post);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    defaultValues: {
      title: post?.title || '',
      body: post?.body || '',
    }
  });

  useEffect(() => {
    if (isEdit && post?.id) {
      fetchComments(post.id).then(res => setComments(res.data || []));
      setValue('id', post.id);
      setValue('title', post.title);
      setValue('body', post.body);
    }
  }, [isEdit, post, setValue]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    const trimmedData = {
      id: data.id || null,
      title: data.title,
      body: data.body,
    };

    try {
      if (isEdit) {
        await updatePost(post.id, trimmedData);
        onUpdate({ ...post, ...trimmedData });
      } else {
        const fakeId = Math.floor(Math.random() * 100000);
        const newPost = { ...trimmedData, id: fakeId };
        await createPost(newPost);
        onCreate(newPost);
      }
    } catch (error) {
      console.error('Chyba při ukládání příspěvku:', error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        closeModal();
      },1500);
    }
  };

  const handleDeleteComment = (commentId) => {
    setComments(prev => prev.filter(comment => comment.id !== commentId));
  };

  return (
    <div className='form-wrapper'>
      {isLoading && <Loader />}

      <form onSubmit={handleSubmit(onSubmit)} className="form" data-color-mode="light">
        <h2>{isEdit ? 'Editace příspěvku' : 'Nový příspěvek'}</h2>

        <label>
          <input
            type="text"
            className="input-modal"
            placeholder="Nadpis příspěvku"
            {...register('title', { required: 'Nadpis je povinný' })}
            disabled={isLoading}
          />
          {errors.title && <span className="error">{errors.title.message}</span>}
        </label>

        <label>
          <Controller
            name="body"
            control={control}
            rules={{ required: 'Text je povinný' }}
            render={({ field }) => (
              <QuillEditor value={field.value || ''} onChange={field.onChange} readOnly={isLoading} />
            )}
          />
          {errors.body && <span className="error">{errors.body.message}</span>}
        </label>

        {isEdit && comments.length > 0 && (
          <CommentsTable comments={comments} onDelete={handleDeleteComment} />
        )}

        {!isLoading && <PostFormButtons isEdit={isEdit} onClose={closeModal} />}
      </form>
    </div>
  );
};

export default NewPost;
