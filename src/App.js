import React from 'react';

class App extends React.Component {
  render() {
    let dateTime = new Date();
    return (
      <div>
        <h2>Đồng Hồ</h2>
        {dateTime.toLocaleTimeString()}
      </div>
    );
  }
}
export default App;
