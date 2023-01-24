import React from "react";

function Card(Hello) {

  return <div className="cards">
    <div className="card1">
      <div className="card">
        <img src={Hello.img1src} alt="mypic" className="card__img" />
        <div className="card__info">
          <span className="card__category">{Hello.name} </span>
          <h3 className="card__title">{Hello.title} </h3>
          <a href="" target="_blank">
            <button>Watch Now  </button>
            
          </a>
        </div>
      </div>
    </div>
  </div>
}
export default Card;