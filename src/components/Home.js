import React from "react";
import { Link } from "react-router-dom";
import createnew from '../images/createnew.jpeg'
import myquiz from '../images/myquiz.jpg'
import play from '../images/play.jpg'

// array of objects containg card details

const CardDetails = [
  { path: "create-new", text: "Create New Quiz", image: createnew },
  { path: "my-quiz", text: "My Quizes", image: myquiz },
  { path: "play-quiz", text: "Play Quiz", image: play },
];

// this home page will route us to required pages

const Home = () => {
  return (
    <>
    <div className="card-section">
      {CardDetails.map((i,index) => (
        <div className="dflex home-card" key={index}>
          <Link to={i.path} className="home-card-heading">
            <div>
              <h1>{i.text}</h1>
            </div>
          </Link>
          <div className="home-img">
            <img src={i.image} alt="" />
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default Home;
