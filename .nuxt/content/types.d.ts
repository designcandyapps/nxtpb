import type { PageCollectionItemBase, DataCollectionItemBase } from '@nuxt/content'

declare module '@nuxt/content' {
  interface ProjectsEnCollectionItem extends DataCollectionItemBase {
    title: string;
    description: string;
    date: string;
    image: string;
    githubURL?: string | undefined;
    technologies: string[];
    wip?: boolean;
    featured?: boolean;
  }
  interface ProjectsThCollectionItem extends DataCollectionItemBase {
    title: string;
    description: string;
    date: string;
    image: string;
    githubURL?: string | undefined;
    technologies: string[];
    wip?: boolean;
    featured?: boolean;
  }

  interface PageCollections {
  }

  interface Collections {
    projects_en: ProjectsEnCollectionItem
    projects_th: ProjectsThCollectionItem
  }
}
