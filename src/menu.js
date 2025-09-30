export default function createMenuSection() {
  const menuDiv = createDiv("menu");
  const menuHeading = createHeading(2, "Our Menu");
  menuDiv.appendChild(menuHeading);
  function createMenuAppetizersSection() {
    const menuAppetizersSection = createSection("appetizers");
    const menuAppetizersHeading = createHeading(3, "Appetizers");
    menuAppetizersSection.appendChild(menuAppetizersHeading);
    const appetizersList = createUnorderedList([
      '<img src="images/bruschetta.jpg" alt="Bruschetta" width="100" /> <div><strong>Bruschetta</strong> - $8 <p>Grilled bread topped with fresh tomatoes, basil, and olive oil.</p></div>',
      '<img src="images/caprese.jpg" alt="Caprese Salad" width="100"/> <div><strong>Caprese Salad</strong> - $10<p>    Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.</p></div>',
      '<img src="images/garlic-bread.jpg" alt="Garlic Bread" width="100"/><div><strong>Garlic Bread</strong> - $6<p>Toasted baguette slices brushed with garlic butter and herbs.</p></div>',
    ]);
    menuAppetizersSection.appendChild(appetizersList);
    return menuAppetizersSection;
  }

  const menuAppetizersSection = createMenuAppetizersSection();

  //main course
  function createMenuMainCoursesSection() {
    const menuMainCoursesSection = createSection("main-courses");
    const menuMainCoursesHeading = createHeading(3, "main-courses");
    menuMainCoursesSection.appendChild(menuMainCoursesHeading);
    const mainCoursesList = createUnorderedList([
      '<img src="images/pesto-pasta.jpg" alt="Pesto Pasta" width="100" /> <div> <strong>Pesto Pasta</strong> - $12<p>Creamy pesto sauce tossed with penne pasta and grilled vegetables.</p></div>',
      '<img src="images/steak.jpg" alt="Steak" width="100"/><div><strong>Steak</strong> - $20<p>Juicy grilled steak served with roasted potatoes and sautéed mushrooms.</p></div>',
    ]);
    menuMainCoursesSection.appendChild(mainCoursesList);
    return menuMainCoursesSection;
  }
  const menuMainCoursesSection = createMenuMainCoursesSection();

  function createMenuDessertSection() {
    const menuDessertSection = createSection("desserts");
    const menuDessertHeading = createHeading(3, "desserts");
    menuDessertSection.appendChild(menuDessertHeading);
    const dessertList = createUnorderedList([
      '<img src="images/chocolate-cake.jpg" alt="Chocolate Cake" width="100" /> <div> <strong>Chocolate Cake</strong> - $10<p>Rich chocolate cake with a buttercream frosting.</p></div>',
      '<img src="images/cheesecake.jpg" alt="Cheesecake" width="100"/><div><strong>Cheesecake</strong> - $12<p>Classic cheesecake with a graham cracker crust.</p></div>',
      '<img src="images/red-velvet-cake.jpg" alt="Red Velvet Cake" width="100"/><div><strong>Red Velvet Cake</strong> - $14<p>Moist red velvet cake with cream cheese frosting.</p></div>',
    ]);

    menuDessertSection.appendChild(dessertList);
    return menuDessertSection;
  }
  const menuDessertSection = createMenuDessertSection();

  menuDiv.appendChild(menuAppetizersSection);
  menuDiv.appendChild(menuMainCoursesSection);
  menuDiv.appendChild(menuDessertSection);

  return menuDiv;
}
