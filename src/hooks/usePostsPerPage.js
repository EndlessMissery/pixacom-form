import { useEffect, useState } from 'react';

const getPostsPerPage = (width) => {
  if (width >= 2560) return 15;
  return 10;
};

const usePostsPerPage = () => {
  const [postsPerPage, setPostsPerPage] = useState(getPostsPerPage(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setPostsPerPage(getPostsPerPage(window.innerWidth));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return postsPerPage;
};

export default usePostsPerPage;
