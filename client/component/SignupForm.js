import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import AuthForm from './AuthForm';
import mutation from '../mutations/Signup';
import { graphql } from 'react-apollo';
import query from "../query/CurrentUser";

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: []
        }
    }
    componentWillUpdate(nextProps){
        /*
        * this.props //current props
        * nextProps //props after update
        * */
        if(!this.props.data.user && nextProps.data.user){
            //Redirect to dashboard!!!
            hashHistory.push('/dashboard')
        }
    }

    onLoginSubmit({email, password}) {

        this.props.mutate({
            variables: {email, password},
            refetchQueries: [
                {
                    query
                }
            ]
        }).catch(err => {
            const errors = err.graphQLErrors.map(error => error.message);
            this.setState({errors});
        })
    }

    render(){
         return (
            <div>
                <h3>Sign Up</h3>
                <AuthForm errors={this.state.errors} onSubmit={this.onLoginSubmit.bind(this)}/>
            </div>
        );
    }

};

export default graphql(query)(
graphql(mutation)(SignUpForm)
);
