import { Card, CardContent, Box, Typography } from '@mui/material'
import ReactMarkdown from 'react-markdown'

function AffirmationCard({ affirmation, showRank = false, rankPosition }) {
  return (
    <Card
      elevation={2}
      sx={{
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: 4
        }
      }}
    >
      <CardContent sx={{ p: { xs: 1.5, sm: 2 }, py: { xs: 1, sm: 1.5 } }}>
        {showRank && rankPosition && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: { xs: 28, sm: 32 },
                height: { xs: 28, sm: 32 },
                borderRadius: '50%',
                bgcolor: rankPosition === 1 ? 'success.main' : rankPosition === 2 ? 'grey.500' : 'error.main',
                color: 'white',
                fontWeight: 700,
                fontSize: { xs: '0.75rem', sm: '0.875rem' }
              }}
            >
              {rankPosition}
            </Box>
          </Box>
        )}
        <Typography
          variant="body2"
          component="div"
          sx={{
            fontSize: { xs: '0.85rem', sm: '0.95rem' },
            lineHeight: 1.4,
            color: 'text.primary'
          }}
        >
          <ReactMarkdown>{affirmation.text}</ReactMarkdown>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default AffirmationCard
