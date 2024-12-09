import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "emersxw.me",
  EMAIL: "hi@emersxw.me",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 1,
};

export const HOME: Metadata = {
  TITLE: "emerson // senior software engineer",
  DESCRIPTION: "a software engineer.",
};

export const BLOG: Metadata = {
  TITLE: "blog",
  DESCRIPTION: "thoughts and tutorials on software engineering, tech, and life.",
};

export const WORK: Metadata = {
  TITLE: "work",
  DESCRIPTION: "my professional journey and roles.",
};

export const PROJECTS: Metadata = {
  TITLE: "projects",
  DESCRIPTION: "side projects, learnings, and experiments.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "x",
    HREF: "https://x.com/q6b45rjb6p",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/emersxw"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/emersxw",
  }
];
