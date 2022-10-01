import React, { useState, useContext } from 'react'

const ThemeContext = React.createContext()
const ToggleTheme = React.createContext()
export const useThemeContext = () => {
  return useContext(ThemeContext)
}
export const useThemeToggle = () => {
  return useContext(ToggleTheme)
}
const Helper = ({ children }) => {
  const [dark, setDark] = useState(false)
  const toggleTheme = () => {
    setDark((prevState) => !prevState)
  }
  return (
    <ThemeContext.Provider value={dark}>
      <ToggleTheme.Provider value={toggleTheme}>
        {children}
      </ToggleTheme.Provider>
    </ThemeContext.Provider>
  )
}

export default Helper
