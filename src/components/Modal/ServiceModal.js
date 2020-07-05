import React,{Component, useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Nav, Card, Button, Form, Container, } from 'react-bootstrap'

const ServiceModal = ({show, data, onHide, title, modalQ1}) => {

    return (
        <Container>
            <Modal style={{marginLeft: '10px', zIndex: '9999', }}
            show={show}
            onHide={onHide}    
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2 style={{color: '#0b7b00'}}>{title}</h2>
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div style={{background: 'rgba(85, 179, 76, 0.13)', height: '35px', marginBottom: '5px', borderRadius: '4px'}}>
                    <p style={{padding: '6px', fontSize: '16px', fontWeight: '700', color: '#b2c700'}}>We heard you'd like help with: {title}</p>
                </div>
                <div>
                    <Card style={{border: 'none', borderRadius: '4px', boxShadow: '0 3px 5px 0 rgba(154,160,185,.05), 0 10px 20px 0 rgba(166,173,201,.2)'}}>
                        <p>{data}</p>
                    </Card>
                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
  }  


  export default ServiceModal