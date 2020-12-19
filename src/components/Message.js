import React from 'react'
import { Button, Form, Select, TextArea, Table, Checkbox, Segment } from 'semantic-ui-react'

const program = [
    { key: 'ph', text: 'none', value: 'none' },
    { key: 's', text: 'shelter', value: 'shelter' },
    { key: 'gh', text: 'group home', value: 'group-home' },
    { key: 'p', text: 'paso', value: 'paso' },
]
const department = [
    { key: 'ph', text: 'none', value: 'none' },
    { key: 's', text: 'shelter', value: 'shelter' },
    { key: 'gh', text: 'group home', value: 'group-home' },
    { key: 'p', text: 'paso', value: 'paso' },
]
const data = [
    {"name": "osvaldo", "phone":"9717707804", "email": "sdsd", "program":"shelter", "deparrment": "supervisor"}, 
    {"name": "daniel", "phone":"9717707804", "email": "sdsd", "program":"shelter", "deparrment": "supervisor"}, 
    {"name": "julia", "phone":"9717707804", "email": "sdsd", "program":"shelter", "deparrment": "supervisor"}
]
class Message extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            search  : '', 
            selected: [], 
            message : '', 
            program : '', 
            department : ''
        }
        this.onChangeSearch  = this.onChangeSearch.bind(this)
        this.onChangeMessage = this.onChangeMessage.bind(this)
        this.onSendMessage   = this.onSendMessage.bind(this)
        this.onChangePro     = this.onChangePro.bind(this)
        this.onChangeDep     = this.onChangeDep.bind(this)
    }
    onChangeSearch(e, data) {
        this.setState({
            search: data.value
        })
    }
    onChangeMessage(e, data) {
        this.setState({
            message: data.value
        })
        console.log(this.state.message)
    }
    onSendMessage() {
        console.log(Select.program)
    }
    onChangePro(e, data) {
        this.setState({
            program: data.value
        })
    }
    onChangeDep(e, data) { 
        this.setState({
            department: data.value
        }) 
        
    }
    render() {
        return(
            <div>
                <Form>
                    <h1>Send Message</h1>
                    <Form.Group unstackable widths='3'>
                        <Form.Input 
                            label="Search"
                            onChange={this.onChangeSearch}/>
                        <Form.Field
                            control={Select}
                            label="Program"
                            options={program}
                            id="program"
                            onChange={this.onChangePro}
                            placeholder="Program" />
                        <Form.Field 
                            control={Select}
                            label="Department"
                            options={department}
                            id="deparment"
                            onChange={this.onChangeDep}
                            placeholder="Department" />
                    </Form.Group>
                    <Segment style={{overflow: 'auto', maxHeight: 200 }}>
                    <Form.Group>
                        <Table singleLine tableData={data} >
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell> <Checkbox label="Check all" /> </Table.HeaderCell>
                                    <Table.HeaderCell>Name</Table.HeaderCell>
                                    <Table.HeaderCell>Phone</Table.HeaderCell>
                                    <Table.HeaderCell>E-mail address</Table.HeaderCell>
                                    <Table.HeaderCell>Program</Table.HeaderCell>
                                    <Table.HeaderCell>Department</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                                
                            <Table.Body>
                                {
                                    data.map((each, index) => (
                                        <Table.Row key={index}>
                                            <Table.Cell>
                                                <Checkbox 
                                                    onChange={(e, value) => {
                                                        if(value.checked) {
                                                            this.state.selected.push(each)
                                                            this.setState({
                                                                selected: this.state.selected
                                                            })
                                                            return
                                                        } else {
                                                            var index = this.state.selected.indexOf(each)
                                                            this.state.selected.splice(index, 1)
                                                            this.setState({
                                                                selected: this.state.selected
                                                            })
                                                            return
                                                        }
                                                    }} />
                                            </Table.Cell>
                                            <Table.Cell>{each.name}</Table.Cell>
                                            <Table.Cell>{each.phone}</Table.Cell>
                                            <Table.Cell>{each.email}</Table.Cell>
                                            <Table.Cell>{each.program}</Table.Cell>
                                            <Table.Cell>{each.deparrment}</Table.Cell>
                                        </Table.Row>
                                    ))
                                }
                            </Table.Body>
                        </Table>
                    </Form.Group>
                    </Segment>
                    <TextArea 
                        placeholder="message" 
                        onChange={this.onChangeMessage} />
                    <Button
                        onClick={this.onSendMessage}>Send</Button>
                </Form>
            </div>
        )
    }
}

export default Message
