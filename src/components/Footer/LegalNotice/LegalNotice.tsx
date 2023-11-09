import React from "react";

function LegalNotice() {
  return (
    <div className="legal-notice">
      <div className="notice-header">
        <h1 style={{ textAlign: 'center' }}>Mentions légales</h1>
      </div>
      <div className="notice-section">
        <p>
          Conformément aux dispositions des articles 6 et 19 de la loi pour la Confiance dans l'Économie Numérique, nous vous informons que :
        </p>
        <p>
          Ce site est édité par <strong>XXXXXX</strong> (votre nom, ou le nom de votre client si c'est une mission de presta).
        </p>
        <ul>
          <li>Adresse : XXXXXX</li>
          <li>Email : XXXXXX</li>
          <li>Responsable de la publication :</li>
        </ul>
        <p>
          <strong>XXXXXX (nom/prénom), XXXXXX (fonction dans l'entreprise)</strong>
          <br />
          Email : XXXXXX
        </p>
      </div>
      <div className="notice-section">
        <p>
          Ce site et sa base de données sont hébergés en France sur les serveurs de l'hébergeur XXXXXX :
        </p>
        <ul>
          <li>XXXXXX</li>
          <li>Adresse : XXXXXX</li>
          <li>XXXXXX</li>
          <li>Tél. : XXXXXX</li>
          <li>Site web : Nature Game</li>
        </ul>
      </div>
      <div className="notice-section">
        <p>
          L'entreprise XXXXXX, dont les coordonnées sont disponibles ci-dessus, collecte et traite des données personnelles afin de... (expliquer la ou les finalités du ou des traitements). La collecte et le traitement des données effectués par l'entreprise XXXXXX ont pour base légale les articles 6.1.a, 6.1.b, 6.1.c, 6.1.d, 6.1.e et 6.1.f du Règlement Européen pour la Protection des Données (RGPD) (ne garder que les articles appropriés en fonction des traitements effectués).
        </p>
        <p>
          Les données à caractère personnel collectées sont les suivantes (EXEMPLE, SITE ECOMMERCE, À ADAPTER) :
        </p>
        <ul>
          <li>Identité : civilité, nom, prénom, adresse électronique (email), code interne de traitement permettant l'identification de l'utilisateur.</li>
          <li>Données relatives aux achats : numéro de transaction, date, produits achetés, montant payé, etc.</li>
        </ul>
        <p>
          Les employés de l'entreprise XXXXXX sont destinataires de l'ensemble des catégories de données à caractère personnel collectées. Les données collectées ne sont en aucun cas transmises à des tiers.
        </p>
      </div>
      <div className="notice-section">
        <p>
          Conformément aux articles 16, 17, 18 et 20 du Règlement Européen pour la Protection des Données (RGPD), toute personne concernée par la collecte et le traitement de données effectué par l'entreprise XXXXXX peut exercer ses droits :
        </p>
        <ul>
          <li>Droit de rectification : les données personnelles peuvent être rectifiées sur simple demande par mail au DPO de l'entreprise XXXXXX (voir ci-dessous) ou directement depuis l'espace membre du site (SI IMPLÉMENTÉ !).</li>
          <li>Droit à l'effacement (droit à l'oubli) : les données personnelles peuvent être définitivement effacées sur simple demande par mail au DPO de l'entreprise XXXXXX (voir ci-dessous) ou directement depuis l'espace membre du site (SI IMPLÉMENTÉ !).</li>
          <li>Droit à la limitation du traitement des données : sur simple demande par mail au DPO de l'entreprise XXXXXX (voir ci-dessous), vous pouvez limiter certains traitements effectués sur vos données (À ADAPTER SELON CONTEXTE).</li>
          <li>Droit à la portabilité des données : sur simple demande par mail au DPO de l'entreprise XXXXXX (voir ci-dessous) ou directement depuis l'espace membre du site (SI IMPLÉMENTÉ !), toutes les données à caractère personnel concernant un utilisateur lui seront transmises au format CSV.</li>
        </ul>
        <p>
          Tout utilisateur du site XXXXXX peut accéder aux données le concernant, les rectifier ou les faire effacer. Les utilisateurs disposent également d'un droit à la portabilité et d’un droit à la limitation du traitement des données (consultez le site cnil.fr pour plus d’informations sur vos droits).
        </p>
        <p>
          Pour exercer ces droits ou pour toute question sur le traitement de vos données dans ce dispositif, vous pouvez contacter notre DPO :
        </p>
        <ul>
          <li>Par voie électronique : dpo@mon-entreprise.fr</li>
          <li>Par courrier postal : XXXXXX</li>
        </ul>
      </div>
    </div>
  );
}

export default LegalNotice;
