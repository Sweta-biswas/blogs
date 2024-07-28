import React from 'react';
import Card from '../assets/Card.jpeg';
import Avatar from '../assets/Avatar.jpeg';

const BlogCard = ({ image, title, author, date, shares, excerpt }) => (
  <div className="bg-custom-light-green rounded-lg overflow-hidden shadow-md w-full md:w-[48%] lg:w-[575px] h-auto relative custom-blog-card">
    <img src={image} alt={title} className="w-full h-[240px] md:h-[300px] lg:h-[420px] object-cover custom-blog-image" />
    <div className="p-4">
      <h3 className="font-normal text-xl md:text-2xl lg:text-4xl mb-2">{title}</h3>
      <div className="flex items-center mb-2 my-5">
        <img src={author.avatar} alt={author.name} className="w-6 h-6 rounded-full mr-2" />
        <span className="text-sm text-custom-blackyy mr-4 md:mr-16">{author.name}</span>
        <span className="text-sm text-custom-blackyy mr-4 md:mr-8">{date}</span>
        <span className="text-sm text-custom-blackyy">{shares} shares</span>
      </div>
      <p className="text-sm text-custom-blackyy mb-4">{excerpt}</p>
      <button className="text-custom-blackish hover:underline">View Post</button>
    </div>
  </div>
);

const BlogCards = () => {
  const blogs = [
    {
      image: Card,
      title: 'Integer Maecenas Eget Viverra',
      author: { name: 'Joanna Wellick', avatar: Avatar },
      date: 'June 28, 2018',
      shares: '4.2K',
      excerpt: 'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.'
    },
    {
      image: Card,
      title: 'Integer Maecenas Eget Viverra',
      author: { name: 'Joanna Wellick', avatar: Avatar },
      date: 'June 28, 2018',
      shares: '4.2K',
      excerpt: 'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.'
    },
    {
      image: Card,
      title: 'Integer Maecenas Eget Viverra',
      author: { name: 'Joanna Wellick', avatar: Avatar },
      date: 'June 28, 2018',
      shares: '4.2K',
      excerpt: 'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.'
    },
    {
      image: Card,
      title: 'Integer Maecenas Eget Viverra',
      author: { name: 'Joanna Wellick', avatar: Avatar },
      date: 'June 28, 2018',
      shares: '4.2K',
      excerpt: 'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-[30px]">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
      <div className="text-center mt-8 md:mt-12 lg:mt-16">
        <button className="bg-white text-custom-blackish border border-custom-purple px-4 py-2 rounded">
          Load More
        </button>
      </div>
    </div>
  );
};

export default BlogCards;
