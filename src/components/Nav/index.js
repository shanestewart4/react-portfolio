import React from "react";

function Nav(props) {
    const {
        selectAbout,
        setSelectAbout,
        selectProjects,
        setSelectProjects,
        selectContact,
        setSelectContact,
        selectResume,
        setSelectResume
    } = props;

    return (
        <nav id="navigationBar" className="collapse navbar-collapse">
            <ul className="navbar-nav">
                <li className="nav-item mx-4" onClick={()=> {
                    setSelectAbout(true);
                    setSelectProjects(false);
                    setSelectContact(false);
                    setSelectResume(false)
                }}>
                    <button className={`nav-btn ${selectAbout && "navActive"}`}>About</button>
                </li>
            </ul>
            <ul>
                <li className="nav-item mx-4"onClick={()=> {
                    setSelectAbout(false);
                    setSelectProjects(true);
                    setSelectContact(false);
                    setSelectResume(false)
                }}>
                    <button className={`nav-btn ${selectProjects && "navActive"}`}>Projects</button>
                </li>
            </ul>
            <ul>
                <li className="nav-item mx-4"onClick={()=> {
                    setSelectAbout(false);
                    setSelectProjects(false);
                    setSelectContact(true);
                    setSelectResume(false)
                }}>
                    <button className={`nav-btn ${selectContact && "navActive"}`}>Contact</button>
                </li>
            </ul>
            <ul>
                <li className="nav-item mx-4"onClick={()=> {
                    setSelectAbout(false);
                    setSelectProjects(false);
                    setSelectContact(false);
                    setSelectResume(true)
                }}>
                    <button className={`nav-btn ${selectResume && "navActive"}`}>Resume</button>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;