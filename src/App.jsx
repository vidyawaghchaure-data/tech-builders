
import { useState } from "react";
import { supabase } from "./supabaseClient";
import "./App.css";

function App() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    technology: "",
    deadline: "",
    description: "",
  });

  /* =========================================================
     TEAM MEMBERS
  ========================================================= */

  const teamMembers = [
    {
      no: "01",
      name: "Vidya Waghchaure",
      role: "Team Leader | Data & AI Enthusiast | Python Developer | Computer Engineering Student",
      photo: "/Team Members/Vidya.jpeg",

      expertise:
        "Data Engineering & Analytics, Python Development, Database Management, Data Analysis & Visualization, ETL Pipeline Development, Backend Development, AI/ML Project Development, Business Intelligence, and End-to-End Software Project Development",

      technologies: [
        "Python",
        "Java",
        "SQL",
        "MySQL",
        "PostgreSQL",
        "Pandas",
        "NumPy",
        "Power BI",
        "Flask",
        "HTML",
        "CSS",
        "JavaScript",
        "Git & GitHub",
        "Apache Airflow",
        "Apache Kafka",
        "REST APIs",
        "Data Visualization",
        "ETL",
        "Data Processing",
      ],

      strengths: [
        "Data Analytics",
        "Database Design",
        "ETL & Data Pipelines",
        "Python Development",
        "Backend Development",
        "AI/ML Integration",
        "Project Architecture",
        "Problem Solving",
        "Team Leadership",
      ],

      linkedin:
        "https://www.linkedin.com/in/vidya-waghchaure-17113938a",

      github:
        "https://github.com/vidyawaghchaure-data",
    },

    {
      no: "02",
      name: "Sonawane Swarali",
      role: "Computer Engineering Student",
      photo: "/Team Members/Swarali.jpeg",

      expertise:
        "Web Application Development, Database Management, Backend Development, REST API Development, Cloud Computing, Computer Networking, IoT Solutions, and Software Project Development",

      technologies: [
        "Python",
        "Java",
        "C",
        "C++",
        "HTML",
        "CSS",
        "JavaScript",
        "SQL",
        "Git & GitHub",
      ],

      strengths: [
        "Web Development",
        "Database Design & Management",
        "Backend Development",
        "API Integration",
        "Cloud Fundamentals",
        "IoT Applications",
        "Computer Networking",
        "Problem Solving",
      ],

      linkedin:
        "https://www.linkedin.com/in/swarali-sonvane-4709b4428",

      github:
        "https://github.com/swaralisonvane-ops",
    },

    {
      no: "03",
      name: "Nilesh Chede",
      role: "Computer Engineering Student",
      photo: "/Team Members/Nilesh.jpeg",

      expertise:
        "Python Development, Java Development, Data Science, AI/ML, Android Application Development, Database Solutions, and Software Project Development",

      technologies: [
        "Python",
        "Java",
        "SQL",
        "Kotlin",
        "Android Studio",
        "MongoDB",
        "AI/ML",
        "Data Science",
      ],

      strengths: [
        "Python Development",
        "Java Development",
        "Data Science",
        "AI/ML",
        "Android Development",
        "Database Management",
        "Problem Solving",
        "Project Development",
      ],

      linkedin:
        "https://www.linkedin.com/in/nilesh-chede-8685b2391",

      github:
        "https://github.com/nileshchede011-a11y",
    },

    {
      no: "04",
      name: "Arjun Kute",
      role: "Computer Engineering Student",
      photo: "/Team Members/Arjun.jpeg",

      expertise:
        "Full-Stack Web Development, Backend Development, Database Management, REST API Development, Cloud & IoT Solutions, Embedded Systems, Computer Networking, and Software Project Development",

      technologies: [
        "C",
        "C++",
        "Java",
        "Python",
        "JavaScript",
        "HTML",
        "CSS",
        "SQL",
        "MongoDB",
        "Arduino",
        "IoT",
        "Git & GitHub",
      ],

      strengths: [
        "Backend & Database Integration",
        "Web Application Development",
        "IoT & Embedded Solutions",
        "API Development",
        "Network Fundamentals",
        "Software Architecture",
        "Problem Solving",
      ],

      linkedin:
        "https://www.linkedin.com/in/arjun-kute-b15958337",

      github:
        "https://github.com/arjunkute001-cloud",
    },

    {
      no: "05",
      name: "Avishkar Dawbhat",
      role: "Android Developer | Computer Engineering Student",
      photo: "/Team Members/Avishkar.jpeg",

      expertise:
        "Android Application Development, Mobile UI/UX Design,  Backend & Database Integration, API Integration, Application Architecture, and End-to-End Project Development",

      technologies: [
        "Java",
        "XML",
        "Android SDK",
        "REST APIs",
        "Git & GitHub",
      ],

      strengths: [
        "Android App Development",
        "Modern UI Design",
        "Database Management",
        "API Integration",
        "Mobile Application Architecture",
        "Problem Solving",
      ],

      linkedin:
        "https://www.linkedin.com/in/avishkar-dawbhat-277985389",

      github:
        "https://github.com/dawbhatavishkar-create",
    },
  ];

  /* =========================================================
     PROJECTS
  ========================================================= */

  const projects = [
    {
      no: "01",
      title: "Project Alpha",
      description:
        "A practical software solution designed to solve a real-world problem.",
      tags: ["Python", "Database"],
    },
    {
      no: "02",
      title: "Project Nexus",
      description:
        "A modern digital application combining intelligent technology and user-focused design.",
      tags: ["AI", "Web"],
    },
    {
      no: "03",
      title: "Project Core",
      description:
        "A data-driven system built for efficient processing, management and analysis.",
      tags: ["Data", "Cloud"],
    },
  ];

  /* =========================================================
     TECHNOLOGIES
  ========================================================= */

  const technologies = [
    "Python",
    "Java",
    "C / C++",
    "React",
    "Flask",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Power BI",
       "IoT",
    "AI / ML",
    "Git",
    "Cloud",
  ];

  /* =========================================================
     PROCESS
  ========================================================= */

  const processSteps = [
    {
      no: "01",
      title: "DISCOVER",
      description:
        "Understand the problem and define the requirements.",
    },
    {
      no: "02",
      title: "DESIGN",
      description:
        "Plan the architecture, database and user experience.",
    },
    {
      no: "03",
      title: "BUILD",
      description:
        "Develop the solution using the right technologies.",
    },
    {
      no: "04",
      title: "TEST",
      description:
        "Validate functionality, performance and reliability.",
    },
    {
      no: "05",
      title: "DELIVER",
      description:
        "Deploy the final solution and document the project.",
    },
  ];

  /* =========================================================
     FORM FUNCTIONS
  ========================================================= */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const { error } = await supabase
      .from("tech_builders_contacts")
      .insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        project_type: formData.projectType,
        technology: formData.technology,
        deadline: formData.deadline,
        description: formData.description.trim(),
        status: "NEW",
      });

    if (error) {
      console.error("Supabase Error:", error);
      alert(`Supabase Error: ${error.message}`);
      return;
    }

    setSubmitted(true);

  } catch (error) {
    console.error("Connection Error:", error);
    alert(`Connection Error: ${error.message}`);
  }
};

  const closeModal = () => {
    setShowContactForm(false);
    setSubmitted(false);

    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      technology: "",
      deadline: "",
      description: "",
    });
  };

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <div className="site">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <a href="#home" className="brand">

          <div className="logo">
            TB
          </div>

          <div className="brand-text">

            <h3>
              TECH BUILDERS
            </h3>

            <span>
              DIGITAL INNOVATION
            </span>

          </div>

        </a>


        <div className="nav-links">

          <a href="#home">
            Home
          </a>

          <a href="#about">
            About
          </a>

          <a href="#mission">
            Mission
          </a>

          <a href="#team">
            Team
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>


        <div className="status">

          <span className="status-dot"></span>

          ONLINE

        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section id="home" className="hero">

        <div className="hero-grid"></div>

        <div className="hero-content">

          <div className="section-number">
            00 // MISSION CONTROL
          </div>

          <h1>
            We build ideas
            <br />
            <span>
              that matter.
            </span>
          </h1>

          <p>
            Tech Builders is a student-driven technology team focused on
            building practical, innovative and impactful digital solutions.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn primary"
            >
              Explore Projects ↗
            </a>

            <a
              href="#team"
              className="btn secondary"
            >
              Meet The Team
            </a>

          </div>

        </div>


        <div className="mission-card">

          <div className="card-top">

            <span>
              SYSTEM STATUS
            </span>

            <span className="green">
              ● ACTIVE
            </span>

          </div>

          <div className="system-line"></div>

          <div className="system-data">

            <div>

              <span>
                TEAM
              </span>

              <strong>
                TECH BUILDERS
              </strong>

            </div>

            <div>

              <span>
                MEMBERS
              </span>

              <strong>
                05
              </strong>

            </div>

            <div>

              <span>
                MISSION
              </span>

              <strong>
                INNOVATE
              </strong>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="section about"
      >

        <div className="section-number">
          01 // WHO WE ARE
        </div>

        <div className="two-column">

          <div>

            <h2>
              More than a team.
              <br />
              <span>
                A technology unit.
              </span>
            </h2>

          </div>

          <div className="about-text">

            <p>
              Tech Builders is a team of passionate Computer Engineering
              students who believe that technology becomes meaningful when
              knowledge is transformed into real-world solutions.
            </p>

            <p>
              From software development and databases to data engineering,
              mobile applications, cloud, IoT and AI — we learn, design,
              build and solve together.
            </p>

          </div>

        </div>

      </section>


      {/* ================= MISSION ================= */}

      <section
        id="mission"
        className="section mission"
      >

        <div className="section-number">
          02 // OUR MISSION
        </div>

        <h2>

          Learn.
          <span>
            Build.
          </span>

          <br />

          Innovate.

        </h2>


        <div className="mission-grid">

          <div className="mission-box">

            <div className="box-icon">
              01
            </div>

            <h3>
              LEARN
            </h3>

            <p>
              Continuously explore new technologies, tools and concepts.
            </p>

          </div>


          <div className="mission-box active-box">

            <div className="box-icon">
              02
            </div>

            <h3>
              BUILD
            </h3>

            <p>
              Convert technical knowledge into practical real-world projects.
            </p>

          </div>


          <div className="mission-box">

            <div className="box-icon">
              03
            </div>

            <h3>
              INNOVATE
            </h3>

            <p>
              Create useful, scalable and meaningful technology solutions.
            </p>

          </div>

        </div>

      </section>


      {/* ================= TEAM ================= */}

      <section
        id="team"
        className="section team"
      >

        <div className="section-number">
          03 // THE MISSION CREW
        </div>


        <div className="team-heading">

          <div>

            <h2>
              Meet the
              <br />
              <span>
                Builders.
              </span>
            </h2>

          </div>


          <div className="team-intro">

            <div className="crew-status">

              <span className="status-dot"></span>

              05 MEMBERS ONLINE

            </div>

            <p>
              Different expertise.
              <br />
              One mission — build something meaningful.
            </p>

          </div>

        </div>


        {/* ================= MEMBER CARDS ================= */}

        <div className="team-grid">

          {teamMembers.map((member) => (

            <article
              className="member-card"
              key={member.no}
            >

              <div className="member-photo-wrapper">

                <div className="member-photo">

                  <img
                    src={member.photo}
                    alt={`${member.name} - Tech Builders`}
                  />

                </div>

                <span className="member-index">
                  {member.no}
                </span>

              </div>


              <div className="member-info">

                <span className="member-number">
                  {member.no} / BUILDER
                </span>


                <h3>
                  {member.name}
                </h3>


                <h4>
                  {member.role}
                </h4>


                <div className="member-line"></div>


                {/* EXPERTISE */}

                <p className="expertise-title">
                  EXPERTISE
                </p>

                <p className="expertise">
                  {member.expertise}
                </p>


                {/* TECHNOLOGIES */}

                <p className="expertise-title">
                  LANGUAGES & TECHNOLOGIES
                </p>

                <div className="skill-tags">

                  {member.technologies.map(
                    (technology) => (

                      <span key={technology}>
                        {technology}
                      </span>

                    )
                  )}

                </div>


                {/* CORE STRENGTHS */}

                <p className="expertise-title">
                  CORE STRENGTHS
                </p>

                <div className="skill-tags">

                  {member.strengths.map(
                    (strength) => (

                      <span key={strength}>
                        {strength}
                      </span>

                    )
                  )}

                </div>


                {/* SOCIAL LINKS */}

                <div className="member-links">

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ↗ LinkedIn
                  </a>

                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ◉ GitHub
                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="section projects"
      >

        <div className="section-number">
          04 // PROJECT DATABASE
        </div>


        <div className="project-heading">

          <h2>
            What we're
            <br />
            <span>
              building.
            </span>
          </h2>

          <p>
            Selected projects developed by Tech Builders.
          </p>

        </div>


        <div className="projects-grid">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.no}
            >

              <div className="project-top">

                <span>
                  {project.no}
                </span>

                <span>
                  ↗
                </span>

              </div>


              <h3>
                {project.title}
              </h3>


              <p>
                {project.description}
              </p>


              <div className="tags">

                {project.tags.map((tag) => (

                  <span key={tag}>
                    {tag}
                  </span>

                ))}

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ================= TECHNOLOGY ================= */}

      <section className="section technology">

        <div className="section-number">
          05 // TECHNOLOGY STACK
        </div>


        <h2>

          Our
          <br />

          <span>
            toolbox.
          </span>

        </h2>


        <div className="tech-list">

          {technologies.map(
            (technology) => (

              <span key={technology}>
                {technology}
              </span>

            )
          )}

        </div>

      </section>


      {/* ================= PROCESS ================= */}

      <section className="section process">

        <div className="section-number">
          06 // OUR PROTOCOL
        </div>


        <h2>

          From idea to
          <br />

          <span>
            execution.
          </span>

        </h2>


        <div className="process-grid">

          {processSteps.map((step) => (

            <article
              className="process-card"
              key={step.no}
            >

              <span className="process-no">
                {step.no}
              </span>

              <h3>
                {step.title}
              </h3>

              <p>
                {step.description}
              </p>

            </article>

          ))}

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="contact"
      >

        <div className="contact-icon">
          ✦
        </div>


        <div className="section-number">
          07 // ESTABLISH CONNECTION
        </div>


        <h2>
          Have an idea?
        </h2>


        <p>
          Let's turn it into something real.
          <br />
          Tech Builders is ready for the next mission.
        </p>


        <button
          className="btn primary"
          onClick={() =>
            setShowContactForm(true)
          }
        >
          Start a Conversation →
        </button>

      </section>


      {/* ================= CONTACT MODAL ================= */}

      {showContactForm && (

        <div
          className="contact-overlay"
          onClick={(event) => {

            if (
              event.target ===
              event.currentTarget
            ) {
              closeModal();
            }

          }}
        >

          <div className="contact-modal">

            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Close form"
            >
              ×
            </button>


            {!submitted ? (

              <>

                <div className="modal-header">

                  <div className="section-number">
                    ESTABLISH CONNECTION
                  </div>

                  <h2>

                    Let's build
                    <br />

                    <span>
                      something together.
                    </span>

                  </h2>

                  <p>
                    Tell us about your project and our team will
                    review your requirements.
                  </p>

                </div>


                <form
                  onSubmit={handleSubmit}
                >

                  <div className="form-row">

                    <div className="form-group">

                      <label>
                        YOUR NAME
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />

                    </div>


                    <div className="form-group">

                      <label>
                        EMAIL
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />

                    </div>

                  </div>


                  <div className="form-row">

                    <div className="form-group">

                      <label>
                        CONTACT NUMBER
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter contact number"
                      />

                    </div>


                    <div className="form-group">

                      <label>
                        PROJECT TYPE
                      </label>

                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                      >

                        <option value="">
                          Select project type
                        </option>

                        <option value="Final Year Project">
                          Final Year Project
                        </option>

                        <option value="Mini Project">
                          Mini Project
                        </option>

                        <option value="AI / ML Project">
                          AI / ML Project
                        </option>

                        <option value="Web Development">
                          Web Development
                        </option>

                        <option value="Data Analytics">
                          Data Analytics / Power BI
                        </option>

                        <option value="Python Project">
                          Python Project
                        </option>

                        <option value="Database Project">
                          Database Project
                        </option>

                        <option value="Other">
                          Other
                        </option>

                      </select>

                    </div>

                  </div>


                  <div className="form-row">

                    <div className="form-group">

                      <label>
                        PREFERRED TECHNOLOGY
                      </label>

                      <select
                        name="technology"
                        value={formData.technology}
                        onChange={handleChange}
                        required
                      >

                        <option value="">
                          Select technology
                        </option>

                        <option value="Python">
                          Python
                        </option>

                        <option value="Java">
                          Java
                        </option>

                        <option value="React">
                          React
                        </option>

                        <option value="AI / ML">
                          AI / ML
                        </option>

                        <option value="SQL / Database">
                          SQL / Database
                        </option>

                        <option value="Power BI">
                          Power BI
                        </option>

                        <option value="IoT">
                          IoT
                        </option>

                        <option value="Android">
                          Android
                        </option>

                        <option value="Cloud">
                          Cloud
                        </option>

                        <option value="Other">
                          Other
                        </option>

                      </select>

                    </div>


                    <div className="form-group">

                      <label>
                        DEADLINE
                      </label>

                      <select
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleChange}
                        required
                      >

                        <option value="">
                          Select deadline
                        </option>

                        <option value="Within 1 Month">
                          Within 1 Month
                        </option>

                        <option value="1 - 3 Months">
                          1 - 3 Months
                        </option>

                        <option value="3 - 6 Months">
                          3 - 6 Months
                        </option>

                        <option value="No Fixed Deadline">
                          No Fixed Deadline
                        </option>

                      </select>

                    </div>

                  </div>


                  <div className="form-group">

                    <label>
                      TELL US ABOUT YOUR PROJECT
                    </label>

                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Describe your project idea, requirements or problem..."
                      rows="5"
                      required
                    ></textarea>

                  </div>


                  <button
                    type="submit"
                    className="btn primary submit-btn"
                  >
                    SEND REQUEST →
                  </button>

                </form>

              </>

            ) : (

              <div className="success-screen">

                <div className="success-icon">
                  ✓
                </div>

                <div className="section-number">
                  TRANSMISSION COMPLETE
                </div>

                <h2>

                  Request
                  <br />

                  <span>
                    Received.
                  </span>

                </h2>

                <p>
                  Your project request has been successfully
                  transmitted to Tech Builders.
                </p>

                <p className="success-small">
                  Our team will review your requirements and
                  get back to you.
                </p>

                <button
                  className="btn secondary"
                  onClick={closeModal}
                >
                  CLOSE
                </button>

              </div>

            )}

          </div>

        </div>

      )}


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-brand">

          <strong>
            TECH BUILDERS
          </strong>

          <span>
            Build. Innovate. Transform.
          </span>

        </div>

        <p>
          © 2026 Tech Builders
        </p>

      </footer>

    </div>
  );
}

export default App;