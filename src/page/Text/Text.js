import React, {useState} from "react";
import "./Text.scss";

function Text() {
  const [istitle, setIstitle] = useState("");
  const [isDescription, setIsDescription] = useState("");
  const [isDate, setIsDate] = useState("");

  const titleValue = (e) => {
    setIstitle(e.target.value);
  };
  const descriptionValue = (e) => {
    setIsDescription(e.target.value);
  };
  const dateValue = (e) => {
    setIsDate(e.target.value);
  };

  return (
    <div className="text-wrapper">
      <div className="text-box">
        <input
          type="text"
          className="text-title"
          placeholder="title"
          onChange={titleValue}
        />
        <textarea
          className="text-description"
          onChange={descriptionValue}
        ></textarea>
        <input type="date" className="text-date" onChange={dateValue} />
        <input type="file" className="text-date" />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Text;
