import { LitElement, html, css } from "lit"
import { customElement, property } from "lit/decorators.js"

interface Data {
   header: string,
   about?: string,
   button: string
}

const genAbout = (about: any) => {
   return (about && about > '') ? html`<p>${about}</p>` : html``
}


@customElement('hero-component')
export class HeroComponent extends LitElement {

   @property()
   content?: Data = {
      "header": "Speed Typing",
      "button": "Start Game!"
   }

   @property()
   src?: string = ""


   updated() {
      const btn = this.shadowRoot?.querySelector('a')! as HTMLAnchorElement
      btn.addEventListener('click', _ => {
         const evt = new CustomEvent('btn-click', { bubbles: true })
         this.dispatchEvent(evt)

      })
   }

   disconnectedCallback() {
      super.disconnectedCallback()
      const btn = this.shadowRoot?.querySelector('a')! as HTMLAnchorElement
      btn.removeEventListener('click', _ => { })
   }


   render() {
      return html`
      
         <div class="hero-center">
            <header>
               ${this.src ? html`<img src="${this.src}" alt="hero_img">` : ''}
               <h1>${this.content?.header}</h1>
            </header>

            <main>
               ${genAbout(this.content?.about ?? null)}
               <span>
                  <a>${this.content?.button}</a>
                  <a>settings</a>
               </span>
            </main>

         </div>
      
      `
   }



   static styles = css`
   
   .hero-center {
      width: var(--w, 100%);
      background-color: var(--bg, rgba(199, 199, 199, 0.0666666667));
      background-image: var(--bg-img, none);
      background-size: cover;
      background-repeat: no-repeat;
      border: var(--border-width, 0.4px) solid var(--border, rgba(0, 0, 0, 0.3));
      font-family: var(--f-family, "Work Sans");
      font-size: var(--size, 14px);
      font-weight: var(--weight, 300);
      display: flow-root;
      display: grid;
      grid-template-columns: minmax(0.3rem, 1fr) minmax(0, var(--w-content, 60ch)) minmax(0.3rem, 1fr);
      place-items: center;
      align-content: center;
      column-gap: 0em;
      row-gap: var(--g, 1.4em);
      padding-block: var(--pbl, 0);
      color: var(--clr, #000);
      text-align: center;
      min-height: var(--h, 100vh);
    }
    .hero-center * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    .hero-center > * {
      grid-column: 2/-2;
    }
    .hero-center header, .hero-center main {
      display: grid;
      place-items: center;
      place-content: center;
      text-align: center;
      gap: var(--g-content, 1.3em);
    }
    .hero-center header {
      gap: var(--g-header, var(--g-content, 1em));
      font-family: var(--f-h1, "Urbanist");
      font-size: var(--size-h1, clamp(20px, 20px + 4vw, 3ch));
      font-weight: var(--weight, 300);
      line-height: 0.9;
    }
    .hero-center main > span {
      display: flex;
      gap: var(--g-btns, 0.3em);
      flex-wrap: wrap;
    }
    .hero-center img {
      max-width: 100%;
      width: var(--w-img, min(150px, 100%));
    }
    .hero-center a {
      padding: var(--pin-btn, 0.8em) var(--pbl-btn, 1.6em);
      font-family: var(--f-btn, var(--f-h1, var(--f-family, "Urbanist")));
      font-weight: var(--weight-btn, 600);
      font-size: var(--f-about, clamp(0.8em, 0.8em + 1vw, 1.1em));
      background: var(--bg-btn, rgba(0, 0, 0, 0.04));
      color: var(--clr-btn, var(--clr, #000));
      border: var(--border-width-btn, 0.4px) solid var(--border-btn, rgba(0, 0, 0, 0.3));
      text-decoration: var(--text-decoration-btn, none);
      border-radius: var(--br, 0.4vmax);
      cursor: pointer;
      transition: 0.2s;
    }
    .hero-center a:hover {
      background: var(--bg-btn, rgba(61, 126, 146, 0.6));
      color: var(--clr-btn, var(--clr, #ffe));
    }

   
   `

}


declare global {
   interface HTMLElementTagNameMap {
      'hero-component': HeroComponent
   }
}


export { }