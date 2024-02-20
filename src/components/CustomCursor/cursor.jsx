// import React, { useState, useEffect } from "react";

// const CustomCursor = () => {
//   const [position, setPosition] = useState({ clientX: 0, clientY: 0 });

//   const updatePosition = (event) => {
//     const { clientX, clientY } = event;
//     setPosition({ clientX, clientY });
//   };

//   useEffect(() => {
//     document.addEventListener("mousemove", updatePosition, false);
//     return () => {
//       document.removeEventListener("mousemove", updatePosition);
//     };
//   }, []);

//   return (
//     <div
//       className="cursor"
//       style={{
//         left: `${position.clientX}px`,
//         top: `${position.clientY}px`,
//       }}
//     ></div>
//   );
// };

// export default CustomCursor;
