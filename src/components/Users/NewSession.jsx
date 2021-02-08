import useUser from "../../hooks/useUser";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  FormWrapper,
  StyledForm,
  Field,
  Input,
  Label,
  Heading,
} from "../../styles/formStyles";
import { UserWrapper } from "./UserWrapper";

function NewSession({ history }) {
  // From useUser Hook, we get:
  // -  a copy of the user state
  // - boolean for successful/unsuccessful
  // - error if occured || null
  // createUser and setUser function
  const { user, setUser, signIn, error, success } = useUser();

  // When the form is submitted, the signIn function in the hook runs.
  async function onFormSubmit(event) {
    event.preventDefault();
    await signIn();
  }

  // Anytime the success boolean or hist changes (ie user signed up), we're redirected to the home pg.
  useEffect(() => {
    success && history.push("/");
  }, [success, history]);

  // Updates state as info is typed into the form.
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <UserWrapper>
      <FormWrapper>
        <Heading>Sign In!</Heading>
        {/* If an error is recieved it will be displayed to the user */}
        {error && <span>{error}</span>}
        <StyledForm onSubmit={onFormSubmit}>
          <Field className="form-group">
            <Label htmlFor="username">Username:</Label>
            <Input
              type="test"
              name="username"
              id="username"
              value={user.username}
              onChange={handleChange}
            />
          </Field>

          <Field className="form-group">
            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={handleChange}
            />
          </Field>
          <Field>
            <Input id="submit" type="submit" value="Submit" />
          </Field>
        </StyledForm>
        <Link to={`/sign_up`}>Not yet a member?</Link>
      </FormWrapper>
    </UserWrapper>
  );
}
export default NewSession;
