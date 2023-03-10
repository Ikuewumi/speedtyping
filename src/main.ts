import './scss/app.scss';
import './scss/mixins/input.scss';
import './scss/layout.scss';
import './scss/components.scss';
import './scss/components/hero-center.scss';
import { GameLogic, HistoryProps } from './composables/game.js';

const HeroComponent = document.querySelector('hero-component')!
HeroComponent.content = {
   "header": "Speed Typing",
   "button": "start!",
   "about": "Click on `space` to restart!"
}


const els = {
   start: document.querySelector('hero-component')!,
   settings: document.querySelector('settings-component')!,
   game: document.querySelector('game-component')!
} as HistoryProps



const g = new GameLogic(els)

g.show('start')





















// const fileToDataUrl = (file: File): Promise<string> => {
//    const p = new Promise((resolve, reject) => {

//       const reader = new FileReader()
//       reader.readAsDataURL(file)
//       reader.onerror = () => {
//          reject('something went wrong')
//       }

//       reader.onloadend = (result) => {
//          resolve(reader.result as string)
//       }

//    })

//    return p as Promise<string>

// }



// const img = await fetch('../src/assets/down_metro.svg')
// const a = await img.blob()
// console.log(img)
// const str = await fileToDataUrl(a as unknown as File)
// console.log(str)
