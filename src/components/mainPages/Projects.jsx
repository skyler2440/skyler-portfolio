import React from 'react'
import '../sass/Projects.scss'
import evanity from '../../images/e-vanity1.png';
import evanity1 from '../../images/e-vanity2.png';
import rentech from '../../images/rentech1.png';
import rentech1 from '../../images/rentech2.png';
import tip from '../../images/tip1.png';
import tip1 from '../../images/tip2.png';

const Projects = () => {
    return(
        <>
        <div className="projectPage">
        <div className="projectsHeader"><h1>My Projects</h1></div>
        <div className="project1Header">
            <a id='evan'></a>
            <h1 className="h1Text projectHeaderText">Erica's Vanity</h1>
        </div>
        <div className="project1BodyMain projectBodyMain">
            <div className="project1BodyRight projectBodyRight">
            <img src={evanity} alt="example1"/>
                <img src={evanity1} alt="example2"/>
            </div>
            <div className="project1BodyLeft  projectBodyLeft">
                <div className="deployedLinks">
                    <a href="">FE Deploy Link</a>
                    <a href="">BE Deploy Link</a>
                </div>
                <div className="projectExplain">
                    <h4 className="h4Text">About the Project</h4>
                    <p className="pText">I built this page by myself and it was ready to handle user authentication, adding blog posts, and comments within a week of getting started. I will be maintianing and adding future updates to this project.</p>
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
                        <li>Postgres</li>
                    </ul>
                </div>

            </div>
        </div>
        <div className="project2Header">
            <h1 className="h1Text projectHeaderText">Use My Tech Stuff</h1>
        </div>        
        <div className="project2BodyMain projectBodyMain">
            <div className="project2BodyRight projectBodyRight">
                <img src={rentech} alt="example1"/>
                <img src={rentech1} alt="example2"/>

            </div>
            <a id="umts"></a>
            <div className="project2BodyLeft  projectBodyLeft">
            <div className="deployedLinks">
                    <a href="">FE Deploy Link</a>
                    <a href="">BE Deploy Link</a>
                </div>
                <div className="projectExplain">
                    <h4 className="h4Text">About the Project</h4>
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
                        {/* <li>Postgres</li> */}
                    </ul>
                </div>                
            </div>
        </div>
        <div className="project3Header">
            <h1 className="h1Text projectHeaderText">Tipease</h1>
        </div>        
        <div className="project3BodyMain projectBodyMain">
        <a id="tipease"></a>

            <div className="project3BodyRight projectBodyRight">
            <img src={tip} alt="example1"/>
            <img src={tip1} alt="example2"/>
            </div>
            <div className="project3BodyLeft projectBodyLeft">
            <div className="deployedLinks">
                    <a href="">FE Deploy Link</a>
                    <a href="">BE Deploy Link</a>
                </div>

                <div className="projectExplain">
                    <h4 className="h4Text">About the Project</h4>
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
                        {/* <li>Postgres</li> */}
                    </ul>

                </div>                

            </div>
            
        </div>
        </div>
        </>
    )
}
export default Projects