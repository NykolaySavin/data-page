import { createReducer } from 'redux-act';
import {state} from './state/app.state';
import * as menuReducer from './modules/menu.select.module';
import * as contentReducer from './modules/content.fetch.module';

export default createReducer({...menuReducer.reducer,...contentReducer.reducer},state);