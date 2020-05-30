import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Card, Button, Container} from 'react-bootstrap'
import { faAudioDescription } from "@fortawesome/free-solid-svg-icons";

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
    title: "Welcome!",
    Q1: "Increase Happiness",
    Q2: "Reduce Stress",
    Q3: "Cop Up Depression",
    Q4: "Better Sleep",
    Q5: <Button>Continue</Button>,
    initial: <section>
        <Row>
            <Col>
                <p style={{fontSize: '25px', color: 'green', fontFamily: 'initial'}}>What Bring you here?</p>
                <p style={{fontSize: '25px', color: 'green', fontFamily: 'initial'}}>Increase Happiness</p>
                <p style={{fontSize: '25px', color: 'green', fontFamily: 'initial'}}>Reduce Stress</p>
                <p style={{fontSize: '25px', color: 'green', fontFamily: 'initial'}}>Cop Up Depression</p>
                <p style={{fontSize: '25px', color: 'green', fontFamily: 'initial'}}>Better Sleep</p>
                <h1 style={{color: 'green', fontFamily: 'initial'}}>Choose Your Services</h1>
            </Col>
        </Row>
    </section>

};

function update(state, action) {
    return {
        name: action.type,
        title: action.title,
        bookingHeading: action.bookingHeading,
        subHeading: action.subHeading,
        online: action.online,
        offline: action.offline,
        demo: action.demo,
        demoOnline: action.demoOnline,
        booking: action.booking,
        Break: action.Break,
        talk: action.talk,
        image1: action.image1,
        image2: action.image2,
        card: action.card,
        text: action.text,
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