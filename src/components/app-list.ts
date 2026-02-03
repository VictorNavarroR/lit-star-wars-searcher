import {css, html, LitElement} from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { CharacterList } from '../types/CharacterList';

@customElement('app-list')
export class Applist extends LitElement {

    @property({ type: Object })
    characters: CharacterList = { 
        count: 0, 
        next: null, 
        previous: null, 
        results: [] 
    };

    static styles = css`
            .list {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                gap: 1rem;
            }

            `;

        render() {
        return html`
            <div class="list">
            ${this.characters.results.map(character => html`
                <app-card .character=${character}></app-card>
            `)}
            </div>
        `;
        }
    

}