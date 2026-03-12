import affirmationsData from '../data/affirmations.json'

export function getSurveys() {
  return affirmationsData.surveys || []
}

export function getDefaultSurvey() {
  const surveys = getSurveys()
  return surveys.length > 0 ? surveys[0] : null
}

export function getAffirmationsForSurvey(surveyId) {
  const affirmations = Array.isArray(affirmationsData) ? affirmationsData : (affirmationsData.affirmations || [])
  return affirmations
}

export function getAllAffirmations() {
  return Array.isArray(affirmationsData) ? affirmationsData : (affirmationsData.affirmations || [])
}
