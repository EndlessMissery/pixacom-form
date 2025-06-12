import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = () => axios.get(`${API_URL}/posts`);
export const fetchPost = (id) => axios.get(`${API_URL}/posts/${id}`);
export const fetchComments = (postId) => axios.get(`${API_URL}/comments?postId=${postId}`);
export const createPost = (data) => axios.post(`${API_URL}/posts`, data);
export const updatePost = (id, data) => axios.put(`${API_URL}/posts/${id}`, data);
export const deletePost = (id) => axios.delete(`${API_URL}/posts/${id}`);
export const deleteComment = async (commentId) => {
    return axios.delete(`/comments/${commentId}`);
  };