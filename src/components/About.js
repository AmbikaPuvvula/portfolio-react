import React from "react";
function About(){
    return(
        <div className = "container text-center my-5">
      <h1 className="font-weight-light">
        About <span className="text-info">Me</span>
      </h1>
      <div className="lead">I can develop front end and backend of an App</div>
      <div className="row my-5 pt-3">
        <div className="col-12 col-md-6 text-justify py-3">
          <h5 className=" text-center">What can i do..?</h5>
          <p>
            I can develop web pages by using front end technologies like
            HTML,CSS,Bootstrap,JavaScript etc... Along with this iam able
            to develop backend application using flask or Django Framework's.
          </p>
        </div>

        <div className="col-12 col-md-6 text-justify py-3">
          <h5 className=" text-center">What do I believe in?</h5>
          <p>
            Eager to learn new technologies to keep me updated with the
            current world. Try to learn and practice what you learn.
          </p>
        </div>
      </div>

      <div className="row my-5 pt-3">
        <div className="col-12 col-md-6 text-justify py-3">
          <h5 className=" text-center">What am I doing currently?</h5>
          <p>
            Currently working as a Technical Skill Trainer in APSSDC.
            Having knowledge in python programming and some Frontend
            technologies and some webframeworks.
          </p>
        </div>

        <div className="col-12 col-md-6 text-justify py-3">
          <h5 className=" text-center">How can I help you?</h5> 
          <p>
            It's a previlage for me to get a chance to help you 
            in any form in the technologies I know, sharing knowledge
            is good way to learn more.
          </p>
        </div>
      </div>

    </div>
    );
}
export default About;