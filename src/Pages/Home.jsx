import Hero from "../Components/Hero"
import Breadsection from "../Components/Breadsection";
import Gallery from "../Components/Gallery";
import Products from "../Components/Products";
import Quality from "../Components/Quality";
import Fresh from "../Components/Fresh";
import ContactSection from "../Components/ContactSection";
import FeatureSection from "../Components/FeatureSection";
import image4 from '../assets/4.jpg';
import backImage from '../assets/back.jpg';

const productsData = [
    {
        id : "01",
        title : "Bread",
        description : "Freshly baked every morning using premium flour and natural ingredients. Soft on the inside with a golden crust, perfect for breakfast and sandwiches."
    },
    {
        id : "02",
        title : "Baguette",
        description : "A classic French bread with a crispy crust and light, airy texture. Ideal for soups, garlic bread, and gourmet sandwiches."
    },
    {
        id : "03",
        title : "Mini pizza",
        description : "Small-sized pizzas topped with rich tomato sauce, melted cheese, and fresh ingredients. A quick and delicious snack for any time of the day."
    },
    {
        id : "04",
        title : "Scone",
        description : "A buttery baked treat with a tender crumb and slightly crisp exterior. Perfect when served with jam, cream, or a hot cup of coffee."
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

function Home() {
  return (
    <>
    <Hero topText="Fresh breads, cakes and pastries"
          heading="Handmade with love and baked fresh every day."
          address="254 W 27ST ST, Kakinada, AP 533001"
          phone="+91 9876543210"
          timings1="Monday - Wednesday 9am - 7pm"
          timings2="Thursday - Saturday 9am - 8pm"
          timings3="Sunday 9am"
          buttonText="VIEW PRODUCTS"/>
    <Products 
      backgroundImage={backImage}
      products={productsData}
      traditionsTitle="Our Traditions"
      traditions={traditionsData}
      buttonText="VIEW PRODUCTS"
      />
    <Breadsection />
    <Gallery />
    <Quality />
    <Fresh
            topText="Fresh baked breads"
            heading="Baked fresh daily by bakers with passion"
            description="Every loaf is carefully handcrafted by our skilled bakers using traditional methods and premium ingredients."
            items={[
              "Tasty, fresh bread baked daily",
              "We bake real, clean-label bread"
            ]}
            buttonText="VIEW PRODUCTS"
            image={image4}
      />
    <FeatureSection />
    <ContactSection />
    </>
  );
}

export default Home;