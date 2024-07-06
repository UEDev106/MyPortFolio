import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import  Pizza from "../assets/projects/Pizza.jpg";
import Particle from "../components/Particle";
import tictoc from "../assets/projects/tictoc.jpg";
import Age from "../assets/projects/Age.png";
import weather from "../assets/projects/weather.jpg";
import Rock from "../assets/projects/Rock.png";
import Todo from "../assets/projects/Todo.jpg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather APP"
              description="The app utilizes the OpenWeatherMap API to fetch real-time weather data. Users can search for any city or allow the app to access their geolocation for automatic weather updates. The app displays current weather conditions and a detailed forecast for the upcoming week, all presented in an easy-to-read format.Weather forecasting is essential for planning daily activities, and having a reliable source of weather information can significantly impact our day-to-day decisions.r accurate weather information for personal"
              ghLink="https://github.com/UEDev106/Weather_Forecasting"
              demoLink="https://vercel.com/ali-uedev106-projects/weather-forecasting"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Age}
              isBlog={false}
              title="Age Calculator"
              description="Developed an interactive age calculator application using React.js, designed to compute a user's exact age based on their date of birth. The app showcases proficiency in React's component-based architecture and state management.Ensured optimal performance and user experience across various devices with a mobile-first design approach.Implemented robust form validation to handle invalid or incomplete inputs, enhancing the app's usability and reliability."
              ghLink="https://github.com/UEDev106/Age_Calculator"
              demoLink="https://vercel.com/ali-uedev106-projects/age-calculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pizza}
              isBlog={false}
              title="Pizza Delivery App"
              description="Built responsive UI components with Tailwind CSS to provide an optimal user experience across various devices. Utilized Redux for robust state management, ensuring smooth data flow and consistent application state.Developed a comprehensive cart system allowing users to add, remove, and manage their pizza orders effectivelyDeveloped and styled various UI components using Tailwind CSS.
             Managed application state and asynchronous actions with Redux"

              ghLink="https://github.com/UEDev106/UEdev_Pizza_Hut"
              demoLink="https://uevdev106pizzahut.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rock}
              isBlog={false}
              title="Paper Sissor Rock"
              description="Implemented classic Rock Paper Scissors logic allowing players to compete against the computer.JavaScript Programming: Utilized JavaScript for game logic, event handling, and DOM manipulation to create a seamless and engaging user experi"
              ghLink="https://github.com/UEDev106/Paper_Rock_Sissors"
              demoLink="https://vercel.com/ali-uedev106-projects/paper-rock-sissors"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictoc}
              isBlog={false}
              title="Tic Toc Toe"
              description="Implemented the core game mechanics, including player turns, win conditions, and draw detection.Designed an intuitive and responsive user interface that allows users to easily interact with the game on various devices."
              ghLink="https://github.com/UEDev106/TicTocToe"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todo}
              isBlog={false}
              title="Todo List"
              description="Developed a feature-rich Todo List application using React.js, aimed at enhancing productivity through efficient task management. The project demonstrates expertise in React's component-based architecture, state management, and modern front-end development practices."
              ghLink="https://github.com/UEDev106/Todolist"
              demoLink="https://todolist106.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects