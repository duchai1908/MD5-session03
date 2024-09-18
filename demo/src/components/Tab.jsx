import React, { useState } from "react";

export default function Tab() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    {
        id:0,
        title:"Trang chu"
    },
    {
        id:1,
        title:"Lộ trình"
    },
    {
        id:2,
        title:"Bài viết"
    },
  ]

  const handleActive = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <ul>
        {tabs.map((tab) => {
            return (
                <div key={tab.id}>
                    <button onClick={()=> handleActive(tab.id)} className={`${activeIndex === tab.id ? "active" : ""}`}>
                        {tab.title}
                    </button>
                </div>
            )
        })}
      </ul>
    </div>
  );
}
