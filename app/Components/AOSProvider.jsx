'use client'
import AOS from 'aos';
import { useEffect } from 'react';

function AOSProvider({children}) {

    useEffect(() => {
        AOS.init({duration: 1000});
      }, [])

  return (
    <>
      {children}
    </>
  )
}

export default AOSProvider