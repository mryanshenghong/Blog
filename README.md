# Develop front-end part of Blog JIANSHU in React  
Demo Link: <http://111.230.9.58/Blog/#/>
***
## finished parts
1. Home page
2. Download page
3. login page
4. Detail page

## Todo List 
1. Online Text Editor in JIANSHU

## Tech Stack conclusion
1. Front-end router use HashRouter in react-router-dom  
Reason to choose HashRouter: all the data is mock data, stored in local and use HashRouter is handy.
2. State management use Redux & immutable.js [Core to learn]
All Components state managements are all in one format,
```
Component
│   index.js //UI Component
│   style.js //css style component
│
└───store
   │   index.js // export actions, functions in actionCreator and reducer
   │   reducer.js // store default state of this component
   |   actions.js // constans of the action names
   │   actionCreator.js // functions receive new state from UI Components to dispatch action to reducer

```
use 'Redux-thunk' as middleware and combine with axios to dispatch async http request in actionCreator
3. Use 'styled-component' to develop css part:
Advantage: pass parameters into css, and make a css like a Component, we can dynamically change variables in css

## Notice 
all the data in Demo comes from 简书 <www.jianshu.com>
I just used them for demo and please DO NOT copy them to business used.

