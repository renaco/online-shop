const Auth = {
    _isAuthenticated: false,
    authenticate(name, pass, cb) {

      /* Simulate authentication and send user object back. */
      this._isAuthenticated = true;
      setTimeout(()=>cb({
        name:name
      }), 100)  
    },
    signout(cb) {
      this._isAuthenticated = false
      setTimeout(cb, 100)  
    }
  }

  export default Auth;