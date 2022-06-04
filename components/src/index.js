import React from "react";
import ReactDOM from "react-dom/client";
import CommentDetail from './CommentDetail';
import { faker } from '@faker-js/faker';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail avatar={faker.image.avatar()} author="Sam" timeAgo="Today at 6:00 PM" blogComment="Nice blog post!" />
      <CommentDetail avatar={faker.image.avatar()} author="Pascal" timeAgo="Today at 11:00 AM" blogComment="You are trippint!" />
      <CommentDetail avatar={faker.image.avatar()} author="Sokki" timeAgo="Yesterday at 1:00 AM" blogComment="Good for you!" />
    </div>

  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <App />
);