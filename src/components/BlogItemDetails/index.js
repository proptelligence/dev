import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const blogData = [
  {
    title: "Free Property Listing Sites in India",
    imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1708941784/property-img_y0gn4h.png",
    content: "The real estate landscape in India is rapidly evolving, and with it, the way properties are bought and sold.",
    path: "/freepropertylist",
    datetime: "Feb 26, 2024",
  },
  {
    title: "India's Real State Sector in 2030",
    imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1709380034/real_oa2n5a.png",
    content: "India's real estate sector is experiencing a remarkable transformation, poised for significant growth and contributing substantially to the nation's economic engine.",
    path: "/indiarealstate2023",
    datetime: "Feb 28, 2024",
  },
  {
    title: "The Ultimate Guide to Buying a Home Online: Tips and Tricks",
    imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1709471502/blog-3_hrjz3x.png",
    content: "Owning a home is a dream for many, but navigating the traditional buying process can feel complex and overwhelming.",
    path: "/buyahome",
    datetime: "March 03, 2024",
  },
  {
    title: "Get 24-Hour Legal Advice Easily with Proptelligence",
    imageUrl: "https://res.cloudinary.com/ajaymedidhi7/image/upload/v1710069093/blog-4_hkn9cf.png",
    content: "In today's fast-paced world, navigating the intricacies of the legal system can be a daunting task, especially when challenges arise outside of traditional business hours.",
    path: "/legaladvice",
    datetime: "March 09, 2024",
  }
];

const BlogItemDetails = () => {
 

  const renderBlogItemDetails = () => {
    return (
      <div>
        <h1 className='main-heading-blog'>Welcome to the Proptelligence Blogs Page – Unlock Our Free Property Service!</h1>
        <div className="blogs-list">
          {blogData.map((blog, index) => (
            <div key={index} className="blog-info">
              <h2 className="blog-details-title">{blog.title}</h2>
              <div className="author-details">
                <p className="blog-datetime">{blog.datetime}</p>
              </div>
              <Link to={blog.path}>
                <img className="blog-image" src={blog.imageUrl} alt={blog.title} />
              </Link>
              <p className="blog-content">{blog.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return <div className="blog-container">{renderBlogItemDetails()}</div>;
};

export default BlogItemDetails;
