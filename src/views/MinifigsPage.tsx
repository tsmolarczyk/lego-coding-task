import React, { useEffect, useState, FC } from 'react'
import { useNavigate } from 'react-router-dom'
import Lottie from 'lottie-react'

import Button from '../components/Button'
import MinifigCard from '../components/MinifigCard'
import useChoosedMinifig from '../context/useChoosedMinifig'
import legoAnimation from '../assets/lottie-lego.json'

interface Minifig {
  set_num: string
  set_img_url: string
  name: string
  set_url: string
  num_parts: number
  last_modified_dt: string
}

const MinifigsPage: FC = () => {
  const API_KEY = import.meta.env.VITE_API_KEY
  const HARRY_POTTER_THEME_ID = 246
  const perPage = 100
  const navigate = useNavigate()
  const [minifigs, setMinifigs] = useState<Minifig[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const { choosedMinifig, setChoosedMinifig } = useChoosedMinifig()

  useEffect(() => {
    setLoading(true)
    setChoosedMinifig(null)
    getCount().then((count) => {
      getRandomMinifigs(count).then((minifigs) => {
        setMinifigs(minifigs)
        setLoading(false)
      })
    })
  }, [])

  const getCount = async () => {
    const response = await fetch(
      `https://rebrickable.com/api/v3/lego/minifigs/?in_theme_id=${HARRY_POTTER_THEME_ID}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: API_KEY,
        },
      }
    )
    const data = await response.json()
    return data.count
  }

  const getRandomPageNumber = (totalCount: number): number => {
    const totalPages = Math.ceil(totalCount / perPage)
    return Math.floor(Math.random() * totalPages) + 1
  }

  const getRandomMinifigs = async (count: number) => {
    localStorage.clear()

    const randomMinifigs = []
    while (randomMinifigs.length < 3) {
      const randomPage = getRandomPageNumber(count)
      const response = await fetch(
        `https://rebrickable.com/api/v3/lego/minifigs/?in_theme_id=${HARRY_POTTER_THEME_ID}&page=${randomPage}&page_size=${perPage}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: API_KEY,
          },
        }
      )
      const data = await response.json()
      const randomIndex = Math.floor(Math.random() * data.results.length)
      const candidateMinifig = data.results[randomIndex]

      if (candidateMinifig.set_img_url) {
        randomMinifigs.push(candidateMinifig)
      }
    }
    return randomMinifigs
  }

  const handleButtonClick = () => {
    navigate('/summary')
  }

  const handleActive = (minifig: Minifig) => {
    setChoosedMinifig(minifig)
  }

  if (loading) {
    return (
      <div className="flex flex-wrap justify-center gap-4 p-4 bg-lego-pattern bg-cover min-h-screen">
        <Lottie
          animationData={legoAnimation}
          style={{ width: '80vw', height: '80vh' }}
        />
      </div>
    )
  }
  return (
    <div className="flex flex-wrap flex-col justify-center gap-4 p-4 bg-lego-pattern bg-cover min-h-screen">
      <h1 className=" text-4xl font-bold text-white m-4 mb-12 text-center">
        CHOOSE YOUR MINIFIG
      </h1>
      <div className="flex justify-center items-center flex-col lg:flex-row ">
        {minifigs.map((minifig) => (
          <MinifigCard
            key={minifig.set_num}
            imgUrl={minifig.set_img_url}
            alt={minifig.name}
            name={minifig.name}
            details={minifig.set_url}
            onClick={() => handleActive(minifig)}
            isActive={choosedMinifig?.set_num === minifig.set_num}
          />
        ))}
      </div>
      <Button
        onClick={handleButtonClick}
        title={'PROCEED TO SHIPMENT'}
        isDisabled={!choosedMinifig?.set_num}
      />
    </div>
  )
}

export default MinifigsPage
