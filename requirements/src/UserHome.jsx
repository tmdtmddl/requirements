import "./UserHome.css";
import { NavLink } from "react-router-dom";
import useProject from "./context/useProject";

const UserHome = () => {
  const { projects } = useProject();

  return (
    <div className="user-home">
      <h1>UserHome</h1>

      {projects.map((project, index) => {
        return (
          <NavLink key={project.id} to={project.id} className="link">
            {index + 1}. {project.title} {project.id}
          </NavLink>
        );
      })}
    </div>
  );
};

export default UserHome;
