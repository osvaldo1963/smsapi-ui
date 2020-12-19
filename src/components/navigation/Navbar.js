import React from 'react'
import { Divider, Icon, Menu } from 'semantic-ui-react'
import { observer, inject, } from  'mobx-react'

const style =  {
    root: {
        height: '24px', 
        
    }, 
    
}
class navBar extends React.Component {
    
    
    handleItemClick = (e, {name}) => {
        const navbar = this.props.navbarStore
        navbar.setTab(name)        
    }
    
    render() {
        const navbar = this.props.navbarStore
        return (
            <div className={style.root} >
                 <Menu compact icon='labeled' text vertical>
                    <Menu.Item fitted='vertically'>
                        <Menu.Header>
                            Morrison
                        </Menu.Header>
                    </Menu.Item>
                    <Divider />
                    <Menu.Item fitted='vertically'>
                        <Menu.Menu>
                            <Menu.Item
                                fitted='vertically'
                                name='Home'
                                active={navbar.currentTab==='Home'}
                                onClick={this.handleItemClick} >
                                <Icon name='th' />
                                Home
                            </Menu.Item>
                            <Menu.Item
                                name='User'
                                active={navbar.currentTab==='User'}
                                onClick={this.handleItemClick}>
                                <Icon name='user' />
                                Users
                            </Menu.Item>
                            <Menu.Item
                                name='Groups'
                                active={navbar.currentTab==='Groups'}
                                onClick={this.handleItemClick} >
                                <Icon name="users" />
                                Groups
                            </Menu.Item>
                            <Menu.Item
                                name='LogOut'
                                active={navbar.currentTab==='LogOut'}
                                onClick={this.handleItemClick} >
                                <Icon name="sign-out" />
                                Sign Out
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu.Item>
                </Menu>
               
            </div>
        )
    }
}
const Navbar = inject("navbarStore")(observer(navBar))
export default Navbar