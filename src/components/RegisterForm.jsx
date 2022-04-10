import {Form} from "formik"
import { Grid, TextField, Button, Link } from "@mui/material";
const RegisterForm = (props) => {
     console.log(props);
     const { values, handleChange, handleBlur, errors, touched } = props;
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
            sx={{ }}
          >
            Register
          </Button>
        </Grid>
      </Grid>
      
    </Form>
  );
}

export default RegisterForm