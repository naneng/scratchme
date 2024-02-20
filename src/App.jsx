import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import greenbg from "./GreenLeavesIIWP.jpeg"

const CanvasSetup = ({ className }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const w = window.innerWidth;
    const h = window.innerHeight;
    const dpi = window.devicePixelRatio;

    canvas.width = w * dpi;
    canvas.height = h * dpi;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

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

    context.rect(0, 0, w, h);
    context.fill();
  }, [className]);

  return canvasRef;
};

const App = () => {
  const canvasInRef = CanvasSetup({ className: "in" });
  const canvasOutRef = CanvasSetup({ className: "out" });
  const [isMouseDown, setIsMouseDown] = useState(false);

  const growCursor = () => {
      // Implement the logic for growing the cursor
      cursor.classList.add("is-down")
  };

  const shrinkCursor = () => {
      // Implement the logic for shrinking the cursor
      cursor.classList.remove("is-down")
  };
    
    const cursor = document.querySelector("div.cursor")

    const moveCursor = function (x, y) {
      cursor.style.left = x + "px"
      cursor.style.top = y + "px"
    }




  const startDraw = (canvas, x, y) => {
      // Implement the logic for starting the drawing
      const context = canvas.getContext("2d")
      context.moveTo(x, y)
      context.beginPath()
  };

  const moveDraw = (canvas, x, y) => {
      // Implement the logic for moving the drawing
      const context = canvas.getContext("2d")
      
      if (isMouseDown) {
          context.lineTo(x, y)
          context.stroke()
    }
  };

  const handleMouseDown = (event) => {
    setIsMouseDown(true);
    growCursor();
    startDraw(canvasInRef.current, event.pageX, event.pageY);
    startDraw(canvasOutRef.current, event.pageX, event.pageY);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    shrinkCursor();
  };

  const handleMouseMove = (event) => {
    moveCursor(event.pageX, event.pageY);
    moveDraw(canvasInRef.current, event.pageX, event.pageY);
    moveDraw(canvasOutRef.current, event.pageX, event.pageY);
  };

  const handleResize = () => {
    CanvasSetup({ canvasRef: canvasInRef, className: "in" });
    CanvasSetup({ canvasRef: canvasOutRef, className: "out" });
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, );

  return (
    <div>
        <section className="scratched-in">
        <div className="pattern"></div>
        <canvas ref={canvasInRef}  className="in"></canvas>
      </section> 

      <section className="scratched-out">
        <div className="lineup">
          <img src={greenbg} alt="green" />
        </div>
        <canvas  ref={canvasOutRef} className="out"></canvas>
      </section>

      <div className="cursor"></div>  

    </div>
  );
};

export default App;
















