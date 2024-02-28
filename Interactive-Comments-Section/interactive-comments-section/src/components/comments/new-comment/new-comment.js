import React, { useEffect, useState } from "react";
import "./new-comment.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../../../assets/data.json";

function NewCommentComponent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const addComment = () => {
    const today = new Date();
    const user=data.currentUser;
    const areaComment = document.getElementById("commentText")
    const uuid = crypto.randomUUID()
    console.log(today, user, areaComment.value,uuid)
    data.comments.push({id:uuid,content:areaComment.value,createdAt:today,score:0,user:user,replies:[]})
    console.log(data)
    areaComment.value="";

  };

  const addScore = (event, commentId) => {
    const updatedData = { ...data };
    const commentToUpdate = updatedData.comments.find(comment => comment.id === commentId);
    if (commentToUpdate) {
      commentToUpdate.score += 1;
      setCommentsData(updatedData);
    }
  };

  const subtractScore = (event, commentId) => {
    const updatedData = { ...data };
    const commentToUpdate = updatedData.comments.find(comment => comment.id === commentId);
    if (commentToUpdate&&commentToUpdate.score>0) {
      commentToUpdate.score -= 1;
      setCommentsData(updatedData);
    }
  };


  console.log(data);
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-8 col-md-10 col-lg-14">
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
                    SEND
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCommentComponent;
