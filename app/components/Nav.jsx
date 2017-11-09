const React = require('react');
const {Link, IndexLink} = require('react-router');

let Nav = React.createClass({
    render: function() {
        return (
            <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">React Timer</li>
                    <li>
                        <IndexLink to='/' activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
                    </li>
                    <li>
                        <Link to='/about' activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>CountDown</Link>    
                    </li>
                </ul>
            </div>
            <div className="top-bar-right menu-text">
                Coded by <a href="https://github.com/no-riders" target="_blank">no-riders</a>
            </div>
            </div>
        )
    }
});

module.exports = Nav;