import React, {useRef, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { Stage, Layer, RegularPolygon } from "react-konva";


const App = () => {
    const[stroke,setStroke]=useState("black")
    const[strokeWidth,setStrokeWidth]=useState(4)



    const handelMousedOver=()=>{
        setStroke("blue")
        setStrokeWidth(20)
    }

    const handelMousedLeave=()=>{
        setStroke("black")
        setStrokeWidth(4)
    }

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <RegularPolygon
                    x={180}
                    y={200}
                    sides={5}
                    radius={70}
                    fill={"red"}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    draggable
                    onMouseOver={handelMousedOver}
                    onMouseLeave={handelMousedLeave}
                />

            </Layer>
        </Stage>
    );
};

const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


