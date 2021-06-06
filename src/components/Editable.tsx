import React, { useState, useEffect, FC } from "react";
import { EditableDetails } from "../interfaces/ContactInterface";

const Editable: FC<EditableDetails> = ({
  childRef,
  text,
  type,
  placeholder,
  children,
}) => {
  const [isEditing, setEditing] = useState(false);
  useEffect(() => {
    if (childRef && childRef.current && isEditing === true) {
      childRef.current.focus();
    }
  }, [isEditing, childRef]);

  const handleKeyDown = (event:any) => {
    const { key } = event;
    const keys = ["Escape", "Tab"];
    const enterKey = "Enter";
    const allKeys = [...keys, enterKey];

    if (allKeys.indexOf(key) > -1)
     {
      setEditing(false);
    }
  };

  return (
    <section>
      {isEditing ? (
        <div
          onBlur={() => setEditing(false)}
          onKeyDown={(e) => handleKeyDown(e)}
        >
          {children}
        </div>
      ) : (
        <div onClick={() => setEditing(true)}>
          <span>{text || placeholder}</span>
        </div>
      )}
    </section>
  );
};

export default Editable;
