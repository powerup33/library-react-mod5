import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

export default function Book({ book }) {
  const fullStars = Math.floor(book.rating);
  const hasHalfStar = book.rating % 1 !== 0;

  return (
    <div className="book">
      <a href="">
        <figure className="book__img--wrapper">
          <img src={book.url} alt={book.title} className="book__img" />
        </figure>
      </a>

      <div className="book__title">
        <a href="/" className="book__title--link">
          {book.title}
        </a>
      </div>

      <div className="book__ratings">
        {[...Array(fullStars)].map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} />
        ))}
        {hasHalfStar && <FontAwesomeIcon icon={faStarHalfAlt} />}
      </div>

      <div className="book__price">
        {book.salePrice ? (
          <>
            {/* Only strike-through if there’s a sale */}
            <span className="book__price--normal book__price--line-through">
              ${book.originalPrice.toFixed(2)}
            </span>
            <span className="book__price--discount">
              ${book.salePrice.toFixed(2)}
            </span>
          </>
        ) : (
          <span className="book__price--normal">
            ${book.originalPrice.toFixed(2)}
          </span>
        )}
      </div>
    </div>
  );
}
