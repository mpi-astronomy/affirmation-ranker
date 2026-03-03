import { useState, useCallback } from 'react'
import affirmationsData from '../data/affirmations.json'

function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function getRandomUnique(arr, count) {
  const shuffled = shuffleArray(arr)
  return shuffled.slice(0, count)
}

export function useAffirmations() {
  const [affirmations, setAffirmations] = useState(() => 
    getRandomUnique(affirmationsData, 3)
  )

  const getThreeRandom = useCallback(() => {
    return getRandomUnique(affirmationsData, 3)
  }, [])

  const shuffle = useCallback(() => {
    setAffirmations(getRandomUnique(affirmationsData, 3))
  }, [])

  const randomizeOrder = useCallback((currentAffirmations) => {
    return shuffleArray(currentAffirmations)
  }, [])

  return {
    affirmations,
    getThreeRandom,
    shuffle,
    randomizeOrder
  }
}
