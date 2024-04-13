interface Skill {
  image: string;
  name: string;
  type: string;
  description: string;
}

export default [
  {
    image: "/skills/js.webp",
    name: "JavaScript",
    type: "Back-end / Front-end",
    description:
      "JavaScript is the language of the Web, often hailed as the pioneer alongside Python and PHP. Do you agree?",
  },
  {
    image: "/skills/ts.webp",
    name: "TypeScript",
    type: "Back-end / Front-end",
    description:
      "TypeScript, the strong typing language of JavaScript. How phenomenal it is!",
  },
  {
    image: "/skills/html.webp",
    name: "HTML",
    type: "Front-end",
    description: "HTML, the tags that structure the web. Essential, isn't it?",
  },
  {
    image: "/skills/css.webp",
    name: "CSS",
    type: "Front-end",
    description:
      "CSS, bringing the web to life with its styling. What a beauty CSS is!",
  },
  {
    image: "/skills/jsx.webp",
    name: "ReactJS",
    type: "Framework",
    description: "ReactJS, the popular framework that everyone loves.",
  },
  {
    image: "/skills/astro.webp",
    name: "Astro",
    type: "Framework",
    description:
      "Astro, some people's favorite framework for its speed and zero JavaScript overhead.",
  },
  {
    image: "/skills/next.webp",
    name: "NextJS",
    type: "Framework",
    description: "NextJS, possibly the best framework for ReactJS.",
  },
  {
    image: "/skills/git.webp",
    name: "Git",
    type: "Tool",
    description:
      "Git, the best version control system out there. Let's take a look at it.",
  },
  {
    image: "/skills/vscode.webp",
    name: "VSCode",
    type: "Tool",
    description:
      "VSCode, the popular code editor from Microsoft. I really like it.",
  },
] as Skill[];
