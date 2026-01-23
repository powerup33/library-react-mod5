import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

export default function Book({ book }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="book">
      {!imageLoaded ? (
        <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      ) : (
        <>
          <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img
                src={book.url}
                alt={book.title}
                className="book__img"
                onLoad={() => setImageLoaded(true)}
              />
            </figure>
          </Link>

          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>

          <Rating rating={book.rating} />
          <Price
            originalPrice={book.originalPrice}
            salePrice={book.salePrice}
          />
        </>
      )}

      {/* Hidden image to trigger loading */}
      {!imageLoaded && (
        <img
          src={book.url}
          alt=""
          style={{ display: "none" }}
          onLoad={() => setImageLoaded(true)}
        />
      )}
    </div>
  );
}
