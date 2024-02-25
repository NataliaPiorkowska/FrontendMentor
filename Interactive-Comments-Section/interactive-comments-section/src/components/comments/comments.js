import React, { useEffect, useState } from "react";
import "./comments.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import amyRobsonImage from "../../assets/avatars/image-amyrobson.png";
import "bootstrap/dist/css/bootstrap.min.css";

function CommentsComponent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-8 col-md-10 col-lg-14">
          <div className="card">
            <div className="card-body" style={{ position: "relative" }}>
              <div
                className="d-flex align-items-start align-items-md-center 
               flex-column-reverse  flex-md-row "
              >
                <div className="d-flex flex-md-column">
                  <button
                    type="button"
                    className="btn btn-outline-secondary d-flex align-items-center"
                    style={{ height: "30px" }}
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
                  >
                    8
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary d-flex flex-column-reverse"
                    style={{ height: "30px" }}
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
                    <div>
                      <img
                        src={amyRobsonImage}
                        alt="avatar"
                        style={{ width: "35px" }}
                        className="me-2"
                      />
                      <span className="fw-bold">Amy Robson</span> 1 month ago
                    </div>
                    <div
                      style={{
                        color: "#5357b6",
                        position: "absolute",
                        top: isMobile ? "184px" : "17px",
                        right: "39px",
                      }}
                    >
                      <i className="bi bi-reply-fill "></i>
                      <span className="fw-bold">Reply</span>
                    </div>
                  </div>
                  <div>
                    <p>
                      Impressive! Though it seems the drag feature could be
                      improved. But overall it looks incredible. You've nailed
                      the design and the responsivness at various breakpoints
                      works really well
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentsComponent;
