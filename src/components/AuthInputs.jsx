import { useState } from "react";

//moved button style to another jsx file in order to reuse it  hence importing here
import Button from "./Button";
import Input from "./Input";

//importing styled-component thirdparty package
import { styled } from "styled-components";

//a div or any html tag can be created using styled.<html_tag> and the style to those div can be added
// just by adding css attribute inside back-ticks ( ` ` ). And the html tag can be replaced with the constant
//returned with styled element
const ControlDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlDiv>
        <p>
          <Input
            label="Email"
            type="email"
            //  we can also pass props to the styled components to change the style dynamically like below
            validity={emailNotValid}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <Input
            label="Password"
            type="password"
            validity={emailNotValid}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </ControlDiv>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
