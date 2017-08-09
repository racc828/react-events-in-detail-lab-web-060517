import React from 'react'

export default class DelayedButton extends React.Component {

  constructor(props) {
    super(props);
  }

  newfunc = (event) => {
    event.persist()
    setTimeout (() => {this.props.onDelayedClick(event)}, this.props.delay)
  }

  render() {
    return (
        <button onClick={this.newfunc}>Button</button>
    )
  }

}
