import { Box, Button, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Quiz } from './quiz/Quiz';
import { Instruction } from './Instruction';

function App() {
  const [quizStarted, setQuizStarted] = useState<boolean>(false);

  return (
    <Container maxWidth="md">
      <Box sx={{ height: '100vh' }} my={4}>
        <Typography variant="h4" textAlign="center" color="primary" fontWeight="bold" mb={4}>
          OCP Exam Quiz
        </Typography>
        {!quizStarted && (
          <>
            <Instruction />
            <Box textAlign="center" mt={4}>
              <Button variant="contained" onClick={() => setQuizStarted(true)}>
                Start
              </Button>
            </Box>
          </>
        )}
        {quizStarted && <Quiz />}
      </Box>
    </Container>
  );
}

export default App;
