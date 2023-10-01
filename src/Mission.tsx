import React, { useState } from "react";
import Draggable from "react-draggable";

interface MissionProps {
  title: string;
  description: string;
}

const Mission: React.FC<MissionProps> = ({
  title,
  description: firstDescription,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [description, setDescription] = useState(firstDescription);
  const [newDescription, setNewDescription] = useState("");
  return (
    <Draggable>
      <div className="box">
        <h4>{title}</h4>
        {isEdit ? (
          <input
            type="text"
            value={newDescription}
            maxLength={200}
            onChange={(event) => setNewDescription(event.target.value)}
          />
        ) : (
          <div>{description}</div>
        )}
        <button
          type="button"
          className="editbutton"
          onClick={() => {
            setDescription(newDescription);
            setIsEdit((prev) => !prev);
          }}
        >
          {isEdit ? "סיים" : "לחץ לשינוי משימה"}
        </button>
      </div>
    </Draggable>
  );
};

export default Mission;
