import React from "react";
import './Cards.css'

const Card = ({result}) => {
  let display;

  if (result) {
    display = result.map((x) => {
      let { id, image, name, status, location, gender , species, origin } = x;

      return (
         <div
          style={{ textDecoration: "none", cursor: "pointer" }}
          to={`${id}`}
          key={id}
          className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
          data-bs-toggle="modal" 
          data-bs-target={`#CardModal${id}`}
        >
<div className="modal fade" id= {`CardModal${id}`} tabIndex="-1" aria-labelledby="CardModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content justify-content-center text-center">
      <div className="modal-header">
        <h5 className="modal-title" id="CardModalLabel">{name}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body ">
        <img className="image img-fluid "  src={image} alt="" />

          <div className="content">
         {(() => {
            if (status === "Dead") {
              return <div style= {{width: "300px"}} className="badge bg-danger fs-5">{status}</div>;
            } else if (status === "Alive") {
              return <div style= {{width: "300px"}} className="badge bg-success fs-5">{status}</div>;
            } else {
              return <div style= {{width: "300px"}} className="badge bg-secondary fs-5">{status}</div>;
            }
          })()}
            <div className="fs-6 fw-normal">
              <span className="fw-bold">Gender : </span>
              {gender}
            </div>
            <div className="">
              <span className="fw-bold">Location: </span>
              {location?.name}
            </div>
            <div className="">
              <span className="fw-bold">Origin: </span>
              {origin?.name}
            </div>
            <div className="">
              <span className="fw-bold">Species: </span>
              {species}
            </div> 
          </div> 
      </div>
    </div>
  </div>
</div>
        
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