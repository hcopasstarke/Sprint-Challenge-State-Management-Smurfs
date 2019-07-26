import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';

class SmurfList extends Component {
    componentDidMount() {
        this.props.fetchSmurfs()
    }
    render() {
        console.log(this.props, 'These are my smurf homies.')
        return (
            <div>
                {this.props.smurfs.map((smurf, i) => {
                    return(
                    <div key={i}>
                        <h1>{smurf.name}</h1>
                        <h3>{smurf.age}</h3>
                        <h3>{smurf.height}</h3>
                    </div>
                )})}
            </div>
        );
    }
}

const mapStateToProps = ({smurfs}) => {
    console.log(smurfs)
    return {smurfs}
} 

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);