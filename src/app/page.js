'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';
import profile from '../../public/vercel.svg'


export default function Home() {
  // const router=useRouter();
  // const router = useRouter();
  function apple()
  {
    alert("Hello Kavi")
  }
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <button onClick={()=>alert("Hello Kumar")} >Hello Kumar</button>
      <button onClick={apple}>Hello Kavi</button>
      <User name="Kumar"></User>
      <Image src={profile} style={{background:"white"}}></Image>
      <Link href="/login">Go to Login Page</Link>
      <br></br>
      <Link href="/about">Go to About Page</Link>
      <Link href="/productlist">Serach for product list</Link>
      {/* <button onClick={()=>router.push("/login")}>Go to Login page</button> */}
    </main>
  )
}
const User=(props)=>
{
  return(
    <div>
      <h2>User name is  {props.name}</h2>
    </div>
  )
}
