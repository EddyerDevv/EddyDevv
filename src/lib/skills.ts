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
      "Javascript is the language of the Web, it is often called the father of Python and PHP, do you agree?",
  },
  {
    image: "/skills/ts.webp",
    name: "TypeScript",
    type: "Back-end / Front-end",
    description:
      "Typescript the strong typing language of Javascript, how phenomenal it is.",
  },
  {
    image: "/skills/html.webp",
    name: "HTML",
    type: "Front-end",
    description: "I see, html tags are the structure of the web.",
  },
  {
    image: "/skills/css.webp",
    name: "CSS",
    type: "Front-end",
    description:
      "Oh how beautiful it looks already styled, CSS what gives life to the web.",
  },
  {
    image: "/skills/jsx.webp",
    name: "ReactJS",
    type: "Framework",
    description: "React is the popular framework that everyone loves.",
  },
  {
    image: "/skills/astro.webp",
    name: "Astro",
    type: "Framework",
    description:
      "Astro is some people's favorite framework with its speed and zero javascript overhead.",
  },
  {
    image: "/skills/next.webp",
    name: "NextJS",
    type: "Framework",
    description: "NextJS the best framework for ReactJS can be.",
  },
  {
    image: "/skills/git.webp",
    name: "Git",
    type: "Tool",
    description:
      "Git is the best version controller out there, let's take a look at it.",
  },
  {
    image: "/skills/vscode.webp",
    name: "VSCode",
    type: "Tool",
    description:
      "I think the popular Microsoft? code editor, I really like it.",
  },
] as Skill[];
