import React from "react";
import { CommonContext } from "./CommonContext";

function UpdateButton() {

    return (
        <>
            <CommonContext.Consumer>
                {({ updateColor }) =>
                <div style={{marginLeft:500}}>
                    <button
                        onClick={() => updateColor("yellow")}>
                        Update color</button>
                        <button
                        onClick={() => updateColor("blue")}>
                        Update color</button>
                        </div>
                }
            </CommonContext.Consumer>
        </>
    );
}


export default UpdateButton;
