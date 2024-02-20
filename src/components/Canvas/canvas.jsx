import React, { useEffect } from "react";

const Canvas = ({ canvasRef, className }) => {
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        const w = window.innerWidth;
        const h = window.innerHeight;
        const dpi = window.devicePixelRatio;

        canvas.width = w * dpi;
        canvas.height = h * dpi;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`
            
        context.scale(dpi, dpi);
        
        if (className === "in") {
            context.fillStyle = "#000000";
            context.strokeStyle = "#ffffff";
            
        } else {
            context.fillStyle = "#ffffff";
            context.strokeStyle = "#000000";
        }

        context.lineWidth = 80;
        context.lineCap = "round";
        context.lineJoin = "round";

        context.shadowBlur = 10;
        context.shadowColor = context.strokeStyle;

        context.react(0, 0, w, h);
        context.fill();
        
    })

    return <canvas className={className}></canvas>;
};

export default Canvas;




// const Canvas = ({ className, fillColor, strokeColor }) => {
//   useEffect(() => {
//     const canvas = document.querySelector(`canvas.${className}`);
//     const context = canvas.getContext("2d");
//     const w = window.innerWidth;
//     const h = window.innerHeight;
//     const dpi = window.devicePixelRatio;

//     canvas.width = w * dpi;
//     canvas.height = h * dpi;
//     canvas.style.width = `${w}px`;
//     canvas.style.height = `${h}px`;
//     context.scale(dpi, dpi);

//     context.fillStyle = fillColor;
//     context.strokeStyle = strokeColor;
//     Additional setup for line width, line cap, etc.

//     Event listeners for drawing on the canvas
    
      

      

//     return () => {
//       // Cleanup if needed
//     };
//   }, [className, fillColor, strokeColor]);

//   return <canvas className={className}></canvas>;
// };