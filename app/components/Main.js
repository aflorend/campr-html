// React Dependencies
const React = require('react');
const ReactDOM = require('react-dom');

// require components
const Overview = require('./children/Overview');

var Main = React.createClass({
  render: function() {
    return (
      <div class="wrapper">
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
              // <!-- Title -->
              <span class="mdl-layout-title">CAMPR</span>
              // <!-- Add spacer, to align navigation to the right -->
              <div class="mdl-layout-spacer"></div>
              // <!-- Navigation. We hide it in small screens. -->
              <nav class="mdl-navigation mdl-layout--large-screen-only">
                <a class="mdl-navigation__link" href="">Link</a>
                <a class="mdl-navigation__link" href="">Link</a>
                <a class="mdl-navigation__link" href="">Link</a>
                <a class="mdl-navigation__link" href="">Link</a>
              </nav>
            </div>
          </header>
        <div class="mdl-layout__drawer">
          <span class="mdl-layout-title">CAMPR</span>
          <nav class="mdl-navigation">
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
          </nav>
        </div>

        // <!-- Content -->
        <main class="mdl-layout__content">
          <div class="page-content">
            <div class="mdl-grid">



            </div>
          </div>
        </main>
        // <!-- Content -->
      </div>
      // <!-- Wrapper -->
    );
  }
})

module.exports = Main;
