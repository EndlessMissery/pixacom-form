import { useEffect, useState } from 'react';
import { fetchPosts, deletePost } from '../api/axios';
import NewPost from './NewPost';
import Modal from './layouts/Modal';
import PageHeader from './layouts/PageHeader';
import PostTable from './fragments/PostTable';
import Pagination from './layouts/Pagination';
import usePostsPerPage from '../hooks/usePostsPerPage';
import './PostList.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const postsPerPage = usePostsPerPage();

  useEffect(() => {
    fetchPosts().then(res => setPosts(res.data || []));
  }, []);

  const handleCreate = (newPost) => {
    setPosts(prev => [newPost, ...prev]);
    setShowModal(false);
  };

  const handleUpdate = (updatedPost) => {
    setPosts(prev => prev.map(p => (p.id === updatedPost.id ? updatedPost : p)));
    setShowModal(false);
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts(prev => prev.filter(post => post.id !== id));
  };

  const openModal = (post = null) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const stripHtml = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div>
      <PageHeader title="Seznam příspěvků" buttonText="Přidat příspěvek" onButtonClick={() => openModal()} />

      <div className="table-wrapper">
        <PostTable posts={currentPosts} onEdit={openModal} onDelete={handleDelete} stripHtml={stripHtml} />
      </div>

      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <NewPost
            post={selectedPost}
            onCreate={handleCreate}
            onUpdate={handleUpdate}
            closeModal={() => setShowModal(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default PostList;
