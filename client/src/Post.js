import React from 'react';

const Post = (props) => {
  return (
    <article className="post">
      <h1>{props.title}</h1>
      <div className="post__synopsis">{props.synopsis}</div>
      <div className="post__body">BODY</div>
      <div className="post__author">
        <picture className="picture">
          <img src={props.author.picture} alt={props.author.name} />
        </picture>
        <div className="name">{props.author.name}</div>
      </div>
    </article>
  );
};

export default Post;