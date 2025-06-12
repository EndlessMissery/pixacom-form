import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { createPost, updatePost, fetchComments } from '../api/axios';

export const usePostFormLogic = (post, isEdit, onCreate, onUpdate, closeModal) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: post?.title || '',
      body: post?.body || '',
    },
  });

  useEffect(() => {
    if (isEdit && post?.id) {
      fetchComments(post.id).then((res) => setComments(res.data || []));
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
      }, 1500);
    }
  };

  const handleDeleteComment = (commentId) => {
    setComments((prev) => prev.filter((comment) => comment.id !== commentId));
  };

  return {
    control,
    register,
    handleSubmit,
    watch,
    errors,
    isLoading,
    comments,
    onSubmit,
    handleDeleteComment,
  };
};
