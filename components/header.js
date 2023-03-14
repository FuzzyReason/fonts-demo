import React from "react"
import { Inter } from 'next/font/google'

import styles from '@/styles/Header.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Header({children}) {
  return (
    <h1 style={inter.style} className={styles.header}>{children}</h1>
  ) 
}
