import { z } from "zod";
import { Location } from "./nav.js";


const zLocation = z.enum(['start', 'game', 'settings']).default('start')


export interface HistoryProps {

   start: HTMLElementTagNameMap['hero-component'],
   settings: HTMLElementTagNameMap['settings-component'],
   game: HTMLElementTagNameMap['game-component'],


}











class History {
   lastPage: Location

   constructor(public elements: HistoryProps) {
      this.lastPage = zLocation.parse('start')
   }

   init() {
      this.show()
   }





   show(str: Location = 'start') {
      const validKey = zLocation.parse(str)

      for (const key in this.elements) {
         this.elements[key as Location].classList.add('none')
         if (key === validKey) { this.elements[validKey].classList.remove('none') }
      }


      this.lastPage = validKey
   }





}















export class GameLogic extends History {


   constructor(public els: HistoryProps) {
      super(els)
   }







}









