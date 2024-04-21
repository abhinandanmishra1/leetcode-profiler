import App from "./App.tsx";
import { LeetcodeProfilerProvider } from "@leetcode/services";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LeetcodeProfilerProvider>
      <App />
    </LeetcodeProfilerProvider>
  </React.StrictMode>
);
