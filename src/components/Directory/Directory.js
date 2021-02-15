import React, { useState } from "react";
import "./Directory.scss";
import { data } from "./directory.data";
import MenuItem from "../MenuItem/MenuItem";

const Directory = () => {
  const [sections, setSections] = useState(data);
  console.log(sections);

  return (
    <div className="directory-menu">
      {sections.map((section) => {
        return (
          <MenuItem
            key={section.id}
            title={section.title}
            imageUrl={section.imageUrl}
          />
        );
      })}
    </div>
  );
};

export default Directory;
