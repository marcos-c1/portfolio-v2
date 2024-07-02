import { Dispatch, SetStateAction, createContext } from "react";

export enum Languages {
  "ptbr",
  "eng",
}

interface LanguagesContextType {
  lang: Languages;
  setLang: Dispatch<SetStateAction<Languages>>;
}

export const LanguageContext = createContext<LanguagesContextType | undefined>(
  undefined,
);
