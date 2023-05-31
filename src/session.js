import React from 'react';

class Bai1 extends React.Component {
  sum(nb1, nb2) {
    return nb1 + nb2;
  }

  render() {
    const nb1 = 2;
    const nb2 = 3;
    return (
      <div className="App">
        Tổng của {nb1} và {nb2} là {this.sum(nb1, nb2)}
      </div>
    );
  }
}
export default Bai1;
