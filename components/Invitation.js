const React = require('react');


class Invitation extends React.Component {
  render() {
    const title = "You've been invited!";
    return (
      <div className="panel">
        <h1 className="panel-header">{title}</h1>
        <div className="panel-body">{this.props.children}</div>
      </div>
    );
  }
}

module.exports = Invitation;