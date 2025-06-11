import './App.css';
import React from 'react';
import PostList from './components/PostList';
import NewPost from './components/NewPost';

function App() {
  return (
    <div className="App">
      <PostList />
      <NewPost />
    </div>
  );
}

export default App;
