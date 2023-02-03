import Head from "next/head"
import { useRouter } from "next/router"
import styled from 'styled-components'
import Login from "components/Login"

const StyledLogin = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
`;

const StyledContent = styled.main`
  background-color: #fafafa;
  margin: 50px;
  padding: 50px;
  font-family: monospace;
  font-size: 18px;
`;
export default function Protected({ hasReadPermission }) {

  const router = useRouter()

  if (!hasReadPermission) {
    return <StyledLogin>
      <Login redirectPath={router.asPath} />
    </StyledLogin>
  }


  return (
    <div>
      <Head>
        <title>Protected Page</title>
      </Head>

      <StyledContent>
        <h1>Cartas Oscuras</h1>
        <ul>
          <li>
            <a href='/public/cv.pdf' download>Curriculum</a>
          </li>
          <li>
            <a href='https://www.youtube.com/watch?v=7TytIPEgWxs'>JazzFunk Instrumental</a>
          </li>
        </ul>
      </StyledContent>
    </div>
  )
}
