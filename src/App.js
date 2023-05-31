import React from 'react';
import MyComponent from './myComponent';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyComponent studentName="Quang"></MyComponent>
      </div>
    );
  }
}
export default App;
