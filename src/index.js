// @flow

import SearchBox from './SearchBox';

let root = document.getElementById('root');

if (root != null) {
    let searchBox = new SearchBox (root);
    searchBox.addEventListener('change', e => console.log(e));    
}