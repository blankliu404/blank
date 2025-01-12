/// <reference types="vite/client" />
declare module '*.vue' {

  import { DefineComponent } from 'vue';

  const component: DefineComponent<{}, {}, any>;

  export default component;

}

interface Translations {
  [key: string]: { [key: string]: string } | null;
}

interface Project {
  name: string;
  githubLink: string;
}
