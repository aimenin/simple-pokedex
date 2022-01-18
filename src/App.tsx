import React, { Suspense, lazy } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const PokemonDetails = lazy(() => import('./Pokedex/PokemonDetails'));
const Pokedex = lazy (() => import('./Pokedex'));

const queryClient = new QueryClient();

const App = () => {
  return (
    <Suspense fallback={<>loading ...</>}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route element={<Pokedex />} path="/"/>
            <Route element={<PokemonDetails />} path="/details/:name"/>
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
