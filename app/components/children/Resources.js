// React Dependencies
const React = require('react');
const ReactDOM = require('react-dom');

var Resources = React.createClass({
  render: function() {
    return (
      <div class="mdl-cell mdl-cell--4-col mdl-color--white  resources">

            <div class="mdl-grid external-sources">
              <div class="mdl-cell mdl-cell--12-col">
                <div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
                  <div class="mdl-tabs__tab-bar">
                      <a href="#Videos-panel" class="mdl-tabs__tab is-active">Videos</a>
                      <a href="#Stackoverflow-panel" class="mdl-tabs__tab">Stackoverflow</a>
                      <a href="#MDN-panel" class="mdl-tabs__tab">MDN</a>
                  </div>

                  <div class="mdl-tabs__panel is-active" id="Videos-panel">
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
                  <div class="mdl-tabs__panel" id="Stackoverflow-panel">
                    <ul>
                      <li>Tywin</li>
                      <li>Cersei</li>
                      <li>Jamie</li>
                      <li>Tyrion</li>
                    </ul>
                  </div>
                  <div class="mdl-tabs__panel" id="MDN-panel">
                    <ul>
                      <li>Viserys</li>
                      <li>Daenerys</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="mdl-grid comments">
              <div class="mdl-cell mdl-cell--12-col comments-content">
                <h2>Comments</h2>
              </div>
            </div>

            <div class="mdl-grid moocs">
              <div class="mdl-cell mdl-cell--12-col">
                <h4>Continue your learning</h4>
              </div>
            </div>

          </div>

        </div>
      </div>
    </main>
    );
  }
})

module.exports = Resources;