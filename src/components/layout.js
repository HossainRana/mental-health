import React from 'react'
import Header from './header'
import Footer from './footer' 
import '../style/index.scss'
import layoutStyle from './layout.module.scss'

const Layout = (props) =>{
    return(
        <div className={layoutStyle.container} >
            <div className={layoutStyle.content}>
                <Header/>
                {props.children}
                {props.preBodyComponents}
            </div>
            <Footer/>

        </div>
    )
}

export default Layout