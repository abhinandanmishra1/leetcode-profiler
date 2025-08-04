# Leetcode Profiler

The Leetcode Profiler is a React npm package that provides ready-to-use components for displaying LeetCode profile data. You can easily integrate components like contest rating graphs, solved problem statistics, badges, and submission heatmaps into your personal projects to showcase your Data Structures and Algorithms (DSA) knowledge and practices.


## 📦 Dependencies

This package fetches data from a backend server. A running instance of the server is required for the components to function correctly. You must provide the server's URL to the `<LeetcodeProfilerProvider>` component for the package to work.

**Backend Server Repository**: `coding-profile-server`

## 🚀 Usage Instructions

1. Initialize a React project:
   ```bash
   npx create-react-app my-leetcode-project

2. Install the Leetcode Profiler package:

   ```bash
   npm install leetcode-profiler
   ```

3. In your `src/index.tsx` (or `src/main.tsx`) file, set up the provider:

   ```tsx
   import React from "react";
   import ReactDOM from "react-dom";
   import App from "./App"; // Your main application component

   import { LeetcodeProfilerProvider } from "leetcode-profiler";

   const SERVER_URL = "https://your-deployed-server-url.com"; // Replace with your server URL

   ReactDOM.createRoot(document.getElementById("root")!).render(
     <React.StrictMode>
       <LeetcodeProfilerProvider serverUrl={SERVER_URL}>
         <App />
       </LeetcodeProfilerProvider>
     </React.StrictMode>
   );
   ```

## 💡 Example Usage

```tsx
import React from "react";
import {
  LeetcodeBadges,
  LeetcodeContestRatingGraph,
  LeetcodeSolvedProblemsStats,
  LeetcodeSubmissionsHeatmap,
  LeetcodeTopRatingHistogram,
} from "leetcode-profiler";

const Example = () => {
  const username = "abhinandan_mishra_1";

  return (
    <div className="flex flex-col md:flex-row gap-4 bg-dark-layer-bg min-h-screen p-4">
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <div className="min-h-[200px] max-h-[300px]">
          <LeetcodeContestRatingGraph username={username} />
        </div>

        <div className="min-h-[200px] max-h-[300px]">
          <LeetcodeTopRatingHistogram username={username} />
        </div>
      </div>

      <div className="relative w-full p-2 flex flex-col gap-2">
        <LeetcodeSolvedProblemsStats username={username} />
        <LeetcodeSubmissionsHeatmap username={username} />
        <LeetcodeBadges username={username} />
      </div>
    </div>
  );
};

export default Example;
```

## 🎨 Screenshots

![image](https://github.com/abhinandanmishra1/leetcode-profiler/assets/64205626/f78ba6d5-3c9f-46b5-9269-ae564e965130)
![image](https://github.com/abhinandanmishra1/leetcode-profiler/assets/64205626/5fe563a1-3454-4d4c-a3b8-a8d4f5b990d8)
![image](https://github.com/abhinandanmishra1/leetcode-profiler/assets/64205626/7c34e864-423e-433b-93c3-221e8b63a20e)


> Remember to install and initialize **Tailwind CSS** to apply styling to the above component.

---

## ✨ Happy coding! 🚀🔥
