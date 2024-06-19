import React from 'react'
import { useState, useEffect } from 'react'

function useGivenWindowSize() {
  const [size, setSize] = useState({})
  const sizeFunction = () => {
    setSize({
      width : window.innerWidth,
      height : window.innerHeight
    })
    console.log(size);
  }
  useEffect(() => {
    window.addEventListener('resize', sizeFunction)
  }, [])
  return size;
}

export default useGivenWindowSize;
