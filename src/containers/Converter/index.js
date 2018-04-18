import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';
import { bindActionCreators } from 'redux';
import Converter from '../../components/Converter';

const mapStateToProps = (state) => {
    return {
        eurValue: state.converter.eurValue,
        loading: state.converter.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Converter);