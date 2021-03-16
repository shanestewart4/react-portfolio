import React from "react";
import Nav from "../Nav"

function Header(props) {
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
    <header>
      <h1>
        Shane Stewart's Portfolio
      </h1>
      <h2>
        This portfolio was made with React!
      </h2>
      <Nav
        selectAbout={selectAbout}
        setSelectAbout={setSelectAbout}
        selectProjects={selectProjects}
        setSelectProjects={setSelectProjects}
        selectContact={selectContact}
        setSelectContact={setSelectContact}
        selectResume={selectResume}
        setSelectResume={setSelectResume}
      ></Nav>
    </header>
  );
}

export default Header;