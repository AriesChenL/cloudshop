var auth = {
    getAuthorization() {
        return localStorage.getItem('usernme');
    },
    setAuthorization(username) {
        localStorage.setItem('usernme', username);
    }
}
export default {
    install: function (vue) {
        vue.prototype.$auth = auth
    }
}
