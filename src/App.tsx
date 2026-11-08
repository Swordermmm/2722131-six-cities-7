import MainPage from './pages/MainPage/MainPage';
import OfferPage from './pages/OfferPage/OfferPage';
import FavouritesPage from './pages/FavouritesPage/FavouritesPage';
import Login from './pages/LoginPage/LoginPage';
import PrivatePath from './auth/PrivatePath';
import { Fragment } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

type AppProps = {
  offerCount: number;
};

function App({ offerCount }: AppProps): JSX.Element {
  const isAuthorized = false;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage offerCount={offerCount} />} />
        <Route path="/login" element={<Login />} />
        <PrivatePath isAuthorized={isAuthorized}>
          <Route path="/favorites" element={<FavouritesPage />} />
        </PrivatePath>
        <Route path="/offer/:id" element={<OfferPage />} />
      </Routes>
      <Fragment>
        <h1>
          404.
          <br />
          <small>Page not found</small>
        </h1>
        <Link to="/">Go to main page</Link>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
