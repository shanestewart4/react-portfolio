import React, {useState} from "react";

function Projects() {
    const [myProjects] = useState([
        {
            image: "../../images/Victor's-Car-Dealership.png",
            title: "Victor's Car Dealership",
            url: "https://victorscardealership.herokuapp.com/",
            repository: "https://github.com/clintonstrange/simad",
            description: "This group project was centered around launching an inventory management system for a fictional car dealership."
        },
        {
            image: "../../images/Budget-Tracker.png",
            title: "Budget Tracker, a Progressive Web Application",
            url: "https://warm-wildwood-55194.herokuapp.com/",
            repository: "https://github.com/shanestewart4/budget-tracker",
            description: "This application is centered around creating a budget tracker that works when internet connections are unavailable/unstable."
        },
        {
            image: "../../images/The-Ideal-Meal.png",
            title: "The Ideal Meal",
            url: "https://shanestewart4.github.io/Ideal-Meal/",
            repository: "https://github.com/shanestewart4/Ideal-Meal",
            description: "This group project focused on retrieving data from APIs and rendering them to an HTML page."
        },
        {
            image: "../../images/Effishent.png",
            title: "Effishent",
            url: "https://www.effishent.us",
            repository: "https://www.effishent.us",
            description: "I built this website using WIX to showcase my passion for fly fishing."
        }
    ]);

    return (
        <div id="projects-containter" className="m-3">
            {myProjects.map(project => (
                <div id="project" className="m-3 card" key={project.title}>
                    <div className="card-img-top m-3">
                        <img  
                            id="project-image"
                            className="img-fluid rounded mx-auto"
                            alt={project.title}
                            src={require(`../../images/${project.image}`)}
                        />
                    </div>
                    <h3 className="text-center">
                        <a href={project.url} className="card-text" target="blank">{project.title}</a>
                    </h3>
                    <p className="text-center">{project.description}</p>
                    <p className="text-center">
                        <a href={project.repository} target="blank">
                            Project Repository
                        </a>
                    </p>
                </div>
            ))}
        </div>
    );
}

export default Projects;