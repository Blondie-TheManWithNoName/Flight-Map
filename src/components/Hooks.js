// import { useRef } from "react";

// export function useOnDraw(draw, pixelRatio) {
//   const canvasRef = useRef(null);

//   function setCanvasRef(ref) {
//     if (!ref) return;
//     canvasRef.current = ref;
//     initMouseMove();
//   }

//   function initMouseMove() {
//     var ctx = canvasRef.current.getContext("2d");
//     ctx.scale(pixelRatio, pixelRatio);
//     const mouseMoveListener = (e) => {
//       const point = getCanvasCoord(e.clientX, e.clientY);

//       draw(ctx, point);
//       //   console.log(
//       //     "top: " +  + "- citySize + '%',",
//       //     "left: " + Math.round(point.x * 100) / 100 + "- citySize + '%'"
//       //   );

//       //   console.log(
//       //     "<CityPoint x={" +
//       //       Math.round(point.y * 100) / 100 +
//       //       "} y={" +
//       //       Math.round(point.x * 100) / 100 +
//       //       "}></CityPoint>"
//       //   );
//     };
//     window.addEventListener("click", mouseMoveListener);
//   }

//   function getCanvasCoord(clientX, clientY) {
//     if (canvasRef.current) {
//       const cRect = canvasRef.current.getBoundingClientRect();
//       return {
//         x: clientX - cRect.left, // / bound.width) * 100,
//         y: clientY - cRect.top, /// bound.height) * 100,
//       };
//     } else return null;
//   }

//   return setCanvasRef;
// }
