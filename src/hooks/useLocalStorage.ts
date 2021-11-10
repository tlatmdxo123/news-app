type SetItem = (value:string) => void
type value = string | null
export const useLocalStorage = (key:string):[value,SetItem]  => {
    const setItem = (value:string) => {
        localStorage.setItem(key,value)
    }

    const value = localStorage.getItem(key)

    return [value,setItem]
}