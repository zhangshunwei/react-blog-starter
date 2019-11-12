import React,{ Component } from "react"
import Pagination from '../components/pagination/pagination'
export default class Page extends Component{
    render(){
        return(
            <article>
                <Pagination config = {{
                    totalPage:27,
                }}></Pagination>
            </article>
        );
    }
}