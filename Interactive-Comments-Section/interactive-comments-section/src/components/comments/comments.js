import React, { useEffect, useState } from "react";
import "./comments.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../../assets/data.json";

function CommentsComponent() {
  const [isMobile, setIsMobile] = useState(false);
  const [storedData, setStoredData] = useState(() => {
    const stored = localStorage.getItem("myData");
    return stored ? JSON.parse(stored) : data;
  });
  const [replyVisibility, setReplyVisibility] = useState({});
  const [editVisibility, setEditVisibility] = useState({});
  const [editedComment, setEditedComment] = useState({ id: null, content: "" });

  const toggleReplyVisibility = (commentId) => {
    setReplyVisibility((prevState) => ({
      ...prevState,
      [commentId]: !prevState[commentId],
    }));
  };
  const toggleEditVisibility = (commentId) => {
    setEditedComment({ id: commentId, content: "" });
    setEditVisibility((prevState) => ({
      ...prevState,
      [commentId]: !prevState[commentId],
    }));
  };

  useEffect(() => {
    localStorage.setItem("myData", JSON.stringify(storedData));
  }, [storedData]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function getNewTextDatesDiffrences(createdAt) {
    const currentDate = new Date();
    const timeDifferenceInMilliseconds = currentDate - createdAt;
    const minutesDifference = Math.floor(
      timeDifferenceInMilliseconds / (1000 * 60)
    );
    const hoursDifference = Math.floor(
      timeDifferenceInMilliseconds / (1000 * 60 * 60)
    );
    const daysDifference = Math.floor(
      timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24)
    );
    if (minutesDifference > 0 && minutesDifference <= 59) {
      var newTextDatesDiffrences = minutesDifference + " minutes ago";
    } else if (hoursDifference > 0 && hoursDifference <= 24) {
      var newTextDatesDiffrences = hoursDifference + " hours ago";
    } else if (daysDifference > 0) {
      var newTextDatesDiffrences = daysDifference + " days ago";
    } else {
      var newTextDatesDiffrences = "a few seconds ago";
    }
    return newTextDatesDiffrences;
  }

  const addScore = (event, commentId) => {
    const updatedData = { ...storedData };
    const commentToUpdate = updatedData.comments.find(
      (comment) => comment.id === commentId
    );
    const replyToUpdate = updatedData.comments.find((comment) =>
      comment.replies.find((reply) => reply.id === commentId)
    );
    if (commentToUpdate) {
      commentToUpdate.score += 1;
      setStoredData(updatedData);
    }
    if (replyToUpdate) {
      replyToUpdate.replies.find((reply) => reply.id === commentId).score += 1;
      setStoredData(updatedData);
    }
  };

  const subtractScore = (event, commentId) => {
    const updatedData = { ...storedData };
    const commentToUpdate = updatedData.comments.find(
      (comment) => comment.id === commentId
    );
    const replyToUpdate = updatedData.comments.find((comment) =>
      comment.replies.find((reply) => reply.id === commentId)
    );
    if (commentToUpdate) {
      commentToUpdate.score -= 1;
      setStoredData(updatedData);
    }
    if (replyToUpdate) {
      replyToUpdate.replies.find((reply) => reply.id === commentId).score -= 1;
      setStoredData(updatedData);
    }
  };

  const deleteComments = (event, commentId) => {
    const updatedData = { ...storedData };
    let commentToDelete = updatedData.comments.find(
      (comment) => comment.id === commentId
    );
    if (!commentToDelete) {
      updatedData.comments.forEach((comment) => {
        const replyToDelete = comment.replies.find(
          (reply) => reply.id === commentId
        );
        if (replyToDelete) {
          comment.replies = comment.replies.filter(
            (reply) => reply.id !== commentId
          );
        }
      });
    } else {
      updatedData.comments = updatedData.comments.filter(
        (comment) => comment.id !== commentId
      );
    }
    setStoredData(updatedData);
  };

  return (
    <div className="container">
      <div className="row" style={{ width: isMobile ? "100%" : "150%" }}>
        <div className="col-xs-12 col-sm-8 col-md-10 col-lg-14">
          {storedData.comments.map((comment) => (
            <div className="card mb-2 border-0" key={comment.id}>
              <div className="card-body" style={{ position: "relative" }}>
                <div
                  className="d-flex align-items-start align-items-md-center 
               flex-column-reverse  flex-md-row "
                >
                  <div className="d-flex flex-md-column ms-3 justify-content-center">
                    <button
                      type="button"
                      className="btn btn-outline-secondary d-flex align-items-center"
                      style={{ height: "30px" }}
                      onClick={(event) => addScore(event, comment.id)}
                    >
                      <svg
                        width="10"
                        height="10"
                        fill="#C5C6EF"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"></path>
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary d-flex align-items-center"
                      style={{ height: "30px" }}
                      disabled
                    >
                      {data && <span>{comment.score}</span>}
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary d-flex flex-column-reverse"
                      style={{ height: "30px" }}
                      onClick={(event) => subtractScore(event, comment.id)}
                    >
                      <svg
                        width="10"
                        height="10"
                        fill="#C5C6EF"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="flex-grow-1" style={{ paddingLeft: "10px" }}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="ms-2">
                        <img
                          src={comment.user.image.png}
                          alt="avatar"
                          style={{ width: "35px" }}
                          className="me-2"
                        />
                        <span className="fw-bold">
                          {data && (
                            <span className="fw-bold">
                              {comment.user.username}
                            </span>
                          )}
                        </span>
                        {data.currentUser.username == comment.user.username && (
                          <span
                            className="badge rounded-pill ms-1"
                            style={{ backgroundColor: "#5357b6" }}
                          >
                            You
                          </span>
                        )}

                        {data && (
                          <span className="ms-1">
                            {getNewTextDatesDiffrences(
                              new Date(comment.createdAt)
                            )}
                          </span>
                        )}
                      </div>
                      {data.currentUser.username != comment.user.username && (
                        <div
                          style={{
                            color: "#5357b6",
                            position: "absolute",
                            top: isMobile ? "84%" : "28px",
                            transform: "translateY(-16%)",
                            right: "39px",
                            cursor: "pointer",
                          }}
                          onClick={() => toggleReplyVisibility(comment.id)}
                        >
                          <i className="bi bi-reply-fill "></i>
                          <span className="fw-bold">Reply</span>
                        </div>
                      )}
                      {data.currentUser.username == comment.user.username && (
                        <>
                          <div
                            style={{
                              color: "#ed6368",
                              position: "absolute",
                              top: isMobile ? "78%" : "28px",
                              transform: "translateY(-23%)",
                              right: "106px",
                              cursor: "pointer",
                            }}
                            onClick={(event) =>
                              deleteComments(event, comment.id)
                            }
                          >
                            <i className="bi bi-trash3-fill"></i>
                            <span className="fw-bold">Delete</span>
                          </div>
                          <div
                            style={{
                              color: "#5357b6",
                              position: "absolute",
                              top: isMobile ? "78%" : "28px",
                              transform: "translateY(-23%)",
                              right: "39px",
                              cursor: "pointer",
                            }}
                          >
                            <i className="bi bi-pencil-fill"></i>
                            <span className="fw-bold">Edit</span>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="mt-2 ms-2">
                      <p>{data && <span>{comment.content}</span>}</p>
                    </div>
                  </div>
                </div>
              </div>

              {replyVisibility[comment.id] && (
                <Reply
                  commentId={comment.id}
                  storedData={storedData}
                  setStoredData={setStoredData}
                />
              )}

              {comment.replies &&
                comment.replies.map((reply) => (
                  <div
                    className="ms-4 mb-1"
                    style={{
                      boxShadow: "-15px 8px 0px 16px #f5f6fa",
                      backgroundColor: "#f5f6fa",
                      padding: "0px",
                    }}
                    key={reply.id}
                  >
                    <div className="dark-line"></div>
                    {!editVisibility[reply.id]&&(
                    <div className="card border-0" key={reply.id}>
                      <div
                        className="card-body"
                        style={{ position: "relative" }}
                      >
                        <div
                          className="d-flex align-items-start align-items-md-center 
               flex-column-reverse  flex-md-row "
                        >
                          <div className="d-flex flex-md-column ms-3 justify-content-center">
                            <button
                              type="button"
                              className="btn btn-outline-secondary d-flex align-items-center"
                              style={{ height: "30px" }}
                              onClick={(event) => addScore(event, reply.id)}
                            >
                              <svg
                                width="10"
                                height="10"
                                fill="#C5C6EF"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"></path>
                              </svg>
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary d-flex align-items-center"
                              style={{ height: "30px" }}
                              disabled
                            >
                              {data && <span>{reply.score}</span>}
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary d-flex flex-column-reverse"
                              style={{ height: "30px" }}
                              onClick={(event) =>
                                subtractScore(event, reply.id)
                              }
                            >
                              <svg
                                width="10"
                                height="10"
                                fill="#C5C6EF"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"></path>
                              </svg>
                            </button>
                          </div>
                          <div
                            className="flex-grow-1"
                            style={{ paddingLeft: "10px" }}
                          >
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="ms-2">
                                <img
                                  src={reply.user.image.png}
                                  alt="avatar"
                                  style={{ width: "35px" }}
                                  className="me-2"
                                />
                                <span className="fw-bold">
                                  {data && (
                                    <span className="fw-bold">
                                      {reply.user.username}
                                    </span>
                                  )}
                                </span>
                                {data.currentUser.username ==
                                  reply.user.username && (
                                  <span
                                    className="badge rounded-pill ms-1"
                                    style={{ backgroundColor: "#5357b6" }}
                                  >
                                    You
                                  </span>
                                )}
                                {data && (
                                  <span className="ms-1">
                                    {getNewTextDatesDiffrences(
                                      new Date(reply.createdAt)
                                    )}
                                  </span>
                                )}
                              </div>
                              {data.currentUser.username !=
                                reply.user.username && (
                                <div
                                  style={{
                                    color: "#5357b6",
                                    position: "absolute",
                                    top: isMobile ? "84%" : "24px",
                                    transform: "translateY(-16%)",
                                    right: "39px",
                                    cursor: "pointer",
                                  }}
                                  onClick={() =>
                                    toggleReplyVisibility(reply.id)
                                  }
                                >
                                  <i className="bi bi-reply-fill "></i>
                                  <span className="fw-bold">Reply</span>
                                </div>
                              )}
                              {data.currentUser.username ==
                                reply.user.username && (
                                <>
                                  <div
                                    style={{
                                      color: "#ed6368",
                                      position: "absolute",
                                      top: isMobile ? "84%" : "28px",
                                      transform: "translateY(-16%)",
                                      right: "106px",
                                      cursor: "pointer",
                                    }}
                                    onClick={(event) =>
                                      deleteComments(event, reply.id)
                                    }
                                  >
                                    <i className="bi bi-trash3-fill"></i>
                                    <span className="fw-bold">Delete</span>
                                  </div>
                                  <div
                                    style={{
                                      color: "#5357b6",
                                      position: "absolute",
                                      top: isMobile ? "186px" : "24px",
                                      right: "39px",
                                      cursor: "pointer",
                                    }}
                                    onClick={() =>
                                      toggleEditVisibility(reply.id)
                                    }
                                  >
                                    <i className="bi bi-pencil-fill"></i>
                                    <span className="fw-bold">Edit</span>
                                  </div>
                                </>
                              )}
                            </div>
                            <div className="mt-2 ms-2">
                                <p>{data && <span>{reply.content}</span>}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    )}
                    {replyVisibility[reply.id] && (
                      <Reply
                        commentId={comment.id}
                        storedData={storedData}
                        setStoredData={setStoredData}
                      />
                    )}
                    {editVisibility[reply.id] && (
                      <Edit
                        commentId={reply.id}
                        storedData={storedData}
                        setStoredData={setStoredData}
                        commentContent={reply.content}
                      />
                    )}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Reply({ commentId, storedData, setStoredData }) {
  const addComment = () => {
    const today = new Date();
    const user = data.currentUser;
    const areaComment = document.getElementById("commentText");
    if (!areaComment.value.trim()) {
      alert("Please enter a comment.");
      return;
    }
    const uuid = crypto.randomUUID();
    const updatedData = { ...storedData };
    updatedData.comments
      .find((comment) => comment.id == commentId)
      .replies.push({
        id: uuid,
        content: areaComment.value,
        createdAt: today,
        score: 0,
        user: user,
        replyingTo: "test",
      });

    setStoredData(updatedData);
    areaComment.value = "";
    if (storedData !== null) {
      localStorage.setItem("myData", JSON.stringify(updatedData));
    }
    window.location.reload();
  };

  return (
    <div
      className="ms-4 mb-1"
      style={{
        boxShadow: "-15px 8px 0px 16px #f5f6fa",
        backgroundColor: "#f5f6fa",
        padding: "0px",
      }}
    >
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center flex-md-row">
            <div className="d-flex flex-md-column ms-3">
              <img
                src={data && data.currentUser.image.png}
                alt="avatar"
                style={{ width: "35px" }}
                className="me-2"
              />
            </div>
            <div
              className="flex-grow-1"
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
            >
              <div className="d-flex">
                <div className="mt-2 ms-2 w-100">
                  <div className="form-group m-0 f">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="commentText"
                      style={{ height: "100px", minWidth: "0" }}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center flex-column">
              <button
                type="button"
                className="btn btn-primary"
                style={{
                  backgroundColor: "#5357b6",
                  borderColor: "#5357b6",
                }}
                onClick={addComment}
              >
                Reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Edit({ commentId, storedData, setStoredData, commentContent }) {
  const editComment = () => {
    const user = data.currentUser;
    const areaComment = document.getElementById("commentText");
    if (!areaComment.value.trim()) {
      alert("Please enter a comment.");
      return;
    }
    const updatedData = { ...storedData };
    // updatedData.comments
    //   .find((comment) => comment.id == commentId)
    //   .replies.push({
    //     id: uuid,
    //     content: areaComment.value,
    //     createdAt: today,
    //     score: 0,
    //     user: user,
    //     replyingTo: "test",
    //   });

    // setStoredData(updatedData);
    areaComment.value = "";
    if (storedData !== null) {
      localStorage.setItem("myData", JSON.stringify(updatedData));
    }
    window.location.reload();
  };

  return (
    <div
      className="ms-4 mb-1"
      style={{
        boxShadow: "-15px 8px 0px 16px #f5f6fa",
        backgroundColor: "#f5f6fa",
        padding: "0px",
      }}
    >
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center flex-md-row">
            <div className="d-flex flex-md-column ms-3">
              <img
                src={data && data.currentUser.image.png}
                alt="avatar"
                style={{ width: "35px" }}
                className="me-2"
              />
            </div>
            <div
              className="flex-grow-1"
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
            >
              <div className="d-flex">
                <div className="mt-2 ms-2 w-100">
                  <div className="form-group m-0 f">
                    <textarea
                      value={commentContent}
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="commentText"
                      style={{ height: "100px", minWidth: "0" }}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center flex-column">
              <button
                type="button"
                className="btn btn-primary"
                style={{
                  backgroundColor: "#5357b6",
                  borderColor: "#5357b6",
                }}
                onClick={editComment}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentsComponent;
