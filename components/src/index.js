import React from "react";
import ReactDOM from "react-dom/client";
import { faker } from '@faker-js/faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h2>Warnning</h2>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Sam"
          timeAgo="Today at 6:00 PM"
          blogComment="Nice blog post!" />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Pascal" timeAgo="Today at 11:00 AM"
          blogComment="You are on fire!" />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Sokki"
          timeAgo="Yesterday at 1:00 AM"
          blogComment="Good for you!" />
      </ApprovalCard>
    </div>

  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <App />
);