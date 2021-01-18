import Link from 'next/link';
import Navbar from './components/Navbar';
import Head from 'next/head'
import cookie from 'js-cookie';
import { useSession } from 'next-auth/client';

export default function Home(props) {


  const [ session, loading ] = useSession()
  console.log(session, "aslkdfjas")

  if (typeof window !== 'undefined' && loading) return null
  let name = session ? session.user.name : ""
  let loggedIn = false;



  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />
     {loggedIn && (
      <>
       <p>Welcome {name}!</p>
        
        <button
          onClick={() => {
            cookie.remove('token');
            revalidate();
          }}>
          Logout
        </button>
      </>
    )}

{!loggedIn && (
      <section className="hero">
        <div className="container">
          <div className="text-wrapper">

            <h1 className="title">Hi there, 
            <br></br>Welcome to Tempus <span class="wave">👋</span>
          
            </h1>
            <p className="description">Join our supportive community. You are not alone.</p>
            <p className="description">Interact with our mood tracker, blog platform, therapist locator, and sign up to store your information!</p>

            <Link href="/about"><a className="cta">Learn More</a></Link>
          </div> </div>

         
        {/* <>
          <Link href="/login">Login</Link>
          <p>or</p> <Link href="/signup">Sign Up</Link> </> */} </section>
                    )}
    </>
  );
}



