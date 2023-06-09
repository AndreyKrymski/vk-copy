import React, { FC } from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'

const Layout:FC = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
      </div>
      {children}
      
    </>
    
  )
}
export default Layout