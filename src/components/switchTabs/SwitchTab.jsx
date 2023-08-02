import { useState } from "react";
import "./switchtab.scss";
const SwitchTab = ({ data, tabChangeHandler }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    tabChangeHandler(tab);
  };
  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <span
          key={index}
            className={`tabItem ${selectedTab===index ? "active" : ""}`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span className="movingBg" style={{left}}></span>
      </div>
    </div>
  );
};

export default SwitchTab;
