import { useState } from "react";
import StudentForm from "./StudentForm";
import PropTypes from "prop-types";

const StudentItem = ({ students, setStudents, payload, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = () => setIsEditing((prev) => !prev);

  const onDelete = () => {
    if (confirm("삭제하시겠습니까?")) {
      setStudents((prev) => prev.filter((s) => s.id !== payload.id));
      alert("삭제했습니다");
    } else {
      alert("취소했습니다");
    }
  };
  return (
    <li>
      {isEditing ? (
        <StudentForm
          isEditing={isEditing}
          onCancel={handleEdit}
          payload={payload}
          setStudents={setStudents}
          students={students}
        />
      ) : (
        <>
          <div>
            <p>
              {index + 1}.이메일:{payload.email}
            </p>
            <p>전화번호:{payload.tel}</p>
            <p>
              id:
              {payload.id}
            </p>
          </div>

          <div className="btns">
            <button onClick={onDelete} className="redbtn">
              삭제
            </button>
            <button onClick={handleEdit}>수정</button>
          </div>
        </>
      )}
    </li>
  );
};

export default StudentItem;

StudentItem.propTypes = {
  students: PropTypes.array,
  setStudents: PropTypes.func,
  payload: PropTypes.string,
  index: PropTypes.number,
};
