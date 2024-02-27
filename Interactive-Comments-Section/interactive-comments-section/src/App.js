import React from "react";
import "./App.css";
import CommentsComponent from "./components/comments/comments";
import NewCommentComponent from "./components/comments/new-comment/new-comment";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f6fa",
        flexDirection: "column",
      }}
    >
      <CommentsComponent />
      <NewCommentComponent />
    </div>
  );
}
export default App;
