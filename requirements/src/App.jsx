import { useState, useRef } from "react";
import RForm from "./Requirement2/RForm";
const App = () => {
  const project = {
    title: "My First Project",
    id: "12341234123",
    requirements: [],
  };

  // const [requirements, setRequirements ] = useState([])
  const [requirements, setRequirements] = useState([
    {
      funcName: "",
      funcPage: "",
      details: [],
      status: "",
      id: "",
    },
  ]);

  // const [detail, setDetail] = useState(""); // 단순한 문자열밖에 없는 아이템은 이렇게 관리하면 펴함
  // // 복합적인 값을 담고 잇는 아이템: 요구사항 객체로 관리

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
            <li key={r.id}>
              {index + 1}. {r.funcName} - {r.funcPage} - {r.status}
              <ol type="i">
                {r.details.map((d, dIndex) => {
                  return <li key={d}>{d}</li>;
                })}
              </ol>
            </li>
          );
        })}
      </ul>
      {!isAdding ? (
        <button onClick={onStart}>요구사항 추가</button>
      ) : (
        <RForm
          onCancel={onCancel}
          requirements={requirement}
          setRequirements={setRequirement}
          status={isAdding}
        />
      )}
    </div>
  );
};
export default App;
