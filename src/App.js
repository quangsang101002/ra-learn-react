import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = { studentName: 'Sang' };
    this.changeStudentName = this.changeStudentName.bind(this);
  }
  changeStudentName() {
    this.setState({ studentName: 'Quang' });
  }
  render() {
    return (
      <div className="App">
        studentName: {this.state.studentName}
        <button onClick={this.changeStudentName}>Click</button>
      </div>
    );
  }
}
export default App;
