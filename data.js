import emily from "./public/people/image-emily.jpg";
import thomas from "./public/people/image-thomas.jpg";
import jennie from "./public/people/image-jennie.jpg";
import bottlesDesktop from "./public/desktopImages/image-gallery-milkbottles.jpg";
import orangeDesktop from "./public/desktopImages/image-gallery-orange.jpg";
import coneDesktop from "./public/desktopImages/image-gallery-cone.jpg";
import sugarDesktop from "./public/desktopImages/image-gallery-sugarcubes.jpg";
import bottlesMobile from "./public/mobileImages/image-gallery-milkbottles.jpg";
import orangeMobile from "./public/mobileImages/image-gallery-orange.jpg";
import coneMobile from "./public/mobileImages/image-gallery-cone.jpg";
import sugarMobile from "./public/mobileImages/image-gallery-sugar-cubes.jpg";
import facebook from "./public/svgImages/icon-facebook.svg";
import instagram from "./public/svgImages/icon-instagram.svg";
import twitter from "./public/svgImages/icon-twitter.svg";
import pinterest from "./public/svgImages/icon-pinterest.svg";

export const data = {
  people: [
    {
      name: "Emily R.",
      testimony:
        "We build our trust in sunnyside and they delivered, making sure our needs were met and deadlines were also hit.",
      imageURL: `${emily.src}`,
      role: "Marketing Director",
      id: 15,
    },
    {
      name: "Thomas S.",
      testimony:
        " Sunnyside's enthuisiasm couples with there keen interest in our brand's success made it a satisfying and enjoyable experience.",
      imageURL: `${thomas.src}`,
      role: "Chief Operating Officer",
      id: 14,
    },
    {
      name: "Jennie F.",
      testimony:
        " Incredible end result! Our sales increased over 400% when we worked with sunnyside. Highly recommended!",
      imageURL: `${jennie.src}`,
      role: "Business Owner",
      id: 13,
    },
  ],

  galleryDesktop: [
    { imageURL: `${bottlesDesktop.src}`, name: "bottlesDesktop", id: 1 },
    { imageURL: `${orangeDesktop.src}`, name: "orangeDesktop", id: 2 },
    { imageURL: `${coneDesktop.src}`, name: "coneDesktop", id: 3 },
    { imageURL: `${sugarDesktop.src}`, name: "sugarDesktop", id: 4 },
  ],

  galleryMobile: [
    { imageURL: `${bottlesMobile.src}`, name: "bottlesMobile", id: 5 },
    { imageURL: `${orangeMobile.src}`, name: "orangeMobile", id: 6 },
    { imageURL: `${coneMobile.src}`, name: "coneMobile", id: 7 },
    { imageURL: `${sugarMobile.src}`, name: "sugarMobile", id: 8 },
  ],

  footerLogo: [
    { imageURL: `${facebook.src}`, name: "facebook", id: 9 },
    { imageURL: `${instagram.src}`, name: "instagram", id: 10 },
    { imageURL: `${twitter.src}`, name: "twitter", id: 11 },
    { imageURL: `${pinterest.src}`, name: "pinterest", id: 12 },
  ],
};
