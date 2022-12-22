import { css, html, LitElement, PropertyValueMap } from 'lit'
import { property, customElement } from 'lit/decorators.js'
import { getToken, Mode, setToken, sleep } from '../composables/ls.js'




@customElement('settings-component')
export class Settings extends LitElement {
   @property()
   mode?: Mode = 'normal'

   render() {
      return html`
      
      <div class="settings">
         
         <header>
            <button> 
               <svg viewBox="0 0 26 26">
                  <use href="#back_metro"></use>
               </svg>
            </button>
            
            <strong>Settings</strong>
         </header>
         <main class="dis-grid g-9">
            <section data-f-container>
               <strong>Mode</strong>
               <select-component></select-component>
            </section>


            <section data-select-list>
               <section data-f-container data-difficulty>
                  <strong>Difficulty</strong>
                  <span data-select>
                     <select name="difficulty" disabled>
                        <option value="easy">easy</option>
                        <option value="medium">medium</option>
                        <option value="hard">hard</option>
                     </select>
                  </span>
               </section>
               <section data-f-container data-time>
                  <strong>Time</strong>
                  <span data-select>
                     <select name="time" disabled>
                        <option value="one">1 min</option>
                        <option value="two">2 min</option>
                        <option value="five">5 min</option>
                     </select>
                  </span>
               </section>

            </section>
         </main>
         
      
      </div>



      <div id="svgs" style="display: none;">

         <svg>

            <symbol viewBox="0 0 26 26" id="back_metro">
               <path d="M11.300781 21C7.101563 18.199219 3.300781 13.800781 3.199219 13.601563C3.101563 13.5 3 13.199219 3 13C3 12.800781 3.101563 12.5 3.199219 12.300781C3.300781 12.101563 7.199219 7.699219 11.300781 4.898438C11.601563 4.699219 12 4.699219 12.398438 4.800781C12.800781 5.101563 13 5.398438 13 5.800781L13 9.5C13 9.5 21.699219 10 22.101563 10.300781C22.699219 10.699219 23 12 23 13C23 14.101563 22.601563 15.199219 22.101563 15.601563C21.699219 15.898438 13 16.5 13 16.5L13 20.199219C13 20.601563 12.800781 20.898438 12.398438 21.101563C12.101563 21.300781 11.699219 21.199219 11.300781 21Z" />
            </symbol>

            <symbol viewBox="0 0 26 26" id="down_metro">
               <path d="M6.414063 7.585938L3.585938 10.414063L13 19.828125L22.414063 10.414063L19.585938 7.585938L13 14.171875Z" />
            </symbol>

         </svg>

         </div>
      
      
      `
   }

   static styles = css`

   .none {
      display: none !important;
   }

   .dis-grid {

      display: grid;

   }

   .g-9 {
      gap: var(--size-9);
   }

   input, select, textarea {
      font:inherit;
      width: 100%;
   }
   
   [data-f-container] {
      display: grid;
      gap: var(--size-3);
      align-items: stretch;
   
      
   
   }

   [data-f-container] > * {
      width: 100%;
   }
   
   .settings {
      width: var(--w, min(95vw, 500px));
      max-height: var(--h, min(500px, 95vh));
      padding-block: var(--padding-block, 0.7em 3.5em);
      place-self: center;
      background: #fff;
      box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.02);
      display: grid;
      grid-template-columns: minmax(0.4rem, 1fr) minmax(0, 90%) minmax(0.4rem, 1fr);
      grid-template-rows: auto 1fr;
      row-gap: var(--g-settings, 0.9em);
    }
    .settings > * {
      grid-column: 2/-2;
    }
    .settings header {
      height: fit-content;
      grid-column: 1/-1;
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: 30px auto;
      column-gap: var(--g-header, 0.6em);
    }
    .settings header strong {
      align-self: center;
      font-size: var(--size-strong, clamp(2ch, 2ch + 1vw, 3ch));
      color: var(--clr-dark-a);
    }
    .settings header button {
      --w: 100%;
      --border-w: 0.2px;
      --border-w-h: 0.2px;
      --border-color: rgb(0 0 0 / 0.01);
      --border-color-h: rgb(0 0 0 / 0.01);
      --br: 0;
      --bg: rgba(0, 0, 0, 0.02);
      --bg-h: rgba(0, 0, 0, 0.02);
      --outline-clr: transparent;
      --outline-w: 0;
      --pin: 0;
      --pbl: 0;
      display: grid;
      place-content: center;
      place-items: center;
      border-radius: 0;
      border-left: 0;
      border-top-right-radius: var(--btn-radius-h, 1vmax);
      border-bottom-right-radius: var(--btn-radius-h, 1vmax);
    }
    .settings header button {
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
    .settings header button:hover {
      background: var(--bg-h, rgba(61, 126, 146, 0.6));
      border: var(--border-w-h, 0px) solid var(--border-color-h, rgba(0, 0, 0, 0.2));
      color: var(--clr-h, var(--clr, #ffe));
    }
    .settings header button:focus {
      outline: var(--outline-w, 0.2px) solid var(--outline-clr, rgba(0, 0, 0, 0.05));
    }
    .settings header button svg {
      background: var(--bg, transparent);
      fill: var(--f, #000);
      color: var(--clr, #000);
      width: var(--w, 100%);
      height: var(--h, var(--w, 100%));
      aspect-ratio: var(--aspect, 1);
      transition: var(--transition-time, 0.3s);
      --w: 25px;
      --f: #777;
      --f-h: #777;
      --bg: transparent;
      --bg-h: transparent;
    }
    .settings header button svg:hover {
      background: var(--bg-h, transparent);
      fill: var(--f-h, #000);
      color: var(--clr-h, #000);
    }
    .settings header button:hover svg {
      fill: #333;
    }
    .settings header button:hover, .settings header button:focus {
      border-color: rgba(0, 0, 0, 0.03);
    }
    .settings main {
      height: fit-content;
    }
    .settings select-component {
      --w: 100%;
      --menu-w: min(100px, 100%);
      --menu-h:50px;
      --g: 0.5em;
      --menu-shadow: 0 0 2px 1px rgb(0 0 0 /0.1);
      place-self: center;
    }
    .settings [data-select-list] {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: var(--size-6);
    }
    .settings [data-select-list] [data-select] select {
      padding-block: var(--size-3);
      appearance: none;
      padding-inline: var(--size-2);
      position: relative;
      border-radius: 0.2vmax;
    }
    .settings [data-select-list] [data-select] {
      position: relative;
      border-radius: 0.2vmax;
    }
    .settings [data-select-list] [data-select] select:focus {
      outline: 0.2px solid rgba(0, 0, 0, 0.1);
    }
    .settings [data-select-list] [data-select]::after {
      z-index: 0;
      content: "";
      position: absolute;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjYgMjYiPg0KICA8cGF0aCBkPSJNMTMgMTUuNDA2MjVMMjEuNzY1NjI1IDYuODIwMzEzQzIyLjE1NjI1IDYuNDM3NSAyMi43ODEyNSA2LjQ0MTQwNiAyMy4xNzE4NzUgNi44MjgxMjVMMjQuNzA3MDMxIDguMzYzMjgxQzI1LjA5NzY1NiA4Ljc1NzgxMyAyNS4wOTc2NTYgOS4zOTA2MjUgMjQuNzAzMTI1IDkuNzgxMjVMMTMuNzA3MDMxIDIwLjcwNzAzMUMxMy41MTE3MTkgMjAuOTAyMzQ0IDEzLjI1NzgxMyAyMSAxMyAyMUMxMi43NDIxODggMjEgMTIuNDg4MjgxIDIwLjkwMjM0NCAxMi4yOTI5NjkgMjAuNzA3MDMxTDEuMjk2ODc1IDkuNzgxMjVDMC45MDIzNDQgOS4zOTA2MjUgMC45MDIzNDQgOC43NTc4MTMgMS4yOTI5NjkgOC4zNjMyODFMMi44MjgxMjUgNi44MjgxMjVDMy4yMTg3NSA2LjQ0MTQwNiAzLjg0Mzc1IDYuNDM3NSA0LjIzNDM3NSA2LjgyMDMxM1oiIGZpbGw9IiM3NzciIC8+DQo8L3N2Zz4=);
      width: 20px;
      height: 100%;
      inset: 0 var(--size-2) 0 auto;
      background-color: transparent;
      pointer-events: none;
      background-position: center center;
      background-size: contain;
      background-repeat: no-repeat;
    }
    .settings * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
   
   
   
   `


   get modeEl() {
      return this.shadowRoot!.querySelector('select-component');
   }


   get difficultyEls() {

      const parent = this.shadowRoot?.querySelector('section[data-difficulty]')!
      const select = parent?.querySelector('select')!

      return { parent, select }


   }

   get timeEls() {

      const parent = this.shadowRoot?.querySelector('section[data-time]')!
      const select = parent?.querySelector('select')!

      return { parent, select }


   }


   hide(el: Element) { el.classList.add('none') }
   show(el: Element) { el.classList.remove('none') }


   async firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>) {

      this.modeEl?.removeEventListener('custom-select-click', _ => { })
      this.difficultyEls.select.removeEventListener('change', _ => { })
      this.timeEls.select.removeEventListener('change', _ => { })
      this.modeEl!.options = ['normal', 'blitz']
      await sleep(0)

      this.doUpdates();

      this.modeEl!.addEventListener('custom-select-click', _ => this.storeCurrent())
      this.difficultyEls.select.addEventListener('change', _ => this.storeCurrent())
      this.timeEls.select.addEventListener('change', _ => this.storeCurrent())
   }


   storeCurrent() {
      const CurrentBasicSettings = {
         mode: this.modeEl?.value as Mode,
         difficulty: this.difficultyEls.select.value!,
         time: this.timeEls.select.value!
      }


      setToken('basic', CurrentBasicSettings)

      this.doUpdates()
   }


   doUpdates() {
      const basic = getToken('basic')

      if (!(this.modeEl!.value === basic.mode)) { this.modeEl!.value = basic.mode as Mode }
      this.difficultyEls.select.value = basic.difficulty! as string
      this.timeEls.select.value = basic.time! as string

      this.toggleModeEls()
   }






   toggleModeEls() {
      const val = this?.modeEl?.value ?? 'normal'
      const elToHide = val === 'normal' ? this.timeEls : this.difficultyEls
      const elToShow = val === 'normal' ? this.difficultyEls : this.timeEls
      this.hide(elToHide.parent)
      this.show(elToShow.parent)
      elToShow.select.disabled = false
      elToHide.select.disabled = true



   }



}






declare global {
   interface HTMLElementTagNameMap {
      'settings-component': Settings
   }
}








//PSEUDO CODE
/**
 * how many localstorage variables am I gonna use
 * 
 * MODE: 'normal' | 'blitz'
 * DIFFICULTY: 'easy' | 'medium' | 'hard'
 * TIME: 'one' | 'two' | 'three'
 * 
 * @TOKENNAME - speedTypingBasicSettingsfhi90
 * 
 * 
 * 
 * 
 */