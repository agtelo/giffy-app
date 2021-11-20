import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <br />
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-secondary " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <br />
      <h3 className="animate__animated animate__fadeIn animate__delay-1s">
        {" "}
        {category}{" "}
      </h3>

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
