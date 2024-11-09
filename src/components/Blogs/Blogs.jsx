import React from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css'
import Joinsection from '../Joinsection/Joinsection';
import Footer from '../Footer/Footer';

function Blogs() {
  return <>
   <div className="blog-page">
      {/* Header Section */}
      <header className="header">
        <h1 className="header-title">Ultimate Blog Page</h1>
        <p className="header-subtitle">Your daily dose of insights and stories</p>
      </header>

      <div className="content">
        {/* Main Blog Section */}
        <main className="main-content">
          <article className="blog-post">
            <h2 className="post-title">How to Build a Responsive Blog Layout</h2>
            <p className="post-author">By John Doe | October 20, 2024</p>
            <p className="post-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
            </p>
            <button className="read-more">Read More</button>
          </article>

          <article className="blog-post">
            <h2 className="post-title">10 Tips for Writing Engaging Content</h2>
            <p className="post-author">By Jane Smith | October 18, 2024</p>
            <p className="post-content">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...
            </p>
            <button className="read-more">Read More</button>
          </article>
        </main>

        {/* Sidebar */}
        <aside className="sidebar">
          <h3 className="sidebar-title">Categories</h3>
          <ul className="categories-list">
            <li className="category-item">Technology</li>
            <li className="category-item">Business</li>
            <li className="category-item">Lifestyle</li>
            <li className="category-item">Health</li>
          </ul>

          <h3 className="sidebar-title">Recent Posts</h3>
          <ul className="recent-posts-list">
            <li className="recent-post-item">Understanding CSS Flexbox</li>
            <li className="recent-post-item">JavaScript for Beginners</li>
            <li className="recent-post-item">Top 10 Coding Tips</li>
            <li className="recent-post-item">Mastering Responsive Design</li>
          </ul>
        </aside>
      </div>
      </div>
      <Joinsection/>
 <Footer/>
</>;
}

export default Blogs;

