import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Display() {
  const { id } = useParams();
  let dataArr = [];
  var obj = [];
  const [htmltag, sethtmltag] = useState("");

  useEffect(() => {
    let item = localStorage.getItem("html");
    dataArr = JSON.parse(item);
    obj = dataArr.filter((item) => item.id == id);
    sethtmltag(obj[0].textArea);
    console.log(htmltag);
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: htmltag }} />
    </div>
  );
}

export default Display;
