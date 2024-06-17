import React, { useState } from 'react';
import { Box, Container, Typography, CircularProgress, Button } from '@mui/material';

function TermsAndConditions() {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false); // Set initial loading state to false
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null); // To store the full response for debugging

  const fetchContent = async () => {
    setLoading(true);
    setError(null);
    setResponse(null); // Reset previous response

    try {
      const response = await fetch(
        'https://api.digibulkmarketing.com/master/save-page',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            slug: 'refund policy',
            content: 'Refund Policy is the policy of the legal contract between you and your customers',
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text(); // Read error message
        throw new Error(`Network response was not ok: ${errorText}`);
      }

      const data = await response.json();
      setResponse(data); // Store the full response for debugging
      setContent(data.content); // Adjust based on actual API response structure
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Terms and Conditions
        </Typography>
        {loading ? (
          <Box display="flex" justifyContent="center" my={2}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Typography variant="body1" paragraph>
              {content || 'Click the button below to load content.'}
            </Typography>
            <Button variant="contained" color="primary" onClick={fetchContent}>
              Load Content
            </Button>
            {error && (
              <Typography variant="h6" color="error" my={2}>
                {`Error: ${error}`}
              </Typography>
            )}
            {response && (
              <Typography variant="body2" my={2}>
                {`Full response: ${JSON.stringify(response, null, 2)}`}
              </Typography>
            )}
          </>
        )}
      </Box>
    </Container>
  );
}

export default TermsAndConditions;
