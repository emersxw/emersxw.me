import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "emersxw //",
  EMAIL: "hi@emersxw.me",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 1,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "home",
  DESCRIPTION: "emersxw // a software engineer.",
};

export const BLOG: Metadata = {
  TITLE: "blog",
  DESCRIPTION: "stuff i write about.",
};

export const WORK: Metadata = {
  TITLE: "work",
  DESCRIPTION: "companies i've worked at.",
};

export const PROJECTS: Metadata = {
  TITLE: "projects",
  DESCRIPTION: "things i've built.",
};

export const SOCIALS: Socials = [
  // { 
  //   NAME: "twitter-x",
  //   HREF: "https://twitter.com/emersxw",
  // },
  { 
    NAME: "github",
    HREF: "https://github.com/emersxw"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/emersxw",
  }
];
