import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import NavBar from '../NavBar/NavBar';
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
import React from 'react';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wiki" element={<WikiPage />} />
        <Route path="/wiki/categorie/{id}" element={<CategoryList />} />
        <Route path="/wiki/sous-categorie/{id}" element={<SubCategoryList />} />
        <Route path="/wiki/article/{id}" element={<WikiArticle />} />
        <Route path="/conditions-utilisations" element={<TermsOfUse />} />
        <Route path="/mentions-legales" element={<LegalNotice />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connexion" element={<ConnectPage />} />
        <Route path="/inscription" element={<RegisterPage />} />
        <Route path="/profil" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
