import React from "react";

export const MyButton = ({abc, axy, onClick}: any) => {
    return <div>
        {abc} is the most wonderful {axy}
        <button className='abc' data-testid="theButton" onClick={onClick}>Click</button>
    </div>
}

