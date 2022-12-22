import './scss/app.scss';
import './scss/mixins/input.scss';
import './scss/layout.scss';
import './scss/components/hero-center.scss';
import './scss/components/select-menu.scss';
import './scss/components/settings.scss';

//TODO uncomment lines when herocomponent is reinserted
// import fontImg from './assets/font.svg'

// const HeroComponent = document.querySelector('hero-component')!
// HeroComponent.src = fontImg
// HeroComponent.content = {
//    "header": "Speed Typing",
//    "button": "start!",
//    "about": "Click on `space` to restart!"
// }


// const SelectComponent = document.querySelector('select-component')!
// SelectComponent.options = ['normal', 'blitz']

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
