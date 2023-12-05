"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Loading from '../loading'
import { getSkills } from '../rtk/slices/skill'
import { useDispatch } from 'react-redux'
import { getPortfolio } from '../rtk/slices/portfolio'
import { getServices } from '../rtk/slices/services'

export default function page() {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getSkills());
      dispatch(getPortfolio());
      dispatch(getServices());
    },[]);


    useEffect(()=>{
        if (localStorage.getItem('admin') !== process.env.ADMIN_PASS) {
            if (router) {
                router.push('/')
            }
        }
        setLoading(false)
    },[])

    if (loading) {
        return (
          <Loading />
        )
    } else {
        return (
            <div className='bg-gray-800 w-full'>
                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe neque nostrum quidem in? Est odio impedit et inventore eaque tempore illo, debitis dolorem nulla eos aut minima modi quibusdam! Odit.</div>
                <div className="bg-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatibus dolorum aliquid ducimus possimus. Omnis alias error eum odit, magnam officia, culpa quia itaque temporibus, exercitationem iste quibusdam voluptate eveniet.</div>
            </div>
        )
    }
}