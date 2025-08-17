import { Element, Image } from "./domManipulation";
import heroImage from "../assets/images/hero-image.jpg";
import naruto from "../assets/images/naruto.jpeg";
import sasuke from "../assets/images/sasuke.jpeg";
import sakura from "../assets/images/sakura.jpeg";
import kakashi from "../assets/images/kakashi.jpeg";

export default function displayHome() {
  const homeContainer = new Element("div", "home-container", null).createElement();
  const sectionOne = new Element("section", "section-one", null).createElement();
  const sectionTwo = new Element("section", "section-two", null).createElement();
  const sectionThree = new Element("section", "section-three", null).createElement();

  // Create elements for hero page first section
  const heroImg = new Image("img", "hero-img", null, heroImage).createElement();
  const heroDetailsContainer = new Element("div", "hero-details-container", null).createElement();
  const heroHeading = new Element("h1", "hero-heading", "Ichiraku Ramen").createElement()
  const heroDescription = new Element("p", "hero-description", "Step into the legendary ramen shop that has been serving the Hidden Leaf Village for generations. At Ichiraku Ramen, we believe that a perfect bowl of ramen isn't just food—it's a warm embrace after a long day, a celebration of friendship, and a tradition passed down through the ages.").createElement()
  const heroDescriptionTwo = new Element("p", "hero-description", "Our authentic tonkotsu and miso ramen have been perfecting their flavors since Teuchi first opened our doors. Whether you're a shinobi returning from a mission or a villager seeking comfort, our steaming bowls of happiness await you.").createElement()
  const heroDescriptionThree = new Element("p", "hero-description", "Come taste the ramen that fueled the future Hokage himself! Every slurp brings you closer to the heart of our village.").createElement()
  const heroCTA = new Element("button", "hero-cta", "Order Now").createElement();

  // Structure elements for hero page first section
  sectionOne.appendChild(heroImg);
  sectionOne.appendChild(heroDetailsContainer);
  heroDetailsContainer.appendChild(heroHeading);
  heroDetailsContainer.appendChild(heroDescription);
  heroDetailsContainer.appendChild(heroDescriptionTwo);
  heroDetailsContainer.appendChild(heroDescriptionThree);
  heroDetailsContainer.appendChild(heroCTA);

  // Create elements for hero page second section
  const sectionTwoHeading = new Element("h1", "section-two-heading", "Why Ichiraku Is Special").createElement();
  const cardsContainer = new Element("div", "cards-container", null).createElement();

  const cardHeadingsArray = ["Hand-Pulled Noodles", "Broths Simmered to Perfection", "A Place Where Legends Are Born"];
  const cardDescriptionsArray = [
    "Every morning before dawn, our chefs begin the meditative process of kneading, rolling, and pulling our signature noodles. Using a recipe passed down through three generations, each strand is crafted to achieve the perfect texture that holds our rich broths beautifully.",
    "Our tonkotsu broth simmers for over 20 hours, creating that signature creamy richness that has made us famous throughout the village. Our miso base combines three different types of fermented bean paste, creating layers of umami that dance on your palate.",
    "From academy students celebrating graduation to seasoned jonin sharing mission stories, Ichiraku has been witness to countless pivotal moments. Our walls have heard dreams spoken aloud, friendships forged over shared meals, and promises made between slurps."
  ];

  for (let i = 0; i < 3; i++) {
    const card = new Element("div", "card", null).createElement();
    const cardHeading = new Element("h3", "card-heading", cardHeadingsArray[i]).createElement();
    const cardDescription = new Element("p", "card-description", cardDescriptionsArray[i]).createElement();

    card.appendChild(cardHeading);
    card.appendChild(cardDescription);
    cardsContainer.appendChild(card);
  }

  // Structure elements for hero page section
  sectionTwo.appendChild(sectionTwoHeading);
  sectionTwo.appendChild(cardsContainer);

  // Create elements for hero page third section
  const sectionThreeHeading = new Element("h1", "section-three-heading", "What Our Customers Say").createElement();
  const testimonialsContainer = new Element("div", "testimonials-container", null).createElement();

  const testimonialImagesArray = [naruto, sasuke, sakura, kakashi];
  const testimonialNamesArray = ["Naruto Uzumaki", "Sasuke Uchiha", "Sakura Haruno", "Kakashi Hatake"];
  const testimonialDescriptionsArray = [
    "Ichiraku Ramen is the best! Nothing beats a bowl of miso ramen after a tough mission, dattebayo!",
    "The precision and balance in each bowl is impressive. It's where our team gathers.",
    "There's something healing about eating here after long days. The warmth reminds me why caring for people matters.",
    "Simple pleasures are often the most profound. Good ramen and good company - what we fight to protect."
  ];

  for (let i = 0; i < 4; i++) {
    const testimonial = new Element("div", "testimonial", null).createElement();
    const testimonialImg = new Image("img", "testimonial-img", null, testimonialImagesArray[i]).createElement();
    const testimonialName = new Element("h6", "testimonial-name", testimonialNamesArray[i]).createElement();
    const testimonialDescription = new Element("p", "testimonial-description", testimonialDescriptionsArray[i]).createElement(); 

    testimonial.appendChild(testimonialImg);
    testimonial.appendChild(testimonialName);
    testimonial.appendChild(testimonialDescription);
    testimonialsContainer.appendChild(testimonial);    
  }

  // Structure elements for hero page third section
  sectionThree.appendChild(sectionThreeHeading);
  sectionThree.appendChild(testimonialsContainer);

  homeContainer.appendChild(sectionOne);
  homeContainer.appendChild(sectionTwo);
  homeContainer.appendChild(sectionThree);

  return homeContainer;
}
