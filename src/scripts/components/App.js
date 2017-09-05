import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../../css/App.css';
import * as uiActions from '../actions/UIActions';
import StartForm from './StartForm';
import Tournament from './Tournament';

class App extends Component {
    render() {
        const { showStartModal } = this.props.ui;
        return (
            <div className="main-app">{(showStartModal && <StartForm />) || <Tournament />}</div>
            // <Tournament />
        );
    }
}

App.propTypes = {
    ui: PropTypes.object.isRequired,
    uiActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        ui: state.ui
    };
}

function mapDispatchToProps(dispatch) {
    return {
        uiActions: bindActionCreators(uiActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
