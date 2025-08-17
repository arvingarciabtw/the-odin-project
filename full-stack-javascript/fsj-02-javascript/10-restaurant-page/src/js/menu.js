import { Element, Image } from "./domManipulation";
import ramenOne from "../assets/images/ramen-one.jpg";
import ramenTwo from "../assets/images/ramen-two.jpg";
import ramenThree from "../assets/images/ramen-three.jpg";
import ramenFour from "../assets/images/ramen-four.jpg";
import gyoza from "../assets/images/gyoza.jpg";
import chashu from "../assets/images/chashu.jpg";
import softBoiledEggs from "../assets/images/soft-boiled-eggs.jpg";
import noodles from "../assets/images/noodles.jpg";

export default function displayMenu() {
  const menuContainer = new Element("div", "menu-container", null).createElement();
  const menuSectionOne = new Element("section", "menu-section-one", null).createElement();
  const menuSectionTwo = new Element("section", "menu-section-two", null).createElement();

  // Create elements for menu page first section
  const featuredBowlsHeading = new Element("h2", "featured-bowls-heading", "Featured Bowls").createElement();
  const featuredBowlsContainer = new Element("div", "featured-bowls-container", null).createElement();

  const featuredBowlImages = [ramenOne, ramenTwo, ramenThree, ramenFour];
  const featuredBowlNames = ["Naruto's Special Miso Ramen", "Traditional Tonkotsu Ramen", "Teuchi's Original Shoyu", "Spicy Hinata Bowl"];
  const featuredBowlPrices = ["¥ 1,299", "¥ 1,199", "¥ 1,399", "¥ 1,099"];
  const featuredBowlDescriptions = [
    "Rich miso broth with tender chashu pork, green onions, bamboo shoots, and our signature narutomaki. The bowl that made a legend!",
    "Creamy pork bone broth simmered for 18 hours, topped with chashu, soft-boiled egg, and fresh scallions.", 
    "Light soy sauce broth with delicate flavors, bamboo shoots, and tender pork slices. Our founder's first creation.", 
    "Fiery miso ramen with extra chili oil, perfect for those who like their ramen with a kick. Topped with corn and butter."
  ];

  for (let i = 0; i < 4; i++) {
    const featuredBowl = new Element("div", "featured-bowl", null).createElement();
    const featuredBowlImage = new Image("img", "featured-bowl-image", null, featuredBowlImages[i]).createElement();
    const featuredBowlName = new Element("h5", "featured-bowl-name", featuredBowlNames[i]).createElement();
    const featuredBowlPrice = new Element("p", "featured-bowl-price", featuredBowlPrices[i]).createElement();
    const featuredBowlDescription = new Element("p", "featured-bowl-description", featuredBowlDescriptions[i]).createElement();

    featuredBowl.appendChild(featuredBowlImage);
    featuredBowl.appendChild(featuredBowlName);
    featuredBowl.appendChild(featuredBowlPrice);
    featuredBowl.appendChild(featuredBowlDescription);

    featuredBowlsContainer.appendChild(featuredBowl);
  }

  // Structure elements for menu page first section
  menuSectionOne.appendChild(featuredBowlsHeading);
  menuSectionOne.appendChild(featuredBowlsContainer);

  // Create elements for menu page second section
  const sidesHeading = new Element("h2", "sides-heading", "Sides and Extras").createElement();
  const sidesContainer = new Element("div", "sides-container", null).createElement();

  const sidesImages = [gyoza, chashu, softBoiledEggs, noodles];
  const sidesNames = ["Gyoza", "Chashu", "Soft Boiled Eggs", "Noodles"];
  const sidesPrices = ["¥ 699", "¥ 300", "¥ 200", "¥ 250"];
  const sidesDescriptions = [
    "Pan-fried pork dumplings with crispy bottoms and juicy filling. Perfect for sharing or keeping all to yourself.",
    "Melt-in-your-mouth braised pork belly that's been slow-cooked to perfection.",
    "Golden yolk perfection with a jammy center that enriches every spoonful of broth.",
    "More of our hand-pulled noodles for those who can't get enough of the perfect chew."
  ];

  for (let i = 0; i < 4; i++) {
    const side = new Element("div", "side", null).createElement();
    const sideImage = new Image("img", "side-image", null, sidesImages[i]).createElement();
    const sideName = new Element("h5", "side-name", sidesNames[i]).createElement();
    const sidePrice = new Element("p", "side-price", sidesPrices[i]).createElement();
    const sideDescription = new Element("p", "side-description", sidesDescriptions[i]).createElement();

    side.appendChild(sideImage);
    side.appendChild(sideName);
    side.appendChild(sidePrice);
    side.appendChild(sideDescription);

    sidesContainer.appendChild(side);
  }

  // Structure elements for menu page second section
  menuSectionTwo.appendChild(sidesHeading);
  menuSectionTwo.appendChild(sidesContainer);

  menuContainer.appendChild(menuSectionOne);
  menuContainer.appendChild(menuSectionTwo);

  return menuContainer;
}
