import "./Signup.css";

const Signup = () => {
  return (
    <div className="sign-up">
      <div className="container">
        <div className="sign-up-wrapper">
          <form method="POST" className="form">
            <span className="form__title">Sign Up</span>
            <div className="form__inputs">
              <div className="form__inputs__group">
                <input
                  type="text"
                  name="username"
                  placeholder="Enter username"
                />
                <span className="input-error"></span>
              </div>

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

              <div className="form__inputs__group">
                <input
                  type="password"
                  name="confirm"
                  placeholder="Enter confirm password"
                />
                <span className="input-error"></span>
              </div>

              <div className="form__inputs__group">
                <button>Sign up</button>
              </div>

              <div className="link-to-actions">
                <span>Alrady have an account?</span>
                <a href="/signin">Sign in now</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
