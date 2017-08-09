import React from 'react';


class CoordinatesButton extends React.Component {

  constructor(props) {
    super(props);
  }

  newArray = (event) => {
     this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button onClick={this.newArray}>Button</button>
    );
  }
}


export default CoordinatesButton
