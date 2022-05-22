import React from "react";
import { Link } from "react-router-dom";

const MainScreenBody = () => {
  const BoxDetail = [
    {
      logo: "https://mlgxvvy1ozpv.i.optimole.com/Evr-b5g-8NSAIby8/w:195/h:195/q:auto/https://nedjamiat.org/wp-content/uploads/2021/06/WhatsApp-Image-2021-06-13-at-02.57.42-1.jpeg",
      title: "Notes and Past Paper",
      paragraph:
        "Click here and get access to compiled notes and past papers according to courses in each semester of different Departments",
      link: "/notes",
    },
    {
      logo: "https://mlgxvvy1ozpv.i.optimole.com/Evr-b5g-UVztkl-2/w:195/h:195/q:auto/https://nedjamiat.org/wp-content/uploads/2021/06/WhatsApp-Image-2021-06-13-at-02.57.42.jpeg",
      title: "E-BOOKS",
      paragraph: "Search the book you need from E-Library.",
      link: "/E-book",
    },
    {
      logo: "https://mlgxvvy1ozpv.i.optimole.com/Evr-b5g-UGts1kio/w:195/h:195/q:auto/https://nedjamiat.org/wp-content/uploads/2021/06/WhatsApp-Image-2021-06-13-at-02.57.43.jpeg",
      title: " SOFTWARES",
      paragraph: "Coming Soon!",
      link: "/",
    },
  ];
  return (
    <section className="section-main">
      <div className="MainScreenBody-container">
        {BoxDetail.map((item, index) => {
          return (
            <Box
              key={index}
              logo={item.logo}
              title={item.title}
              paragraph={item.paragraph}
              link={item.link}
            />
          );
        })}
      </div>
    </section>
  );
};

const Box = (props) => {
  return (
    <>
      <div className="Box-main">
        <img className="Box-image" src={props.logo} />
        <h1 className="Box-heading">{props.title}</h1>
        <p className="Box-paragraph">{props.paragraph}</p>
        {/* <button className="link link-two shrink-on-hover">click me</button> */}
        <Link
          className="link link-two shrink-on-hover"
          to={props.link}
          state={{ from: "notes and pastpaer" }}
        >
          click me
        </Link>
      </div>
    </>
  );
};

export default MainScreenBody;
