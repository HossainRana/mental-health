import React from 'react'
import Header from './header'
import Footer from './footer' 
import '../style/index.scss'
import layoutStyle from './layout.module.scss'
import Provider from '../provider/provider'

const Layout = (props) =>{
    return(
        <Provider>
            <div className={layoutStyle.container} >
                <div className={layoutStyle.content}>
                    <Header/>
                    {props.children}
                    {props.preBodyComponents}
                </div>
                <Footer/>

            </div>
        </Provider>
    )
}

export default Layout