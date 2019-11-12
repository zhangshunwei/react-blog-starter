import React,{ Component } from 'react'
import Pagination from '../Pagination'
import style from './pagination.scss' 

export default class Pagination extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div className = { style.main }>
                <ul className = { style.page }>
                    <li>上一页</li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li className = { style.active }>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>下一页</li>
                </ul>
            </div>

        )
    }
}
