import React from 'react'
import { Link, RouteHandler, IndexLink } from 'react-router'

import mui from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// import ThemeManager from 'material-ui/lib/styles/theme-manager';
// import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
// import Colors from 'material-ui/lib/styles/colors';

const AppBar = mui.AppBar
  , LeftNav = mui.LeftNav
  , MenuItem = mui.MenuItem;

const menuItems = [
  { route: '/', text: 'Home' },
  { route: 'about', text: 'About' },
  { route: 'login', text: 'Login' },
];


const Template = React.createClass({
  getInitialState : function() {
    return {
      tacos: [
        { name: 'duck confit' },
        { name: 'carne asada' },
        { name: 'shrimp' }
      ]
    }
  },

  _handleClick(e) {
    e.preventDefault();

    this.refs.leftNav.toggle();
  },

  // Get the selected item in LeftMenu
  _getSelectedIndex() {
    let currentItem;
    
    for (let i = menuItems.length - 1; i >= 0; i--) {
      currentItem = menuItems[i];
      if (currentItem.route && this.props.history.isActive(currentItem.route)) {
        return i;
      }
    }
    return 0
  },

  _onLeftNavChange(e, key, payload) {
    // Do DOM Diff refresh
    this.context.router.transitionTo(payload.route);
  },

  _taco(e) {
    console.log("_taco");
    e.preventDefault();

    const name = 'Derrek Taco '+(Date.now());

    this.state.tacos.push({name: name});
    this.setState({
        tacos: this.state.tacos
    })
  },

  render() {
    return (
      <div>
        <LeftNav
          ref="leftNav"
          docked={false}
          menuItems={menuItems}
          selectedIndex={this._getSelectedIndex()}
          onChange={this._onLeftNavChange} />

        <header>
          <AppBar title='ReactRouter/Webpack'
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this._handleClick} 
            onTitleTouchTap={this._taco} />
        </header>

        <ul>
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="login" activeClassName="active">Login</Link></li>
          <li><Link to="about" activeClassName="active">About</Link></li>
          <li><Link to="404" activeClassName="active">404</Link></li>
        </ul>

        { this.props.children && React.cloneElement(this.props.children, {
          appState: this.state
        }) }

        <footer>Footer</footer>
      </div>
    );
  }
});


Template.childContextTypes = {
  muiTheme: React.PropTypes.object
};

Template.contextTypes = {
  router: React.PropTypes.func
};

export default Template;