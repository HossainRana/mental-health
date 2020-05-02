import React from "react"
import {Link} from "gatsby"
import style from './home.module.scss'
import 'bootstrap/dist/css/bootstrap.css'

import Layout from '../components/layout'
import { Row, Col, Container } from "react-bootstrap"

const indexPage = () => {

    return (
        <Layout>
        <div className={style.indexbackground}> 
            <h1>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise</h1>
            <div className={style.button}>
                <Link to='/'><button className={style.btn}>TRY BIZVIEW</button></Link>
                <Link to='/'><button className={style.btn}>SEE THE DEMO</button></Link>
            </div>
        </div> 
        <section className={style.featureSection}>
            <div className={style.feature}>
                <div className={style.featureGrid}>
                    <div className={style.featureGridItem}>
                        <h3><strong>Conversations, organized</strong></h3>
                        <p>Instead of a single overstuffed inbox, conversations in Slack happen in dedicated spaces called channels.</p>
                    </div>
                    <div className={style.featureGridItem}>
                        <h3><strong>Get looped in, not out</strong></h3>
                        <p>Slack makes it simple to follow conversations or find important information in an easily searchable archive.</p>
                    </div>
                    <div className={style.featureGridItem}>
                        <h3><strong>Give focus a chance</strong></h3>
                        <p>Unlike email, Slack lets you choose which conversations are most important — and which can wait.</p>
                    </div>

                </div>
            </div>
        </section>

        <section className={style.content}>
            <div className={style.contentGrid}>
                <div className={style.contentGridItems}>
                    <div>
                        <h2>Make the change to channels</h2>
                        <p>Productive teamwork happens in channels — organized spaces for everything related to 
                            a project, topic or team.
                        </p>
                        <Link to='/'><p>Learn more about channels</p></Link>
                    </div>

                </div>
                <div className={style.contentGridItems}>
                    <video loop autoplay muted  src='../../demov.mp4' width='100%'>
                    
                    </video>
                </div>
            </div>
        </section>

        <section className={style.content}>
        <div className={style.contentGrid}>
            <div className={style.contentGridItems}>
                <video loop autoplay muted  src='../../demov.mp4' width='100%'></video>
            </div>
            <div className={style.contentGridItems}>
                <div>
                    <h2>Shared channels bring companies together</h2>
                    <p>Now channels can help you work as closely with external partners
                      and clients as you do with teams down the hall.
                    </p>
                    <Link to='/'><p>Learn more about channels</p></Link>
                </div>

            </div>


        </div>
    </section>


    <section className={style.customerShow}>
        <div className={style.customerShowContainer}>
            <header className={style.containerHeader}>
                <h2>Trusted the world over</h2>
                <p>Teams of every size, shape and kind have already made Slack the place where their work happens.</p>
                <Link to='/'><p>See all customer stories</p></Link>
            </header>
        </div>
    </section>
    <h2 className={style.containerHeader}>What’s new at BIZVIEW</h2>
    <section className={style.content}>
        <div className={style.cardGrid}>
            <div className={style.carViewGrid}>
                <div className={style.card}>
                    <p className={style.carViewGridItem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </div>
                <div className={style.card}>
                    <p className={style.carViewGridItem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </div>
                <div className={style.card}>
                    <p className={style.carViewGridItem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </div>
            </div>
        </div>
    </section>

    

    </Layout>
    )

}

export default indexPage