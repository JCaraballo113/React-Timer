var React = require('react');

var Timer = React.createClass({
  render: function() {
    return (
      <div>
        <p>Timer rendered from {this.props.routeName}</p>
      </div>
    )
  }
});
