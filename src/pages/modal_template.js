import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/layout'
import style from './modal.module.scss'
import indexstyle from './index.module.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Nav, Card, Button, Form, Container, Modal, ModalBody, ModalDialog, ModalFooter} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import Head from '../components/head'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import ModalHeader from 'react-bootstrap/ModalHeader'
import Dialog from '@material-ui/core/Dialog';

const Modal_Section = () => {

    return(
        <Layout>
            <Container>
                <Dialog
                open
                fullWidth
                maxWidth='sm'
                >
                    <ModalRoutingContext>
                    <ModalHeader>
                        <h1>Header</h1>
                    </ModalHeader>
                    <ModalBody>
                        <p>This is the boday</p>
                    </ModalBody>
                    <ModalFooter>
                        <h1>Footer</h1>
                    </ModalFooter>
                    </ModalRoutingContext>
                </Dialog>
            </Container>
        </Layout>
    )
      
}

export default Modal_Section
