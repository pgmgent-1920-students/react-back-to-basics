import React from 'react';

const Author = ({user}) => {
  return (
    <div className="post__author">
      <picture className="picture">
        <img src={user.picture} alt={user.name} />
      </picture>
      <div className="name">{user.name}</div>
    </div>
  );
};

const Post = (props) => {
  return (
    <article className="post">
      <h1>{props.title}</h1>
      <div className="post__synopsis">{props.synopsis}</div>
      <div className="post__body">BODY</div>
      <Author 
        user={props.author} 
      />
    </article>
  );
};

export default Post;