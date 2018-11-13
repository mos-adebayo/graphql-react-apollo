import React, {Component} from 'react';

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onSubmit(event){
        const { email, password } = this.state;
        event.preventDefault();
        this.props.onSubmit({email, password})
    }

    render() {
        let { email, password } = this.state;
        let { errors } = this.props;
        return (
            <div className={'row'}>
                <form onSubmit={e => this.onSubmit(e)} className={'col s6'}>
                    <div className={'input-field'}>
                        <input
                            placeholder={"Email"}
                            type="text" value={email}
                               onChange={(e)=> this.setState({email: e.target.value})}
                        />
                    </div>
                    <div className={'input-field'}>
                        <input
                            placeholder={"Password"}
                            type="password" value={password}
                               onChange={(e)=> this.setState({password: e.target.value})}
                        />
                    </div>

                    <div className={'errors'}>
                        {
                            errors.map(error => <div key={error}>{error}</div>)
                        }
                    </div>

                    <button className={'btn'}>
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}


export default AuthForm;
