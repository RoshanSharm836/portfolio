import "./App.css";
function Main() {
  return (
    <div className="portfolio-home" id="main">
      <div>
        <span className="heading-pry">
          hi {""}
          <img
            src="https://media.tenor.com/nebZyl8oN7IAAAAj/wave-hello.gif"
            width="48px"
          />
        </span>
        <br />
        <span>
          i'm
          <span className="home-name"> roshan Kumar</span>
        </span>
      </div>
      {/* <p className="home-heading">
        Analytical and detail-oriented aspiring Full Stack Developer. Capable of
        writing production-ready code using ReactJS, Redux, and CSS on the
        frontend, NodeJS and Express on the backend to build single page
        applications. Passionate about coding and strongly interested in working
        in a product-based company.
      </p> */}
      <div>
        <img
          className="giflogo"
          src="https://www.bing.com/th/id/OGC.81178b47a8598f0c81c4799f2cdd4057?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f2131993%2fscreenshots%2f4948736%2fthoughtworks-gif_dribbble.gif&ehk=NNfOMQ6dfiA3eWWZAhI73QT3tX1lMjqFSSH4bXYrTAo%3d"
        />
      </div>
      <button className="home-btm">
        <a href="#about">about me</a>
      </button>
    </div>
  );
}

export default Main;
