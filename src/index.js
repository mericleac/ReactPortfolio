import React from "react";
import ReactDOM from "react-dom";

import { Title, Paragraph } from './components';

const Index = () => {
  const loremIpsum = `
    Cupcake ipsum dolor sit amet dessert tart toffee. Biscuit icing ice cream lollipop sesame snaps. 
    Jelly soufflé gummies jujubes oat cake sweet roll cupcake. Tootsie roll tart pastry pie. 
    Bear claw carrot cake wafer muffin. Pudding chocolate cake cookie jelly beans. 
    Toffee dessert wafer croissant cupcake sugar plum. Liquorice sweet roll cake cookie halvah. 
    Brownie cake topping jelly liquorice gummies lollipop gummies powder.
  `;
  return (<div>
    <Title text="Hello React!" size={42} />
    <Paragraph text={loremIpsum} />
  </div>);
};

ReactDOM.render(<Index />, document.getElementById("index"));
