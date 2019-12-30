import React from 'react';
import '../sass/Projects.scss';
import ng from '../../images/ng.png';
import ng1 from '../../images/ng1.png';
import evanity from '../../images/e-vanity1.png';
import evanity1 from '../../images/e-vanity2.png';
import rentech from '../../images/rentech1.png';
import rentech1 from '../../images/rentech2.png';
import tip from '../../images/tip1.png';
import tip1 from '../../images/tip2.png';

const Projects = () => {
  return (
    <>
      <a id="ngwo"></a>

      <div className="projectPage">
        <div className="projectsHeader">
          <h1 className="header">My Projects</h1>
        </div>
        <div className="project0Header">
          <h1 className="h1Text projectHeaderText header">
            Net Giver Work Order Management
          </h1>
        </div>
        <div className="project0BodyMain projectBodyMain">
          <div className="project0BodyRight projectBodyRight">
            <img src={ng} alt="example1" />
            <img src={ng1} alt="example2" />
          </div>
          <div className="project0BodyLeft  projectBodyLeft">
            <div className="deployedLinks">
              <button onClick={e=>window.open("https://play.google.com/store/apps/details?id=com.netgiver.workordermanager&hl=en_US")}>Check out the App on Google Play</button>
            </div>
            <div className="projectExplain">
              <h4 className="h4Text">About the Project</h4>
              <ul>
                <li>School Labs Project</li>
              </ul>
              <h4 className="h4Text">Specific Contribution</h4>
              <ul>
                <li>Deployed the app to Google Play Store</li>
                <li>Building the Navigation Components</li>
                <li>
                  Connecting the Frontend to backend with axios and GraphQL
                </li>
                <li>
                  Getting the JWT and Data from the backend and injecting them
                  into the Apollo Store
                </li>
              </ul>
            </div>
            <div className="techUsed">
              <h4 className="h4Text">Technologies Used</h4>
              <h5 className="h5Text">Front End</h5>
              <ul>
                <li>React Native</li>
                <li>Axios</li>
                <li>Expo</li>
                <li>React Navigation</li>
              </ul>
              <h5 className="h5Text">Back End</h5>
              <ul>
                <li>Node.js</li>
                <li>Apollo</li>
                <li>GraphQL</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project1Header">
          <a id="evan"></a>
          <h1 className="h1Text projectHeaderText header">Erica's Vanity</h1>
        </div>
        <div className="project1BodyMain projectBodyMain">
          <div className="project1BodyRight projectBodyRight">
            <img src={evanity} alt="example1" />
            <img src={evanity1} alt="example2" />
          </div>
          <div className="project1BodyLeft  projectBodyLeft">
            <div className="deployedLinks">
              {/* <button onClick={e=>window.open("https://www.google.com")}>Check out the Site</button> */}
            </div>
            <div className="projectExplain">
              <h4 className="h4Text">About the Project</h4>
              <p className="pText">
                I built this page by myself and it was ready to handle user
                authentication, adding blog posts, and comments within a week of
                getting started. I will be maintaining and adding future updates
                to this project.
              </p>
            </div>
            <div className="techUsed">
              <h4 className="h4Text">Technologies Used</h4>
              <h5 className="h5Text">Front End</h5>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>Formik</li>
                <li>Axios</li>
                <li>Semantic UI</li>
                <li>SASS</li>
              </ul>
              <h5 className="h5Text">Back End</h5>
              <ul>
                <li>Java</li>
                <li>SpringBoot</li>
                <li>OAuth2</li>
                <li>Swagger</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project2Header">
          <h1 className="h1Text projectHeaderText header">Use My Tech Stuff</h1>
        </div>
        <div className="project2BodyMain projectBodyMain">
          <div className="project2BodyRight projectBodyRight">
            <img src={rentech} alt="example1" />
            <img src={rentech1} alt="example2" />
          </div>
          <a id="umts"></a>
          <div className="project2BodyLeft  projectBodyLeft">
            <div className="deployedLinks">
              {/* <button onClick={e=>window.open("https://www.google.com")}>Check out the Site</button> */}
            </div>
            <div className="projectExplain">
              <h4 className="h4Text">About the Project</h4>
              <ul>
                <li>School Labs Project</li>

                <li>
                  Make tech items available to be rented out by their owners
                </li>
                <li>
                  Built in one week by myself and 4 other student developers
                </li>
              </ul>
              <h4 className="h4Text">Specific Contribution</h4>
              <ul>
                <li>Building the forms using Formik and Yup</li>
                <li>Connecting the forms to the Redux store</li>
                <li>Making the Forms Compatible with Semantic UI</li>
                <li>
                  Assisting the other developers in the main functionality of
                  the application
                </li>
              </ul>
            </div>
            <div className="techUsed">
              <h4 className="h4Text">Technologies Used</h4>
              <h5 className="h5Text">Front End</h5>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>Formik</li>
                <li>Axios</li>
                <li>Semantic UI</li>
                <li>SASS</li>
              </ul>
              <h5 className="h5Text">Back End</h5>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>OAuth</li>
                <li>MongoDB</li>
                {/* <li>PostgreSQL</li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="project3Header">
          <h1 className="h1Text projectHeaderText header">Tipease</h1>
        </div>
        <div className="project3BodyMain projectBodyMain">
          <a id="tipease"></a>

          <div className="project3BodyRight projectBodyRight">
            <img src={tip} alt="example1" />
            <img src={tip1} alt="example2" />
          </div>
          <div className="project3BodyLeft projectBodyLeft">
            <div className="deployedLinks">
              {/* <button onClick={e=>window.open("https://www.google.com")}>Check out the Site</button> */}
            </div>

            <div className="projectExplain">
              <h4 className="h4Text">About the Project</h4>
              <ul>
                <li>School Labs Project</li>
                <li>
                  Revolutionize tipping by taking out the middleman and allowing
                  users to control their own tips
                </li>
                <li>
                  Built in one week by myself and 3 other student developers
                </li>
              </ul>
              <h4 className="h4Text">Specific Contribution</h4>
              <ul>
                <li>Building the Redux components</li>
                <li>
                  Connecting the Redux components to the frontend and backend
                </li>
                <li>
                  Getting the JWT and Data from the backend and injecting them
                  into the Redux Store
                </li>
              </ul>
            </div>
            <div className="techUsed">
              <h4 className="h4Text">Technologies Used</h4>
              <h5 className="h5Text">Front End</h5>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>Formik</li>
                <li>Axios</li>
                <li>Semantic UI</li>
                <li>SASS</li>
              </ul>
              <h5 className="h5Text">Back End</h5>
              <ul>
                <li>NodeJs</li>
                <li>Express</li>
                <li>OAuth</li>
                {/* <li>Swagger</li> */}
                {/* <li>PostgreSQL</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
