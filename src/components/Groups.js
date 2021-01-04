import React from 'react'
import { Button, Form, Icon, Input, List, Modal } from 'semantic-ui-react'
import Department from '../util/Depar'
import Program from '../util/Program'

const program = new Program()
const department = new Department()

class Groups extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            programs: [], 
            programModal: false, 
            deparmentModal: false, 
            programText: "", 
            currentProgram: 0, 
            deparmentText: ""
        }
        this.fetchGroups      = this.fetchGroups.bind(this)
        this.fetchDepart      = this.fetchDepart.bind(this)
        this.deparmentModal   = this.deparmentModal.bind(this)
        this.programModal     = this.programModal.bind(this)
        this.createDepartment = this.createDepartment.bind(this)
        this.createProgram    = this.createProgram.bind(this)
    }
    componentDidMount() {
        this.fetchGroups()
    }
    async fetchGroups() {
        try {
            var programs = await program.fetchAll()
            var clean = []
            var newdata= programs.map(async(each) => {
                each.departments = await this.fetchDepart(each.value)
                clean.push(each)
            })
            await Promise.all(newdata)
            this.setState({
                programs: clean
            })
            
        } catch(error) { console.log(error) }
    }
    async fetchDepart(id) {
        try {
            var deparment = await department.fetchById(id)
            if(deparment.code === 200) {
                return deparment.deparment
            } else {
                return []
            }
        } catch(error) { console.log(error) }
    }
    async createProgram() {
        try {
            var create = await program.create(this.state.programText)
            if(create.code === 200) {
                this.programModal()
                this.fetchGroups()
            }
        } catch(error) {console.log(error)}
    }
    async createDepartment() {
        
        try {
            var create = await department.create(this.state.currentProgram, this.state.deparmentText)
            if(create.code === 200) {
                this.deparmentModal()
                this.fetchGroups()
            }
        } catch(error) {console.log(error)}
    }
    programModal() {
        if(this.state.programModal) {
            this.setState({
                programModal: false
            })
        } else {
            this.setState({
                programModal: true
            })
        }
    }
    deparmentModal(id) {
        if(this.state.deparmentModal) {
            this.setState({
                currentProgram: 0,
                deparmentModal: false
            })
        } else {
            this.setState({
                currentProgram: id,
                deparmentModal: true
            })
        }
    }
    render() {
        return(
            <div>
                <h1>Programs and Departments</h1>
                <Button onClick={this.programModal}>
                    <Icon name='add' />
                        Add Program
                </Button>
                <List divided verticalAlign='middle' >
                    {
                        this.state.programs.map((each, index)=> (
                            
                            <List.Item key={index}>
                                <List.Content floated='left'>
                                    <h2>{each.text}</h2>
                                </List.Content>  
                                <List.Content floated='right'>
                                    <Button onClick={() => this.deparmentModal(each.value)}>
                                        <Icon name='add' />
                                        Add Department
                                    </Button>
                                </List.Content>
                                <List >
                                {
                                   each.departments.map((depart, index) => (
                                        <List.Item key={index}>
                                            <List.Content floated='left'>{depart.department}</List.Content>
                                            <List.Content>
                                                <Button floated="right">
                                                    Delete
                                                </Button>
                                            </List.Content>
                                        </List.Item>
                                    )) 
                                }
                                </List>
                            </List.Item>
                                              
                        ))   
                    }
                </List>

                <Modal open={this.state.programModal} centered={true} >
                    <Modal.Header>Add Program</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field control={Input} placeholder="Program Name" onChange={(value) => { this.setState({ programText: value.target.value }) }}/>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.programModal}>Cancel</Button>
                        <Button onClick={this.createProgram}>Submit</Button>
                    </Modal.Actions>
                </Modal>

                <Modal open={this.state.deparmentModal} centered={true}>
                    <Modal.Header>Add Department</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field control={Input} placeholder="Deparment" onChange={(value) => { this.setState({ deparmentText: value.target.value }) }}/>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.deparmentModal}>Cancel</Button>
                        <Button onClick={this.createDepartment}>Submit</Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default Groups