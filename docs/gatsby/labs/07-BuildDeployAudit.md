---
title: "Build & Deploy"
---

```
gatsby develop
gatsby serve
```

1. Open Incognito Tab
1. Open Site
1. Open Google Chrome Devtools
1. Lighthouse Tab
1. Click Generate Report button

Set specific height and width on images:

```diff
<img
className="rounded-md shadow-md"
+ style={{ width: "600px", height: "300px" }}
src="https://source.unsplash.com/600x300/?corporate,office,building"
alt="corporate,office,building"
/>
```

## PWA

[Steps to Enable PWA](https://www.gatsbyjs.com/docs/tutorial/part-eight/)
