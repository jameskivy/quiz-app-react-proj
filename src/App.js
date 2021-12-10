import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Settings from './pages/Settings';
import Questions from './pages/Questions';
import FinalScreen from './pages/FinalScreen';
import Navbar from './components/Navbar';
import { Container } from '@mui/material';
import { Box } from '@mui/system';

function App() {
  return (

    <Router>
      <Container maxwidth="sm">
        <Box textAlign="center" mt={5}>
          <Navbar />
          <Routes>
            <Route path="/" caseSensitive={false} element={<Settings />} />
            <Route path="/questions" caseSensitive={false} element={<Questions />} />
            <Route path="/score" caseSensitive={false} element={<FinalScreen />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
