import './App.css';
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";



function App() {
  const [selectAbout, setSelectAbout] = useState(true);
  const [selectProjects, setSelectProjects] = useState(false);
  const [selectContact, setSelectContact] = useState(false);
  const [selectResume, setSelectResume] = useState(false);

  return (
    <div>
      <main>
        <Header
          selectAbout = {selectAbout}
          setSelectAbout = {setSelectAbout}
          selectProjects = {selectProjects}
          setSelectProjects = {setSelectProjects}
          selectContact = {selectContact}
          setSelectContact = {setSelectContact}
          selectResume = {selectResume}
          setSelectResume = {setSelectResume}
        ></Header>
        {selectAbout ? (
          <>
            <About></About>
          </>
        ) : selectProjects ? (
          <>
            <Projects></Projects>
          </>
        ) : selectContact ? (
          <>
            <Contact></Contact>
          </>
        ) : selectResume ? (
          <>
            <Resume></Resume>
          </>
        ) : (
          <About></About>
        )}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
