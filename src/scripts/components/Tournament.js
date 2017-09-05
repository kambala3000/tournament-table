import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../../css/Tournament.css';
import * as uiActions from '../actions/UIActions';

class Tournament extends Component {
    // constructor(props) {
    //     super(props);
    // }

    createNewGrid = () => {
        const { triggerForm } = this.props.uiActions;
        triggerForm();
    };

    render() {
        const { title } = this.props.settings;
        return (
            <div className="tournament">
                <div className="tournament__header">
                    <div className="tournament__header-wrap">
                        <h1 className="tournament__header-title">{title}</h1>
                        <p className="tournament__header-info">Single Elimination</p>
                    </div>
                    <button className="tournament__create-btn" onClick={this.createNewGrid}>
                        New tournament
                    </button>
                </div>
            </div>
        );
    }
}

Tournament.propTypes = {
    ui: PropTypes.object.isRequired,
    settings: PropTypes.object.isRequired,
    uiActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        ui: state.ui,
        settings: state.settings
    };
}

function mapDispatchToProps(dispatch) {
    return {
        uiActions: bindActionCreators(uiActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tournament);
