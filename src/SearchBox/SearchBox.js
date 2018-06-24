// @flow
import './SearchBox.css';
import EventTarget from 'scanex-event-target';

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
        if (txtInput instanceof HTMLInputElement) {   
            this._txtInput = txtInput;
            this._txtInput.addEventListener ('change', this.doneHandler.bind(this));
            this._txtInput.addEventListener ('keydown', this.changeHandler.bind(this));
        }
        let btn = this._container.querySelector('i');
        if (btn instanceof HTMLElement) {
            btn.addEventListener('click', this.doneHandler.bind(this));
        }        
    }
    changeHandler (e: KeyboardEvent): void {
        switch (e.keyCode) {
            default:
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
                break;
        }        
    }
    doneHandler (e: Event): void {        
        let event = document.createEvent('CustomEvent');
        event.initEvent('done', false, false);
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