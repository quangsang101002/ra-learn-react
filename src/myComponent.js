import React from 'react';

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>MyComponent{this.props.studentName}</h2>
      </div>
    );
  }
}
export default MyComponent;
