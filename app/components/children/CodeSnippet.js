// React Dependencies
const React = require('react');
const ReactDOM = require('react-dom');

var CodeSnippet = React.createClass({
  render: function() {
    return (
          <div class="mdl-cell mdl-cell--5-col  code-snippet">
            <div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
              <div class="mdl-tabs__tab-bar">
                  <a href="#Exercise-1-panel" class="mdl-tabs__tab is-active">Exercise-1</a>
                  <a href="#Exercise-2-panel" class="mdl-tabs__tab">Exercise-2</a>
                  <a href="#Exercise-3-panel" class="mdl-tabs__tab">Exercise-3</a>
              </div>

              <div class="mdl-tabs__panel is-active" id="Exercise-1-panel">
                <ul>
                  <li>Eddard</li>
                  <li>Catelyn</li>
                  <li>Robb</li>
                  <li>Sansa</li>
                  <li>Brandon</li>
                  <li>Arya</li>
                  <li>Rickon</li>
                </ul>
              </div>
              <div class="mdl-tabs__panel" id="Exercise-2-panel">
                <ul>
                  <li>Tywin</li>
                  <li>Cersei</li>
                  <li>Jamie</li>
                  <li>Tyrion</li>
                </ul>
              </div>
              <div class="mdl-tabs__panel" id="Exercise-3-panel">
                <ul>
                  <li>Viserys</li>
                  <li>Daenerys</li>
                </ul>
              </div>
            </div>

          </div>
    );
  }
})

module.exports = CodeSnippet;