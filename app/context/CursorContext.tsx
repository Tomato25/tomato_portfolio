import { createContext, useContext } from "react"



export type GlobalContent = {
  mouseHover: boolean
  setMouseHover:(c: boolean) => void
}
export const MyGlobalContext = createContext<GlobalContent>({
mouseHover: false, // set a default value
setMouseHover: () => {},
})
export const useGlobalContext = () => useContext(MyGlobalContext)