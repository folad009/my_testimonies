import React, { Component } from 'react';
import { connect } from 'react-redux'
import GoogleLogin from 'react-google-login'

import { 
    SignInUser,
    toggleClose,
    toggleOpen
 } from './../redux/actions/actions'

 import Facebook from './Facebook';

class SignInWith extends Component {

    render() {
    const responseGoogle = (res) => {
        let postData = {
            name: res.w3.ig,
            provider: 'google',
            email: res.w3.U3,
            provider_id: res.El,
            token: res.Zi.access_token,
            provider_pic: res.w3.Paa
        }

 
        console.log(postData)
        // build our user data
        this.props.SignInUser(postData)
        this.props.toggleClose()
    }

        return ( 
            <div>
                <div data-behavior="overlay" className={this.props.modalMode === true ? 'overlay overlay-hugeinc open' : 'overlay overlay-hugeinc'}>
        <button onClick={this.props.toggleClose} data-behavior="close-overlay" type="button" className="overlay-close"><span className="glyphicon glyphicon-remove"></span></button>
        <nav>
            <h2 className="grayed-heading center">Welcome back - Login with Facebook and Google</h2>
            <p className="grayed-heading center">Sign in to get personalized story recommendations, follow authors and topics you love, and interact with 
               stories.</p>
            <ul className="omniauth-button-group">
                <li className="omniauth-button google">
                    <Facebook/>
                    <br/>
                    <GoogleLogin className="button google"
                    clientId=""
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle} >
                        <i className="fa fa-google"></i><span>Login with Google</span>
                    </GoogleLogin>
                </li>
                
            </ul>
        </nav>
    </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        modalMode: state.common.modalMode
    }
}

export default connect(mapStateToProps, {
    toggleClose,
    toggleOpen,
    SignInUser
})(SignInWith);
