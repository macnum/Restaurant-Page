import {
  createSection,
  createHeading,
  createParagraph,
  createText,
  createListItem,
  createUnorderedList,
  createDiv,
} from "./utils.js";
export default function createContactSection() {
  const contactSection = createSection("contact");
  const contactHeading = createHeading(2, "Contact Us");
  contactSection.appendChild(contactHeading);

  function createAddressDiv() {
    const addressDiv = createDiv("address");
    const addressHeading = createHeading(3, "Address");
    addressDiv.appendChild(addressHeading);
    const addressText = createText("123 Main St, Lagos, Nigeria");
    const addressParagraph = createParagraph(addressText);
    addressDiv.appendChild(addressParagraph);
    return addressDiv;
  }
  const addressDiv = createAddressDiv();
  contactSection.appendChild(addressDiv);

  function createDetailsDiv() {
    const phoneDiv = createDiv("details");
    const phoneHeading = createHeading(3, "Get in Touch");
    phoneDiv.appendChild(phoneHeading);
    const phoneText = createText("Phone: +234 811 861 0683");
    const phoneParagraph = createParagraph(phoneText);
    phoneDiv.appendChild(phoneParagraph);
    const emailText = createText("Email: info@example.com");
    const emailParagraph = createParagraph(emailText);
    phoneDiv.appendChild(emailParagraph);
    return phoneDiv;
  }
  const phoneDiv = createDetailsDiv();
  contactSection.appendChild(phoneDiv);

  function createMapDiv() {
    const mapDiv = createDiv("map");
    const mapHeading = createHeading(3, "Find Us");
    mapDiv.appendChild(mapHeading);
    const iframe = document.createElement("iframe");
    iframe.src =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5944949999997!2d3.3792049149999997!3d6.524379999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c1c0a5b0a3f%3A0x8f9b9b9b9b9b9b9b!2s123%20Main%20St%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1631234567890";
    iframe.width = "600";
    iframe.height = "450";
    iframe.style.border = "0";
    iframe.allowFullscreen = "";
    iframe.loading = "lazy";
    mapDiv.appendChild(iframe);
    return mapDiv;
  }
  const mapDiv = createMapDiv();
  contactSection.appendChild(mapDiv);

  return contactSection;
}
