import * as React from "react";
interface Zoo {
        x:number;
}

export function Z(props:Zoo) {
        return <i>{2 * props.x}</i>;
}
