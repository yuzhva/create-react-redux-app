import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAPIData } from './actions';
import { selectApiData } from './selectors';

import logo from './logo.svg';

class App extends Component {
  componentWillMount() {
    this.props.actions.getAPIData();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          Your IP is: {this.props.apiData && this.props.apiData.origin.split(', ')[1]}
        </p>
      </div>
    );
  }
}

App.defaultProps = {
  apiData: {},
};

App.propTypes = {
  actions: PropTypes.object.isRequired,
  apiData: PropTypes.object,
};

const mapStateToProps = (state) => ({
  apiData: selectApiData(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ getAPIData }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
