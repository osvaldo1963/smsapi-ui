import React from 'react'
import { Grid, Table, Button, Form, Input, Modal, Select } from 'semantic-ui-react'
import Department from '../util/Depar'
import Program from '../util/Program'
import Users from '../util/Users'
const user    = new Users() 
const depar   = new Department()
const program = new Program()

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openmodal: false, 
            search: '', 
            users : [], 
            modelForm: {}, 
            department: [], 
            program: []
        }
        this.addUserModal   = this.addUserModal.bind(this)
        this.searchOnChange = this.searchOnChange.bind(this)
        this.fetchusers     = this.fetchusers.bind(this)
        this.modalForm      = this.modalForm.bind(this)
        this.fetchDepoop    = this.fetchDepoop.bind(this)
        this.selectForm     = this.selectForm.bind(this)
        this.submit         = this.submit.bind(this)
        this.delete         = this.delete.bind(this)
    }
    componentDidMount() {
       this.fetchusers()
       this.fetchDepoop()
    }
    async fetchusers() { 
        try {
            var result = await user.fetchUsers(this.state.search, '', '')
            this.setState({
                users: result.result
            })
            
        } catch(error) { console.log(error) }
        
    }
    async fetchDepoop() {
        try {
            var session = localStorage.getItem("session")
            var json =JSON.parse(session)

            var deparments = await depar.fetchAll(json.user_id, json.session)
            var programs   = await program.fetchAll(json.user_id, json.session)
            console.log(programs)
            this.setState({
                department: deparments, 
                program: programs
            })
        } catch(error) { console.log(error) }
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
    searchOnChange(value) {
        this.setState({
            search: value.target.value
        })
    }

    modalForm(value) {
        var keydic = value.target.id
        var object = value.target.value
        this.state.modelForm[keydic] = object
    
        this.setState({ 
            modalForm : this.state.modelForm
        })
    }

    selectForm(e, value) {
        var keydic = value.id
        var object = value.value
        this.state.modelForm[keydic] = object

        this.setState({ 
            modalForm : this.state.modelForm
        })
        console.log(this.state.modelForm)
    }

    async submit() {
        
        try {
            var result = await user.createUser(this.state.modelForm)
            if(result.code === 200) this.fetchusers()
            this.setState({
                openmodal: false
            })
        } catch(error) {console.log(error)}
    }
    async delete(id) {
        try {
            var result = await user.deleteUser(id)
            if(result.code=== 200) this.fetchusers()
        } catch(error) {console.log(error)}
    }

    render() {
        return(
            <div>
                <Grid>
                    <Grid.Row columns='equal'>
                        <Button onClick={this.addUserModal}>Add User</Button>
                        <Form.Field 
                            control={Input}
                            onChange={this.searchOnChange}
                            placeholder="search by name" />
                        <Button onClick={this.fetchusers} >Search</Button>
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
                                    <Table.HeaderCell>Actions</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {
                                    this.state.users.map((each, index) => (
                                        <Table.Row key={index}>
                                            <Table.Cell>{each.firstname}</Table.Cell>
                                            <Table.Cell>{each.phone}</Table.Cell>
                                            <Table.Cell>{each.email}</Table.Cell>
                                            <Table.Cell>{each.program_id.program}</Table.Cell>
                                            <Table.Cell>{each.department_id.department}</Table.Cell>
                                            <Table.Cell><Button onClick={() => {this.delete(each.id)}}>delete</Button></Table.Cell>
                                        </Table.Row>
                                    ))
                                }
                            </Table.Body>
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
                                    id="name"
                                    onChange={this.modalForm}
                                    control={Input}
                                    placeholder="Firt Name" />
                                <Form.Field 
                                    id="lastname"
                                    onChange={this.modalForm}
                                    control={Input}
                                    placeholder="Last Name" />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Field 
                                    id="phone"
                                    onChange={this.modalForm}
                                    control={Input}
                                    placeholder="Phone" />
                                <Form.Field 
                                    id="email"
                                    onChange={this.modalForm}
                                    control={Input}
                                    placeholder="Email" />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Field 
                                    id="program"
                                    control={Select}
                                    onChange={this.selectForm}
                                    options={this.state.program}
                                    placeholder="Program" />
                                <Form.Field 
                                    id="department"
                                    control={Select}
                                    onChange={this.selectForm}
                                    options={this.state.department}
                                    placeholder="Department" />
                                <Form.Field 
                                    id="type"
                                    control={Select}
                                    onChange={this.selectForm}
                                    options={[
                                        {key: 0, text: "admin", value: "admin"},
                                        {key: 1, text: "user", value: "user"},
                                    ]}
                                    placeholder="type" />
                            </Form.Group>
                        </Form>
                        </Modal.Description>
                        
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='red' onClick={this.addUserModal}>Cancel</Button>
                        <Button onClick={this.submit}>Submit</Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default User