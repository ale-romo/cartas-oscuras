import Head from "next/head"
import Cookies from "universal-cookie"
import Login from "Components/Login"
import consts from "consts"

export default function LoginPage({ hasReadPermission }) {
  if (hasReadPermission) {
    return (
      <>
        <Head>
          <title>Logout</title>
        </Head>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault()
              const cookies = new Cookies()
              cookies.remove(consts.SiteReadCookie, { path: "/" })
              window.location.href = "/login"
            }}
          >
            Logout
          </button>
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Login redirectPath="/" />
    </>
  )
}
