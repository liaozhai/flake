// @flow

import url from './SearchBox.css';

class SearchBox {
    _container: HTMLElement;
    constructor (container: HTMLElement) {
        this._container = container;
        this._container.classList.add('search-box');
        this._container.innerHTML = `<input type="text" value="" /><i class="search-button"></i>`;
    }
}

export default SearchBox;