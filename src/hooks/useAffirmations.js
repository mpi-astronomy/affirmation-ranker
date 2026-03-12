import { useState, useCallback } from 'react'
import { getAllAffirmations, getAffirmationsForSurvey } from '../services/surveyService'

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

export function useAffirmations(surveyId = null, count = 3) {
  const affirmationsData = surveyId
    ? getAffirmationsForSurvey(surveyId)
    : getAllAffirmations()

  const [affirmations, setAffirmations] = useState(() =>
    getRandomUnique(affirmationsData, count)
  )

  const getThreeRandom = useCallback(() => {
    const data = surveyId ? getAffirmationsForSurvey(surveyId) : getAllAffirmations()
    return getRandomUnique(data, count)
  }, [surveyId, count])

  const shuffle = useCallback(() => {
    setAffirmations(getRandomUnique(affirmationsData, 3))
  }, [affirmationsData])

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
