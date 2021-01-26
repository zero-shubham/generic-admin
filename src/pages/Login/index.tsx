import Card from "react-bootstrap/Card";
import { Button } from "reactstrap";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import styles from "./Login.module.scss";

type FormData = {
  username: string;
  password: string;
};

function Login(): JSX.Element {
  const { register, setValue, handleSubmit, errors } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(errors);
  });

  return (
    <div className={styles.main}>
      <div className={styles.cardContainer}>
        <Card className={styles.card}>
          <Card.Body className={styles.logoContainer}>One big - LOGO</Card.Body>
          <Card.Body className={styles.formContainer}>
            <h4>Login</h4>
            <p>Welcome back, please login to your account.</p>
            <form onSubmit={onSubmit} className={styles.form}>
              <TextField
                label="Username"
                id="username"
                name="username"
                placeholder="Enter Username"
                inputRef={register({
                  required: true,
                })}
                error={!!errors.username}
                className={styles.formInp}
              />

              <TextField
                label="Password"
                id="password"
                name="password"
                type="password"
                placeholder="Enter Password"
                inputRef={register({ required: true })}
                error={!!errors.password}
                className={styles.formInp}
              />
              <Button
                variant="primary"
                type="submit"
                className={styles.formBtn}
              >
                Login
              </Button>
            </form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Login;
