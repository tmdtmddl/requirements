import { useState } from "react";
import RItem from "./Requirement/RItem";
import RForm from "./Requirement/RForm";
const App = () => {
  const project = {
    title: "My First Project",
    id: "12341234123",
    requirements: [],
  };
  const [requirements, setRequirements] = useState([
    {
      funcName: "sadsfsdf",
      funcPage: "sadsfsdf",
      id: "1",
      status: "sadsfsdf",
      details: ["ssdfsfsdf"],
    },
    {
      funcName: "sadsfsdf",
      funcPage: "sadsfsdf",
      id: "2",
      status: "sadsfsdf",
      details: ["ssdfsfsdf"],
    },
    {
      funcName: "sadsfsdf",
      funcPage: "sadsfsdf",
      id: "3",
      status: "sadsfsdf",
      details: ["ssdfsfsdf"],
    },
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const onCancel = () => setIsAdding(false);
  const onStart = () => {
    setIsAdding(true);
  };

  // useEffect(() => {
  //   console.log(requirement)
  //   console.log(detail)
  // }, [requirement, detail])
  return (
    <div>
      <h1>Project Name: {project.title}</h1>
      <p>Project Id: {project.id}</p>
      <ul>
        {requirements.map((r, index) => {
          return (
            <RItem
              r={r}
              index={index}
              key={r.id}
              requirements={requirements}
              setRequirements={setRequirements}
            />
          );
        })}
      </ul>
      {!isAdding ? (
        <button onClick={onStart}>요구사항 추가하기</button>
      ) : (
        <RForm
          requirements={requirements}
          setRequirements={setRequirements}
          onCancel={onCancel}
          status={isAdding}
        />
      )}
    </div>
  );
};
export default App;
