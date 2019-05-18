import { all } from 'redux-saga/effects';
import {watchFetchContent} from "../modules/content.fetch.module";

export default function* root() {
    yield all([watchFetchContent()]);
}