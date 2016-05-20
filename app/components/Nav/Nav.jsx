var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Time App</li>
          <li><IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink></li>
          <li><IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Countdown</IndexLink></li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">Created by <a href="https://github.com/JCaraballo113" target="_blank">John Caraballo</a></li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Nav;
