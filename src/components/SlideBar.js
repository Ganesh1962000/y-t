import React, { useState } from "react";
import slideBarItems from "../static/data";

import { v4 as uuid } from "uuid";

const SlideBar = () => {
  const [active, setActive] = useState("Home");
  const unique_id = uuid();
  return (
    <>
      <div className="side-bar-wraper yt-scrolbar">
        <ul className="sbar-box">
          {slideBarItems.top.map((item, index) => {
            return (
              <li
                className={`${item.name === active ? "active" : ""}`}
                key={index}
                onClick={() => setActive(item.name)}
              >
                <span className="bar-icon-cover">{item.icon}</span>
                {item.name}
              </li>
            );
          })}
        </ul>
        <ul className="sbar-box">
          {slideBarItems.middle.map((item, index) => {
            return (
              <li
                className={`${item.name === active ? "active" : ""}`}
                key={index}
                onClick={() => setActive(item.name)}
              >
                <span className="bar-icon-cover">{item.icon}</span>
                {item.name}
              </li>
            );
          })}
        </ul>
        <ul className="sbar-box">
          <p>Explore</p>
          {slideBarItems.explore.map((item, index) => {
            return (
              <li
                className={`${item.name === active ? "active" : null}`}
                key={index}
                onClick={() => setActive(item.name)}
              >
                <span className="bar-icon-cover">{item.icon}</span>
                {item.name}
              </li>
            );
          })}
        </ul>
        <ul className="sbar-box">
          {slideBarItems.setting.map((item, index) => {
            return (
              <li
                className={`${item.name === active ? "active" : null}`}
                key={index}
                onClick={() => setActive(item.name)}
              >
                <span className="bar-icon-cover">{item.icon}</span>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SlideBar;
