import React from 'react';
import { usePostFormLogic } from '../hooks/usePostFormLogic';
import PostForm from './ui/NewPostForm';
import CommentsSection from './ui/CommentsTable';
import PostFormButtons from './ui/PostFormButtons';
import Loader from './ui/Loader';
import './NewPost.css';

const FormHeader = ({ isEdit }) => (
  <h2>{isEdit ? 'Editace příspěvku' : 'Nový příspěvek'}</h2>
);

const NewPost = ({ post, onCreate, onUpdate, closeModal }) => {
  const isEdit = Boolean(post);

  const {
    control,
    register,
    handleSubmit,
    watch,
    errors,
    isLoading,
    comments,
    onSubmit,
    handleDeleteComment,
  } = usePostFormLogic(post, isEdit, onCreate, onUpdate, closeModal);

  return (
    <div>
      {isLoading && <Loader />}
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <FormHeader isEdit={isEdit} />

        <PostForm
          control={control}
          register={register}
          errors={errors}
          isLoading={isLoading}
          watch={watch}
        />

        {isEdit && comments.length > 0 && (
          <CommentsSection comments={comments} onDeleteComment={handleDeleteComment} />
        )}

        {!isLoading && <PostFormButtons isEdit={isEdit} onClose={closeModal} />}
      </form>
    </div>
  );
};

export default NewPost;
