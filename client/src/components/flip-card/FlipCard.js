import React, { useState } from "react";
import "./FlipCard.scss";

import cn from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";

const FlipCard = ({ card }) => {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    if (card.variant === "click") {
      setShowBack(!showBack);
    }
  }

  // function handleFocus() {
  //   if (card.variant === "focus") {
  //     setShowBack(true);
  //   }
  // }

  // function handleBlur() {
  //   if (card.variant === "focus") {
  //     setShowBack(false);
  //   }
  // }

  return (
    <div className="flip-card-outer" onClick={handleClick}>
      <div
        className={cn("flip-card-inner", {
          showBack,
          // "hover-trigger": card.variant === "hover",
        })}
      >
        <div className="card front">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text fs-1 fw-bold">{card.front}</p>
          </div>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text fs-1 fw-bold">{card.back}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
