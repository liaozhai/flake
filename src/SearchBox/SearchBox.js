// @flow

import url from './SearchBox.css';
import EventTarget from '../../lib/EventTarget/src/EventTarget.js';

class SearchBox extends EventTarget {
    _container: HTMLElement;
    _placeholder: string;
    _txtInput: HTMLInputElement;
    constructor (container: HTMLElement) {
        super();
        this._container = container;
        this._placeholder = 'Enter search string';
        this._container.classList.add('search-box');
        this._container.innerHTML = `<input type="text" placeholder="${this._placeholder}" value="" /><i class="search-button"></i>`;
        let txtInput = this._container.querySelector('input');
        if (txtInput != null) {
            this._txtInput = (txtInput: HTMLInputElement);
            this._txtInput.addEventListener ('change', this.searchHandler.bind(this));
        }
        let btn = this._container.querySelector('i');
        if (btn != null) {
            btn.addEventListener('click', this.searchHandler.bind(this));
        }        
    }
    searchHandler (e: Event): void {
        console.log(e);
        let event = document.createEvent('CustomEvent');
        event.initEvent('change', false, false);
        if (this._txtInput != null) {            
            Object.defineProperty(event, 'detail', {
                enumerable: false,
                configurable: false,
                writable: false,
                value: this._txtInput.value
            });
            this.dispatchEvent(event);
        }        
    }
}

export default SearchBox;