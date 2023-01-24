import Heading from "./Heading";

function Project() {
  return (
    <>
      <Heading title="Project" />
      <div className="Project" id="project">
        <div>
          <div className="Project-compo" style={{ margin: "10px" }}>
            <a
              href="https://heartfelt-llama-580bb7.netlify.app/login/"
              target="_blank"
              className="linkpro"
            >
              <img src="./qua.png" alt="img" />
            </a>
            <div className="project_subheading">
              <h1>Quora clone</h1>
              <a href="https://github.com/dev-mayank09/Quora">Github repo</a>
            </div>
            <p style={{ margin: "10px 0" }}>
              It's a platform to ask questions and connect with people who
              contribute unique insights and quality answers. It was a team
              project and created in 5 day.
            </p>
            <h3
              style={{ color: "#ffffff", marginTop: "10px", fontSize: "22px" }}
            >
              <span style={{ color: "#f9ca24" }}>Tech Stack : </span>
              Html, Css ,JavaScript,React,redux,Chakara UI.
            </h3>
            <div
              className="project-items"
              style={{ display: "flex", margin: "20px 0px" }}
            >
              <div>
                <h3>Features</h3>
                <ul>
                  <li>Login & Signup</li>
                  <li>ALLPost pages</li>
                  <li>Post page</li>
                  <li>Answer page</li>
                  <li>Filters</li>
                  <li>Following</li>
                </ul>
              </div>

              <div>
                <h3> Area of responsibility</h3>
                <ul>
                  <li>Landing page </li>
                  <li>Single Post page </li>
                  <li>Responsiveness </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="Project-compo" style={{ margin: "10px" }}>
            <div>
              <a
                href="https://bookmyshowclone-9.netlify.app/"
                target="_blank"
                className="linkpro"
              >
                <img src="./bms.jpg" alt="img" />
              </a>
              <div className="project_subheading">
                <h1>BookMyShow clone</h1>
                <a href="https://github.com/Vidisha-Khalpada/BookMyShow">
                  Github repo
                </a>
              </div>
              <p style={{ margin: "10px 0" }}>
                A movie booking company that book ticket in all over india. It
                was a team project and created in 5 day.
              </p>
              <h3
                style={{
                  color: "#ffffff",
                  marginTop: "10px",
                  fontSize: "22px",
                }}
              >
                <span style={{ color: "#f9ca24" }}>Tech Stack : </span>
                Html, Css ,JavaScript.
              </h3>
              <div
                className="project-items"
                style={{ display: "flex", margin: "20px 0px" }}
              >
                <div>
                  <h3>Features</h3>
                  <ul>
                    <li>Login & signup pages</li>
                    <li>Cart & Filters</li>
                    <li>Seat Selection</li>
                    <li>Movie Page</li>
                    <li>Responsiveness</li>
                  </ul>
                </div>

                <div>
                  <h3> Area of responsibility</h3>
                  <ul>
                    <li>UI & UX part</li>
                    <li>Landing page & Ticket Bokking Page</li>
                    <li>Responsiveness </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="Project-compo" style={{ margin: "10px" }}>
            <div>
              <a
                href="https://netmeds-c.netlify.app/"
                target="_blank"
                className="linkpro"
              >
                <img src="./nn.jpg" alt="img" />
              </a>
              <div className="project_subheading">
                <h1>Netmed clone</h1>
                <a href="https://github.com/GryffindorAdi/netmed">
                  Github repo
                </a>
              </div>
              <p style={{ margin: "10px 0" }}>
                A pharma company that supply pharma items in all over india. It
                was a team project and created in 5 day.
              </p>
              <h3
                style={{
                  color: "#ffffff",
                  marginTop: "10px",
                  fontSize: "22px",
                }}
              >
                <span style={{ color: "#f9ca24" }}>Tech Stack : </span>
                Html, Css ,JavaScript.
              </h3>

              <div
                className="project-items"
                style={{ display: "flex", margin: "20px 0px" }}
              >
                <div>
                  <h3>Features</h3>
                  <ul>
                    <li>Login & signup pages</li>
                    <li>Cart & Filters</li>
                    <li>Responsiveness</li>
                  </ul>
                </div>

                <div>
                  <h3> Area of responsibility</h3>
                  <ul>
                    <li>UI & UX part</li>
                    <li>Filters</li>
                    <li>Responsiveness</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Project;
