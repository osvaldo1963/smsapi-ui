import React from 'react'
import { Grid, Table, Button, Form, Input, Modal, Select } from 'semantic-ui-react'

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openmodal: false
        }
        this.addUserModal = this.addUserModal.bind(this)
    }
    addUserModal() {
        if(this.state.openmodal) {
            this.setState({
                openmodal: false
            })
        } else {
            this.setState({
                openmodal: true
            })
        }
    }

    render() {
        return(
            <div>
                <Grid>
                    <Grid.Row columns='equal'>
                        <Button onClick={this.addUserModal}>Add User</Button>
                        <Form.Field 
                            control={Input}
                            placeholder="search by name" />
                        
                    </Grid.Row>
                    
                    <Grid.Row>
                        <Table>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Name</Table.HeaderCell>
                                    <Table.HeaderCell>Phone</Table.HeaderCell>
                                    <Table.HeaderCell>E-mail address</Table.HeaderCell>
                                    <Table.HeaderCell>Program</Table.HeaderCell>
                                    <Table.HeaderCell>Department</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                        </Table>
                    </Grid.Row>
                    
                </Grid>
                <Modal open={this.state.openmodal} centered={true}>
                    <Modal.Header>Add User Information</Modal.Header>
                    <Modal.Content image>
                        <Modal.Description>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Field 
                                    control={Input}
                                    placeholder="Firt Name" />
                                <Form.Field 
                                    control={Input}
                                    placeholder="Last Name" />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Field 
                                    control={Input}
                                    placeholder="Phone" />
                                <Form.Field 
                                    control={Input}
                                    placeholder="Email" />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Field 
                                    control={Select}
                                    placeholder="Program" />
                                <Form.Field 
                                    control={Select}
                                    placeholder="Department" />
                            </Form.Group>
                        </Form>
                        </Modal.Description>
                        
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='red' onClick={this.addUserModal}>Cancel</Button>
                        <Button>Submit</Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default User