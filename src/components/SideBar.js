import React, { useEffect, useState } from "react";
import "./SideBar.css";

function SideBar(props) {
  const [options, setOptions] = useState({});

  useEffect(() => {
    setOptions({
      About: () => {
        console.log(props);
      },
      Education: () => {
        console.log(props);
      },
      Interests: () => {
        console.log(props);
      },
      Projects: () => {
        console.log(props);
      },
      Skills: () => {
        console.log(props);
      },
    });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-holder">
        {Object.keys(options).map((key) => {
          return (
            <div key={key} className="sidebar-items">
              {key}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(SideBar);
