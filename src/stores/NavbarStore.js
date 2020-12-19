import { makeAutoObservable } from 'mobx'

class NavbarStore {
    currentTab = "Home"
    constructor() {
      makeAutoObservable(this)
    }
    setTab(tab) {
        this.currentTab = tab
    }
}
const navbarStore = new NavbarStore()

export default navbarStore

