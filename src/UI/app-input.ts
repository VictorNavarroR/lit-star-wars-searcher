import {html, LitElement, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-input')
export class AppInput extends LitElement {

    @property()
    placeholder: string = 'Search a Star Wars character';

    handleInput(e: Event): void {
        const target = e.target as HTMLInputElement;
        const event = new CustomEvent('app-input-changed', {
            detail: {
                message: target.value,
            },
            bubbles: true,
            composed: true
    });
        this.dispatchEvent(event);       
    }
    

    static styles = css`
            input {
                width: 100%;
                padding: var(--padding-md);
                border: 1px solid var(--gray-color );
                border-radius: 0.25rem;
                font-size: 1rem;
                box-shadow: var(--app-shadow);
                box-sizing: border-box;
            }
        `  

    render() {
        return html`
            <input type="text" placeholder="${this.placeholder}" @input="${this.handleInput}" />
        `;
    }
    

}