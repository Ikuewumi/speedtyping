import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('game-component')
export class GameComponent extends LitElement {

   render() {
      return html`
      
      
      <div class="game">
         <timer-component></timer-component>

         <strong>tractable</strong>
         <input name="word" type="text" placeholder="Enter the word above" data-game-input>

         <button>
            <svg viewBox="0 0 26 26">
               <use href="#settings_metro"></use>
            </svg>
         </button>


         <section class="scores">
            <figure class="on" title="current score">
               <span>40</span>
               <b>score</b>
            </figure>


            <figure title="high score">
               <span>100</span>
               <b>highscore</b>
            </figure>
         </section>

      </div>




      <svg style = "display: none;">
      <symbol viewBox="0 0 26 26" id="settings_metro">
            <path d="M11.46875 0.96875L10.90625 4.53125C10.050781 4.742188 9.234375 5.058594 8.5 5.5L5.5625 3.40625L3.4375 5.53125L5.5 8.46875C5.054688 9.207031 4.714844 10.015625 4.5 10.875L0.96875 11.46875L0.96875 14.46875L4.5 15.09375C4.714844 15.953125 5.054688 16.761719 5.5 17.5L3.40625 20.4375L5.53125 22.5625L8.46875 20.5C9.203125 20.941406 10.019531 21.257813 10.875 21.46875L11.46875 25.03125L14.46875 25.03125L15.125 21.46875C15.976563 21.253906 16.769531 20.914063 17.5 20.46875L20.46875 22.5625L22.59375 20.4375L20.46875 17.5C20.90625 16.769531 21.257813 15.972656 21.46875 15.125L25.03125 14.46875L25.03125 11.46875L21.46875 10.875C21.257813 10.027344 20.90625 9.230469 20.46875 8.5L22.5625 5.53125L20.4375 3.40625L17.5 5.53125C16.769531 5.089844 15.949219 4.746094 15.09375 4.53125L14.46875 0.96875 Z M 13 6.46875C16.605469 6.46875 19.53125 9.394531 19.53125 13C19.53125 16.605469 16.605469 19.53125 13 19.53125C9.394531 19.53125 6.46875 16.601563 6.46875 13C6.46875 9.398438 9.394531 6.46875 13 6.46875 Z M 13 8.0625C10.28125 8.0625 8.0625 10.28125 8.0625 13C8.0625 15.71875 10.28125 17.9375 13 17.9375C15.71875 17.9375 17.9375 15.71875 17.9375 13C17.9375 10.28125 15.71875 8.0625 13 8.0625 Z M 12.96875 10.9375C14.113281 10.9375 15.0625 11.851563 15.0625 13C15.0625 14.144531 14.113281 15.0625 12.96875 15.0625C11.824219 15.0625 10.90625 14.144531 10.90625 13C10.90625 11.851563 11.824219 10.9375 12.96875 10.9375Z" />
         </symbol>
      </svg>
      
      
      `
   }














   static styles = css`
   
   .game {
      place-self: center;
      width: var(--w, min(95vw, 500px));
      height: fit-content;
      max-height: var(--h, min(500px, 95vh));
      padding-block: var(--padding-block, 1.5em 1.8em);
      background: #fff;
      box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.02);
      display: grid;
      grid-template-columns: minmax(0.4rem, 1fr) minmax(0, 90%) minmax(0.4rem, 1fr);
      grid-template-rows: auto 1fr;
      row-gap: var(--g-game, 0.9em);
      --top-offset: 5px;
      --left-offset: var(--size-4);
    }
    .game > * {
      grid-column: 2/-2;
    }
    .game strong {
      font-size: var(--size-word, clamp(1.7ch, 2ch + 1vw, 4ch));
      pointer-events: none;
    }
    .game input[data-game-input] {
      --bg: transparent;
      --bg-h: transparent;
      --border-w: 0.1px;
      --border-w-h: 0.1px;
      --border-color: rgb(0 0 0 / 0.1);
      --border-color-h: rgb(0 0 0 / 0.1);
      --outline-w: 0;
      --clr: #444;
      --pbl: 0.7em;
      --pin: 1em;
      --f: var(--f-sans);
      cursor: default;
    }
    .game input[data-game-input] {
      padding: var(--pbl, 0.4em) var(--pin, 1.2em);
      font-family: var(--f, "Urbanist");
      font-weight: var(--weight, 600);
      font-size: var(--size, clamp(0.8em, 0.8em + 1vw, 1.1em));
      background: var(--bg, rgba(0, 0, 0, 0.02));
      color: var(--clr, var(--clr, #000));
      border: var(--border-w, 0.1px) solid var(--border-color, rgba(0, 0, 0, 0.2));
      text-decoration: var(--text-decoration, none);
      border-radius: var(--br, 0.4vmax);
      cursor: pointer;
      transition: 0.2s;
    }
    .game input[data-game-input]:hover {
      background: var(--bg-h, rgba(61, 126, 146, 0.6));
      border: var(--border-w-h, 0px) solid var(--border-color-h, rgba(0, 0, 0, 0.2));
      color: var(--clr-h, var(--clr, #ffe));
    }
    .game input[data-game-input]:focus {
      outline: var(--outline-w, 0.2px) solid var(--outline-clr, rgba(0, 0, 0, 0.05));
    }
    .game input[data-game-input]::placeholder {
      font-weight: 100;
      color: rgba(0, 0, 0, 0.3);
    }
    .game * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .game button {
      --pbl: 0.4em;
      --pin: 0.7em;
      --border-w: 0.2px;
      --border-w-h: 0.2px;
      --bg: rgb(0 0 0 / 0.03);
      --bg-h: rgb(0 0 0 / 0.03);
      position: fixed;
      inset: auto auto var(--top-offset) var(--left-offset);
      z-index: 3;
      outline: none;
    }
    .game button {
      padding: var(--pbl, 0.4em) var(--pin, 1.2em);
      font-family: var(--f, "Urbanist");
      font-weight: var(--weight, 600);
      font-size: var(--size, clamp(0.8em, 0.8em + 1vw, 1.1em));
      background: var(--bg, rgba(0, 0, 0, 0.02));
      color: var(--clr, var(--clr, #000));
      border: var(--border-w, 0.1px) solid var(--border-color, rgba(0, 0, 0, 0.2));
      text-decoration: var(--text-decoration, none);
      border-radius: var(--br, 0.4vmax);
      cursor: pointer;
      transition: 0.2s;
    }
    .game button:hover {
      background: var(--bg-h, rgba(61, 126, 146, 0.6));
      border: var(--border-w-h, 0px) solid var(--border-color-h, rgba(0, 0, 0, 0.2));
      color: var(--clr-h, var(--clr, #ffe));
    }
    .game button:focus {
      outline: var(--outline-w, 0.2px) solid var(--outline-clr, rgba(0, 0, 0, 0.05));
    }
    .game button:focus {
      box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.2);
    }
    .game button svg {
      background: var(--bg, transparent);
      fill: var(--f, #000);
      color: var(--clr, #000);
      width: var(--w, 100%);
      height: var(--h, var(--w, 100%));
      aspect-ratio: var(--aspect, 1);
      transition: var(--transition-time, 0.3s);
      --w: 35px;
      --bg: transparent;
      --bg-h: transparent;
    }
    .game button svg:hover {
      background: var(--bg-h, transparent);
      fill: var(--f-h, #000);
      color: var(--clr-h, #000);
    }
    .game timer-component {
      position: fixed;
      inset: 5px var(--size-4) auto auto;
      --lh: 0.8;
    }
    .game .scores {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(auto-fill, var(--scores-w, min(100px, 100%)));
      grid-auto-rows: var(--scores-h, 70px);
      gap: var(--g, 1em);
    }
    @media (max-width: 350px) {
      .game .scores {
        grid-template-columns: none;
      }
    }
    .game .scores > figure {
      background: var(--menu-bg, #fff);
      display: grid;
      place-content: center;
      text-align: center;
      border-radius: var(--score-br, 0.2vmax);
      box-shadow: var(--score-shadow, 0 0 2px -1px rgba(0, 0, 0, 0.9));
      font-family: var(--f-scores, var(--f-sans));
      cursor: pointer;
    }
    .game .scores > figure b {
      font-size: clamp(1ch, 1ch + 0.2vw, 1.2ch);
      font-weight: 400;
    }
    .game .scores > figure span {
      font-size: var(--size-score, clamp(2ch, 2.5ch + 1vw, 3ch));
    }
    .game .scores > figure.on {
      outline: 2px solid var(--score-on-outline, rgba(114, 212, 235, 0.461));
      background: var(--score-on, rgba(114, 212, 235, 0.161));
    }
   
   
   `
}




declare global {
   interface HTMLElementTagNameMap {
      'game-component': GameComponent
   }
}
