import React from 'react'
import { Link } from 'react-router-dom';
import './home.css'
import Joinsection from '../Joinsection/Joinsection';
import ImageForBuilding from '../../assets/assets/client-images-all/white-concrete-building-1838640.svg'
import Footer from '../Footer/Footer';
import Groupphoto from '../../assets/assets/client-images-all/close-up-photography-of-man-wearing-sunglasses-1212984.svg'
import author1 from '../../assets/assets/client-images-all/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.svg'
import author2 from '../../assets/assets/client-images-all/fashion-woman-cute-shoes-5704849.svg'
import author3 from '../../assets/assets/client-images-all/content-baker-with-delicious-puff-in-cafeteria-6205509.svg'
import author4 from '../../assets/assets/client-images-all/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.svg'
import facebook from '../../assets/assets/Client-First-sicon/Negative.svg'
import insta from '../../assets/assets/Client-First-sicon/Negative (2).svg'
import linkdin from '../../assets/assets/Client-First-sicon/Negative (3).svg'
import twitter from '../../assets/assets/Client-First-sicon/Negative (4).svg'
import logo1 from '../../assets/assets/client-images-all/Logo 5.svg'
import logo2 from '../../assets/assets/client-images-all/Logo 4.svg'
import logo3 from '../../assets/assets/client-images-all/Logo 2.svg'
import logo4 from '../../assets/assets/client-images-all/Logo 3.svg'
import logo5 from '../../assets/assets/client-images-all/Logo 1.svg'





const Home = () => {
   
    
      const testimonials = [
        { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", author: "Jonathan Valleem", location: "New York, USA" }
      ];

      const categories = [
        { name: "Business", icon: "💼" },
        { name: "Economy", icon: "📊" },
        { name: "Technology", icon: "💻" },
        { name: "Startups", icon: "🚀" },
      ];
  return (
    <div>
        <main>
      <div className="overlay"></div>
      <article>
        <p className="category">Posted on Startup</p>
        <h1>Step-by-step guide to choosing great font pairs</h1>
        <p className="author-date">By James West | May 23, 2022</p>
        <p>Dolor aute irure dolor in reprehenderit, in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        
        <Link to="/read-more" className="read-more">Read More &gt;</Link>
      </article>
    </main>
        
    <div className="container">
      <div className="featured-post">
        <h2>Featured Post</h2>
        <div className="post">
          <img src={ImageForBuilding} alt="Featured Post" />
          <div className="post-content">
            <p className="author">By John Doe | May 23, 2022</p>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
            <p className="description">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <Link to="/read-more" className="read-more">Read More &gt;</Link>
          </div>
        </div>
      </div>
      
      <div className="all-posts">
        <div className="all-posts-header">
          <h2>All Posts</h2>
          {/* Link for 'View All' */}
          <Link to="/all-posts">View All</Link>
        </div>
        <div className="post-list">
          {[1, 2, 3,4,5,6,7,8,9].map((item, index) => (
            <div
              key={index}
              className={`post-item ${index === 1 ? 'highlight' : ''}`}
            >
              <p className="author">By John Doe | Aug 29, 2021</p>
              <h4 style={{color:'gray'}}>8 Figma design systems that you can download for free today.</h4>
            </div>
          ))}
        </div>
      </div>
    </div>

        <div className='About-us-containerss'>
            <div className='About-us-side'>

            <h1>About us</h1>
            <h1> we are a community of content writers who share their learnings</h1>
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</h1>
            <button>Read more</button>
            </div>
<div className='our-mission-side'>
<h1>Our mission</h1>
            <h1> we are a community of content writers who share their learnings</h1>
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</h1>
</div>
        </div>

        <div className="containers" >
      <h2 className="title">Choose A Category</h2>
      <div className="categories" >
      {categories.map((category, index) => (
        <div key={index} className="category-box">
          <div className="category-icon">{category.icon}</div>
          <h3>{category.name}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      ))}
    </div>
      <div className="main-content">
        <img
          src={Groupphoto}
          alt="People enjoying scenery"
          className="main-image"
        />
        <div className="text-content">
          <h4>WHY WE STARTED</h4>
          <h2>It started out as a simple idea and evolved into our passion</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
          <button className="discover-button">Discover our story &gt;</button>
        </div>
      </div>
    </div>

   

  
    <div className="authors-page">
      <h2>List of Authors</h2>
      <div className="authors-list">
        
          <div  className="author-card" >
           <img src={author1} alt="" />
            <h3>Floid miles</h3>
            <p></p>
            <div className="social-icons">
            <img src={facebook} alt="" /><img src={insta} alt="" /><img src={linkdin} alt="" /><img src={twitter} alt="" />             
            </div>
          </div>
          <div  className="author-card" >
           <img src={author2} alt="" />
            <h3>jenny wilson</h3>
            <p></p>
            <div className="social-icons">
            <img src={facebook} alt="" /><img src={insta} alt="" /><img src={linkdin} alt="" /><img src={twitter} alt="" />             
            </div>
          </div>
          <div  className="author-card" >
           <img src={author3} alt="" />
            <h3>lexlie Alexender</h3>
            <p></p>
            <div className="social-icons">
            <img src={facebook} alt="" /><img src={insta} alt="" /><img src={linkdin} alt="" /><img src={twitter} alt="" />             
            </div>
          </div>
          <div  className="author-card" >
           <img src={author4} alt="" />
            <h3>Denny rusele</h3>
            <p></p>
            <div className="social-icons">
            <img src={facebook} alt="" /><img src={insta} alt="" /><img src={linkdin} alt="" /><img src={twitter} alt="" />             
            </div>
          </div>
          


        
      </div>

      <div className="featured-logos">
        <div className="logos">
          <marquee behavior="center" direction="">
            <div className="logo-placeholder">
        <p>We're Featured in</p>
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
                <img src={logo1} alt="" />

                

            </div>
            </marquee>
        </div>
      </div>

      <div className="testimonials">
      <div className="testimonial-content">
        <div className="testimonial-text">
      <h3>Testimonials</h3>
          <h4>What people say about our blog</h4>
          <p>{testimonials[0].quote}</p>
        </div>
        <div className="testimonial-author">
          <p className="author-name">{testimonials[0].author}</p>
          <p className="author-location">{testimonials[0].location}</p>
        </div>
      </div>
    </div>
    </div>

<div>
    <Joinsection/>
</div>
<Footer/>
    </div>
  )
}

export default Home