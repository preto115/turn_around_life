/* 

Redux: Write a Counter with Redux
Now you've learned all the core principles of Redux! You've seen how to create actions and action creators, create a Redux store, dispatch your actions against the store, and design state updates with pure reducers. You've even seen how to manage complex state with reducer composition and handle asynchronous actions. These examples are simplistic, but these concepts are the core principles of Redux. If you understand them well, you're ready to start building your own Redux app. The next challenges cover some of the details regarding state immutability, but first, here's a review of everything you've learned so far.

In this lesson, you'll implement a simple counter with Redux from scratch. The basics are provided in the code editor, but you'll have to fill in the details! Use the names that are provided and define incAction and decAction action creators, the counterReducer(), INCREMENT and DECREMENT action types, and finally the Redux store. Once you're finished you should be able to dispatch INCREMENT or DECREMENT actions to increment or decrement the state held in the store. Good luck building your first Redux app!

*/

const INCREMENT = 'INCREMENT'; // define a constant for increment action types
const DECREMENT = 'DECREMENT'; // define a constant for decrement action types

const counterReducer = (state = 0 , action) => {
  switch(action.type){
    case INCREMENT:
      return state + action.value;
    case DECREMENT:
      return state - action.value;
    default: return state;
  }
};
// define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = () => {
  return {
    type: INCREMENT,
    value: 1,
  }
}; 
// define an action creator for incrementing

const incBy10Action = () => {
  return {
    type: INCREMENT,
    value: 10,
  }
}; 
// define an action creator for incrementing
const decAction = ()=> {
  return {
    type: DECREMENT,
    value: 1,
  }
}; 
// define an action creator for decrementing

const store = Redux.createStore(counterReducer); 
// define the Redux store here, passing in your reducers

console.log(store.getState())
store.dispatch(incAction())
console.log(store.getState())
store.dispatch(incBy10Action())
console.log(store.getState())
store.dispatch(decAction())
store.dispatch(decAction())
console.log(store.getState())
