// import React, { useState } from 'react';
// import './ShirtsList.css';


// const ShirtsList = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const shirtsPerPage = 4;

//   const indexOfLastShirt = currentPage * shirtsPerPage;
//   const indexOfFirstShirt = indexOfLastShirt - shirtsPerPage;
//   const currentShirts = shirtsData.slice(indexOfFirstShirt, indexOfLastShirt);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="shirts-list">
//       <h2 >Nuestras Camisas</h2>
//       <div className="shirts-grid">
//         {currentShirts.map((shirt) => (
//           <div key={shirt.id} className="shirt-card">
//             <img src={shirt.image} alt={shirt.name} />
//             <h3>{shirt.name}</h3>
//           </div>
//         ))}
//       </div>
//       <div className="pagination">
//         {[...Array(Math.ceil(shirtsData.length / shirtsPerPage)).keys()].map((number) => (
//           <button key={number} onClick={() => paginate(number + 1)}>
//             {number + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShirtsList;
