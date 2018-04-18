import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';
import { bindActionCreators } from 'redux';
import Converter from '../../components/Converter';

const mapStateToProps = (state) => {
    return {
        eurValue: state.converter.eurValue,
        exValue: state.converter.exValue
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Converter);