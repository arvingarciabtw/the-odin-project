import { Element, Image } from "./domManipulation";
import aboutImageSource from "../assets/images/about-image.jpg";

export default function displayAbout() {
  const aboutContainer = new Element("div", "about-container", null).createElement();
  const aboutImage = new Image("img", "about-image", null, aboutImageSource).createElement();
  const aboutSection = new Element("section", "about-section", null).createElement();

  // Create elements for about page section
  const aboutHeading = new Element("h1", "about-heading", "Our Story").createElement();
  const storyContainer = new Element("div", "story-container", null).createElement();

  const storyParagraphsArray = [
    "Ichiraku Ramen has been the heart and soul of the Hidden Leaf Village for over three decades, but our story begins long before the first bowl was ever served. Master Teuchi arrived in the village as a young man with nothing but a worn recipe book, a dream, and an unwavering belief that food could bring people together in ways that nothing else could.",
    "In those early days, Teuchi worked tirelessly to perfect his craft. He studied under ramen masters from distant villages, learning the ancient art of noodle pulling and the delicate science of broth creation. But it wasn't until he settled in the Hidden Leaf Village that he discovered his true calling. This wasn't just about serving food—it was about creating a sanctuary where anyone, regardless of their station in life, could find warmth, comfort, and acceptance.",
    "The small shop started humbly, with just a few stools and a simple counter. Teuchi would work from dawn until well past midnight, hand-pulling every strand of noodles and carefully tending to broths that would simmer for hours. Word spread slowly at first, then like wildfire as people discovered that something magical was happening behind those modest curtains.",
    `From the day a young, energetic ninja first stumbled through our entrance asking for "the biggest bowl you've got," we knew we were witnessing something special. That boy, with his bright smile and endless appetite, would return day after day, bringing friends, sharing stories, and gradually transforming our quiet shop into a bustling hub of village life. We watched him grow from an academy student into a respected ninja, and eventually into a leader who would change the world—all while never losing his love for a simple bowl of ramen.`,
    "Over the years, our walls have absorbed countless conversations. We've served celebration meals for newly graduated genin, comfort food for weary jonin returning from dangerous missions, and late-night bowls for insomniacs wrestling with the weight of their responsibilities. Romance has blossomed over shared chopsticks, friendships have been forged through friendly eating competitions, and life-changing decisions have been made between slurps of our carefully crafted broth.",
    "When Teuchi's daughter Ayame joined the family business, she brought fresh energy while honoring the traditions that made Ichiraku special. Together, they've maintained the delicate balance between innovation and tradition, ensuring that each bowl carries the same love and attention that built our reputation, while adapting to serve new generations of villagers.",
    "Today, Ichiraku Ramen stands as more than just a restaurant—we're a living piece of village history, a testament to the power of simple pleasures, and a reminder that sometimes the most important moments in life happen over a shared meal. Every bowl we serve carries with it three decades of stories, dreams, and the unwavering belief that good food and warm hearts can make any day a little brighter.",
    "We're not just feeding bodies; we're nourishing souls, one bowl at a time."
  ];

  for (let i = 0; i < 8; i++) {
    const storyParagraph = new Element("p", "story-paragraph", storyParagraphsArray[i]).createElement();

    storyContainer.appendChild(storyParagraph);
  }

  aboutSection.appendChild(aboutHeading);
  aboutSection.appendChild(storyContainer);

  aboutContainer.appendChild(aboutImage);
  aboutContainer.appendChild(aboutSection);

  return aboutContainer;
}
