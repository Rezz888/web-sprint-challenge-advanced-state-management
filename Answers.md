1. What problem does the context API help solve?
- Simplify state manaegment by eliminaitng the need for prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
- Actions :Function that takes in dispatch cases from reducers so they can work together to manage the state data flow 
  Reducers: Holds initial state for the app as well as well as for the reducers function which hold cases and return value depending on the corresponsding action.
  Store: It is a one stop shop for all application level state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
- Application level is global and component level is localized.
Component level is used only in a specific component. 
Application level state is accessed by all components as per necessary.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk is middleware that returns functions instead of objects regarding our action creators.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
- Context API because of its easy use case.
