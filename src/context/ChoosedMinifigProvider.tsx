import React, { useState, useEffect, FC } from 'react'
import ChoosedMinifigContext, { Minifig } from './ChoosedMinifigContext'

interface ChoosedMinifigProviderProps {
  children: React.ReactNode
}

const ChoosedMinifigProvider: FC<ChoosedMinifigProviderProps> = ({
  children,
}) => {
  const [choosedMinifig, setChoosedMinifig] = useState<Minifig | null>(() => {
    const savedMinifig = localStorage.getItem('choosedMinifig')
    return savedMinifig ? JSON.parse(savedMinifig) : null
  })

  useEffect(() => {
    if (choosedMinifig === null) {
      localStorage.removeItem('choosedMinifig')
    } else {
      localStorage.setItem('choosedMinifig', JSON.stringify(choosedMinifig))
    }
  }, [choosedMinifig])

  return (
    <ChoosedMinifigContext.Provider
      value={{ choosedMinifig, setChoosedMinifig }}
    >
      {children}
    </ChoosedMinifigContext.Provider>
  )
}

export default ChoosedMinifigProvider
