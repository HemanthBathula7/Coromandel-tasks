import React from 'react'
import Products from "../Components/Products";
import backImage from "../assets/back.jpg";
import ContactSection from '../Components/ContactSection';
import TeamMembers from '../Components/TeamMembers';
import member1 from "../assets/j.jpg";
import member2 from "../assets/a.jpg";
import member3 from "../assets/jenn.jpg";
import member4 from "../assets/alex.jpg";
import member5 from "../assets/water.jpg";
import member6 from "../assets/m.jpg";
import member7 from "../assets/green.jpg";
import member8 from "../assets/mila.jpg";

import AboutHero from "../Components/AboutHero";

const productsData = [
    {
        id : "01",
        title : "What we do",
        description : "We create fresh breads and pastries daily."
    },
    {
        id: "02",
        title: "Professionals",
        description: "Our bakers have years of experience."
    },
    {
          id: "03",
          title: "Delicious Breads",
          description: "Crafted with premium ingredients."
    },
    {
          id: "04",
          title: "Our History",
          description: "Serving customers with passion."
    }
  ]
const traditionsData = [
  {
    title: "Freshest baked treats",
    description:
      "Every item is baked fresh each morning using traditional techniques."
  },
  {
    title: "Bread Difference",
    description:
      "Slow fermentation creates better flavor and texture."
  },
  {
    title: "Carefully sourced ingredients",
    description:
      "We select only high-quality ingredients from trusted suppliers."
  }
];

const members = [
  {
    image: member1,
    name: "Jeffrey Brown",
    role: "Owner"
  },
  {
    image: member2,
    name: "Ann Richmond",
    role: "Partner"
  },
  {
    image: member3,
    name: "Jennie Roberts",
    role: "Manager"
  },
  {
    image: member4,
    name: "Alex Greenfield",
    role: "Partner"
  },
  {
    image: member5,
    name: "Walter Lilly",
    role: "Partner"
  },
  {
    image: member6,
    name: "Monica Pouliot",
    role: "Associate Partner"
  },
  {
    image: member7,
    name: "Alex Green",
    role: "Associate Partner"
  },
  {
    image: member8,
    name: "Mila Parker",
    role: "Partner"
  }
];

function Team() {
  return (
    <>
    <Products 
      backgroundImage={backImage}
      products={productsData}
      traditionsTitle="Our Traditions"
      traditions={traditionsData}
      buttonText="VIEW PRODUCTS"
    />
    <TeamMembers 
        members={members}
    />
    <AboutHero
      className = "abtBg"
      heading="Roll, proof, and bake. Every day."
      description="We know that offering products with the highest quality is the most important thing to get customers to trust you."
      primaryButton="SEE FULL MENU"
      secondaryButton="ORDER NOW"
    />
    
    <ContactSection />
    </>
  )
}

export default Team;