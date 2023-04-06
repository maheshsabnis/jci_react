import { useState, useEffect } from "react";

const MouseMoveComponent=()=>{
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);

    const getMousePosition=(evt)=>{
        setX(evt.clientX);
        setY(evt.clientY);
        console.log(`X- ${x} and Y - ${y}`);
    };
    useEffect(()=>{
        // Code to be executed after the first rendering 
        // Register the Global Event
        window.addEventListener('mousemove', getMousePosition);
        return()=>{
            // Code to be executed for component unmounting
            // Release the global event
            window.removeEventListener('mousemove', getMousePosition);
        }
    });
    return(
        <div className="container">
            <strong>
                X: Position {x} &&&& Y: Postion {y}
            </strong>
        </div>
    );
};

export default MouseMoveComponent;