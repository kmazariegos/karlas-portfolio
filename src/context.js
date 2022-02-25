import { createContext } from 'react';
import { ThemeProvider } from 'react-bootstrap';

export const ThemeContext = createContext()


const INITAL_STATE = {darkMode: false};


const themeReducer =(state, action) => {
    switch(action.type){
        
        case "TOGGLE":
        return {darkMode: !state.darkMode};
        
        default: 
        return state;
    }
}


export const themeProvider = (props) => {
    const [state, dispatch] = userReducer(themeReducer, INITAL_STATE);

    return(
        <ThemeProvider value={(state, dispatch)}>
            {props.children}
        </ThemeProvider>
    )
}