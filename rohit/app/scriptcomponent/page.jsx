"use client";

import Script from "next/script";
import React from "react";

const ScriptComponet = () => {
  return (
    <div>
      <h1>This is scirpt component</h1>
      <Script
        src="/features.js"
        onLoad={() => {
          console.log("me load ho rha hu bhai");
          alert("me jag gaya bhai");
        }}
      />
    </div>
  );
};

export default ScriptComponet;
