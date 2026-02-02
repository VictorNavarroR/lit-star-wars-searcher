import { css, html, LitElement} from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-modal')
export class AppModal extends LitElement {

    @property({ type: Boolean })
    visible: boolean = false;

    static styles = css`
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .modal-content {
                width: 80%;
                max-width: 500px;
                background-color: var(--white-color);
                padding: 0 var(--padding-lg) var(--padding-lg);
                border-radius: 0.5rem;
                box-shadow: var(--app-shadow);
            }
        `;


    render() {
        if (!this.visible) {
            return html``;
        }
        return html`
          <div class="modal-overlay">
            <div class="modal-content">
                <slot></slot>
                <app-button @click="${() => { this.visible = false; }}">Close</app-button>
            </div>
          </div>`;
    }
    

}