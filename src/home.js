import {
  createSection,
  createHeading,
  createParagraph,
  createText,
  createListItem,
  createUnorderedList,
  createDiv,
} from "./utils.js";

export default function createHomeSection() {
  const homeDiv = createDiv("home");
  function createHomeFirstSection() {
    const homeFirstSection = createSection("first");
    const homeHeading = createHeading(1, "Ember & Oak");
    homeFirstSection.appendChild(homeHeading);

    const homeParagraph1 = createParagraph(
      createText(
        "Ember &amp; Oak is a modern dining experience where rustic charm meets contemporary flavors. ",
      ),
    );
    const homeParagraph2 = createParagraph(
      createText(
        "Our kitchen brings together fire-kissed dishes, fresh seasonal ingredients, and a warm, welcoming atmosphere.",
      ),
    );
    const homeParagraph3 = createParagraph(
      createText(
        "Whether you’re here for a casual meal or a special evening, Ember &amp; Oak serves food that feels both refined and comforting.",
      ),
    );

    homeFirstSection.appendChild(homeParagraph1);
    homeFirstSection.appendChild(homeParagraph2);
    homeFirstSection.appendChild(homeParagraph3);
    return homeFirstSection;
  }
  homeDiv.appendChild(createHomeFirstSection());

  function createHomeSecondSection() {
    const homeSecondSection = createSection("second");
    const homeHeading = createHeading(2, "Opening Hours");
    homeSecondSection.appendChild(homeHeading);

    const homeList = createUnorderedList([
      "Mon–Fri: 11:00 AM – 10:00 PM",
      "Sat: 12:00 PM – 11:00 PM",
      "Sun: Closed",
      "Special Events: By Appointment Only",
    ]);
    homeSecondSection.appendChild(homeList);
    return homeSecondSection;
  }
  homeDiv.appendChild(createHomeSecondSection());

  function createHomeThirdSection() {
    const homeThirdSection = createSection("third");
    const homeHeading = createHeading(2, "Our Location");
    homeThirdSection.appendChild(homeHeading);

    const homeParagraph = createParagraph(
      createText(
        "Located in the heart of the city — just steps away from the central square.",
      ),
    );
    homeThirdSection.appendChild(homeParagraph);
    return homeThirdSection;
  }
  homeDiv.appendChild(createHomeThirdSection());
  return homeDiv;
}
