import React, { useState } from "react";
import { styles } from "../theme/styles";
import {
  Line,
  Resize,
  Triangle,
  Rectangle,
  Circle,
  Brush,
  Pencil,
  Plus,
  Minus,
  Eraser,
  Reset,
  Download,
} from "../theme/svg";
import ColourPicker from "./ColourPicker";
import { download } from "./download";

export default function Swatch({
  toolType,
  setToolType,
  width,
  setWidth,
  setElements,
  setColorWidth,
  setPath,
  colorWidth,
  setShapeWidth,
}) {
  const [displayStroke, setDisplayStroke] = useState(false);

  const handleClickStroke = () => {
    setDisplayStroke(!displayStroke);
    setColorWidth(colorWidth);
  };

  const increaseWidth = () => {
    if (toolType === "brush" || toolType === "eraser") {
      if (width < 30) setWidth((prev) => prev + 5);
    }
    if (toolType === "pencil") {
      if (width < 15) setWidth((prev) => prev + 3);
    }
    if (toolType === ("triangle" || "rectangle" || "circle")) {
      if (width < 15) setShapeWidth((prev) => prev + 3);
    }
  };
  const decreaseWidth = () => {
    if (toolType === "brush" || toolType === "eraser") {
      if (width > 1) setWidth((prev) => prev - 5);
    }
    if (toolType === "pencil") {
      if (width > 1) setWidth((prev) => prev - 3);
    }
    if (toolType === ("triangle" || "rectangle" || "circle")) {
      if (width > 1) setShapeWidth((prev) => prev - 3);
    }
  };
  return (
    <div>
      <div className="row">
        <div
          className="col-md-1 icon-bar"
          style={{
            position: "absolute",
            backgroundColor: "#f0f0f0",
            height: `${window.innerHeight * 0.09 * 8}px`,
            width: `${window.innerWidth * 0.073 * 0.8}px`,
            left: "22px",
            top: `${
              (window.innerHeight - window.innerHeight * 0.09 * 8) / 2
            }px`,
            borderRadius: "10px",
          }}
        >
          <button
            id="selection"
            data-toggle="tooltip"
            data-placement="top"
            title="Selection"
            style={styles.righticons}
            onClick={() => {
              setToolType("selection");
              setShapeWidth(1);
            }}
          >
            <Resize toolType={toolType} colorWidth={colorWidth} />
          </button>
          <button
            id="line"
            data-toggle="tooltip"
            data-placement="top"
            title="Line"
            style={styles.righticons}
            onClick={() => {
              setToolType("line");
              setWidth(1);
              setShapeWidth(1);
            }}
          >
            <Line toolType={toolType} colorWidth={colorWidth} />
          </button>

          <button
            id="rectangle"
            data-toggle="tooltip"
            data-placement="top"
            title="Rectangle"
            style={styles.righticons}
            onClick={() => {
              setToolType("rectangle");
              setWidth(1);
              setShapeWidth(1);
            }}
          >
            <Rectangle toolType={toolType} colorWidth={colorWidth} />
          </button>

          <button
            id="circle"
            data-toggle="tooltip"
            data-placement="top"
            title="Circle"
            style={styles.righticons}
            onClick={() => {
              setToolType("circle");
              setWidth(1);
              setShapeWidth(1);
            }}
          >
            <Circle toolType={toolType} colorWidth={colorWidth} />
          </button>

          <button
            id="triangle"
            data-toggle="tooltip"
            data-placement="top"
            title="Triangle"
            style={styles.righticons}
            onClick={() => {
              setToolType("triangle");
              setWidth(1);
              setShapeWidth(1);
            }}
          >
            <Triangle toolType={toolType} colorWidth={colorWidth} />
          </button>

          <button
            id="pencil"
            data-toggle="tooltip"
            data-placement="top"
            title="Pencil"
            style={styles.righticons}
            onClick={() => {
              setToolType("pencil");
              setWidth(1);
              setShapeWidth(1);
            }}
          >
            <Pencil toolType={toolType} colorWidth={colorWidth} />
          </button>

          <button
            id="brush"
            data-toggle="tooltip"
            data-placement="top"
            title="Brush"
            style={styles.righticons}
            onClick={() => {
              setToolType("brush");
              setWidth(10);
              setShapeWidth(1);
            }}
          >
            <Brush toolType={toolType} colorWidth={colorWidth} />
          </button>

          <button
            id="eraser"
            data-toggle="tooltip"
            data-placement="top"
            title="Eraser"
            style={styles.righticons}
            onClick={() => {
              setToolType("eraser");
              setWidth(10);
              setShapeWidth(1);
            }}
          >
            <Eraser toolType={toolType} colorWidth={colorWidth} />
          </button>
        </div>

        <div className="col-md-11">
          <div
            className="row icon-vbar"
            style={{
              position: "absolute",
              backgroundColor: "#f0f0f0",
              width:
                window.innerWidth <= 1024
                  ? `${window.innerWidth * 0.073 * 5.6}px`
                  : `${window.innerWidth * 0.073 * 4.99}px`,
              height: `${window.innerHeight * 0.11}px`,
              right: `${
                (window.innerWidth - window.innerWidth * 0.073 * 4.8) / 20
              }px`,
              top: "18px",
              borderRadius: "10px",
            }}
          >
            <button
              style={styles.topicons}
              data-toggle="tooltip"
              data-placement="top"
              title="Clear"
              onClick={() => {
                setElements([]);
                setPath([]);
                return;
              }}
            >
              <Reset />
            </button>
            <button
              style={styles.topicons}
              data-toggle="tooltip"
              data-placement="top"
              title="Download"
              onClick={download}
            >
               <Download />
            </button>
            <div>
              <button
                style={styles.picker}
                onClick={handleClickStroke}
              ></button>
            </div>
            <button
              style={styles.topicons}
              onClick={increaseWidth}
              data-toggle="tooltip"
              data-placement="top"
              title="Increase Width"
            >
              <Plus />
            </button>
            <button
              style={styles.topicons}
              onClick={decreaseWidth}
              data-toggle="tooltip"
              data-placement="top"
              title="Decrease Width"
            >
              <Minus />
            </button>
          </div>
          <div
            className="row"
            style={{ position: "absolute", right: "0px", top: "0px" }}
          >
            {displayStroke && (
              <div className="col-md-3">
                <ColourPicker setColorWidth={setColorWidth} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
