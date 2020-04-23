import React, { createContext, useContext, useReducer } from 'react';
export const StateContext = createContext();
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);

/*
import { StateProvider } from '../state';

const App = () => {
    const initialState = {
        theme: { primary: 'green' }
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'changeTheme':
                return {
                    ...state,
                    theme: action.newTheme
                };

            default:
                return state;
        }
    };

    return (
        <StateProvider initialState={initialState} reducer={reducer}>
        // App content ...
        </StateProvider>
    );
}

import { useStateValue } from './state';

const ThemedButton = () => {
    const [{ theme }, dispatch] = useStateValue();
    return (
        <Button
            primaryColor={theme.primary}
            onClick={() => dispatch({
                type: 'changeTheme',
                newTheme: { primary: 'blue' }
            })}
        >
            Make me blue!
    </Button>
    );
}
*/