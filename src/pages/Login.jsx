export default function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">My Chat App</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{display: "none"}} type="file" id="file"/>
          <button>Login</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
}
