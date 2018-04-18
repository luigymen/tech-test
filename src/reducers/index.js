import { combineReducers } from 'redux';
import * as ConverterReducer from './Converter'
import initialState from '../state';

export default combineReducers(Object.assign(
    { converter: ConverterReducer.set(initialState) }
  ));