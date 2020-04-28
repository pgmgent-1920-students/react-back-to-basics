import React from 'react';

const Post = () => {
  return (
    <article className="post">
      <h1>TITEL</h1>
      <div className="post__synopsis">SYNOPSIS</div>
      <div className="post__body">BODY</div>
      <div className="post__author">
        <picture className="picture">
          <img src="https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/42580828_10214673932035654_3017264055002857472_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_oc=AQnltteq4Yyiw4kT7ciu5J0RKUwgtc0ndKi5hWCm4JHAGzCVGCYl9YgTfFMDjEupNwU&_nc_ht=scontent-bru2-1.xx&oh=6e57d7c0bc89a198abfc8c63b6faa79a&oe=5ECCCFAB" alt="Philippe" />
        </picture>
        <div className="name">Philippe</div>
      </div>
    </article>
  );
};

export default Post;