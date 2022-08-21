import React from "react";
import myResume from "../../../src/assets/resume/resume.pdf";

function Resume() {
  return (
    <div className="main-header">
      <div>
        <a href={myResume} target="_blank" rel="noreferrer">
          <h5>View my resume here!</h5>
        </a>
      </div>
    </div>
  );
}

export default Resume;
