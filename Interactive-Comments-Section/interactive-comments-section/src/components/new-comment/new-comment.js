import React, { useEffect, useState } from "react";
import "./new-comment.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../../assets/data.json";

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
