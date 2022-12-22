import { css, html, LitElement, PropertyValueMap } from 'lit'
import { property, customElement } from 'lit/decorators.js'


//Functions to generate html
const genMainMarkup = (options: string[], index = '') => {

   let output = ''

   options.map((option) => {
      output += `<span tabindex="0" ${index === option ? `class="on"` : ``}>${option}</span>`
   })


   return output

}

const genSelectMarkup = (options: string[]) => {

   let output = ''

   options.map(option => {
      output += `<option value="${option}">${option}</option>`
   })


   return output

}







@customElement('select-component')
export class Select extends LitElement {
   @property({ type: Array })
   options?: string[] = ['a', 'array'];


   @property({ type: String })
   name?: string = 'input'


   render() {
      return html`
         <div role="menu" class="select-menu">

            <main>

            </main>
            <select>

            </select>

         </div>`
   }

   emitEvt() {
      this.selectEl.dispatchEvent(new CustomEvent('custom-change', { bubbles: true }))
   }



   doUpdate() {
      this.selectEl.name = this.name!
      this.selectEl.innerHTML = genSelectMarkup(this.options!)
      this.mainEl.innerHTML = genMainMarkup(this.options!, this.selectEl.value)
      this.parentEl.removeEventListener('custom-change', _ => { })
      this.selectEl.removeEventListener('change', _ => { })

      this.optionsEls.forEach((option) => {
         option.addEventListener('click', _ => {
            this.selectEl.value = option.textContent!
            this.emitEvt()
         })
      })




      this.selectEl.addEventListener('change', _ => {
         this.emitEvt()
      })


      this.parentEl.addEventListener('custom-change', _ => {
         this.optionsEls.map(option => {
            option.classList.remove('on')
            if (option.textContent === this.selectEl.value) {
               option.classList.add('on')
            }
         })

         const evt = new CustomEvent('custom-select-click', {
            bubbles: true,
            detail: { "value": this.selectEl.value }
         }) as HTMLElementEventMap['custom-select-click']


         this.dispatchEvent(evt)

      })

   }


   set value(option: string) {
      if (this.options?.includes(option)) {
         this.selectEl.value = option
         this.emitEvt()
      } else {
         throw Error('oops! you can\'t choose an option that dosen\'t exist')
      }
   }

   get value() {
      return this?.selectEl?.value
   }


   protected updated() {
      this.doUpdate()
   }









   get selectEl() {
      return this.shadowRoot?.querySelector('select')!
   }

   get mainEl() {
      return this.shadowRoot?.querySelector('main')!
   }

   get parentEl() {
      return this.shadowRoot?.querySelector('.select-menu')!
   }

   get optionsEls() {
      return Array.from(this.mainEl!.querySelectorAll('span'))!
   }

   get spanEls() {
      return Array.from(this.mainEl!.querySelectorAll('span'))!
   }




   static styles = css`
   
    .select-menu {
      width: var(--w, min(700px, 90vw));
      place-self: center;
    }
    
    .select-menu main {
      display: grid;
      width: 100%;
      // place-content: center;
      grid-template-columns: repeat(auto-fill, var(--menu-w, min(200px, 100%)));
      grid-auto-rows: var(--menu-h, 100px);
      gap: var(--g, 2em);
    }
    
    .select-menu main span {
      background: var(--menu-bg, #fff);
      display: grid;
      place-items: center;
      border-radius: var(--menu-br, 0.2vmax);
      box-shadow: var(--menu-shadow, 0 0 2px -1px rgba(0, 0, 0, 0.4));
      cursor: pointer;
    }
    
    .select-menu main span.on {
      outline: 2px solid var(--menu-bg-on-outline, rgba(114, 212, 235, 0.461));
      background: var(--menu-bg-on, rgba(114, 212, 235, 0.161));
    }
    
    .select-menu select {
      display: none;
    }
   
   
   `



}

interface CustomSelectEvt extends CustomEvent {
   detail: {
      "value": string
   }
}





declare global {
   interface HTMLElementTagNameMap {
      'select-component': Select
   }

   interface HTMLElementEventMap extends ElementEventMap, DocumentAndElementEventHandlersEventMap, GlobalEventHandlersEventMap {
      'custom-select-click': CustomSelectEvt
   }
}

