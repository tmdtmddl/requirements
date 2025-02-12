import { v4 } from "uuid";
import PropTypes from "react";
import { useState, useEffect, useRef } from "react";
const RForm = ({
  setRequirements,
  requirements,
  onCancel,
  payload,
  isEditing,
  status,
}) => {
  const nameRef = useRef(null);
  const pageRef = useRef(null);
  const statusRef = useRef(null);
  const detailRef = useRef(null);

  const [requirement, setRequirement] = useState(
    payload ?? {
      funcName: "",
      funcPage: "",
      details: [],
      status: "",
      id: "",
    }
  );
  const [detail, setDetail] = useState(""); // 단순한 문자열밖에 없는 아이템은 이렇게 관리하면 펴함
  // 복합적인 값을 담고 잇는 아이템: 요구사항 객체로 관리

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "details") {
      return setDetail(value);
    }
    setRequirement((prev) => ({ ...prev, [name]: value }));
  };
  const onAddRequirement = (newRequirement) => {
    const { funcName, funcPage, status, details } = newRequirement;
    if (funcName.length === 0) {
      alert("요구사항 제목을 입력해주세요.");
      return nameRef.current?.focus();
    }
    const foundName = requirements.find((item) => item.funcName === funcName);
    if (foundName) {
      alert("중복된 요구사항입니다.");
      return nameRef.current?.focus();
    }
    if (funcPage.length === 0) {
      alert("기능 구현 페이지를 입력해주세요.");
      return pageRef.current?.focus();
    }
    if (status.length === 0) {
      alert("진행상태를 입력해주세요.");
      return statusRef.current?.focus();
    }
    if (details.length === 0) {
      alert("상세내용을 입력해주세요.");
      return detailRef.current?.focus();
    }

    if (!isEditing) {
      setRequirements((prev) => [
        ...prev,
        { ...newRequirement, id: String(prev.length + 1) },
      ]);
      setRequirement({
        funcName: "",
        funcPage: "",
        status: "",
        details: [],
      });
      nameRef.current?.focus();
      return;
    }
    setRequirements((prev) => {
      let copy = [...prev];
      const index = copy.findIndex((item) => item.id === payload.id);
      if (index < 0) {
        return copy;
      }
      copy[index] = requirement;
      return copy;
    });
    alert("수정되었습니다");
    onCancel();
  };
  const onSubmit = (e) => {
    e.preventDefault(); //새로고침 방지
    const { funcName, funcPage, status } = requirement;
    if (funcName.length === 0) {
      alert("요구사항의 제목을 지어주세요.");
      return nameRef.current?.focus();
    }
    const foundName = requirements.find((item) => item.funcName === funcName);
    if (foundName) {
      alert("중복된 요구사항 제목입니다.");
      return nameRef.current?.focus();
    }
    if (funcPage.length === 0) {
      alert("기능 구현 페이지를 입력해주세요.");
      return pageRef.current?.focus();
    }
    if (status.length === 0) {
      alert("진행상태를 입력해주세요.");
      return statusRef.current?.focus();
    }
    if (requirement.details.length > 0) {
      if (confirm("상세내역을 더 작성하시겠습니까?")) {
        detailRef.current?.focus();
      } else {
        onAddRequirement(requirement);
      }
      return;
    }
    detailRef.current?.focus();
  };
  const onSubmitDetail = (e) => {
    e.preventDefault();
    if (detail.length === 0) {
      alert("요구사항 상세내용을 입력해주세요.");
      return detailRef.current?.focus();
    }
    const foundDetail = requirement.details.find((item) => item === detail);
    if (foundDetail) {
      alert("중복된 내용입니다.");
      return detailRef.current?.focus();
    }
    setRequirement((prev) => ({ ...prev, details: [...prev.details, detail] }));
    setDetail("");
    detailRef.current?.focus();
  };

  useEffect(() => {
    console.log(v4());
    if (status) {
      const focus = () =>
        setTimeout(() => {
          nameRef.current?.focus();
        }, 300);
      focus();
      return () => {
        focus();
      };
    }
  }, [status]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="funcName"
          onChange={onChange}
          value={requirement.funcName}
          ref={nameRef}
        />
        <input
          type="text"
          name="funcPage"
          onChange={onChange}
          value={requirement.funcPage}
          ref={pageRef}
        />
        <input
          type="text"
          name="status"
          onChange={onChange}
          value={requirement.status}
          ref={statusRef}
        />
        <button>다음</button>
      </form>
      <div>
        <ul>
          {requirement.details.map((detail, index) => {
            const onDelete = () =>
              setRequirement((prev) => ({
                ...prev,
                details: prev.details.filter((item) => item !== detail),
              }));
            return (
              <li key={detail}>
                {index + 1}. {detail} <button onClick={onDelete}>삭제</button>
              </li>
            );
          })}
        </ul>
      </div>
      <form onSubmit={onSubmitDetail}>
        <input
          type="text"
          name="details"
          onChange={onChange}
          value={detail}
          ref={detailRef}
        />
        <button>추가</button>
        <button type="button" onClick={() => onAddRequirement(requirement)}>
          요구사항 {isEditing ? "수정" : "추가"}하기
        </button>
        <button type="button" onClick={onCancel}>
          취소
        </button>
      </form>
    </>
  );
};

export default RForm;

RForm.propTypes = {
  requirements: PropTypes.array,
  setRequirements: PropTypes.func,

  payload: PropTypes.object,
  isEditing: PropTypes.bool,
  onCancel: PropTypes.func,
  status: PropTypes.bool,
};
