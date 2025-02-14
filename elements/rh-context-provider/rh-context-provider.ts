import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import contextStyle from '../../lib/context/color/context-color.css';
import style from './rh-context-provider.css';

@customElement('rh-context-provider')
export class RhContextProvider extends LitElement {
  static readonly styles = [contextStyle, style];

  /**
   * Sets color palette, which affects the element's styles as well as descendants' color theme.
   * Overrides parent color context.
   * Your theme will influence these colors so check there first if you are seeing inconsistencies.
   * See [CSS Custom Properties](#css-custom-properties) for default values
   */
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  render() {
    return html`<slot @slotchange=${this.#onSlotchange}></slot>`;
  }

  #onSlotchange() {
    this.requestUpdate('colorPalette');
  }
}
