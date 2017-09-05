import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';

import '../../css/StartForm.css';
import * as uiActions from '../actions/UIActions';
import * as settingsActions from '../actions/SettingsActions';

class StartForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            settings: {
                title: '',
                amount: 0,
                type: 'single'
            },
            amountError: false
        };
    }

    titleInputHandler = e => {
        this.setState({ settings: { ...this.state.settings, title: e.target.value } });
    };

    numFieldHandler = e => {
        const value = e.target.value;
        if (value < 4 || value > 128 || value.search(/[^0-9]/g) > -1) {
            this.setState({
                amountError: true,
                settings: { ...this.state.settings, amount: +value }
            });
        } else {
            this.setState({
                amountError: false,
                settings: { ...this.state.settings, amount: +value }
            });
        }
    };

    selectHandler = e => {
        this.setState({ settings: { ...this.state.settings, type: e.target.value } });
    };

    generateGrid = e => {
        e.preventDefault();
        e.stopPropagation();
        if (!this.state.amountError) {
            const { saveSettings } = this.props.settingsActions;
            const { triggerForm } = this.props.uiActions;
            saveSettings(this.state.settings);
            triggerForm();
        }
    };

    render() {
        return (
            <div className="start-form">
                <form className="start-form__content" onSubmit={this.generateGrid}>
                    <h1 className="start-form__title">Create new grid</h1>
                    <div className="start-form__input-wrap">
                        <input
                            type="text"
                            className="start-form__input"
                            placeholder="Tournament title"
                            onChange={this.titleInputHandler}
                            required
                        />
                    </div>
                    <div className="start-form__input-wrap">
                        <input
                            type="text"
                            className={classnames('start-form__input', {
                                'start-form__input--error': this.state.amountError
                            })}
                            placeholder="Number of teams"
                            onChange={this.numFieldHandler}
                            required
                        />
                    </div>
                    <p className="start-form__note">
                        <span className="start-form__note--bold">Note:</span> the number of teams
                        must be between 4 and 128
                    </p>
                    <div className="start-form__select-wrap">
                        <select
                            name="tour-type"
                            id="tour-type"
                            className="start-form__select"
                            onChange={this.selectHandler}
                        >
                            <option value="single" defaultValue>
                                Single Elimination
                            </option>
                            <option value="double">Double Elimination</option>
                        </select>
                    </div>
                    <div className="start-form__btn-wrap">
                        <button type="submit" className="start-form__submit-btn">
                            Generate
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

StartForm.propTypes = {
    ui: PropTypes.object.isRequired,
    uiActions: PropTypes.object.isRequired,
    settingsActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        ui: state.ui
    };
}

function mapDispatchToProps(dispatch) {
    return {
        uiActions: bindActionCreators(uiActions, dispatch),
        settingsActions: bindActionCreators(settingsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StartForm);
