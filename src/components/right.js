import React, {useContext} from "react"
import {GlobalStateContext} from "../provider/provider"
import indexstyle from '../pages/index.module.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Card, Button, Container} from 'react-bootstrap'

const Right = () => {
  const state = useContext(GlobalStateContext);    
  return (
    <div>
        <Container>
            <Card className="text-center" style={{border:'none', height:'100%'}}>
                <Card.Header style={{background:'#fff', color:'green'}}>{state.title}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        
                        <p style={{fontSize:'16px'}}>{state.name}</p>

                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{background:'#fff', color:'green'}}>MindShaper</Card.Footer>
            </Card>
        </Container>
 
    </div>
  )
}
export default Right