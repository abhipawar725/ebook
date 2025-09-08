import React, { useState } from "react";

const Setting = () => {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    {
      label: "general",
      children: <h1>general content</h1>,
    },
    {
      label: "category",
      children: <h1>category content</h1>,
    },
    {
      label: "plans",
      children: <h1>plans content</h1>,
    },
  ];

  return (
    <>
      <div className="p-4 bg-white rounded">
        <div className="flex space-x-4 mb-4">
          {tabs.map((item, index) => (
            <button
              type="button"
              className={`px-3 py-2 text-sm font-medium rounded ${
                activeTab === item.label
                  ? "bg-indigo-800 text-white"
                  : "bg-slate-200 text-black"
              }`}
              key={index}
              onClick={() => setActiveTab(item.label)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div>{tabs.find((tab) => tab.label === activeTab)?.children}</div>
      </div>
    </>
  );
};

export default Setting;
