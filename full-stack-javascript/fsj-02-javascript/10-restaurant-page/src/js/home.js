import { Element, Image } from "./domManipulation";
import heroImage from "../assets/images/hero-image.jpg"

export default function displayHome() {
  const homeContainer = new Element("div", "home-container", null).createElement();
  const sectionOne = new Element("section", "section-one", null).createElement();
  const sectionTwo = new Element("section", "section-two", null).createElement();
  const sectionThree = new Element("section", "section-three", null).createElement();

  const heroImg = new Image("img", "hero-img", null, heroImage).createElement();
  const heroDetailsContainer = new Element("div", "hero-details-container", null).createElement();
  const heroHeading = new Element("h1", "hero-heading", "Ichiraku Ramen").createElement()
  const heroDescription = new Element("p", "hero-description", "Step into the legendary ramen shop that has been serving the Hidden Leaf Village for generations. At Ichiraku Ramen, we believe that a perfect bowl of ramen isn't just food—it's a warm embrace after a long day, a celebration of friendship, and a tradition passed down through the ages.").createElement()
  const heroDescriptionTwo = new Element("p", "hero-description", "Our authentic tonkotsu and miso ramen have been perfecting their flavors since Teuchi first opened our doors. Whether you're a shinobi returning from a mission or a villager seeking comfort, our steaming bowls of happiness await you.").createElement()
  const heroDescriptionThree = new Element("p", "hero-description", "Come taste the ramen that fueled the future Hokage himself! Every slurp brings you closer to the heart of our village.").createElement()
  const heroCTA = new Element("button", "hero-cta", "Order Now").createElement()

  sectionOne.appendChild(heroImg)
  sectionOne.appendChild(heroDetailsContainer)
  heroDetailsContainer.appendChild(heroHeading)
  heroDetailsContainer.appendChild(heroDescription)
  heroDetailsContainer.appendChild(heroDescriptionTwo)
  heroDetailsContainer.appendChild(heroDescriptionThree)
  heroDetailsContainer.appendChild(heroCTA)

  homeContainer.appendChild(sectionOne);
  homeContainer.appendChild(sectionTwo);
  homeContainer.appendChild(sectionThree);

  return homeContainer;
}
