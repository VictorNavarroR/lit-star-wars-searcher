import {css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Character } from '../types/CharacterList';

@customElement('app-button')
export class AppButton extends LitElement {

    @property({type: Object})
    character: Character | undefined;

    handleClick(e: Event): void {
        const event = new CustomEvent('app-button-clicked', {
            detail: {
                character: this.character,
            },
            bubbles: true,
            composed: true
    });
        this.dispatchEvent(event);       
    }

    static styles = css`
            button {
                padding: var(--padding-md);
                border: 1px solid var(--primary-dark-color);
                border-radius: 0.25rem;
                background-color: var(--primary-color);
                color: var(--white-color);
                font-size: 1rem;
                box-shadow: var(--app-shadow);
            }
            button:hover {
                background-color: var(--primary-dark-color);
                cursor: pointer;
            }
            ` 

    render() {
        return html`
            <button @click="${this.handleClick}"><slot></slot></button>
        `;
    }
}