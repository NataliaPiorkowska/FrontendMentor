import React from "react";
import Card from "react-bootstrap/Card";
import "./comments.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap-icons/font/bootstrap-icons.css";
import amyRobsonImage from "../../assets/avatars/image-amyrobson.png";

function CommentsComponent() {
  return (
    <Row className="justify-content-center">
      <Col xs={12} sm={8} md={10} lg={14}>
        <Card>
          <Card.Body>
            <Card.Text>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div class="flex items-center md:w-[40px] md:h-[100px] w-[100px] h-[40px] p-2 md:mt-0 mt-4 rounded-lg bg-very-light-gray">
                  <div id="plusButton">
                    {" "}
                    <svg
                      width="11"
                      height="11"
                      fill="#C5C6EF"
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-3 cursor-pointer hover:fill-moderate-blue"
                    >
                      <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"></path>
                    </svg>
                  </div>
                  <div id="belowButtons">
                    <span
                      className="fw-bold text-xs"
                      style={{ color: "#5357b6" }}
                    >
                      12
                    </span>
                  </div>
                  <div id="belowButtons">
                    <svg
                      width="11"
                      height="11"
                      fill="#C5C6EF"
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-3 cursor-pointer hover:fill-moderate-blue"
                    >
                      <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"></path>
                    </svg>
                  </div>
                </div>

                <div style={{ flexGrow: 1, paddingLeft: "10px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <img
                        src={amyRobsonImage}
                        alt="avatar"
                        style={{ width: "35px" }} className="me-2"
                      />
                      <span className="fw-bold">Amy Robson</span> 1 month ago
                    </div>
                    <div style={{ color: "#5357b6" }}>
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
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default CommentsComponent;
