import Head from "next/head"
import { useRouter } from "next/router"
import Login from "components/Login"

export default function Protected({ hasReadPermission }) {

  const router = useRouter()

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />
  }


  return (
    <div>
      <Head>
        <title>Protected Page</title>
      </Head>

      <main>Ya estás adentro.</main>
    </div>
  )
}
