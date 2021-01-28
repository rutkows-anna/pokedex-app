import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../state/auth/actions";
import { useSelector } from "react-redux";
import PageWrapper from "../PageWrapper/PageWrapper";

const SignInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState();
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { username, password };
    dispatch(signIn(user));
  };

  return (
    <PageWrapper>
      <form onSubmit={handleSubmit} className="form">
        <label className="form__label">Username (test)
        <input
          type="text"
          name="username"
          onChange={(event) => setUsername(event.target.value)}
          className="form__input"
        />
</label>
        <label className="form__label">Password (test123)
        <input
          type="password"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
          className="form__input"
        /></label>
        <p className="form__error"> {error}</p>
        <button type="submit" className="form__button">
          Sign in
        </button>
      </form>
    </PageWrapper>
  );
};

export default SignInPage;
