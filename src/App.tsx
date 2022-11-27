import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme } from './styles/darkTheme';
import { ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { useGetSearchItemsQuery } from './redux/data';
import { FrontPage } from './components/FrontPage';

export const App: React.FC = () => {

  useGetSearchItemsQuery();

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<FrontPage />} />
      </Routes>
    </ThemeProvider>
  );
}
