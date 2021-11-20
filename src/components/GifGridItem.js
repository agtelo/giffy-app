import React from "react";

export const GifGridItem = ({ title, url }) => {
  return (
    <div class="card bg-dark text-white animate__animated animate__fadeIn animate__delay-1s">
      <img src={url} class="card-img" alt={title} />
      <div class="card-img-overlay">
        <h5 class="card-title">{title}</h5>
        <p class="card-text"></p>
        <p class="card-text"></p>
      </div>
    </div>
  );
};
