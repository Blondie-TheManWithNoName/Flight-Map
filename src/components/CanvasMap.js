import { useOnDraw } from "./Hooks";
import { CityPoint } from "./CityPoint";
import europeMap from "../assets/europe_map.svg";
import plane from "../assets/plane.svg";
import { useEffect, useRef, useState } from "react";

const CanvasMap = (props) => {
  const size = window.innerHeight * 1;
  const pixelRatio = window.devicePixelRatio;
  const height = size * pixelRatio;
  const width = size * pixelRatio;

  const canvasRef = useRef(null);
  const [clickedPointId, setClickedPointId] = useState(null); // State to track the clicked point ID

  function prcTocanvas(prc) {
    return (prc / 100) * width;
  }
  const points = [
    { id: "BCN", x: prcTocanvas(25.5), y: prcTocanvas(84.9) },
    { id: "MAD", x: prcTocanvas(12.8), y: prcTocanvas(86.3) },
    { id: "CDG", x: prcTocanvas(28.84), y: prcTocanvas(63.96) },
    { id: "FRA", x: prcTocanvas(40.59), y: prcTocanvas(60.44) },
    { id: "MUC", x: prcTocanvas(46.47), y: prcTocanvas(67.02) },
    { id: "AMS", x: prcTocanvas(34.24), y: prcTocanvas(54.67) },
    { id: "OSL", x: prcTocanvas(44.24), y: prcTocanvas(32.45) },
    { id: "ARN", x: prcTocanvas(55.29), y: prcTocanvas(33.39) },
    { id: "DUB", x: prcTocanvas(14.73), y: prcTocanvas(48.32) },
    { id: "MAN", x: prcTocanvas(22.25), y: prcTocanvas(49.5) },
    { id: "LHR", x: prcTocanvas(23.66), y: prcTocanvas(55.26) },
    { id: "ZHR", x: prcTocanvas(40.24), y: prcTocanvas(69.25) },
    { id: "LIS", x: prcTocanvas(0.85), y: prcTocanvas(88.18) },
    { id: "POR", x: prcTocanvas(3.67), y: prcTocanvas(81.83) },
    { id: "WAW", x: prcTocanvas(63.4), y: prcTocanvas(52.56) },
    { id: "KRK", x: prcTocanvas(62.23), y: prcTocanvas(60.44) },
    { id: "PRG", x: prcTocanvas(51.65), y: prcTocanvas(60.91) },
    { id: "VIE", x: prcTocanvas(55.76), y: prcTocanvas(66.08) },
    { id: "VCE", x: prcTocanvas(48.12), y: prcTocanvas(74.31) },
    { id: "BUD", x: prcTocanvas(61.17), y: prcTocanvas(67.49) },
    { id: "OTP", x: prcTocanvas(76.93), y: prcTocanvas(73.6) },
    { id: "BEG", x: prcTocanvas(65.05), y: prcTocanvas(75.49) },
    { id: "SOF", x: prcTocanvas(72.22), y: prcTocanvas(80.31) },
    { id: "BLG", x: prcTocanvas(46.59), y: prcTocanvas(77.37) },
    { id: "FCO", x: prcTocanvas(48.94), y: prcTocanvas(84.89) },
    { id: "ATH", x: prcTocanvas(75.16), y: prcTocanvas(93.12) },
    { id: "CPH", x: prcTocanvas(47.18), y: prcTocanvas(44.56) },
    { id: "TXL", x: prcTocanvas(49.18), y: prcTocanvas(53.15) },
    { id: "HEL", x: prcTocanvas(65.05), y: prcTocanvas(29.04) },
    { id: "RIX", x: prcTocanvas(65.64), y: prcTocanvas(38.45) },
    { id: "VNO", x: prcTocanvas(68.93), y: prcTocanvas(45.03) },
    { id: "KBP", x: prcTocanvas(81.16), y: prcTocanvas(54.91) },
    { id: "KEV", x: prcTocanvas(3.91), y: prcTocanvas(10.82) },
    { id: "PMI", x: prcTocanvas(26.95), y: prcTocanvas(91.01) },
    // Add more points as needed
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Render points
    points.forEach((point) => {
      context.beginPath();
      context.arc(point.x, point.y, 10, 0, 2 * Math.PI);
      context.fillStyle = "red";
      context.fill();

      context.font = "30px Arial";
      context.textAlign = "center";
      context.fillText(point.id, point.x, point.y + 35);
    });
  }, [points]);

  const handleCanvasClick = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Check if the click is within any of the points
    points.forEach((point) => {
      const distance = Math.sqrt((point.x - x) ** 2 + (point.y - y) ** 2);
      if (distance <= 5) {
        // Assuming the points have a radius of 5 for clicking
        setClickedPointId(point.id); // Set the clicked point ID
        console.log(`Point ${point.id} clicked`);
        // You can perform other actions here, such as updating game state, etc.
      }
    });
  };

  return (
    <>
      {/* <CityPoint id="BCN" y={84.9} x={25.5}></CityPoint>
      <CityPoint {id="MAD", x:prcTocanvas(12.8 ), y:prcTocanvas(86.3) }</CityPoint>
      <CityPoint {id="CDG", x:prcTocanvas(28.84), y:prcTocanvas(63.96)} ></CityPoint>
      <CityPoint {id="FRA", x:prcTocanvas(40.59), y:prcTocanvas(60.44)} ></CityPoint>
      <CityPoint {id="MUC", x:prcTocanvas(46.47), y:prcTocanvas(67.02)} ></CityPoint>
      <CityPoint {id="AMS", x:prcTocanvas(34.24), y:prcTocanvas(54.67)} ></CityPoint>
      <CityPoint {id="OSL", x:prcTocanvas(44.24), y:prcTocanvas(32.45)} ></CityPoint>
      <CityPoint {id="ARN", x:prcTocanvas(55.29), y:prcTocanvas(33.39)} ></CityPoint>
      <CityPoint {id="DUB", x:prcTocanvas(14.73), y:prcTocanvas(48.32)} ></CityPoint>
      <CityPoint {id="MAN", x:prcTocanvas(22.25), y:prcTocanvas(49.5})} ></CityPoint>
      <CityPoint {id="LHR", x:prcTocanvas(23.66), y:prcTocanvas(55.26)} ></CityPoint>
      <CityPoint {id="ZHR", x:prcTocanvas(40.24), y:prcTocanvas(69.25)} ></CityPoint>
      <CityPoint {id="LIS", x:prcTocanvas(0.85 ), y:prcTocanvas(88.18)} </CityPoint>
      <CityPoint {id="POR", x:prcTocanvas(3.67 ), y:prcTocanvas(81.83)} </CityPoint>
      <CityPoint {id="WAW", x:prcTocanvas(63.4 ), y:prcTocanvas(52.56)} </CityPoint>
      <CityPoint {id="KRK", x:prcTocanvas(62.23), y:prcTocanvas(60.44)} ></CityPoint>
      <CityPoint {id="PRG", x:prcTocanvas(51.65), y:prcTocanvas(60.91)} ></CityPoint>
      <CityPoint {id="VIE", x:prcTocanvas(55.76), y:prcTocanvas(66.08)} ></CityPoint>
      <CityPoint {id="VCE", x:prcTocanvas(48.12), y:prcTocanvas(74.31)} ></CityPoint>
      <CityPoint {id="BUD", x:prcTocanvas(61.17), y:prcTocanvas(67.49)} ></CityPoint>
      <CityPoint {id="OTP", x:prcTocanvas(76.93), y:prcTocanvas(73.6})} ></CityPoint>
      <CityPoint {id="BEG", x:prcTocanvas(65.05), y:prcTocanvas(75.49)} ></CityPoint>
      <CityPoint {id="SOF", x:prcTocanvas(72.22), y:prcTocanvas(80.31)} ></CityPoint>
      <CityPoint {id="BLG", x:prcTocanvas(46.59), y:prcTocanvas(77.37)} ></CityPoint>
      <CityPoint {id="FCO", x:prcTocanvas(48.94), y:prcTocanvas(84.89)} ></CityPoint>
      <CityPoint {id="ATH", x:prcTocanvas(75.16), y:prcTocanvas(93.12)} ></CityPoint>
      <CityPoint {id="CPH", x:prcTocanvas(47.18), y:prcTocanvas(44.56)} ></CityPoint>
      <CityPoint {id="TXL", x:prcTocanvas(49.18), y:prcTocanvas(53.15)} ></CityPoint>
      <CityPoint {id="HEL", x:prcTocanvas(65.05), y:prcTocanvas(29.04)} ></CityPoint>
      <CityPoint {id="RIX", x:prcTocanvas(65.64), y:prcTocanvas(38.45)} ></CityPoint>
      <CityPoint {id="VNO", x:prcTocanvas(68.93), y:prcTocanvas(45.03)} ></CityPoint>
      <CityPoint {id="KBP", x:prcTocanvas(81.16), y:prcTocanvas(54.91)} ></CityPoint>
      <CityPoint {id="KEV", x:prcTocanvas(3.91 ), y:prcTocanvas(10.82)} </CityPoint>
      <CityPoint {id="PMI", x:prcTocanvas(26.95), y:prcTocanvas(91.01)} ></CityPoint> */}
      }{/* <CityPoint id="LGW" y={56.67} x={24.72}></CityPoint> */}
      {/* <CityPoint id="STN" y={55.26} x={25.43}></CityPoint> */}
      {/* <CityPoint id="ORY" y={65.26} x={29.78}></CityPoint> */}
      <canvas
        width={width}
        height={height}
        ref={canvasRef}
        className="canvas"
        style={{ width: size, height: size }}
      ></canvas>
    </>
  );
};

export default CanvasMap;
