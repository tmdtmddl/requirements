import { useState } from "react";
import StudentForm from "./StudentForm";
import StudentItem from "./StudentItem";
import "./Student.css";

const App = () => {
  const [students, setStudents] = useState([]);
  return (
    <div className="wrap">
      <StudentForm students={students} setStudents={setStudents} />
      <ul>
        {students.map((student, index) => (
          <StudentItem
            key={student.id}
            students={students}
            setStudents={setStudents}
            payload={student}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
