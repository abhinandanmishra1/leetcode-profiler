import App from "./App.tsx";
import { LeetcodeProfilerProvider } from "@leetcode/services";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <LeetcodeProfilerProvider>
    <App />
  </LeetcodeProfilerProvider>
);
