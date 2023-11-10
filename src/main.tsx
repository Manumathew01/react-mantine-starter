import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home/App.tsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { createTheme, MantineProvider } from '@mantine/core';
import DefaultLayout from './components/Layout/DefaultLayout.tsx';
import '@mantine/core/styles.css';
import Login from './pages/Login/Login.tsx';

const theme = createTheme({});

// export const Provider = () => {
//   return (
//     <>
//       <App />
//     </>
//   );
// };

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />}>
      <Route index element={<App />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
