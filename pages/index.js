import Head from 'next/head'
import React from 'react';


export default function Home() {
  
  return (
    <div className='main'>
            <Head>
              <title>Proto v1</title>
              <meta name="description" content="FullStack app" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <body className='boxx'>
              <iframe width="1920" height="900" src={"https://www.youtube.com/embed/I9t4XTOwtEo?autoplay=1&loop=1"} title="YouTube video player" frameBorder={"0"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </body>
    </div >
  )
}
