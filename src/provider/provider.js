import React from "react"

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
    name: "Everyone has a phycological break down in some way. Mindshaper is here to help you realize that you are not alone on your road to recovery. Start feeling better with a single phone call.",
    title: "Choose your Services here",
};

function update(state, action) {
    return {
        name: action.type,
        title: action.title,
    }
};

const Provider = ({ children }) => {
    const [state, dispatch] = React.useReducer(update, initialState)
    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    )
};
export default Provider