import { useState } from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

const StudentForm = ({
  students,
  setStudents,
  isEditing,
  payload,
  onCancel,
}) => {
  const [student, setStudent] = useState(
    payload ?? {
      email: "",
      tel: "",
      id: "",
    }
  );

  const onChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
    console.log(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (student.email.length === 0) {
      alert("이름을 입력해주세요.");
      return;
    }
    if (student.tel.length === 0) {
      alert("전화번호를 입력해주세요.");
      return;
    }
    if (student.tel.length !== 11) {
      alert("전화번호를 다시 확인해주세요");
      return;
    }
    if (!isEditing) {
      const foundStudent = students.find((s) => s.email === student.email);
      if (foundStudent) {
        alert("이미 추가된 학생입니다.");
        return;
      }
    }

    setStudents((prev) => {
      let copy = [...prev];
      if (isEditing) {
        const index = students.findIndex((s) => s.email === payload.email);
        if (index >= 0) {
          copy[index] = student;
        }
      } else {
        copy.push({ ...student, id: v4() });
      }
      return copy;
    });

    alert(isEditing ? "수정되었습니다." : "추가되었습니다.");
    if (isEditing && onCancel) {
      onCancel();
    }
    setStudent({ email: "", tel: "", id: "" });
  };

  return (
    <form onSubmit={onSubmit}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="em">이메일</label>
        <input
          type="email"
          id="em"
          name="email"
          value={student.email}
          onChange={onChange}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="tell">전화번호</label>
        <input
          type="text"
          id="tell"
          name="tel"
          value={student.tel}
          onChange={onChange}
        />
      </div>
      <div style={{ display: "flex", alignItems: "end", columnGap: "5px" }}>
        <button
          style={{
            backgroundColor: "skyblue",
            border: "none",
            borderRadius: "5px",
            fontSize: "10px",
            padding: "5px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            color: "black",
          }}
        >
          {!isEditing ? "학생추가" : "수정"}
        </button>
        {isEditing && (
          <button
            type="button"
            onClick={onCancel}
            style={{
              backgroundColor: "gray",
              border: "none",
              borderRadius: "5px",
              fontSize: "10px",
              padding: "5px",
              height: "30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            취소
          </button>
        )}
      </div>
    </form>
  );
};

export default StudentForm;

StudentForm.propTypes = {
  students: PropTypes.array,
  setStudents: PropTypes.func,
  isEditing: PropTypes.bool,
  payload: PropTypes.object,
};
