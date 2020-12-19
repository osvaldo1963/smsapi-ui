import React from 'react'
import { Button, Form, Icon, Input, List, Modal } from 'semantic-ui-react'

class Groups extends React.Component {
    render() {
        return(
            <div>
                <h1>Programs and Departments</h1>
                <Button>
                    <Icon name='add' />
                        Add Program
                </Button>
                <List divided verticalAlign='middle' >
                    <List.Item>
                        <List.Content floated='left'><h2>Shelter</h2></List.Content>
                        <List.Content floated='right'>
                            <Button>
                                <Icon name='add' />
                                Add Department
                            </Button>
                        </List.Content>
                        <List.List>
                            <List.Item>CM</List.Item>
                        </List.List>
                    </List.Item>
                </List>
                <Modal >
                    <Modal.Header>Add Program</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field control={Input} placeholder="Program Name"/>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button>Cancel</Button>
                        <Button>Submit</Button>
                    </Modal.Actions>
                </Modal>
                <Modal>
                    <Modal.Header>Add Department</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field control={Input} placeholder="Deparment"/>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button>Cancel</Button>
                        <Button>Submit</Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default Groups