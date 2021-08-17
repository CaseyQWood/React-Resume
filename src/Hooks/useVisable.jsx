import React, { useEffect, useState } from 'react' 

export default function useVisable() {
  const [visable, setVisable] = useState(true)
  
  useEffect(() => {
    window.onscroll = () => {
      window.pageYOffset > 5 ? setVisable(false) : setVisable(true)
    }
  })
  console.log(visable)
  return visable
}