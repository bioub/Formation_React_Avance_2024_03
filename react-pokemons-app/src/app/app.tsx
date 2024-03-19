import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PokemonsList from './pages/pokemon-list';
import PokemonsDetail from './pages/pokemon-detail';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import PageNotFound from './pages/page-not-found';
import Login from './pages/login';
import PrivateRoute from './private-route';
import PokemonCompare from './pages/pokemon-compare';
import { CompareProvider } from './compare-context';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function App() {
  const [locale, setLocale] = useState('fr');
  const { t, i18n } = useTranslation();

  function changeLocale(locale: string) {
    i18n.changeLanguage(locale).then(() => {
      setLocale(locale);
    });
  }

  return (
    <BrowserRouter>
      <CompareProvider>
        <div>
          <nav>
            <div className="nav-wrapper teal">
              <Link to="/" className="brand-logo center">
                Pokédex
              </Link>
              <span onClick={() => changeLocale('fr')}>Français</span>
              <span onClick={() => changeLocale('en')}>English</span>
            </div>
          </nav>
          <Routes>
            <Route index path="/" element={<PokemonsList />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/pokemons" element={<PokemonsList />} />
              <Route path="/pokemon/add" element={<PokemonAdd />} />
              <Route path="/pokemon/compare" element={<PokemonCompare />} />
              <Route path="/pokemons/edit/:id" element={<PokemonEdit />} />
              <Route path="/pokemons/:id" element={<PokemonsDetail />} />
            </Route>
            <Route element={<PageNotFound />} />
          </Routes>
        </div>
      </CompareProvider>
    </BrowserRouter>
  );
}

export default App;
