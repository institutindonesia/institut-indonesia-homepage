import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const  ThemeTogglers = () => {
  
  // constructor(props, { theme, toggleTheme }) {
  //   super(props);
  //   this.state = {
  //     theme:"light",
  //     isCardView: true,
  //   }
  // } 

  // render() {
    
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
         <label
          // className="btn btn-primary" onClick={()=>this.setState({ isCardView: !this.state.theme })}
          // style={{
          //   fontSize: "2em"
          // }}
          >
            <input
            style={{
              display:"none",
              // zIndex:1,
            }}
              type="checkbox"
              onChange={
                
                // this.handleChange
                
                e => toggleTheme(e.target.checked ? `dark` : `light`)
              
              }
              checked={theme === `dark`}
            />{ theme === `dark`
              ?  <FontAwesomeIcon icon="sun"></FontAwesomeIcon>
              :  <FontAwesomeIcon icon="moon"></FontAwesomeIcon>
            }
          
              </label>
       
        )}
      </ThemeToggler>
    )
  }
  // }


export default ThemeTogglers