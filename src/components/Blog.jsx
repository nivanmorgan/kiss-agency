import React from 'react';

const Blog = ({ title, excerpt, link, img, type }) => {
  return (
    <div className="relative flex flex-col">
      <div className="relative bg-[--neutral]">
        <span
          className={`absolute w-[50%] h-[90px] bg-[--neutral] border-2 border-[--black] ${
            type[0] === 't' ? 'top-[-10px]' : 'bottom-[-10px]'
          } ${type[1] === 'l' ? 'left-[-10px]' : 'right-[-10px]'} `}
        ></span>
        <img
          src={img}
          alt={title}
          className="relative h-[100px] w-full object-cover"
        />
      </div>
      <h3 className="pt-4 pb-2">{title}</h3>
      <p>{excerpt}</p>
      <div className="pt-2">
        <a href="#" className="btn-2">
          Know More
        </a>
      </div>
    </div>
  );
};

export default Blog;
