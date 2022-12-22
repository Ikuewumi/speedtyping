import { z, ZodObject } from "zod"

const tokensObject = {
   basic: 'speedTypingBasicSettingsfhi90'
} as { [index: string]: string }






export const zObject = {
   basic: z.object({
      mode: z.enum(['normal', 'blitz']).default('normal'),
      difficulty: z.enum(['easy', 'medium', 'hard']).default('easy'),
      time: z.enum(['one', 'two', 'five']).default('five')
   })



} as { [index: string]: ZodObject<any> }



export const getToken = (key: string) => {
   const isValid = key in tokensObject
   if (!isValid) throw Error('token does not exist')
   const lsObject = JSON.parse(localStorage.getItem(tokensObject[key])!) ?? {}
   const output = zObject[key].strip().parse(lsObject)
   return output
}


export const setToken = (key: string, payload: { [index: string]: string }) => {

   const isValid = key in tokensObject
   if (!isValid) throw Error('token does not exist')
   const input = zObject[key].strip().parse(payload)
   localStorage.setItem(tokensObject[key], JSON.stringify(input))




}



export const sleep = (ms: number = 100) => {
   return new Promise(res => setTimeout(res, ms))
}


export type Mode = 'normal' | 'blitz'