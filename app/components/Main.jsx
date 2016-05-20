var React = require('react');
var Nav = require('Nav');

//A stateless component
var Main = (props) => {
  return (
      <div>
          <div>
            <div>
              <Nav/>
              <h1>Main.jsx Rendered</h1>
              {props.children}
            </div>
          </div>
      </div>
  );
};

module.exports = Main;
