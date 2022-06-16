import React from "react";
import './Card.css';

const Card = ({ className, children }) => {
  return (
    <div className={`card ${className}`}>{children}</div>
  );
}
 
export default Card;

/**
 *     // <div className={`card ${className}`}>
    {children}
    // </div>

    const Card = ({ className, children }) => {
  return (
    <>
      {children}
    </>
  );
}


    <img src={post.url} alt="get alt from api?" />
 */