import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './components/PostList';
import NewPost from './components/NewPost';
import Header from './components/layouts/Header';
import './App.css';

function App() {
  return (
    <> 
    <Header />
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:id" element={<NewPost />} />
          <Route path="/new" element={<NewPost />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
