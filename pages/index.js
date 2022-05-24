import Head from 'next/head'
import React from 'react';
import { useState, useEffect } from 'react'

export default function Home() {
  const [playing, setplaying] = useState(false)
  const [bingoNumbersIn, setbingoNumbers] = useState([])
  let bingoNumbers = []
  for (let index = 0; index < 91; index++) {
    const element = index;
    const numero = {
      number: element,
      state: false
    }
    bingoNumbers.push(numero)

  }
  const restartBingo = () => {
    bingoNumbers = []
    setgetWon(false)
    for (let index = 0; index < 91; index++) {
      const element = index;
      const numero = {
        number: element,
        state: false
      }
      bingoNumbers.push(numero)

    }
    setbingoNumbers(bingoNumbers)
    setTimeout(playBingo, 5000)

  }
  const melek = [2, 18, 37, 59, 80]
  const gustavo = [20, 15, 16, 18, 4]
  const moet = [4, 32, 73, 52, 29]
  let getedAct = '...'
  const playBingo = () => {
    setWinner('NohanGanado')
    let melekwin = false
    let moetwin = false
    let guswin = false
    setplaying(!playing)
    let min = 0
    let max = 90
    const geted = Math.floor(Math.random() * (max - min)) + min;

    getedAct = (geted)

    if (!bingoNumbers[geted].state) {
      bingoNumbers[geted].state = true
      setbingoNumbers(bingoNumbers)
      setnumeroquesalio(getedAct)
      for (let index = 0; index < melek.length; index++) {
        const element = melek[index];
        if (geted === element) {
          console.log('meleksitalotiene')
          setWinner('meleksitalotiene')
        }
      }
      for (let index = 0; index < melek.length; index++) {
        const element = melek[index];
        if (bingoNumbers[element].state === false) {
          melekwin = false
          index = 6
        } else {
          melekwin = true
        }
      }

      for (let index = 0; index < moet.length; index++) {
        const element = moet[index];
        if (geted === element) {
          console.log('moetsinlotiene')
          setWinner('moetsinlotiene')
        }

      }
      for (let index = 0; index < moet.length; index++) {
        const element = moet[index];
        if (bingoNumbers[element].state === false) {
          moetwin = false
          index = 6
        } else {
          moetwin = true
        }
      }

      for (let index = 0; index < gustavo.length; index++) {
        const element = gustavo[index];
        if (geted === element) {
          console.log('lotienegustavo')
          setWinner('lotienegustavo')
        }

      }
      for (let index = 0; index < gustavo.length; index++) {
        const element = gustavo[index];
        if (bingoNumbers[element].state === false) {
          guswin = false
          index = 6
        } else {
          guswin = true
        }
      }

      if (guswin || moetwin || melekwin) {
        setWinner('GANO')
        let won = 'GANO '
        if (melekwin === true) {
          won = won + ' MELEK '
        }
        if (moetwin === true) {
          won = won + ' MOET '
        }
        if (guswin === true) {
          won = won + ' GUSTAVO '
        }
        setgetWon(true)
        setWinner(won)
      } else {
        setTimeout(playBingo, 1500)
      }
    } else {
      setTimeout(playBingo, 1)
    }
/*     console.log(bingoNumbers, geted, bingoNumbers[geted]);
 */  }


  useEffect(() => {
    setTimeout(playBingo, 5000)
    setbingoNumbers(bingoNumbers)

  }, [])
  useEffect(() => {
    /*  setbingoNumbers(bingoNumbers) */
    if (bingoNumbers[getedAct]) {
      if (!bingoNumbers[getedAct].state) {
        setnumeroquesalio(getedAct)
      }
    }


    /*  melek.map((key, i) => {
       console.log(key,'key',bingoNumbers[key].state);
       bingoNumbers[key].state === true ?  console.log('lotienemelek') : melekwin = false
     })
     gustavo.map((key, i) => {
       bingoNumbers[key].state === true ? console.log('lotienegus')  : guswin = false
     })
     moet.map((key, i) => {
       bingoNumbers[key].state === true ? console.log('lotienemoet')  : moetwin = false
     }) */
    /*  if (melekwin) {
       setWinner('GANO MELEK')
     }
     if (moetwin) {
       setWinner('GANO MOET')
     }
     if (guswin) {
       setWinner('GANO GUSTAVO')
     } */
    console.log('cambio');
  }, [playing])
  const [srcVideo, setsrcVideo] = useState("https://www.youtube.com/embed/I9t4XTOwtEo?autoplay=1&loop=1")
  return (
    <div className='main'>
            <Head>
              <title>Proto v1</title>
              <meta name="description" content="FullStack app" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <body className='boxx'>
              <iframe width="1920" height="900" src={srcVideo} title="YouTube video player" frameBorder={"0"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              <button className='nexflix-url' onClick={(e) => {
                e.preventDefault(),
                  setsrcVideo("https://www.youtube.com/embed/I9t4XTOwtEo?autoplay=1&loop=1")
              }}>PELI1</button>
              <button className='nexflix-url' onClick={(e) => {
                e.preventDefault(),
                  setsrcVideo("https://www.youtube.com/embed/QY0gaf-WyYM?autoplay=1&loop=1")
              }}>PELI2</button>
              <button className='nexflix-url' onClick={(e) => {
                e.preventDefault(),
                  setsrcVideo("https://www.youtube.com/embed/Idnr9_IS2TM?autoplay=1&loop=1")
              }}>PELI3</button>
              <button className='nexflix-url' onClick={(e) => {
                e.preventDefault(),
                  setsrcVideo("https://www.youtube.com/embed/nJC0HpvySg0?autoplay=1&loop=1")
              }}>PELI4</button>
            {/* <div className='flex-center'>
                <h1 className='font-big'>BINGO</h1>
               
                {getWon ?
                  <img className='winImg' src='https://media3.giphy.com/media/2gtoSIzdrSMFO/giphy.gif' alt='ganador' /> :
                  <div className='flex-column gapin'>
                    {
                      bingoNumbersIn.map((numberIn, i) => {
                        return <><span className={numberIn.state ? 'bingo-number activenum' : 'bingo-number'} id={i} key={i}>{numberIn.number}</span> <br className={i === 10 || i === 20 || i === 30 || i === 40 || i === 50 || i === 60 || i === 70 || i === 80 ? "" : 'hide'} /></>
                      })
                    }
                  </div>
                }

                <br />
                <div className='resultado'>
                  <span className='bingo-number activenum'>{numeroquesalio}</span>
                  <br />

                </div>
                <h1 className='font-big'> {winner}</h1>
                <button className='font-big' onClick={(e) => { e.preventDefault(); restartBingo() }}>REINICIAR</button>
              </div> */}


            {/*   <button onClick={(e) => { 
                e.preventDefault(),
                  send()
              }}>
                ver
              </button>
              <button onClick={(e) => {
                e.preventDefault(),
                  send2()
              }}>
                mandar
              </button>
              <button onClick={(e) => {
                e.preventDefault(),
                  send3()
              }}>
                Borrar
              </button>
              <button onClick={(e) => {
                e.preventDefault(),
                  send4()
              }}>
                Login
              </button>
              <input
                id='text'
                value={Data.text}
                onChange={handleLogin}
              />
              <input
                id='user'
                placeholder='Usuario'
                value={Data.user}
                onChange={handleLogin}
              />
              <input
                id='password'
                placeholder='Password'
                value={Data.password}
                onChange={handleLogin}
              />
              {
                action ?
                  <>
                    {mensajeR.map((key, i) => {
                      return <> {i > 0 ? <p>{i}-{key} <br></br></p> : null} </>
                    })}
                  </> :
                  <p>{mensajeR}</p>
              } */}
          </body>
    </div >
  )
}
