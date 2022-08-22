import React from "react";

export default function RenderMisc({ data }) {
    return (
        <ul className="miscContainer">
            {data.map((item, index) => (
                <li key={index}>
                    {item.info ? (
                        <>
                            <span>{item.name}</span>
                            <span>{item.info}</span>
                        </>
                    ) : (
                        <></>
                    )}
                </li>
            ))}
        </ul>
    );
}
