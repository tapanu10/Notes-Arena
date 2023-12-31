import React from "react";
import "./aboutus.css";
import amit from "./AMIT.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const About = () => {
  return (
    <div>
      {/* <Nav/> */}
      <h2 style={{ fontFamily: "Trebuchet MS", marginTop: "10px" }}>
        <center>
          <b>
            <u>Contact ME</u>
          </b>
        </center>
      </h2>

      <div class="row">
        <div class="column" >
          <div class="card" >
            <img
              className="aboutusimage"
              src={amit}
              alt="Amit"
              // posi
              style={{ width: "80%"}}
            />
            <h3>AMIT KUMAR UPDHYAY</h3>
            <p class="title">Computer Science and Engineering</p>
            <p>
              {" "}
              <h2 style={{ fontFamily: "Arial" }}>IIIT PUNE</h2>
            </p>
            <a
              href="https://www.linkedin.com/in/amit-kumar-upadhyay-054b07193/"
              className="linkdin social"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100009546061383"
              className="facebook social"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://twitter.com/AmitKum01184222"
              className="twitter social"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/u_amit65/"
              className="instagram social"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <p>
              <a
                href="mailto:amitupadhyay468@gmail.com"
                target={"blank"}
                class="contact"
              >
                Contact
              </a>
            </p>
          </div>
        </div>

        <div class="column1">
          <div class="card1">
            {/* <!-- <h2 style="font-family: 'Comic Sans MS'"><center><b><u>About Us</u></b></center></h2> --> */}
            <div class="w">
              <h2
                style={{ fontFamily: "Trebuchet MS", textAlign: "center" }}
                className="whyus"
              >
                <b>
                  <u>WHY ME? 🤔</u>
                </b>
              </h2>

              <p>
                <div class="w01">
                  1.All the documents that you need are here.
                </div>
              </p>
              <p>
                <div class="w01">
                  2.Uploaded by your friends for you.
                </div>
              </p>
              <p>
                <div class="w01">
                  3.Help your friend by uploading documents.
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer/> */}
    </div>
  );
};
export default About;
