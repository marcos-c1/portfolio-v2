import { Certificate } from "./cert";
import { Education } from "./education";
import { Experience } from "./experience";
import { Project } from "./project";

export interface MainStructure {
  aboutMe: (string | undefined)[];
  education: Education;
  experience: Experience[];
  projects: Project[];
  certifications: Certificate[];
}
