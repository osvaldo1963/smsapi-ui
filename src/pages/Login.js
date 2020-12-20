import React from 'react'
import { withRouter } from 'react-router-dom'
import { Grid, Button, Form } from 'semantic-ui-react'
import Auth from '../util/Auth'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '', 
            password: '',
        }
        this.login = this.login.bind(this)
        this.emailOnChanged = this.emailOnChanged.bind(this)
        this.passOnChanged = this.passOnChanged.bind(this)
    }
    componentDidMount() {
        var auth = new Auth()
        var access = auth.checkSession()
        if(access) this.props.history.push('/home')
    }
    async login() {
        try {
            var auth = new Auth()
            var response = await auth.Login(this.state.email, this.state.password)
            var  { status } = response
            if(status === 200) this.props.history.push('/home')
        } catch(error) {
            console.log("error on request "+error)
        }
        
    }
    emailOnChanged(value) {
        this.setState({
            email: value.target.value
        })
    }
    passOnChanged(value) {
        this.setState({
            password: value.target.value
        })
    }
    render() {
        return(
            <div>
                <body>
                    <Grid centered columns={2}>
                        <Grid.Column>
                            <Form>
                            <h1>Login</h1>
                                <Form.Field>
                                    <label>Email</label>
                                    <input 
                                        placeholder='Email'
                                        onChange={this.emailOnChanged} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Password</label>
                                    <input 
                                        security
                                        placeholder='Password'
                                        onChange={this.passOnChanged} />
                                </Form.Field>
                                <Button type='submit' onClick={() => { this.login() }} >Submit</Button>  
                            </Form>
                        </Grid.Column> 
                    </Grid>
                </body>
            </div>
        )
    }
}

export default withRouter(Login);