---
title: 'Lab 27: React Query Refactor'
---

## Objectives

## Steps

0. **Start** with the **Lab 26** solution code.
1. Install React Query and React Query Devtools.
2. Configure **React Query Client** provider.
3. Configure **React Query Devtools**.
4. Refactor `useProjects` custom hook to use useQuery. For now just get the first page of results don’t worry about pagination or keeping track of the current page. Also don't worry about saving projects yet, we will do that next.
5. Create and use a `useSaveProject` custom hook using React Query’s useMutation.
6. Use React Query’s `isFetching` status to shown when data is refreshing.
7. Bonus: Update `useProjects` to use the `useInfiniteQuery` hook.
8. Solution code available in branch `react-query`
