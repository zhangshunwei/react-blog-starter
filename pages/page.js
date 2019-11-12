import React,{ Component } from "react"
import Pagination from '../components/pagination'
export default class Pagination extends Component{
    render(){
        return(
            <article>
                <Pagination config = {{
                    totalPage:10,
                }}></Pagination>
            </article>
        );
    }
}