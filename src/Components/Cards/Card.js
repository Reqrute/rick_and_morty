import React from "react";
import { useAuth } from "../../Constants/use-auth";
import { useDispatch } from "react-redux";
import { addFavoriteCard, removeFavoriteCard } from "../../store/slices/userSlice";
import './Cards.css'

const Card = ({result}) => {
  let display;
  const dispatch = useDispatch();
  const {isAuth, favorite} = useAuth();
  let mySet = new Set(favorite)
 
  if (result) {
    display = result.map((x) => {
      let { id, image, name, status, location, gender , species, origin } = x;

      return (
         <div
          style={{ textDecoration: "none", cursor: "pointer" }}
          to={`${id}`}
          key={id}
          className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
<div className="modal fade" id= {`CardModal${id}`} data-bs-backdrop="static" tabIndex="-1" aria-labelledby="CardModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div
      style={{ background: " rgb(225, 225, 221)"}}
     className="modal-content justify-content-center text-center">
      <div className="modal-header">
        <h5 className="modal-title" id="CardModalLabel">{name}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body ">
        <img className="image img-fluid "  src={image} alt="" />

          <div className="content">
          { status === "Dead" ? (<div style= {{width: "300px"}} className="badge bg-danger fs-5">{status}</div>):
          (status === "Alive" ? (<div style= {{width: "300px"}} className="badge bg-success fs-5">{status}</div>):
          (
            <div style= {{width: "300px"}} className="badge bg-secondary fs-5">{status}</div>
          )) 
            } 

          {isAuth && ( mySet.has(id) ? (
            <button 
            style= {{width: "300px"}} 
            className=" btn badge btn-warning fs-5 m-2" 
            disabled
            >Add to favorite </button>  ) : (
            <button 
            style= {{width: "300px"}} 
            className="badge bg-warning fs-5 m-2"
            onClick={() => {dispatch(addFavoriteCard({
            id: id,
           }))}}
            >Add to favorite</button>
          ))}
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
            className={`cards d-flex flex-column justify-content-center carda`}
            data-bs-toggle="modal" 
          data-bs-target={`#CardModal${id}`}
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
                <div className="fs-5">{location?.name}</div>
              </div>
            </div>
          </div>

           {isAuth && ( mySet.has(id) ? (
            <button className={`position-absolute badgec badge btn btn-warning`}
            onClick={() => {dispatch(removeFavoriteCard({
            id: id,
           }))}}
            >
              <img className="image imga img-fluid " src=" https://www.flaticon.com/svg/vstatic/svg/3916/3916581.svg?token=exp=1655471894~hmac=4924cb542679cd77bd7207b558202a7e" alt = ""/>
            </button>
           ) : (   
            <button className={`position-absolute badgec badge btn btn-warning`}
            onClick={() => {dispatch(addFavoriteCard({
            id: id,
           }))}}
            >
              <img className="image imga img-fluid " src="https://www.flaticon.com/svg/vstatic/svg/3916/3916582.svg?token=exp=1655471894~hmac=5fd529581f3f4ac1fc29d5ba4599099a" alt = ""/>
            </button>))}

          {(() => {
            if (status === "Dead" && isAuth) {
              return (
                <div
                  className=" badgef position-absolute badge bg-danger"
                >
                  {status}
                </div>
              );
            } else if (status === "Dead" && !isAuth){
              return (
                <div
                  className=" badgec position-absolute badge bg-danger"
                >
                  {status}
                </div>
              );
            }
             if (status === "Alive" && isAuth) {
              return (
                <div
                  className="badgef position-absolute badge bg-success"
                >
                  {status}
                </div>
              );
            } else if(status === "Alive" && !isAuth) {
              return (
                <div
                  className="badgec position-absolute badge bg-success"
                >
                  {status}
                </div>
              );
            }
            if (status === "unknown" && isAuth) {
              return (
                <div
                  className="badgef position-absolute badge bg-secondary"
                >
                  {status}
                </div>
              );
            } else if(status === "unknown" && !isAuth){
              return (
                <div
                  className="badgec position-absolute badge bg-secondary"
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
    display = <div style={{color : "white"}} >No Characters Found :/</div>;
  }

  return <>{display}</>;
};

export default Card;