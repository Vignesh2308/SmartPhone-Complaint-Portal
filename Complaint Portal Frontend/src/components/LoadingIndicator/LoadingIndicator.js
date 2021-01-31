import React,{Component} from 'react'
import {connect} from 'react-redux'
import './style.css'


class LoadingIndicator extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            spinner : false
        }
    }
    static getDerivedStateFromProps(nextProps, prevState){
        if( nextProps.spinner_status){
            if(!prevState.spinner){
                return ({...prevState , spinner : true})
            }
        }else if(!nextProps.spinner_status){
            if(prevState.spinner){
                return ({...prevState , spinner : false})
            }
        }
        return null
    }

    render(){
        return(
            this.state.spinner ? ( 
            <div className="loadingIndicator" id="loadingIndicator">
                <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
                </div>
            </div> ): null 

        )
    }
}

function mapStateToProps(state) {
    return state
  }

export default connect(mapStateToProps,null)(LoadingIndicator)