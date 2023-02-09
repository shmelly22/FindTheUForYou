import React, { useState, useEffect } from "react";
import StartHeader from "./StartHeader";
import "./CR.css";
import CollegeReportIMG from "../src/nudes/collegeReport.jpg";
import AOS from "aos";

function CollegeReport() {
  AOS.init();

  var collegeSearched = sessionStorage.getItem("collegeSearched");
  var user = sessionStorage.getItem("User");
  var allUsersCollege = [];
  var allCollegeFav = [];
  var matchingIndexes = [];
  var usersCollegeFav = [];

  useEffect(() => {
    // Filter the collegeFavorited
    function getMatchingIndexes() {
      for (let i = 0; i < allUsersCollege.length; i++) {
        console.log(allUsersCollege);
        if (allUsersCollege[i] === user) {
          matchingIndexes.push(i);
        }
      }
      console.log(matchingIndexes);

      for (let i = 0; i < allCollegeFav.length; i++) {
        if (i === matchingIndexes[i]) {
          usersCollegeFav.push(allCollegeFav[i]);
        }
        console.log(usersCollegeFav);
      }
    }
    fetch("http://localhost:5000/college", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()`
        return response.json();
      })
      .then((data) => {
        console.log(data);
        for (let index = 0; index < data.users.length; index++) {
          allUsersCollege.push(data.users[index]);
          allCollegeFav.push(data.collegesFavorited[index]);
        }
      })
      .then(() => {
        getMatchingIndexes();
      });
  }, []);

  const favoriteCollege = () => {
    if (user == null) {
      alert("You must be logged in to favorite a college");
    } else {
      if (usersCollegeFav.indexOf(collegeSearched) === -1) {
        if (collegeSearched)
          fetch("http://localhost:5000/college", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ user, collegeSearched }),
          })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .then(() => alert("Adding to favorites"))
            .catch((error) => console.error(error));
      } else {
        alert("removing" + " " + { collegeSearched } + " " + "from favorites");
        fetch("http://localhost:5000/collegeRemove", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user, collegeSearched }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error(error));
      }
    }
  };
  let bachelorsArr = [
    {
      degreeLevel: "/ Bachelors",
      degreename: "Computer Engineering ",
      bio: "A technical degree that combines principles of computer science and electrical engineering to prepare students for careers in technology development.",
    },
    {
      degreeLevel: "/ Bachelors",
      degreename: "Creative Writing ",
      bio: "A humanities degree that focuses on honing writing skills, with a curriculum that includes workshops, literature classes, and opportunities to develop a writing portfolio.",
    },
    {
      degreeLevel: "/ Bachelors",
      degreename: "Administration in Marketing ",
      bio: "A business degree that teaches students the fundamental concepts and practices of marketing, including market research, advertising, and brand management.",
    },
    {
      degreeLevel: "/ Bachelors",
      degreename: "Biochemistry ",
      bio: "A STEM degree that focuses on the study of chemical processes within living organisms, including topics like genetics, metabolism, and cellular structure. Graduates may go on to careers in research, biotechnology, or medicine.",
    },
  ];
  let mastersArr = [
    {
      degreeLevel: "/ Masters",
      degreename: "Data Science",
      bio: "A STEM degree that focuses on the collection, analysis, and interpretation of large data sets. Graduates of a data science program may work in industries like finance, healthcare, or technology.",
    },
    {
      degreeLevel: "/ Masters",
      degreename: "Creative Writing",
      bio: "A graduate degree in creative writing that provides students with advanced training in the craft and business of writing, including workshops, literature classes, and opportunities for publication.",
    },
    {
      degreeLevel: "/ Masters",
      degreename: "Business Administration",
      bio: "A graduate degree in business administration that teaches students advanced skills in leadership, strategy, and management. Graduates of an MBA program are well-equipped to take on senior roles in organizations.",
    },
    {
      degreeLevel: "/ Masters",
      degreename: "Architecture",
      bio: "A professional degree in architecture that provides students with advanced training in architectural design, construction, and project management. Graduates of an architecture program may go on to work as licensed architects or design professionals.",
    },
  ];
  let phdArr = [
    {
      degreeLevel: "/ PHD",
      degreename: "Physics",
      bio: "A PhD in physics is a research-focused degree that provides students with the opportunity to delve into advanced topics in physics, including quantum mechanics, cosmology, and particle physics. Graduates of a physics PhD program are equipped to pursue careers in academia or research.",
    },
    {
      degreeLevel: "/ PHD",
      degreename: "Nueroscience",
      bio: "A PhD in neuroscience is a research-focused degree that provides students with an in-depth understanding of the brain and its functions. Graduates of a neuroscience PhD program are well-equipped to pursue careers in academia, research, or the pharmaceutical industry.",
    },
    {
      degreeLevel: "/ PHD",
      degreename: "Computer Science",
      bio: "A PhD in computer science is a research-focused degree that provides students with an in-depth understanding of computer systems and technologies. Graduates of a computer science PhD program are well-equipped to pursue careers in academia, research, or industry.",
    },
    {
      degreeLevel: "/ PHD",
      degreename: "Economics",
      bio: "A PhD in economics is a research-focused degree that provides students with advanced training in micro and macroeconomic theory, econometrics, and data analysis. Graduates of an economics PhD program are equipped to pursue careers in academia, research, or government.",
    },
  ];

  const [divText, setDivText] = useState([]);

  const onBachelorsClick = () => {
    setDivText(bachelorsArr);
  };
  const onMastersClick = () => {
    setDivText(mastersArr);
  };
  const onPhdClick = () => {
    setDivText(phdArr);
  };

  const [style, setStyle] = useState({
    border: "solid 1px black",
    borderRadius: "50px",
  });

  const handleHover = () => {
    setStyle({
      border: "solid 1px white",
      borderRadius: "50px",
    });
  };
  const handleMouseOut = () => {
    setStyle({
      border: "solid 1px black",
      borderRadius: "50px",
    });
  };

  return (
    <div id="CollegeReportContainer">
      <StartHeader />
      <div className="CR-body-container">
        <div className="CR-body-top">
          <h1>{collegeSearched}</h1>
          <i
            id="CR-heart"
            className="fa-regular fa-heart"
            onClick={favoriteCollege}
          ></i>
        </div>
        <div className="CR-body-main">
          <div
            data-aos="fade-down"
            data-aos-offset="550"
            data-aos-duration="1000"
            className="CR-D-T"
          >
            <h1 className="AdmissionsTitle">About</h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="500"
            data-aos-duration="1200"
            className="CR-D-B"
          >
            <h3>
              {collegeSearched} is a well-respected institution located in the
              heart of a bustling city. Founded in 1900, the college has a rich
              history of providing quality education to students from all walks
              of life. With a student population of over 10,000,{" "}
              {collegeSearched}
              offers a diverse and inclusive learning environment. The college
              has a wide range of academic programs, including business,
              engineering, computer science, and liberal arts. Students have
              access to cutting-edge technology, innovative classrooms, and
              state-of-the-art research facilities. In addition to its strong
              academic programs, {collegeSearched} has a thriving student life,
              with more than 100 clubs and organizations, a bustling campus
              center, and a vibrant athletic program. With its combination of
              tradition and innovation, {collegeSearched} is a place where
              students can truly thrive and reach their full potential.
            </h3>
          </div>
        </div>
        <div className="CR-body-middle">
          <div
            data-aos="fade-down"
            data-aos-offset="550"
            data-aos-duration="1000"
            className="CR-A-T"
          >
            <h1>Admissions Report</h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="500"
            data-aos-duration="1200"
            className="CR-A-B"
          >
            <div className="AdStats-Bottom-left">
              <h2>Acceptance Rate Rate:</h2> <br></br>
              <h1>20%</h1>
              <div className="Spacing"></div>
              <h2>Average SAT:</h2> <br></br>
              <h1>1111</h1>
              <div className="Spacing"></div>
              <h2>Average ACT:</h2> <br></br>
              <h1>22</h1>
              <div className="Spacing"></div>
              <h2>AVERAGE GPA:</h2> <br></br>
              <h1>3.33</h1>
              <div className="Spacing"></div>
            </div>
            <div className="AdStats-Bottom-right">
              {" "}
              <img src={CollegeReportIMG}></img>
            </div>
          </div>{" "}
        </div>
        <div className="CR-body-bottom">
          {" "}
          <div
            data-aos="fade-down"
            data-aos-offset="550"
            data-aos-duration="1000"
            className="CR-B-T"
          >
            <h1>Academic Programs</h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="500"
            data-aos-duration="1200"
            className="CR-B-M"
          >
            <h1>
              {collegeSearched} is a renowned institution that boasts an
              impressive array of degree programs, designed to empower students
              with the knowledge and skills necessary to succeed in today's
              rapidly changing world. The college is particularly proud of its
              programs in business, engineering, and computer science, which are
              renowned for their rigor and practical relevance. Undergraduates
              and graduate students alike are exposed to cutting-edge curricula
              that challenge them to think critically, engage with real-world
              issues, and develop the technical expertise needed to thrive in
              their chosen fields. With a supportive community of faculty,
              staff, and students who are passionate about education,{" "}
              {collegeSearched} is a place where students can grow and achieve
              their full potential.
            </h1>
            <div className="bigSpacing"></div>
            <div className="degreeCategories">
              <h3 onClick={onBachelorsClick}>/Bachelors</h3>
              <h3 onClick={onMastersClick}>/Masters</h3>
              <h3 onClick={onPhdClick}>/PHD</h3>
            </div>
            <div className="slider">
              {divText.map((bachelor) => (
                <div
                  onMouseEnter={handleHover}
                  onMouseLeave={handleMouseOut}
                  className="degrees"
                  key={bachelor.degreename}
                >
                  <div className="degreelevelSelected">
                    <div style={style} className="degreeLevelText">
                      {" "}
                      {bachelor.degreeLevel}{" "}
                    </div>
                  </div>
                  <div className="degreeNameText">{bachelor.degreename}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollegeReport;
