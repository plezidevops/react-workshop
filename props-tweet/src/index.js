import React from 'react';
import ReactDOM from 'react-dom/client';
import moment from 'moment';
import './index.css';

const Time = ({ time }) => <span className="time">{moment(time).fromNow()}</span>;
const MoreOptionButton = () => <i className="fa fa-ellipsis-h more-options-button" />;
const ReplyButton = () => <i className="fa fa-reply reply-button" />;

const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <i className="fa fa-retweet" />
    {getReTweetCount(count)}
  </span>
);
const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="fa fa-heart" />
    {count > 0 &&
      <span className="like-count">
        {count}
      </span>}
  </span>
);

const Avatar = ({ hash }) => {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return (
    <img
      src={url}
      alt="avatar"
      className="avatar"
    />
  );
};

const Message = ({ text }) => (
  <div className="message">
    {text}
  </div>
);

const Author = ({ author }) => {

  const { handle, name } = author;
  return (
    <span className="author">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
};

const Tweet = ({ tweet }) => (
  <div className="tweet">
    <Avatar hash={TextEncoder.gravatar} />
    <div className="content">
      <Author author={tweet.author} />
      <Time time={tweet.timestamp} />
      <Message text={tweet.message} />
      <div className="buttons">
        <ReplyButton />
        <RetweetButton count={tweet.retweets} />
        <LikeButton count={tweet.likes} />
        <MoreOptionButton />
      </div>
    </div>
  </div>
);

const testTweet = {
  message: "Something about cat.",
  gravatar: 'xyz',
  author: {
    handle: "catperson",
    name: "IAMA Cat Person"
  },
  likes: 2,
  retweets: 10,
  timestamp: "2022-06-08 21:24:37"
};

const getReTweetCount = count => {
  if (count > 0) {
    return (<span className="retweet-count">
      {count}
    </span>);
  } else {
    return null;
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Tweet tweet={testTweet} />
);