import "./Signin.css";

const Signin = () => {
  return (
    <div className="sign-in">
      <div className="container">
        <div className="sign-in-wrapper">
          <form method="POST" className="form">
            <span className="form__title">Sign In</span>
            <div className="form__inputs">
              <div className="form__inputs__group">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                />
                <span className="input-error"></span>
              </div>

              <div className="form__inputs__group">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <span className="input-error"></span>
              </div>

              <div className="forgot-password">
                <a href="/#">Forgot Password ?</a>
              </div>

              <div className="form__inputs__group">
                <button>Sign in</button>
              </div>
            </div>
            <div className="link-to-actions">
              <span>Don’t have an account?</span>
              <a href="/signup">Sign up now</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
