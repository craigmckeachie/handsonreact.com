---
title: 'Lab 26: Custom Hooks'
---

> This lab is optional and should only be done if time permits

## Objectives

- [ ] Move stateful logic out of components by creating Custom Hooks

## Steps

1. This lab is a refactor of the code from the solution of `lab22` so begin by checking out the `lab22` solution code and creating a working branch for this lab.

   ```
   git checkout lab22
   git checkout -b lab26working
   ```

2. Create a `projectHooks.js` file and add the following code.

#### `src\projects\projectHooks.js`

```js
import { useState, useEffect } from 'react';
import { projectAPI } from './projectAPI';
import { Project } from './Project';

export function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [saving, setSaving] = useState(false);
  const [savingError, setSavingError] = useState(undefined);

  useEffect(() => {
    async function loadProjects() {
      setLoading(true);
      try {
        const data = await projectAPI.get(currentPage);
        if (currentPage === 1) {
          setProjects(data);
        } else {
          setProjects((projects) => [...projects, ...data]);
        }
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, [currentPage]);

  const saveProject = (project) => {
    setSaving(true);
    projectAPI
      .put(project)
      .then((updatedProject) => {
        let updatedProjects = projects.map((p) => {
          return p.id === project.id ? new Project(updatedProject) : p;
        });
        setProjects(updatedProjects);
      })
      .catch((e) => {
        setSavingError(e.message);
      })
      .finally(() => setSaving(false));
  };

  return {
    projects,
    loading,
    error,
    currentPage,
    setCurrentPage,
    saving,
    savingError,
    saveProject,
  };
}
```

> Notice how this logic was directly lifted out of the `ProjectsPage` component.

2. Refactor the `ProjectsPage` component to remove the logic which is now in the hook and call the hook instead.

#### `src\projects\ProjectsPage.js`

```diff
-import React, { useState, useEffect } from 'react';
+import React from 'react';
 import ProjectList from './ProjectList';
-import { projectAPI } from './projectAPI';
-import { Project } from './Project';
+import { useProjects } from './projectHooks';

function ProjectsPage() {
-  const [projects, setProjects] = useState([]);
-  const [loading, setLoading] = useState(false);
-  const [error, setError] = useState(undefined);
-  const [currentPage, setCurrentPage] = useState(1);

-  useEffect(() => {
-    async function loadProjects() {
-      setLoading(true);
-      try {
-        const data = await projectAPI.get(currentPage);
-        if (currentPage === 1) {
-          setProjects(data);
-        } else {
-          setProjects((projects) => [...projects, ...data]);
-        }
-      } catch (e) {
-        setError(e.message);
-      } finally {
-        setLoading(false);
-      }
-    }
-    loadProjects();
-  }, [currentPage]);

+  const {
+    projects,
+    loading,
+    error,
+    setCurrentPage,
+    saveProject,
+    saving,
+    savingError,
+  } = useProjects();

   const handleMoreClick = () => {
     setCurrentPage((currentPage) => currentPage + 1);
   };

-  const saveProject = (project) => {
-    projectAPI
-      .put(project)
-      .then((updatedProject) => {
-        let updatedProjects = projects.map((p) => {
-          return p.id === project.id ? new Project(updatedProject) : p;
-        });
-        setProjects(updatedProjects);
-      })
-      .catch((e) => {
-        setError(e.message);
-      });
-  };
   return (
     <>
       <h1>Projects</h1>
+      {saving && <span className="toast">Saving...</span>}

-      {error && (
+      {(error || savingError) && (
         <div className="row">
           <div className="card large error">
             <section>
               <p>
                 <span className="icon-alert inverse "></span>
-                {error}
+                {error} {savingError}
               </p>
             </section>
           </div>
    </>
  );
}

export default ProjectsPage;

```

3. Test the application to verify all functionality works as it did previously including:
   - Loading projects
   - Loading more projects (pagination)
   - Saving an updated project

### &#10004; You have completed Lab 26
