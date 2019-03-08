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
