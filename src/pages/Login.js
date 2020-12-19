import React from 'react'
import { withRouter } from 'react-router-dom'
import { Grid, Button, Form } from 'semantic-ui-react'
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.Login.bind(this)
    }
    Login() {
        this.props.history.push('/home')
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
                                    <input placeholder='Email' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Password</label>
                                    <input placeholder='Password' />
                                </Form.Field>
                                <Button type='submit' onClick={() => { this.Login() }} >Submit</Button>  
                            </Form>
                        </Grid.Column> 
                    </Grid>
                </body>
            </div>
        )
    }
}

export default withRouter(Login);