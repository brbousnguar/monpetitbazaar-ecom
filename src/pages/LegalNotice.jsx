import { Link } from 'react-router-dom';

const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions Légales</h1>
          
          <div className="prose prose-lg max-w-none">
            {/* Éditeur du site */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Éditeur du site</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le site <strong>Mon Petit Bazaar</strong> est un projet éducatif et d'apprentissage dans le domaine de l'e-commerce.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Nom du site :</strong> Mon Petit Bazaar</p>
                <p className="mb-2"><strong>URL :</strong> <a href="https://monpetitbazaar.fr" className="text-primary-600 hover:underline">https://monpetitbazaar.fr</a></p>
                <p className="mb-2"><strong>Nature :</strong> Projet éducatif et d'apprentissage en développement web</p>
                <p className="mb-2"><strong>Statut :</strong> Site personnel à but non commercial</p>
                <p className="mb-2"><strong>Email :</strong> contact@monpetitbazaar.fr</p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-4">
                <p className="text-sm text-gray-700">
                  <strong>📚 Note importante :</strong> Ce site est un projet d'apprentissage personnel créé dans le cadre 
                  d'une formation en développement web et e-commerce. Il ne s'agit pas d'une activité commerciale professionnelle. 
                  Aucune transaction financière réelle n'est effectuée sur ce site pour le moment.
                </p>
              </div>
            </section>

            {/* Directeur de publication */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Directeur de publication</h2>
              <p className="text-gray-700 leading-relaxed">
                Le directeur de la publication du site monpetitbazaar.fr est le créateur et responsable du projet éducatif.
              </p>
            </section>

            {/* Hébergement */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Hébergement</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le site est hébergé par :
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Nom :</strong> GitHub Pages (Microsoft Corporation)</p>
                <p className="mb-2"><strong>Adresse :</strong> One Microsoft Way, Redmond, WA 98052-6399, États-Unis</p>
                <p className="mb-2"><strong>Site web :</strong> <a href="https://pages.github.com" className="text-primary-600 hover:underline">https://pages.github.com</a></p>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Propriété intellectuelle</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                L'ensemble du contenu présent sur ce site (textes, images, logos, vidéos, bases de données, etc.) 
                est protégé par le droit d'auteur et le droit de la propriété intellectuelle.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des 
                éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation 
                écrite préalable de l'éditeur.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera 
                considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des 
                articles L.335-2 et suivants du Code de Propriété Intellectuelle.
              </p>
            </section>

            {/* Protection des données personnelles */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Protection des données personnelles (RGPD)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique 
                et Libertés du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de rectification, 
                de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pour exercer ces droits, vous pouvez nous contacter :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Par email : <a href="mailto:contact@monpetitbazaar.fr" className="text-primary-600 hover:underline">contact@monpetitbazaar.fr</a></li>
                <li>Par courrier : [Votre adresse complète]</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Pour plus d'informations, consultez notre <Link to="/privacy-policy" className="text-primary-600 hover:underline font-semibold">Politique de Confidentialité</Link>.
              </p>
            </section>

            {/* Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le site utilise des cookies techniques nécessaires au bon fonctionnement du site (panier d'achat, 
                préférences utilisateur). Ces cookies ne collectent pas de données personnelles identifiables.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Vous pouvez paramétrer votre navigateur pour refuser les cookies, mais cela pourrait affecter 
                certaines fonctionnalités du site.
              </p>
            </section>

            {/* Responsabilité */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation de responsabilité</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                L'éditeur s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations diffusées 
                sur ce site. Toutefois, il ne peut garantir l'exactitude, la précision ou l'exhaustivité des 
                informations mises à disposition sur ce site.
              </p>
              <p className="text-gray-700 leading-relaxed">
                L'éditeur ne pourra être tenu responsable des dommages directs et indirects causés au matériel 
                de l'utilisateur, lors de l'accès au site monpetitbazaar.fr, et résultant soit de l'utilisation 
                d'un matériel ne répondant pas aux spécifications indiquées, soit de l'apparition d'un bug ou 
                d'une incompatibilité.
              </p>
            </section>

            {/* Droit applicable */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Droit applicable et juridiction compétente</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Les présentes mentions légales sont régies par le droit français.
              </p>
              <p className="text-gray-700 leading-relaxed">
                En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français 
                conformément aux règles de compétence en vigueur.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact</h2>
              <p className="text-gray-700 leading-relaxed">
                Pour toute question concernant les mentions légales, vous pouvez nous contacter :
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-700">
                <li>Email : <a href="mailto:contact@monpetitbazaar.fr" className="text-primary-600 hover:underline">contact@monpetitbazaar.fr</a></li>
                <li>Formulaire de contact : <Link to="/contact" className="text-primary-600 hover:underline">Page Contact</Link></li>
              </ul>
            </section>

            {/* Date */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <strong>Dernière mise à jour :</strong> 8 février 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
