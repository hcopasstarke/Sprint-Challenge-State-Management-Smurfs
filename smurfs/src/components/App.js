import React, { Component } from "react";
import "./App.css";

import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

import { fetchSmurfs, addSmurf, deleteSmurf } from '../actions/index';
import { connect } from 'react-redux';
class App extends Component {
  render() {
    const { fetchSmurfs, addSmurf, deleteSmurf, smurfs } = this.props;
    return (
      <div className="App">
        <h1>SMURF WORLD!</h1>
        <SmurfForm addSmurf={addSmurf} deleteSmurf={deleteSmurf} />
        <SmurfList fetchSmurfs={fetchSmurfs} smurfs={smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    isLoading: state.isLoading,
    error: state.error,
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs, addSmurf, deleteSmurf }
)(App);
