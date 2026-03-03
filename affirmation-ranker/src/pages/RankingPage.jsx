import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button, Stack, Paper, IconButton } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import RankingList from '../components/RankingList'
import { useAffirmations } from '../hooks/useAffirmations'
import { submitRankingResults } from '../services/resultsService'

function RankingPage() {
  const navigate = useNavigate()
  const { affirmations, randomizeOrder } = useAffirmations()
  const [currentOrder, setCurrentOrder] = useState(affirmations)
  const startTimeRef = useRef(null)

  useEffect(() => {
    setCurrentOrder(randomizeOrder(affirmations))
    startTimeRef.current = Date.now()
  }, [affirmations, randomizeOrder])

  const handleReorder = (newOrder) => {
    setCurrentOrder(newOrder)
  }

  const handleSubmit = () => {
    const endTime = Date.now()
    const duration = startTimeRef.current ? endTime - startTimeRef.current : 0
    
    const rankingData = currentOrder.map((affirmation, index) => ({
      ...affirmation,
      rank: index + 1
    }))

    const affirmationIds = currentOrder.map(a => a.id)
    submitRankingResults(affirmationIds, duration)

    navigate('/success', { state: { ranking: rankingData, duration } })
  }

  return (
    <Stack spacing={{ xs: 3, sm: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton 
          onClick={() => navigate('/')}
          color="primary"
          aria-label="view instructions"
          sx={{ mr: 1 }}
        >
          <InfoOutlinedIcon />
        </IconButton>
      </Box>
      
      <Typography variant="h1" component="h1" align="center" color="primary.dark">
        Rank Your Affirmations
      </Typography>
      
      <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 2, px: 1 }}>
        Arrange these affirmations from <strong>most acceptable (1)</strong> to <strong>least acceptable (3)</strong>
      </Typography>

      <Paper elevation={0} sx={{ p: { xs: 1, sm: 2 }, bgcolor: 'grey.50', borderRadius: 2 }}>
        <RankingList 
          affirmations={currentOrder} 
          onReorder={handleReorder}
        />
      </Paper>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 1.5, sm: 2 }, flexWrap: 'wrap' }}>
        <Button 
          variant="outlined" 
          onClick={() => navigate('/')}
          sx={{ minWidth: { xs: 100, sm: 120 }, minHeight: 48 }}
        >
          Back
        </Button>
        <Button 
          variant="contained" 
          onClick={handleSubmit}
          sx={{ minWidth: { xs: 100, sm: 120 }, minHeight: 48 }}
        >
          Submit
        </Button>
      </Box>
    </Stack>
  )
}

export default RankingPage
