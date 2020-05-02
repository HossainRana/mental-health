import React from 'react'
import {Link, graphql , useStaticQuery} from 'gatsby'
import Blogstyle from './home.module.scss'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from "react-bootstrap"
import blogStyle from './home.module.scss'
import ReactPaginate from 'react-paginate'
import Pagination from "react-js-pagination"
import Head from '../components/head'





const BlogPage = () => {

    const  data = useStaticQuery(graphql`
    query {
        allRestApiPosts{
            edges {
              node {
                    endpointId
                    title
                    body
                }
            }
        }
        allRestApiPhotos(filter: {endpointId: {lt: 21 }}){
            edges {
                node {
                    url
                    title
                }
            }
        }

    }
`)

    return (

        <Layout>
        <Head title="Blog"/>
            <Container style={{paddingTop:'120px'}}>
            <Pagination           itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={10}
            activePage={1}
            prevPageText={'previous'}
            nextPageText={'next'}  />
                    {data.allRestApiPhotos.edges.map(edge =>{
                        return (
                            <Row>
                                <Col className={Blogstyle.blogPost_container} style={{marginTop:'5px', display:'flex', width:'100%'}}> 
                                    <div style={{marginTop:'5px'}}>
                                        <img src={edge.node.url}/>
                                                                            
                                    </div>
                                    <div style={{width:'100%'}}>
                                        <p style={{marginLeft:'5px',fontSize:'16px',height:'20px'}}>{edge.node.title}</p>   
                                        <Link to={`/articles/${edge.node.title}`}><button  style={{float:'right', marginRight:'20px', width:'100px', height:'30px'}}>Read</button></Link>
                                    </div>
                                </Col>
                            </Row>
                        )
                    })}
            </Container>
        
        </Layout>
    )
}

export default BlogPage