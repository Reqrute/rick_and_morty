import React from "react";
import CardsModal from "./CardsModal";
import './Cards.css'

const Card = ({result}) => {
  let display;

  if (result) {
    display = result.map((x) => {
      let { id, image, name, status, location, gender , species } = x;

      return (
         <div
          style={{ textDecoration: "none" }}
          //to={`${page}${id}`}
          key={id}
          className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
        
          <div
            className={`cards d-flex flex-column justify-content-center`}
          >
         
            <img className={`img img-fluid`} src={image} alt="" />
            <div className={`content`}>
              <div className="fs-5 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6 fw-normal">Gender</div>
                <div className="fs-5">{gender}</div>
                <div className="fs-6 fw-normal">Species</div>
                <div className="fs-5">{species}</div>
                <div className="fs-6 fw-normal">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
            <CardsModal id={id}/>
          </div>
 
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`badgec position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`badgec position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`badgec position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
          
        </div>
      
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};

export default Card;