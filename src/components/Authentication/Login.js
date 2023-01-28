import { useFormik } from "formik";
import { Link } from "react-router-dom";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h2>Login</h2>
        <br />
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.password}
            required
          />
        </div>
        <div>
          <p>
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
