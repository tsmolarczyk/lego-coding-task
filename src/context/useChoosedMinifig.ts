import { useContext } from 'react'
import ChoosedMinifigContext, {
  ChoosedMinifigContextType,
} from './ChoosedMinifigContext'

const useChoosedMinifig = (): ChoosedMinifigContextType => {
  const context = useContext(ChoosedMinifigContext)
  if (!context) {
    throw new Error(
      'useChoosedMinifig must be used within a ChoosedMinifigProvider'
    )
  }
  return context
}

export default useChoosedMinifig
