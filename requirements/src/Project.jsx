import { useParams } from "react-router-dom";

const Project = () => {
  const { projectId } = useParams();
  return (
    <div>
      <h1>Project: {projectId} </h1>
    </div>
  );
};

export default Project;
