// @flow

import SearchBox from './SearchBox';

let root = document.getElementById('root');
if (root instanceof HTMLElement) {
    let searchBox = new SearchBox (root);
    searchBox.addEventListener('change', e => console.log(e));   
    searchBox.addEventListener('done', e => console.log(e));
}