import {css, html, LitElement} from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Character } from '../types/CharacterList';

@customElement('app-card')
export class AppCard extends LitElement {

    @property({type: Object})
    character: Character | undefined;


    static styles = css`
            .card {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                width: 100%;
                min-height: 150px;
                border: 1px solid var(--gray-color);
                border-radius: .5rem;
                padding: var(--padding-md);
                margin-top: var(--spacing-lg);
                box-shadow: var(--app-shadow);
                box-sizing: border-box;
            }
            h2 {
                margin: 0 0 var(--spacing-sm) 0;
                color: var(--primary-color);
            }
            p {
                margin: 8px 0;
                color: var(--black-color);
            }
            `;

    render() {
        return html`
            <div class="card">
                <h2>${this.character?.name}</h2>
                <p><strong>Birth year:</strong> ${this.character?.birth_year}</p>
                <center>
                    <app-button .character=${this.character}>More details</app-button>
                </center>
            </div>
        `;
    }
    

}