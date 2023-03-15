import React from "react"
import localFont from '@next/font/local';

const myFont = localFont({ src: '../fonts/my-font.ttf' })

import styles from '@/styles/Header.module.css'

export default function Header({children}) {
  return (
    <h1 style={myFont.style} className={styles.header}>{children}</h1>
  ) 
}
