1. React Project Configiration
   1. package.json
      1. react
         1. React Object Model
            1. Component class
               1. state property
               2. props property
      2. react-dom
         1. Render the DOM with
            1. Events
            2. Property Values
      3. babel-core
         1. Babel Transpiler for Modern JavaScript / High-Level JavaScript aka ES6
      4. babel-cli
         1. CLI commands for transpilation
      5. babel-loader
         1. Manage ES 6 Module Loading for the current application
            1. export and import
      6. babel-preset-es2015
         1. The Babel Transpilation for ES 6 to ES 3
      7. babel-preset-react
         1. The Babel Transpilation for React Object Model
   2. package.json developer dependencies
      1. webpack
         1. Module-Loader for the Application Build after transpilation
            1. Loads
               1. babel
               2. react
               3. preset
      2. webpack-dev-server
         1. Server-Side hosting for React applications
         2. The --hot switch
            1. Auto-Refresh the React Application using the react-hot-loader package
      3. bootstrap
2. npm install -g create-react-app, boilerplate template for react application

====================================================================================================================================
Working with React App

1. Contents of React Applications
   1. Components
      1. Rules for Component Creation
         1. Name of Component MUST be Pascal Case
         2. MUST be derived from Component class from react module
         3. Must implement render() method
         4. Component MUST be exportable
   2. JSX files
   3. State
   4. Services
   5. React + Redux
      1. Action
      2. ActionCreator
      3. Reducer
      4. Store
      5. Dispatcher
      6. Store Mapper with State
2. Creating Component
   1. Define DOM
      1. Define properties
      2. Define events
   2. Define State
3. React Component Types
   1. Stateless Component
      1. Not Having any State (data)
      2. They just have HTML
   2. Stateful Component
      1. Have state (data) local to Component class
         1. The 'props' JSON Object-property
            1. Data used to share / exchange across components
            2. Data passed from Parent Component to Child Component
            3. The 'Custom Attributes' for Components will be treated as 'Dynamic Properties' using 'props'
         2. The 'state' JSON Object-property property
            1. Represents the state of the data local to component
            2. The state data can be read/written based on data-binding and events with UI Elements in the component.
            3. When the stateful components has ctor, then its has a 'props' parameter, that represents the relationship aka linking with parent component.
            4. Uni-Directional Data-Flow
               1. Local State (or props) data will be bind with HTML Element using the 'default event' of the element.
            5. Syntax of Binding with HTML Value Elements (input, select) is as below
               1. <TAG value={this.state.<STATE-PROPERTY>}>
               2. For Uni-Directional Binding for HTML input and select elements specify the OnChange event so that the state property can be updated. To the OnChange event, bind the method of component class, this method will update state property value using
                  1. this.setState() method
      2. These are used in Line-Of-Business (LOB) apps
      3. They have events for UI Elements
      4. Two-Types for Stateful component
         1. Controlled Component (recommended)
         2. UnControlled Component (will be depricated)

#=================================================================#=================================================================

Controlled Stateful component for data sharing across

1. Component's reusability is the most important part of React Application Development.
2. Create Once and render multiple times is the Component's reusability principal.
3. When Components are having Parent-Child relationship, then parent can send data to child using "props" property of the component
   1. Using this, the parent component can also listens changes made by child component.
4. To bind single method to all input and select elements to be executed based on 'change' event to read values, set 'name' attribute to all element
   1. Imp. Note: The 'name' attribute must have value same of 'the state property' of the component of which value to be set

#=================================================================================#=================================================================================
Aysc REST Calls, the JavaScript Objects are

1. fetch
   1. Pure ES 6 object
   2. fetch(url,options JSON Object);
      1. options
         1. method: GET/POST/PUT/DELETE
         2. body:JSON data to be passed
         3. headers:{MIME Type, AUTHORIZATIOn}
      2. return "Promise" object with 2 Phase exection
         1. then() --> Method to complete the subscription and fetch data
         2. then() --> to use the data on client-side
         3. catch() --> error
      3. fetch().then().then().catch()
2. axios
   1. npm install --save-dev axios
   2. Promise based object
   3. The Object used for performing ajax calls from React Applications
      1. get() / post() / put() /delete()
         1. all these returns promise object
         2. be default JSON based
      2. The post() and put() method directly access body object
         1. axios.post(url, data, headers);
            1. data: Object that will be passed as JSON
               1. JavaScript Object
               2. JSON {}
3. thunk
   1. Generally used along with axios for Redux Applications
4. request
   1. npm install --save-dev request
      1. For ES 6 Node Based applications
      2. The Service Side object

All these are "PROMISE" based objects
#==========================================================================================#==========================================================================================
React 16.x

1. Functional Component
   1. Fast, High-Reusable function objects, those are responsible for rendering reusable HTML elements.
      1. Facts
         1. Do not have state
         2. No-Lifecycle hooks
         3. Autonomous object for self-defined functionality
      2. Syntax
         1. const <function-name>=({parameters})=>(logic and HTML)
      3. When to use them?
         1. Same UI to be used across various components
         2. Components with fixed number of properties
         3. We do not need lifecycle methods
      4. When not to use them?
         1. We want event handling for HTML elements inside component
         2. We need life-cycle method implementation, then use React standard class
2. Higher-Order-Component aks HOC
3. PropTypes
   1. prop-types includes in react 16.x
