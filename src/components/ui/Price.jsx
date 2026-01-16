import React from 'react'

export default function Price({ originalPrice, salePrice }) {
  return (
    <div className="book__price">
      {salePrice ? (
        <>
          <span className="book__price--normal book__price--line-through">
            ${originalPrice.toFixed(2)}
          </span>
          <span className="book__price--discount">
            ${salePrice.toFixed(2)}
          </span>
        </>
      ) : (
        <span className="book__price--normal">
          ${originalPrice.toFixed(2)}
        </span>
      )}
    </div>
  )
}


//      <div className="book__price">
//         {book.salePrice ? (
//           <>
//             {/* Only strike-through if there’s a sale */}
//             <span className="book__price--normal book__price--line-through">
//               ${book.originalPrice.toFixed(2)}
//             </span>
//             <span className="book__price--discount">
//               ${book.salePrice.toFixed(2)}
//             </span>
//           </>
//         ) : (
//           <span className="book__price--normal">
//             ${book.originalPrice.toFixed(2)}
//           </span>
//         )}
//       </div> */}