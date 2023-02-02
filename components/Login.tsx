import { useState } from "react"
import Cookies from "universal-cookie"
import consts from "consts"

const Login = ({ redirectPath }) => {
  const [password, setPassword] = useState("")

  return (
    <div>
      <form>
        <label className="block">
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
      </form>
    </div>
  )
}

export default Login
