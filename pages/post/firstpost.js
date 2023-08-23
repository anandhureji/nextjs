import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

const firstpost = () => {
  return (
    
    <div>
        <Head>
            <title>First Post</title>
        </Head>
        firstpost
        <h1>
            <Link href="/">Home</Link>
        </h1>
        <Image src="/images/abcd.jpg"
        height={144}
        width={144}></Image>
    </div>
    

  )
}

export default firstpost