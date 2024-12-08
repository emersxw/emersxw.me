import type { CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;
export type Project = CollectionEntry<"projects">;
export type WorkExperience = CollectionEntry<"work">; 