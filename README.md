# Leetcode Profiler

The **Leetcode Profiler** is an npm package that allows you to integrate Leetcode components into your personal projects. Use it to showcase your data structures and algorithms (DSA) knowledge and practices.

## Usage Instructions

1. Initialize a React project by running `npx create-react-app my-leetcode-project`.
2. Install the **Leetcode Profiler** package using `npm install leetcode-profiler`.
3. In your `src/index.tsx` (or `src/main.tsx`) file, make the following changes:

```tsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Your main application component

import { LeetcodeProfilerProvider } from "leetcode-profiler";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LeetcodeProfilerProvider>
      <App />
    </LeetcodeProfilerProvider>
  </React.StrictMode>
);
```

4. Now you can use Leetcode components anywhere in your project. For example:

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
  return (
    <div className="flex flex-col md:flex-row gap-4 bg-dark-layer-bg min-h-screen p-4">
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <div className="min-h-[200px] max-h-[300px]">
          <LeetcodeContestRatingGraph username="abhinandan_mishra_1" />
        </div>

        <div className="min-h-[200px] max-h-[300px]">
          <LeetcodeTopRatingHistogram username="abhinandan_mishra_1" />
        </div>
      </div>
      <div className="relative w-full p-2 flex flex-col gap-2">
        <LeetcodeSolvedProblemsStats username="abhinandan_mishra_1" />
        <LeetcodeSubmissionsHeatmap username="abhinandan_mishra_1" />
        <LeetcodeBadges username="abhinandan_mishra_1" />
      </div>
    </div>
  );
};

export default Example;
```

> Remember to install and initialize Tailwind CSS to apply styling to the above component.
Happy coding! 🚀🔥
