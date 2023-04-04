import emily from "./public/people/image-emily.jpg";
import thomas from "./public/people/image-thomas.jpg";
import jennie from "./public/people/image-jennie.jpg";

export const data = {
  people: [
    {
      name: "Emily R.",
      testimony:
        "We build our trust in sunnyside and they delivered, making sure our needs were met and deadlines were also hit.",
      imageURL: `${emily.src}`,
      // imageURL: "/public/people/image-emily.jpg",
      role: "Marketing Director",
    },
    {
      name: "Thomas S.",
      testimony:
        " Sunnyside's enthuisiasm couples with there keen interest in our brand's success made it a satisfying and enjoyable experience.",
      imageURL: `${thomas.src}`,
      role: "Chief Operating Officer",
    },
    {
      name: "Jennie F.",
      testimony:
        " Incredible end result! Our sales increased over 400% when we worked with sunnyside. Highly recommended!",
      imageURL: `${jennie.src}`,
      role: "Business Owner",
    },
  ],
};
