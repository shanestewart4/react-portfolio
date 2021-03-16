import React from "react";

function About() {
    return (
        <div>
            <div>
                <h2>About</h2>
                <div>
                    <div id="profile-pic-container">
                        <img 
                            id="profile-picture"
                            alt="Shane Stewart"
                            src={require('../../images/Shane Stewart_headshot.jpg')}
                        ></img>
                    </div>
                    <div>
                        <p>
                            Functioning entrepreneur. Aspire to use the talents possessed to help others in need. Passionate about music, finance and entrepreneurship. Certified in Full Stack Web Development after completing Vanderbilt University's Coding Bootcamp.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;