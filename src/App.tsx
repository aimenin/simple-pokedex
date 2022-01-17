import React, { Suspense, lazy } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const PokemonDetails = lazy(() => import('./Pokedex/PokemonDetails'));
const PokemonList = lazy (() => import('./Pokedex/PokemonList'));

// const history = createBrowserHistory();
const queryClient = new QueryClient();

const App = () => {
  return (
    <Suspense fallback={<>loading ...</>}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route element={<PokemonList />} path="/"/>
            <Route element={<PokemonDetails />} path="/details/:name"/>
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
