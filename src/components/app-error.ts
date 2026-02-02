import { css, html, LitElement} from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-error')
export class AppError extends LitElement {

    static styles = css`
            .error-message {
                padding: var(--padding-sm);
                margin-top: var(--spacing-md);
                text-align: center;
                border: 1px solid var(--error-color);
                border-radius: 0.5rem;
                background-color: var(--light-error-color);
            }
    `;

    render() {
        return html`
          <div class="error-message">
            <h4 style="color: var(--error-color);">😒 An error occurred while fetching data. Please try again later.</h4>
          </div>`;
    }
    

}