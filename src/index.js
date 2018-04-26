// @flow

import SearchBox from './SearchBox';

let root = document.getElementById('root');

if (root != null) {
    let sbx = new SearchBox (root);
    console.log(sbx);
}