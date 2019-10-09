import React from "react";
import "../sass/Home.scss";
import profile from "../../images/profile.png";
import evanity from "../../images/e-vanity1.png";
import evanity1 from "../../images/e-vanity2.png";
import rentech from "../../images/rentech1.png";
import rentech1 from "../../images/rentech2.png";
import tip from "../../images/tip1.png";
import tip1 from "../../images/tip2.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="homeMain">
        <div className="homeTopMain">
          {/* <div className="homeTopLeft"></div> */}
          {/* <div className="homeTopMid"><h1>Welcome to the portfolio of Skyler Dowdy</h1></div> */}
          {/* <div className="homeTopRight"></div> */}
        </div>
        <div className="homeMidMain">
          <div className="homeMidLeft">
            <img src={profile} alt="profile" />
          </div>
          <div className="homeMidMid">
            <h1>Skyler Dowdy "Code the world!"</h1>
            <h3>Professional Profile</h3>
          </div>
          {/* <div className="homeMidRight"></div> */}
        </div>
        <h1>Skills</h1>
        <div className="homeMidTop">
          <div className="homeMidTopLeft">
            <ul>
              <li>
                <i class="fab fa-js-square"></i>JavaScript
                <i class="fab fa-js-square"></i>
              </li>
              <li>
                <i class="fab fa-react"></i>React<i class="fab fa-react"></i>
              </li>
              <li>
                <i class="fab fa-java"></i>Java SpringBoot
                <i class="fab fa-java"></i>
              </li>
            </ul>
          </div>
          <div className="homeMidTopMid">
            <ul>
              <li>Redux</li>
              <li>NodeJs</li>
              <li>PostgreSQL</li>
              <li>REST Apis</li>
            </ul>
          </div>
          <div className="homeMidTopRight">
            <ul>
              <li>
                <i class="fab fa-html5"></i>HTML<i class="fab fa-html5"></i>
              </li>
              <li>
                <i class="fab fa-sass"></i>CSS/SCSS/LESS
                <i class="fab fa-sass"></i>
              </li>
              <li>
                <i class="fab fa-php"></i>PHP<i class="fab fa-php"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="homeMidMidBot">
          <h1>My projects</h1>
        </div>
        <div className="homeBottomMain">
          <div className="homeBotLeft">
            <div className="projBox">
              <div className="projBoxLeft">
                <img
                  src={evanity}
                  alt="Erica's Vanity Example"
                  className="proj1"
                />
              </div>
              <div className="projBoxRight">
                <h1 className="projHeader">Erica's Vanity</h1>
                <p className="projP">Custom blog built in React and Java</p>
                <Link className="projLink" to="/projects#evan">
                  Learn More...
                </Link>
              </div>
            </div>
          </div>

          <div className="homeBotMid">
            <div className="projBox">
              <div className="projBoxLeft">
                <img src={rentech1} alt="Rentech Example" className="proj2" />
              </div>
              <div className="projBoxRight">
                <h1 className="projHeader">Use My Tech Stuff</h1>
                <p className="projP">
                  School Project -- User to User Tech Rentals
                </p>
                <Link className="projLink" to="/projects#umts">
                  Learn More...
                </Link>
              </div>
            </div>
          </div>
          <div className="homeBotRight">
            <div className="projBox">
              <div className="projBoxLeft">
                <img src={tip} alt="Tipease Example" className="proj3" />
              </div>
              <div className="projBoxRight">
                <h1 className="projHeader">Tipease</h1>
                <p className="projP">School Project -- Tipping Made Simple</p>
                <Link className="projLink" to="/projects#tipease">
                  Learn More...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
