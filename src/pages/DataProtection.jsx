import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de Confidentialité (RGPD)</h1>
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <p className="text-gray-700 font-medium mb-3">
              <strong>📚 Projet d'apprentissage :</strong> Ce site est un projet éducatif créé pour apprendre le développement 
              web et l'e-commerce. Cette politique de confidentialité est rédigée à titre d'exemple et de formation.
            </p>
            <p className="text-sm text-gray-600">
              Aucune donnée personnelle sensible n'est actuellement collectée. Si le site évolue vers une activité commerciale, 
              cette politique sera mise à jour pour refléter les pratiques réelles de collecte de données.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
            <p className="text-gray-700 font-medium">
              Mon Petit Bazaar s'engage à protéger votre vie privée et vos données personnelles conformément 
              au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Responsable du traitement</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Nom :</strong> Mon Petit Bazaar</p>
                <p className="mb-2"><strong>Type :</strong> Projet éducatif personnel</p>
                <p className="mb-2"><strong>URL :</strong> <a href="https://monpetitbazaar.fr" className="text-primary-600 hover:underline">https://monpetitbazaar.fr</a></p>
                <p className="mb-2"><strong>Email :</strong> contact@monpetitbazaar.fr</p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Données collectées</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous collectons les données personnelles suivantes :
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">📝 Lors de la création de compte :</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Mot de passe (crypté)</li>
                    <li>Numéro de téléphone (optionnel)</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">🛍️ Lors d'une commande :</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Adresse de livraison</li>
                    <li>Adresse de facturation</li>
                    <li>Informations de paiement (via prestataire sécurisé)</li>
                    <li>Historique des commandes</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">🌐 Lors de la navigation :</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Adresse IP</li>
                    <li>Données de navigation (cookies)</li>
                    <li>Type d'appareil et navigateur</li>
                    <li>Pages visitées et durée</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">💬 Communication :</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Messages via formulaire de contact</li>
                    <li>Échanges par email</li>
                    <li>Avis et commentaires</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalités du traitement</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vos données personnelles sont collectées pour les finalités suivantes :
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <strong className="text-gray-900">Gestion des commandes :</strong>
                    <span className="text-gray-700"> Traitement, préparation, expédition et suivi de vos commandes</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <strong className="text-gray-900">Service client :</strong>
                    <span className="text-gray-700"> Réponse à vos questions, gestion des retours et réclamations</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <strong className="text-gray-900">Marketing :</strong>
                    <span className="text-gray-700"> Envoi de newsletters, offres promotionnelles (avec votre consentement)</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <strong className="text-gray-900">Amélioration du site :</strong>
                    <span className="text-gray-700"> Analyse des statistiques de navigation et des performances</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <strong className="text-gray-900">Obligations légales :</strong>
                    <span className="text-gray-700"> Comptabilité, facturation, prévention de la fraude</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Base légale du traitement</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conformément au RGPD (article 6), le traitement de vos données repose sur :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>L'exécution du contrat :</strong> Traitement de votre commande</li>
                <li><strong>Votre consentement :</strong> Newsletter, cookies marketing</li>
                <li><strong>L'intérêt légitime :</strong> Amélioration du service, prévention de la fraude</li>
                <li><strong>Obligation légale :</strong> Conservation des factures, lutte anti-blanchiment</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Destinataires des données</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vos données personnelles peuvent être communiquées à :
              </p>
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-bold text-gray-900 mb-2">🚚 Prestataires de livraison</p>
                  <p className="text-gray-700 text-sm">Colissimo, Chronopost, Mondial Relay (uniquement nom, adresse, téléphone)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-bold text-gray-900 mb-2">💳 Prestataires de paiement</p>
                  <p className="text-gray-700 text-sm">Stripe, PayPal (données de paiement sécurisées, jamais stockées par nous)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-bold text-gray-900 mb-2">📊 Outils d'analyse</p>
                  <p className="text-gray-700 text-sm">Google Analytics (données anonymisées)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-bold text-gray-900 mb-2">🏛️ Autorités légales</p>
                  <p className="text-gray-700 text-sm">Sur demande judiciaire ou administrative</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Important :</strong> Nous ne vendons ni ne louons jamais vos données personnelles à des tiers.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Durée de conservation</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-gray-700 font-bold">Type de données</th>
                      <th className="px-6 py-3 text-left text-gray-700 font-bold">Durée de conservation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Comptes clients actifs</td>
                      <td className="px-6 py-4 text-gray-700">Durée de la relation commerciale + 3 ans</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Commandes et factures</td>
                      <td className="px-6 py-4 text-gray-700">10 ans (obligation légale)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Cookies analytiques</td>
                      <td className="px-6 py-4 text-gray-700">13 mois maximum</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Newsletter (consentement)</td>
                      <td className="px-6 py-4 text-gray-700">3 ans à partir du dernier contact</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Comptes inactifs</td>
                      <td className="px-6 py-4 text-gray-700">3 ans sans connexion puis suppression</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7 - VOS DROITS */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Vos droits (RGPD)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 bg-blue-50 p-4">
                  <h3 className="font-bold text-gray-900 mb-2">🔍 Droit d'accès (Article 15)</h3>
                  <p className="text-gray-700 text-sm">Obtenir une copie de toutes vos données personnelles que nous détenons</p>
                </div>

                <div className="border-l-4 border-green-500 bg-green-50 p-4">
                  <h3 className="font-bold text-gray-900 mb-2">✏️ Droit de rectification (Article 16)</h3>
                  <p className="text-gray-700 text-sm">Corriger ou compléter vos données si elles sont inexactes ou incomplètes</p>
                </div>

                <div className="border-l-4 border-red-500 bg-red-50 p-4">
                  <h3 className="font-bold text-gray-900 mb-2">🗑️ Droit à l'effacement (Article 17)</h3>
                  <p className="text-gray-700 text-sm">Demander la suppression de vos données (sauf obligations légales)</p>
                </div>

                <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4">
                  <h3 className="font-bold text-gray-900 mb-2">⏸️ Droit à la limitation (Article 18)</h3>
                  <p className="text-gray-700 text-sm">Restreindre le traitement de vos données dans certains cas</p>
                </div>

                <div className="border-l-4 border-purple-500 bg-purple-50 p-4">
                  <h3 className="font-bold text-gray-900 mb-2">📦 Droit à la portabilité (Article 20)</h3>
                  <p className="text-gray-700 text-sm">Récupérer vos données dans un format structuré (CSV, JSON)</p>
                </div>

                <div className="border-l-4 border-orange-500 bg-orange-50 p-4">
                  <h3 className="font-bold text-gray-900 mb-2">🚫 Droit d'opposition (Article 21)</h3>
                  <p className="text-gray-700 text-sm">Vous opposer au traitement de vos données (marketing, profilage)</p>
                </div>

                <div className="border-l-4 border-pink-500 bg-pink-50 p-4">
                  <h3 className="font-bold text-gray-900 mb-2">🤖 Décisions automatisées (Article 22)</h3>
                  <p className="text-gray-700 text-sm">Ne pas faire l'objet de décisions basées uniquement sur un traitement automatisé</p>
                </div>
              </div>

              <div className="mt-6 bg-primary-100 border border-primary-300 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Comment exercer vos droits ?</h3>
                <p className="text-gray-700 mb-3">
                  Pour exercer l'un de ces droits, envoyez un email à :
                </p>
                <p className="text-lg">
                  <a href="mailto:contact@monpetitbazaar.fr" className="text-primary-600 hover:underline font-bold">
                    contact@monpetitbazaar.fr
                  </a>
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  Joignez une copie de votre pièce d'identité pour vérification. Nous répondrons sous 1 mois maximum.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Sécurité des données</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Chiffrement SSL/TLS :</strong> Toutes les données transitent de manière cryptée (HTTPS)</li>
                <li><strong>Mots de passe :</strong> Hashage avec algorithme bcrypt</li>
                <li><strong>Hébergement sécurisé :</strong> Serveurs protégés avec pare-feu et mises à jour régulières</li>
                <li><strong>Accès restreint :</strong> Seules les personnes autorisées ont accès aux données</li>
                <li><strong>Sauvegardes :</strong> Backups réguliers et chiffrés</li>
                <li><strong>Paiement :</strong> Aucune donnée bancaire n'est stockée sur nos serveurs (PCI-DSS compliant)</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous utilisons des cookies pour améliorer votre expérience de navigation. Pour plus d'informations, 
                consultez notre <Link to="/cookie-policy" className="text-primary-600 hover:underline font-semibold">Politique des Cookies</Link>.
              </p>
            </section>

            {/* Section 10 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Transferts internationaux</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vos données sont hébergées au sein de l'Union Européenne (GitHub Pages - serveurs européens).
              </p>
              <p className="text-gray-700 leading-relaxed">
                En cas de transfert hors UE (certains outils), nous nous assurons que des garanties appropriées sont mises 
                en place (clauses contractuelles types, Privacy Shield, etc.).
              </p>
            </section>

            {/* Section 11 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Modifications</h2>
              <p className="text-gray-700 leading-relaxed">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour.
              </p>
            </section>

            {/* Section 12 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Réclamation auprès de la CNIL</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès 
                de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>CNIL</strong></p>
                <p className="mb-2">3 Place de Fontenoy - TSA 80715</p>
                <p className="mb-2">75334 PARIS CEDEX 07</p>
                <p className="mb-2">Téléphone : 01 53 73 22 22</p>
                <p><strong>Site web :</strong> <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">www.cnil.fr</a></p>
              </div>
            </section>

            {/* Date */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <strong>Dernière mise à jour :</strong> 8 février 2026
              </p>
            </div>

            {/* Contact */}
            <div className="mt-8 bg-primary-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Des questions sur vos données ?</h3>
              <p className="text-gray-700">
                Contactez notre responsable de la protection des données : 
                <a href="mailto:contact@monpetitbazaar.fr" className="text-primary-600 hover:underline font-semibold ml-1">contact@monpetitbazaar.fr</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
