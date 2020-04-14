import React from "react";

const Paragraph = ({ text, size }) => (<p style={{ fontSize: `${size || 2.5}rem` }}>{text}</p>);

export default Paragraph;
export { Paragraph };
