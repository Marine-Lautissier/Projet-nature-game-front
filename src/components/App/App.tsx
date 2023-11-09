import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import NavBar from '../NavBar/NavBar';
// import Loading from './App';
import './App.scss';

import WikiPage from '../WikiPage/WikiPage';
import CategoryList from '../WikiPage/CategoryList/CategoryList';
import SubCategoryList from '../WikiPage/SubCategoryList/SubCategoryList';
import WikiArticle from '../WikiPage/WikiArticle/WikiArticle';
import Footer from '../Footer/Footer';
import TermsOfUse from '../Footer/TermsOfUse/TermsOfUse';
import LegalNotice from '../Footer/LegalNotice/LegalNotice';
import Contact from '../Footer/Contact/Contact';
import ConnectPage from '../Authentication/ConnectPage/ConnectPage';
import RegisterPage from '../Authentication/RegisterPage/RegisterPage';
import ProfilePage from '../Profile/ProfilePage/ProfilePage';

import GamePage from '../GamePage/GamePage';
import { useDispatch } from 'react-redux';
import { setToken } from '../../store/actions/userActions';
import instanceAxios from '../../utils/axios';
import React, { useEffect } from 'react';
import { useAppSelector } from '../../hooks/redux';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Au chargement de l'application, on récupère le token du localStorage s'il existe
    const token = localStorage.getItem('authToken');

    const pseudo = localStorage.getItem('authPseudo');

    if (token && pseudo) {
      console.log(token);
      // Définit le token dans l'en-tête Axios
      instanceAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
      // Met à jour l'état Redux avec le token
      dispatch(setToken({ token, pseudo }));
    }
  }, [dispatch]);

  // const loading = useAppSelector((state) => state.authReducer.loading);
  return (
    <div className="App">
      <NavBar />
      {/* {loading ? (
        <Loading />
      ) : ( */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wiki" element={<WikiPage />} />
        <Route path="/wiki/categories/:id" element={<CategoryList />} />
        <Route path="/wiki/subcategories/:id" element={<SubCategoryList />} />
        <Route path="/wiki/articles/:id" element={<WikiArticle />} />
        <Route path="/conditions-utilisations" element={<TermsOfUse />} />
        <Route path="/mentions-legales" element={<LegalNotice />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connexion" element={<ConnectPage />} />
        <Route path="/inscription" element={<RegisterPage />} />
        <Route path="/profil" element={<ProfilePage />} />
        <Route path="/jeux" element={<GamePage />} />
      </Routes>
      {/* )} */}
      <Footer />
    </div>
  );
}

export default App;
