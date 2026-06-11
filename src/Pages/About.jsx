import AboutHero from "../Components/AboutHero";
import AboutStory from "../Components/AboutStory";
import ContactSection from "../Components/ContactSection";
import Fresh from "../Components/Fresh";
import Hero from "../Components/Hero";
import cakeImage from '../assets/e-min.jpg';
import logo from '../assets/logo.png';

function About() {
    return(
        <>
        <AboutHero 
            image={logo}
            heading="We make homemade breads and cakes"
            description="Every day, our bakers prepare freshly baked breads, cakes, pastries, and sweet treats using premium ingredients and time-tested recipes."
            primaryButton="ABOUT US"
            secondaryButton="ALL PRODUCTS"
        />
        <AboutStory />
        <Hero 
            topText="About Us"
            heading="Flour, water, yeast, salt…"
            description="
                            For over a decade, our bakery has been crafting fresh breads, 
                            pastries, and cakes using simple ingredients and traditional baking methods. 
                            We believe that great baking begins with quality ingredients, patience, 
                            and a genuine love for the craft."
            buttonText="LEARN MORE"
            classNameNew="aboutHero"
        />
        <Fresh
            topText="Fresh baked breads"
            heading="Baked fresh daily by bakers with passion"
            description="Every loaf is carefully handcrafted by our skilled bakers using traditional methods and premium ingredients."
            items={[
              "Tasty, fresh bread baked daily",
              "We bake real, clean-label bread"
            ]}
            buttonText="VIEW PRODUCTS"
            image={cakeImage}
            freshCss ="roundImage freshSection"
        />
        <ContactSection />
        </>
    );
}

export default About;