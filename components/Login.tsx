import { useState } from "react"
import styled from 'styled-components';
import Cookies from "universal-cookie"
import consts from "consts"

const StyledForm = styled.form`
  background: black;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    * {
      margin-bottom: 15px;
    }
  }
  button {
    border: none;
    border-radius: 0;
    background: white;
    padding: 10px 20px;
    font-weight: bold;
  }
`;

const Login = ({ redirectPath }) => {
  const [password, setPassword] = useState("")

  return (
    <div>
      <StyledForm>
        <label>
          <span>Password</span>
          <input
            type="text"
            placeholder="Your site password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            const cookies = new Cookies()
            cookies.set(consts.SiteReadCookie, password, {
              path: "/",
            })
            window.location.href = redirectPath ?? "/"
          }}
        >
          Login
        </button>
      </StyledForm>
    </div>
  )
}

export default Login
