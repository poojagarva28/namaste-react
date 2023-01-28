import { useFormik } from "formik";
import { Link } from "react-router-dom";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contact: "",
      password: "",
      confirmpassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h2>Signup</h2>
        <br />
        <div>
          <label htmlFor="firstName">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            required
          />
        </div>
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
          <label htmlFor="email">Contact</label>
          <input
            id="contact"
            name="contact"
            type="tel"
            onChange={formik.handleChange}
            value={formik.values.contact}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            id="confirmpassword"
            name="confirmpassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmpassword}
            required
          />
        </div>
        <div>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
