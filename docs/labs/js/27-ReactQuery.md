---
title: 'Lab 27: React Query Refactor'
---

<!--
git diff 9e548ac0ac4dd05c8e9778475a47351f6246f058..react-query-working -->

## Objectives

- [ ] Install React Query and React Query Devtools.
- [ ] Configure **React Query Client** provider and **React Query Devtools**.
- [ ] Refactor the `useProjects` custom hook to use useQuery.
- [ ] Create and use a `useSaveProject` custom hook using React Query’s useMutation.
- [ ] Use React Query’s `isFetching` status to shown when data is refreshing.

## Steps

### Install React Query and React Query Devtools.

1. **Start** with the **Lab 26** solution code.
2. Run the follow commands at a command-prompt or terminal (be sure you are in the keeptrack directory).

#### npm

```sh
npm install react-query
```

OR

#### yarn

```
yard add react-query
```

### Configure **React Query Client** provider and **React Query Devtools**.

1.  Wrap the `App` component in a `ReactQueryCacheProvider` and add the `ReactQueryDevtools` inside of the provider. Also, create a `QueryCache` and pass it to the `ReactQueryCacheProvider`.

#### `src/index.js`

```diff
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
+import { QueryClientProvider, QueryClient } from 'react-query';
+import { ReactQueryDevtools } from 'react-query/devtools';

+const queryClient = new QueryClient();

 ReactDOM.render(
   <React.StrictMode>
-    <App />
+    <QueryClientProvider client={queryClient}>
+      <App />
+      <ReactQueryDevtools initialIsOpen={false} />
+    </QueryClientProvider>
   </React.StrictMode>,
   document.getElementById('root')
 );
```

### Refactor the `useProjects` custom hook to use `useQuery` and create a `useSaveProject` custom hook that uses `useMutation`.

- Use React Query’s `isFetching` status to shown when data is refreshing.
- Update `useProjects` to use support next, previous pagination.

1. Update the hooks.

#### `src/projects/projectHooks.js`

```diff
-import { useState, useEffect } from 'react';
 import { projectAPI } from './projectAPI';
-import { Project } from './Project';
+import { useMutation, useQuery, useQueryClient } from 'react-query';
+import { useState } from 'react';

 export function useProjects() {
-  const [projects, setProjects] = useState([]);
-  const [loading, setLoading] = useState(false);
-  const [error, setError] = useState(undefined);
-  const [currentPage, setCurrentPage] = useState(1);
-  const [saving, setSaving] = useState(false);
-  const [savingError, setSavingError] = useState(undefined);
+  const [page, setPage] = useState(0);

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
+  let queryInfo = useQuery(['projects', page], () => projectAPI.get(page + 1), {
+    keepPreviousData: true,
+    staleTime: 5000,
+  });

-  const saveProject = (project) => {
-    setSaving(true);
-    projectAPI
-      .put(project)
-      .then((updatedProject) => {
-        let updatedProjects = projects.map((p) => {
-          return p.id === project.id ? new Project(updatedProject) : p;
-        });
-        setProjects(updatedProjects);
-      })
-      .catch((e) => {
-        setSavingError(e.message);
-      })
-      .finally(() => setSaving(false));
-  };
+  return { ...queryInfo, page, setPage };
+}

-  return {
-    projects,
-    loading,
-    error,
-    currentPage,
-    setCurrentPage,
-    saving,
-    savingError,
-    saveProject,
-  };
+export function useSaveProject() {
+  const queryClient = useQueryClient();
+  return useMutation((project) => projectAPI.put(project), {
+    onSuccess: () => queryClient.invalidateQueries('projects'),
+  });
+ }
```

2. Update the `ProjectsPage` to use the updated hook.

#### `src/projects/ProjectsPage.js`

```diff
function ProjectsPage() {
-  const {
-    projects,
-    loading,
-    error,
-    setCurrentPage,
-    saveProject,
-    saving,
-    savingError,
-  } = useProjects();
-
-  const handleMoreClick = () => {
-    setCurrentPage((currentPage) => currentPage + 1);
-  };
+  const { data, isLoading, error, isFetching, page, setPage, isPreviousData } =
+    useProjects();

   return (
     <>
       <h1>Projects</h1>
-      {saving && <span className="toast">Saving...</span>}
-
-      {(error || savingError) && (
+      {isLoading && (
+        <div className="center-page">
+          <span className="spinner primary"></span>
+          <p>Loading...</p>
+        </div>
+      )}
+      {isFetching && <span className="toast">Refreshing...</span>}
+      {error && (
         <div className="row">
           <div className="card large error">
             <section>
               <p>
                 <span className="icon-alert inverse "></span>
-                {error} {savingError}
+                {error.message}
               </p>
             </section>
           </div>
         </div>
       )}
-
-      <ProjectList projects={projects} onSave={saveProject} />
-
-      {!loading && !error && (
-        <div className="row">
-          <div className="col-sm-12">
-            <div className="button-group fluid">
-              <button className="button default" onClick={handleMoreClick}>
-                More...
-              </button>
-            </div>
-          </div>
-        </div>
-      )}
-
-      {loading && (
-        <div className="center-page">
-          <span className="spinner primary"></span>
-          <p>Loading...</p>
-        </div>
-      )}
+      {!isLoading && !error && <ProjectList projects={data} />}
+      <div>Current Page: {page + 1}</div>
+      <button
+        onClick={() => setPage((old) => Math.max(old - 1, 0))}
+        disabled={page === 0}
+      >
+        Previous Page
+      </button>{' '}
+      <button
+        onClick={() => {
+          setPage((old) => old + 1);
+        }}
+        disabled={isPreviousData}
+      >
+        Next Page
+      </button>
     </>
   );
 }
```

3. Update the `ProjectForm` to use the new `useSaveProject` hook.

#### `/src/projects/ProjectForm.js`

```diff
-function ProjectForm({ project: initialProject, onSave, onCancel }) {
+function ProjectForm({ project: initialProject, onCancel }) {
   const [project, setProject] = useState(initialProject);
   const [errors, setErrors] = useState({
     name: '',
     description: '',
     budget: '',
   });
+  const { mutate: saveProject, isLoading } = useSaveProject();
+
   const handleSubmit = (event) => {
     event.preventDefault();
     if (!isValid()) return;
-    onSave(project);
+    saveProject(project);
   };

   return (
-    <form className="input-group vertical" onSubmit={handleSubmit}>
-      <label htmlFor="name">Project Name</label>
-      <input
-        type="text"
-        name="name"
-        placeholder="enter name"
-        value={project.name}
-        onChange={handleChange}
-      />
-      {errors.name.length > 0 && (
-        <div className="card error">
-          <p>{errors.name}</p>
-        </div>
-      )}
-      <label htmlFor="description">Project Description</label>
-      <textarea
-        name="description"
-        placeholder="enter description"
-        value={project.description}
-        onChange={handleChange}
-      />
-      {errors.description.length > 0 && (
-        <div className="card error">
-          <p>{errors.description}</p>
-        </div>
-      )}
+    <>
+      {isLoading && <span className="toast">Saving...</span>}
+
+      <form className="input-group vertical" onSubmit={handleSubmit}>
+        <label htmlFor="name">Project Name</label>
+        <input
+          type="text"
+          name="name"
+          placeholder="enter name"
+          value={project.name}
+          onChange={handleChange}
+        />
+        {errors.name.length > 0 && (
+          <div className="card error">
+            <p>{errors.name}</p>
+          </div>
+        )}
+        <label htmlFor="description">Project Description</label>
+        <textarea
+          name="description"
+          placeholder="enter description"
+          value={project.description}
+          onChange={handleChange}
+        />
+        {errors.description.length > 0 && (
+          <div className="card error">
+            <p>{errors.description}</p>
+          </div>
+        )}

-      <label htmlFor="budget">Project Budget</label>
-      <input
-        type="number"
-        name="budget"
-        placeholder="enter budget"
-        value={project.budget}
-        onChange={handleChange}
-      />
-      {errors.budget.length > 0 && (
-        <div className="card error">
-          <p>{errors.budget}</p>
+        <label htmlFor="budget">Project Budget</label>
+        <input
+          type="number"
+          name="budget"
+          placeholder="enter budget"
+          value={project.budget}
+          onChange={handleChange}
+        />
+        {errors.budget.length > 0 && (
+          <div className="card error">
+            <p>{errors.budget}</p>
+          </div>
+        )}
+        <label htmlFor="isActive">Active?</label>
+        <input
+          type="checkbox"
+          name="isActive"
+          checked={project.isActive}
+          onChange={handleChange}
+        />
+        <div className="input-group">
+          <button className="primary bordered medium">Save</button>
+          <span />
+          <button type="button" className="bordered medium" onClick={onCancel}>
+            cancel
+          </button>
+         </div>
-      )}
-      <label htmlFor="isActive">Active?</label>
-      <input
-        type="checkbox"
-        name="isActive"
-        checked={project.isActive}
-        onChange={handleChange}
-      />
-      <div className="input-group">
-        <button className="primary bordered medium">Save</button>
-        <span />
-        <button type="button" className="bordered medium" onClick={onCancel}>
-          cancel
-        </button>
-      </div>
-    </form>
+      </form>
+    </>
   );
 }

 ProjectForm.propTypes = {
   project: PropTypes.instanceOf(Project),
   onCancel: PropTypes.func.isRequired,
-  onSave: PropTypes.func.isRequired,
 };

 export default ProjectForm;
```

4. Remove the passing and references to `saveProject` throughout the remaing component in the hierarchy `ProjectList`.

#### `src/projects/ProjectList.js`

```diff
function ProjectList({ projects, onSave }) {
       {projects.map((project) => (
         <div key={project.id} className="cols-sm">
           {project === projectBeingEdited ? (
-            <ProjectForm
-              project={project}
-              onSave={onSave}
-              onCancel={cancelEditing}
-            />
+            <ProjectForm project={project} onCancel={cancelEditing} />
           ) : (
             <ProjectCard project={project} onEdit={handleEdit} />
           )}
        ...
  }

 ProjectList.propTypes = {
   projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired,
-  onSave: PropTypes.func.isRequired,
 };

 export default ProjectList;
```

### &#10004; You have completed Lab 27
