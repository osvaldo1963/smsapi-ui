import { inject, observer } from 'mobx-react'
import React from 'react'
import { Grid } from 'semantic-ui-react'
import Navbar from '../components/navigation/Navbar'
import Message from '../components/Message'
import User from '../components/User'
import Groups from '../components/Groups'

class home extends React.Component {
    constructor(props){
        super(props)
       
        this.currentTab = this.currentTab.bind(this)
    }
    currentTab(nav) {
        if(nav.currentTab === "Home") {
            return <Message />
        } else if (nav.currentTab === "User") {
            return <User />
        } else if(nav.currentTab === "Groups") {
            return <Groups />
        } else if(nav.currentTab === "LogOut") {
            this.props.history.push('/')
            localStorage.clear()
        }
    }
    render() {
        const navbar = this.props.navbarStore
        return(
            <div>
                <Grid>
                    <Grid.Column width={3}>
                        <Navbar />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        {this.currentTab(navbar)}
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
const Home = inject("navbarStore")(observer(home))
export default Home
