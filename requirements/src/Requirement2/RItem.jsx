import PropTypes from "prop-types";
import { useState } from "react";
import RForm from "./RForm";

const RItem = ({ r, index, requirements, setRequirements }) => {
  const [isEditing, setIsEditing] = useState(false);
  const onStart = () => setIsEditing(true);
  const onCancel = () => setIsEditing(false);

  const onDelete = () =>
    setRequirements((prev) => prev.filter((item) => item.id !== r.id));

  return (
    <li>
      {isEditing ? (
        <RForm
          isEditing
          status={isEditing}
          payload={r}
          onCancel={onCancel}
          requirements={requirements}
          setRequirements={setRequirements}
        />
      ) : (
        <>
          {index + 1}. {r.funcName} - {r.funcPage} - {r.status}
          <button onClick={onStart}>수정</button>
          <button onClick={onDelete}>삭제</button>
          <ol type="i">
            {r.details.map((d) => {
              return <li key={d}>{d}</li>;
            })}
          </ol>
        </>
      )}
    </li>
  );
};

export default RItem;

RItem.propTypes = {
  r: PropTypes.shape({
    id: PropTypes.string.isRequired,
    funcName: PropTypes.string.isRequired,
    funcPage: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  requirements: PropTypes.array.isRequired, // 'requirement' -> 'requirements'
  setRequirements: PropTypes.func.isRequired,
};
