import { css, html, LitElement} from 'lit';
import { customElement, property } from 'lit/decorators.js';

type AlertType = 'error' | 'info' | 'warning';

@customElement('app-alert')
export class AppAlert extends LitElement {

    @property({ type: Boolean })
    visible: boolean = false;
    @property({ type: String })
    type: AlertType = 'error';
    
    static styles = css`
            .alert-error {
                padding: var(--padding-sm);
                margin-top: var(--spacing-md);
                text-align: center;
                border: 1px solid var(--error-color);
                border-radius: 0.5rem;
                background-color: var(--light-error-color);
                color: var(--error-color);
            }
            .alert-info {
                padding: var(--padding-sm);
                margin-top: var(--spacing-md);
                text-align: center;
                border: 1px solid var(--info-color);
                border-radius: 0.5rem;
                background-color: var(--light-info-color);
                color: var(--info-color);
            }
            .alert-warning {
                padding: var(--padding-sm);
                margin-top: var(--spacing-md);
                text-align: center;
                border: 1px solid var(--warning-color);
                border-radius: 0.5rem;
                background-color: var(--light-warning-color);
                color: var(--warning-color);
            }             
    `;

    render() {
        if (!this.visible) {
            return html``;
        }
        return html`
          <div class="alert-${this.type}" type="${this.type}" ?hidden="${!this.visible}">
            <h4><slot></slot></h4>
          </div>`;
    }
    

}