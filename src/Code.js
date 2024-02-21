import React, { useState } from "react";
import Details from "./Details";

function Code() {
  const [arraydata, setArrayData] = useState([]);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [textArea, setTextArea] = useState("");

  function handleClick(e) {
    e.preventDefault();
    let obj = {
      id: id,
      title: title,
      textArea: textArea,
    };
    setArrayData([...arraydata, obj]);
    localStorage.setItem("html", JSON.stringify([...arraydata, obj]));
    console.log(arraydata);
  }
  return (
    <div style={{ margin: "20px auto", maxWidth: "600px" }}>
      <form onSubmit={(e)=>handleClick(e)}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            name="id"
            onChange={(e) => {
              setId(e.target.value);
            }}
            style={{
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "100%",
              boxSizing: "border-box",
              fontSize: "16px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            required
            name="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            style={{
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "100%",
              boxSizing: "border-box",
              fontSize: "16px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="description">Blog:</label>
          <textarea
            id="description"
            name="description"
            onChange={(e) => {
              setTextArea(e.target.value);
            }}
            style={{
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "100%",
              boxSizing: "border-box",
              fontSize: "16px",
              minHeight: "150px",
            }}
          />
        </div>
        <button
        type="submit"
          onSubmit={(e) => {
            handleClick(e);
          }}
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </form>
      <Details arraydata={arraydata} />
    </div>
  );
}

export default Code;
