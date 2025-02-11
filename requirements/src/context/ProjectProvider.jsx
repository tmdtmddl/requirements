import PropTypes from "prop-types";
import { projectContext } from "./useProject";
import { useState, useEffect } from "react";
import useRandomId from "../hooks/useRandomId";

const ProjectProvider = ({ children }) => {
  const project = {
    title: "나의 첫 번째 프로젝트",
    id: useRandomId(),
  };

  const [projects, setProjects] = useState([project]);

  useEffect(() => {
    console.log({
      projects,
    });
  }, [projects]);

  return (
    <projectContext.Provider
      value={{
        projects,
        setProjects,
      }}
    >
      {children}
    </projectContext.Provider>
  );
};

export default ProjectProvider;

ProjectProvider.propTypes = {
  children: PropTypes.element,
};
