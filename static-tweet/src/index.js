import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Time = () => <span className="time">3h ago</span>;
const ReplyButton = () => <i className="fa fa-reply reply-button" />;
const RetweetButton = () => <i className="fa fa-retweet like-button" />;
const LikeButton = () => <i className="fa fa-heart like-button" />;
const MoreOptionButton = () => <i className="fa fa-ellipsis-h more-options-button" />;

const Avatar = () => (
  <img
    src="https://www.gravatar.com/avatar/nothing"
    alt="avatar"
    className="avatar"
  />
);

const Message = () => (
  <div className="message">
    This is less than 140 characters
  </div>
);

const Author = () => (
  <span className="author">
    <span className="name">Your Name</span>
    <span className="handle">@yourhandle</span>
  </span>
);

const Tweet = () => (
  <div className="tweet">
    <Avatar />
    <div className="content">
      <Author />
      <Time />
      <Message />
      <div className="buttons">
        <ReplyButton />
        <RetweetButton />
        <LikeButton />
        <MoreOptionButton />
      </div>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Tweet />
);