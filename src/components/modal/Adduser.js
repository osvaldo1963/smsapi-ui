/*
const AddUserModal = () => <Modal open={this.state.openmodal} centered={true}>
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

module.exports = {
    AddUserModal
}
*/