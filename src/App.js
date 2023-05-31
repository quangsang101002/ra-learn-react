import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = { text: 'hello' };
  }
  handelClick(value) {
    alert(value);
  }
  handelClick3() {
    const { text } = this.state;
    // alert(this.state.text);
    alert(text);
  }
  render() {
    return (
      <>
        <h1>ví dụ event</h1>
        <button onClick={() => this.handelClick('Button o1 click 01')}>
          Button 01
        </button>
        <button onClick={() => this.handelClick('Button o1 click 02')}>
          Button 02
        </button>
        <button onClick={() => this.handelClick3()}>Button 03</button>
      </>
    );
  }
}
export default App;
