import React from "react";
import ReactDOM from "react-dom";

import { NavBar, Title, Paragraph, ProjectCard } from './components';

const Index = () => {
  const loremIpsum = `
    Cupcake ipsum dolor sit amet dessert tart toffee. Biscuit icing ice cream lollipop sesame snaps. 
    Jelly soufflé gummies jujubes oat cake sweet roll cupcake. Tootsie roll tart pastry pie. 
    Bear claw carrot cake wafer muffin. Pudding chocolate cake cookie jelly beans. 
    Toffee dessert wafer croissant cupcake sugar plum. Liquorice sweet roll cake cookie halvah. 
    Brownie cake topping jelly liquorice gummies lollipop gummies powder.
  `;

  const routes = [
    { href: '/home', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/skills', label: 'About Me' }
  ];

  const projectCard = {
    image: {
      src: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "cat"
    },
    title: "Cat",
    description: `
      Cat ipsum dolor sit amet, make muffins prance along on top of the garden fence, 
      annoy the neighbor's dog and make it bark man running from cops stops to pet cats, goes to jail. 
      You have cat to be kitten me right meow scratch the postman wake up lick paw wake up owner meow meow 
      so damn that dog but murder hooman toes this is the day. Hide from vacuum cleaner caticus cuteicus. 
      Stand in front of the computer screen. Meow the fat cat sat on the mat bat away with paws and intrigued 
      by the shower making sure that fluff gets into the owner's eyes fall over dead (not really but gets 
      sypathy) put toy mouse in food bowl run out of litter box at full speed.
    `
  };

  return (<div>
    <NavBar routes={routes} />
    <Title text="Hello React!" size={42} />
    <Paragraph text={loremIpsum} />
    <ProjectCard {...projectCard} />
  </div>);
};

ReactDOM.render(<Index />, document.getElementById("index"));
