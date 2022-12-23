export const nav = (location: Location) => {

   const parentEl = document.querySelector('#app')!
   Array.from(parentEl?.children).forEach(el => {
      el.classList.add('none')


   })


}


const navMap = {

   start: 'hero-component',
   game: 'game-component',
   settings: 'settings-component'

}


export type Location = 'start' | 'game' | 'settings'