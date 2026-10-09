# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


1. What makes waitingTasks application state?
 - It’s a list that changes while the app runs, like when tasks are added or taken out. When it changes, the screen has to update to show it.
2. Why should the service queues and waiting queue share a common state owner?
 - When a task is admitted, it leaves the waiting list and joins a queue at the same moment. One shared owner keeps both lists matching, so nothing gets lost or doubled.
3. What is the difference between FIFO behavior and priority-based admission?
 - FIFO means the task that arrived first goes first, no matter what. Priority-based admission lets more important tasks go ahead of older ones.
4. Why must FIFO still be preserved among tasks having the same priority?
 - Tasks with the same importance should be treated fairly, so the one that waited longest goes first. Otherwise, an older task could be skipped over again and again.
5. Why is queue duration better treated as derived state?
 - The total can always be worked out from the tasks already in the queue. Saving it separately means a second copy that could get out of date and show the wrong number.
6. What could go wrong if you call waitingTasks.splice(...) directly?
 - It changes the original list in place, so React may not notice and the screen may not update. This can leave the display wrong or tasks missing or duplicated.
7. How do callback props allow a child component to cause a parent state change?
 - The parent passes a function down to the child. When the child calls it, like on a button click, the parent runs it and updates its own data.

    **Task board:** https://trello.com/b/wIG2UDZN/studyquest