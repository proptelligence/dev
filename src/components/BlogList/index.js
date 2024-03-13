import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import BlogItem from '../BlogItem';
import './index.css';

class BlogList extends Component {
  state = {
    isLoading: false,
    blogsData: [
      {
        id: 1,
        title: "React v16.9.0 and the Roadmap Update",
        image_url: "https://miro.medium.com/max/1050/1*i3hzpSEiEEMTuWIYviYweQ.png",
        avatar_url: "https://miro.medium.com/max/4096/1*wiOSfPd2sY0gXSNK9vv6bg.jpeg",
        author: "Dan Abramov,",
        topic: "React.js"
      },
      {
        id: 2,
        title: "React v16.7: No, This Is Not the One With Hooks",
        image_url: "https://miro.medium.com/max/3158/1*kEPCQNY4dwVyaFuLEwJcNQ.png",
        avatar_url: "https://avatars.githubusercontent.com/u/3624098?v=4",
        author: "Andrew Clark",
        topic: "React.js"
      },
      // Add more blog data objects as needed
    ],
  };

  render() {
    const { isLoading, blogsData } = this.state;

    return (
      <div className="blogs-list-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="blogs-list">
            {blogsData.map((eachBlogItem) => (
              <BlogItem key={eachBlogItem.id} blogItemDetails={eachBlogItem} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default BlogList;
