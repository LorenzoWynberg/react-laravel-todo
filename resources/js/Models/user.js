class User {

	constructor() {
		this.set()
	}

	set() {
		this.name = localStorage.getItem('userName')
		this.email = localStorage.getItem('userEmail')
		this.loggedIn = localStorage.getItem('userLoggedIn')
	}

	/**
	 *
	 * @param data object
	 * @param data.name string
	 * @param data.email string
	 */
	store(data) {
		localStorage.setItem('userName', data.name)
		localStorage.setItem('userEmail', data.email)
		localStorage.setItem('userLoggedIn', true)
		this.set()
	}

	/**
	 *
	 * @return boolean
	 */
	isLoggedIn() {
		return Boolean(this.loggedIn) === true
	}

	logout() {
		localStorage.removeItem('userName')
		localStorage.removeItem('userEmail')
		localStorage.removeItem('userLoggedIn')
		this.set();
	}
}

export default new User()
