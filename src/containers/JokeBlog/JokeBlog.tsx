import React, {useEffect, useState} from 'react';
import {Joke} from "../../types";
import "./JokeBlog.css";

const url = 'https://api.chucknorris.io/jokes/random';

const JokeBlog = () => {

  const [post, setPost] = useState({id: '', value: '', author: ''});
  const [postFormShown, setPostFormShown] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);

      if (response.ok) {
        const post: Joke = await response.json();
        const newPost = {
          ...post,
          id: post.id,
          value: post.value,
        };
        setPost(newPost);
      }
    };

    fetchData().catch(console.error);
  }, [postFormShown]);

  const togglePostForm = () => setPostFormShown(prev => !prev);

  return (
    <div style={{margin: 40}}>
      <button onClick={togglePostForm} className="btn btn-primary">
        New joke
      </button>
      <div>
        <section className="Posts">
          <article className="PostCard">
            <h3>{post.value}</h3>
            <div className="Info">
              <div className="Author">Chuck Norris</div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default JokeBlog;