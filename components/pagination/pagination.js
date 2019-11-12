import React,{ Component } from 'react'
import style from './pagination.scss'

export default class Pagination extends Component{
    constructor(props){
        super(props)

        this.state = {
            pageCurr:1,
            groupCount:7,
            startPage:1,
        }
    }

    create(){
        const {
            totalPage,
        } = this.props.config

        const {
            pageCurr,
            startPage,
            groupCount,
        } = this.state

        let pages = []
        if(totalPage <= 10){
            pages.push(<li onClick = { this.goPrev.bind(this) } className = { this.state.pageCurr === 1? style.nomore:"" } key={0}>上一页</li>)
            for(let i = 1; i <= totalPage; i++){
                pages.push(<li onClick = { this.go.bind(this, i) } className = { pageCurr === i ? style.active : "" } key={i}>{i}</li>)
            }
            pages.push(<li onClick = { this.goNext.bind(this) } className = { this.state.pageCurr === totalPage ? style.nomore:"" } key = {totalPage + 1}>下一页</li>)
        } else {
            pages.push(<li className = { this.state.pageCurr === 1? style.nomore:"" } key={ 0 } onClick = { this.goPrev.bind(this) }>上一页</li>)
            for(let i = startPage;i < groupCount + startPage;i ++){
                pages.push(<li className = { this.state.pageCurr === i? style.active:""} key={i} onClick = { this.go.bind(this,i) }>{i}</li>)
            }

            pages.push(<li className = { this.state.pageCurr === totalPage ? style.nomore:"" } key={ totalPage + 1 } onClick = { this.goNext.bind(this) }>下一页</li>)
        }
        return pages
    }

    go(pageCurr){
        const {
            groupCount
        } = this.state;


        if(pageCurr % groupCount === 1){
            this.setState({
                startPage:pageCurr
            })
        }


        if(pageCurr % groupCount === 0){
            this.setState({
                startPage:pageCurr - groupCount + 1
            })
        }

        this.setState({
            pageCurr
        });

    }

    goPrev(){
        let {
            pageCurr,
        } = this.state

        this.go( --pageCurr )
    }

    goNext(){
        let {
            pageCurr,
        } = this.state

        this.go( ++pageCurr )
    }

    render(){
        const Pages = this.create.bind(this)()
        return(
            <div className = { style.main }>
                <ul className = { style.page }>
                    { Pages }
                </ul>
            </div>
        )
    }
}