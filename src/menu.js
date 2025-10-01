import {
  createSection,
  createHeading,
  createParagraph,
  createText,
  createListItem,
  createUnorderedList,
  createDiv,
} from "./utils.js";

import bruschettaImg from "./images/bruschetta.jpg";
import capreseImg from "./images/caprese.jpg";
import garlicBreadImg from "./images/garlic-bread.jpg";
import pestoPastaImg from "./images/pesto-pasta.jpg";
import steakImg from "./images/steak.jpg";
import chocolateCakeImg from "./images/chocolate-cake.jpg";
import cheesecakeImg from "./images/cheesecake.jpg";
import redVelvetCakeImg from "./images/red-velvet-cake.jpg";
// Helper to build each menu item
function createMenuItem(imgSrc, imgAlt, name, price, description) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("menu-item");

  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = imgAlt;
  img.width = 100;

  const textDiv = document.createElement("div");
  const title = document.createElement("strong");
  title.textContent = `${name} - $${price}`;

  const desc = document.createElement("p");
  desc.textContent = description;

  textDiv.appendChild(title);
  textDiv.appendChild(desc);

  wrapper.appendChild(img);
  wrapper.appendChild(textDiv);

  return wrapper;
}

export default function createMenuSection() {
  const menuDiv = createDiv("menu");
  const menuHeading = createHeading(2, "Our Menu");
  menuDiv.appendChild(menuHeading);

  // Appetizers
  function createMenuAppetizersSection() {
    const section = createSection("appetizers");
    section.appendChild(createHeading(3, "Appetizers"));

    const appetizersList = createUnorderedList([
      createMenuItem(
        bruschettaImg,
        "Bruschetta",
        "Bruschetta",
        8,
        "Grilled bread topped with fresh tomatoes, basil, and olive oil.",
      ),
      createMenuItem(
        capreseImg,
        "Caprese Salad",
        "Caprese Salad",
        10,
        "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.",
      ),
      createMenuItem(
        garlicBreadImg,
        "Garlic Bread",
        "Garlic Bread",
        6,
        "Toasted baguette slices brushed with garlic butter and herbs.",
      ),
    ]);

    section.appendChild(appetizersList);
    return section;
  }

  // Main Courses
  function createMenuMainCoursesSection() {
    const section = createSection("main-courses");
    section.appendChild(createHeading(3, "Main Courses"));

    const mainCoursesList = createUnorderedList([
      createMenuItem(
        pestoPastaImg,
        "Pesto Pasta",
        "Pesto Pasta",
        12,
        "Creamy pesto sauce tossed with penne pasta and grilled vegetables.",
      ),
      createMenuItem(
        steakImg,
        "Steak",
        "Steak",
        20,
        "Juicy grilled steak served with roasted potatoes and sautéed mushrooms.",
      ),
    ]);

    section.appendChild(mainCoursesList);
    return section;
  }

  // Desserts
  function createMenuDessertSection() {
    const section = createSection("desserts");
    section.appendChild(createHeading(3, "Desserts"));

    const dessertList = createUnorderedList([
      createMenuItem(
        chocolateCakeImg,
        "Chocolate Cake",
        "Chocolate Cake",
        10,
        "Rich chocolate cake with a buttercream frosting.",
      ),
      createMenuItem(
        cheesecakeImg,
        "Cheesecake",
        "Cheesecake",
        12,
        "Classic cheesecake with a graham cracker crust.",
      ),
      createMenuItem(
        redVelvetCakeImg,
        "Red Velvet Cake",
        "Red Velvet Cake",
        14,
        "Moist red velvet cake with cream cheese frosting.",
      ),
    ]);

    section.appendChild(dessertList);
    return section;
  }

  // Build menu
  menuDiv.appendChild(createMenuAppetizersSection());
  menuDiv.appendChild(createMenuMainCoursesSection());
  menuDiv.appendChild(createMenuDessertSection());

  return menuDiv;
}
