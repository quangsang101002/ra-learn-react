import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = { studentName: 'Quang' };
  }
  render() {
    return <div className="App">studentName: {this.state.studentName}</div>;
  }
}
export default App;
