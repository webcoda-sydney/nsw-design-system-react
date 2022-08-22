import { useId } from 'react'
const useIdExtended = (prefix = '', replaceColonWith = '-') => {
  return (prefix + useId()).replace(/\:/g, replaceColonWith)
}

export default useIdExtended
