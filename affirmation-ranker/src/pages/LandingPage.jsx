import { useNavigate } from 'react-router-dom'
import { Box, Typography, Card, CardContent, Button, Stack } from '@mui/material'

function LandingPage() {
  const navigate = useNavigate()

  return (
    <Stack spacing={{ xs: 3, sm: 4 }} alignItems="center">
      <Typography variant="h1" component="h1" align="center" color="primary.dark">
        Affirmation Ranker
      </Typography>
      
      <Card sx={{ width: '100%', maxWidth: 600 }}>
        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
          <Typography variant="h2" component="h2" gutterBottom>
            How It Works
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            Welcome to the Affirmation Ranker! This tool helps you organize and prioritize 
            personal affirmations by ranking them according to what resonates most with you.
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            You'll be presented with a list of affirmations. Simply drag and drop them 
            to arrange them in order of personal significance - your most meaningful 
            affirmation at the top.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ width: '100%', maxWidth: 600 }}>
        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
          <Typography variant="h2" component="h2" gutterBottom>
            Instructions
          </Typography>
          <Typography variant="body1" color="text.secondary">
            1. Click "Start Ranking" to begin<br />
            2. Drag affirmations to reorder them<br />
            3. Your top choice should be at position 1<br />
            4. Submit when finished
          </Typography>
        </CardContent>
      </Card>

      <Button 
        variant="contained" 
        size="large" 
        onClick={() => navigate('/rank')}
        sx={{ 
          px: { xs: 5, sm: 6 }, 
          py: { xs: 1.5, sm: 1.5 }, 
          fontSize: { xs: '1rem', sm: '1.1rem' },
          minWidth: 200,
          minHeight: 48
        }}
      >
        Start Ranking
      </Button>
    </Stack>
  )
}

export default LandingPage
