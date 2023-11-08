"use client"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Loading from './loading'

export default function Home() {
 
  const [adminEmail, setAdminEmail] = useState('')
  const [adminPassword, setAdminPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
      if (localStorage.getItem('admin') === process.env.ADMIN_PASS) {
        router.push('/dashboard')
      }
      setLoading(false)
  })

  const login = (e) => {
    e.preventDefault()
    if (adminEmail === process.env.ADMIN_EMAIL && adminPassword === process.env.ADMIN_PASS) {
      setError('')
      localStorage.setItem('admin' , process.env.ADMIN_PASS)
      router.push('/dashboard')
    } else {
      setError('Something Wrong')
    }
  }

  if (loading) {
    return <Loading />
  } else {
    return (
      <div className='bg-gray-950 h-screen w-screen backdrop-blur-sm py-4'>
        <h1 className="text-gray-100 text-center md:text-8xl text-5xl pt-6 font-bold tracking-widest">welcom !</h1>
        { error && <div className=' mt-20 m-auto w-1/3 bg-red-300 text-center p-3 text-red-700 border-[1px] border-red-800 rounded-md'>{error}</div> }
        <form className={`md:w-1/3 w-[95%] m-auto p-4 ${!error && 'mt-20'}`} onSubmit={login}>
          <label className="text-gray-300" htmlFor="email">Email Address</label>
          <input type="text" name="email" className="input" onChange={e => setAdminEmail(e.target.value)} />
          <label className="text-gray-300" htmlFor="password">Password</label>
          <input type="password" name="password" className="input" onChange={e => setAdminPassword(e.target.value)} />
          <button className="main-btn">Login</button>
        </form>
      </div>
    )
  }
}


