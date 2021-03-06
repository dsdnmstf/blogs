import { Form } from "formik";
import { Grid, TextField, Button } from "@mui/material";
import { createUser } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
const RegisterForm = (props) => {
  // const [formdata, setFormdata] = useState({
  //   email: "",
  //   password: "",
  // });
  const navigate = useNavigate();
  const { values, handleChange, handleBlur, errors, touched } = props;
  const handleRegister = () => {
    createUser(values.email, values.password);
    navigate("/");
  };
  return (
    <Form>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField
            id="email"
            label="email"
            name="email"
            variant="outlined"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.email && errors.email}
            error={touched.email && Boolean(errors.email)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="password"
            label="password"
            name="password"
            variant="outlined"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password && errors.password}
            error={touched.password && Boolean(errors.password)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="passwordConfirm"
            label="password confirm"
            name="passwordConfirm"
            variant="outlined"
            type="password"
            value={values.passwordConfirm}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.passwordConfirm && errors.passwordConfirm}
            error={touched.passwordConfirm && Boolean(errors.passwordConfirm)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            onClick={handleRegister}
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default RegisterForm;
