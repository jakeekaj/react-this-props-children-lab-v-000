const React = require('react');

class ThemedDecorations extends React.Component {
  render() {
    const childrenWithNewPop = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme,
      });
    });

    return (
      <div>
        {childrenWithNewPop}
      </div>
    );
  }
}

module.exports = ThemedDecorations;