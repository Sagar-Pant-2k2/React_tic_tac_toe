import React, { useContext, useRef, useEffect } from "react";

import Input from "./Input";
export default () => {
    
    return (
        <div className="turn-status">
            <Input type="X" />
            <Input type="O" />
        </div>
    );
}
