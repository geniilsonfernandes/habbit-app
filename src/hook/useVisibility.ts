import { useState } from 'react'

const useVisibility = () => {
  const [isVisible, setIsVisible] = useState(false)
  const show = () => setIsVisible(true)
  const hide = () => setIsVisible(false)

  return { isVisible, show, hide }
}

export default useVisibility
