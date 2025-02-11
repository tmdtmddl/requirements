import { useContext, createContext } from "react";

export const projectContext = createContext({
  projects: [],
  setProjects: () => ({}),
});

const useProject = () => useContext(projectContext);

export default useProject;
