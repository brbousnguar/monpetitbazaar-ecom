import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique des Cookies</h1>
          
          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
            <p className="text-gray-700 font-medium">
              🍪 Cette page explique comment Mon Petit Bazaar utilise les cookies et technologies similaires 
              pour améliorer votre expérience de navigation sur monpetitbazaar.fr
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Qu'est-ce qu'un cookie ?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, tablette, smartphone) 
                lorsque vous visitez un site web. Il permet au site de mémoriser vos préférences et d'améliorer 
                votre expérience de navigation.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Caractéristiques des cookies :</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>📝 Contiennent des informations comme votre langue préférée, panier d'achat, etc.</li>
                  <li>⏱️ Ont une durée de vie limitée (session ou date d'expiration)</li>
                  <li>🔒 Ne peuvent pas accéder à vos fichiers personnels</li>
                  <li>🚫 Ne contiennent pas de virus</li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Types de cookies utilisés</h2>
              
              <div className="space-y-6">
                {/* Cookies strictement nécessaires */}
                <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">✅</span>
                    <h3 className="text-xl font-bold text-gray-900">Cookies strictement nécessaires</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Ces cookies sont indispensables au fonctionnement du site et ne peuvent pas être désactivés.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-4 py-2 text-left">Cookie</th>
                          <th className="px-4 py-2 text-left">Fonction</th>
                          <th className="px-4 py-2 text-left">Durée</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="px-4 py-2 font-mono text-xs">session_id</td>
                          <td className="px-4 py-2">Identifiant de session utilisateur</td>
                          <td className="px-4 py-2">Session</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-mono text-xs">cart_id</td>
                          <td className="px-4 py-2">Mémorisation du panier d'achat</td>
                          <td className="px-4 py-2">7 jours</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-mono text-xs">csrf_token</td>
                          <td className="px-4 py-2">Sécurité anti-CSRF</td>
                          <td className="px-4 py-2">Session</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-mono text-xs">cookie_consent</td>
                          <td className="px-4 py-2">Mémorisation de vos choix de cookies</td>
                          <td className="px-4 py-2">13 mois</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    <strong>Consentement requis :</strong> ❌ Non (cookies essentiels)
                  </p>
                </div>

                {/* Cookies de préférence */}
                <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">⚙️</span>
                    <h3 className="text-xl font-bold text-gray-900">Cookies de préférence</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Ces cookies permettent de mémoriser vos préférences et de personnaliser votre expérience.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-4 py-2 text-left">Cookie</th>
                          <th className="px-4 py-2 text-left">Fonction</th>
                          <th className="px-4 py-2 text-left">Durée</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="px-4 py-2 font-mono text-xs">language</td>
                          <td className="px-4 py-2">Langue préférée</td>
                          <td className="px-4 py-2">1 an</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-mono text-xs">theme</td>
                          <td className="px-4 py-2">Thème clair/sombre</td>
                          <td className="px-4 py-2">1 an</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-mono text-xs">currency</td>
                          <td className="px-4 py-2">Devise affichée (EUR)</td>
                          <td className="px-4 py-2">1 an</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    <strong>Consentement requis :</strong> ✅ Oui
                  </p>
                </div>

                {/* Cookies d'analyse */}
                <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">📊</span>
                    <h3 className="text-xl font-bold text-gray-900">Cookies d'analyse et statistiques</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Ces cookies nous aident à comprendre comment vous utilisez le site pour l'améliorer.
                  </p>
                  <div className="bg-white p-4 rounded-lg space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Google Analytics</h4>
                      <table className="w-full text-sm">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-4 py-2 text-left">Cookie</th>
                            <th className="px-4 py-2 text-left">Fonction</th>
                            <th className="px-4 py-2 text-left">Durée</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          <tr>
                            <td className="px-4 py-2 font-mono text-xs">_ga</td>
                            <td className="px-4 py-2">Distinction des utilisateurs</td>
                            <td className="px-4 py-2">2 ans</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 font-mono text-xs">_ga_[ID]</td>
                            <td className="px-4 py-2">Persistance de l'état de session</td>
                            <td className="px-4 py-2">2 ans</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 font-mono text-xs">_gid</td>
                            <td className="px-4 py-2">Distinction des utilisateurs</td>
                            <td className="px-4 py-2">24 heures</td>
                          </tr>
                        </tbody>
                      </table>
                      <p className="text-xs text-gray-600 mt-2">
                        <strong>Note :</strong> IP anonymisée conformément au RGPD
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    <strong>Consentement requis :</strong> ✅ Oui
                  </p>
                </div>

                {/* Cookies marketing */}
                <div className="border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">🎯</span>
                    <h3 className="text-xl font-bold text-gray-900">Cookies marketing (publicitaires)</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Ces cookies sont utilisés pour vous proposer des publicités pertinentes.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Actuellement :</strong> Nous n'utilisons pas de cookies marketing/publicitaires.
                    </p>
                    <p className="text-gray-600 text-sm">
                      Si nous décidons d'en utiliser à l'avenir, nous vous demanderons votre consentement explicite.
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    <strong>Consentement requis :</strong> ✅ Oui
                  </p>
                </div>

                {/* Cookies tiers */}
                <div className="border-l-4 border-pink-500 bg-pink-50 p-6 rounded-r-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">🔗</span>
                    <h3 className="text-xl font-bold text-gray-900">Cookies de services tiers</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Certains services externes peuvent déposer des cookies :
                  </p>
                  <div className="bg-white p-4 rounded-lg space-y-3">
                    <div>
                      <p className="font-bold text-gray-900">💳 Stripe (paiement)</p>
                      <p className="text-sm text-gray-700">Cookies nécessaires pour le traitement sécurisé des paiements</p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">💰 PayPal (paiement)</p>
                      <p className="text-sm text-gray-700">Cookies pour l'authentification et la sécurité des transactions</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    <strong>Consentement requis :</strong> ✅ Oui (sauf paiement en cours)
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Gestion de vos cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vous avez le contrôle total sur les cookies déposés sur votre appareil :
              </p>
              
              <div className="space-y-4">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">🎛️ Via notre bandeau de consentement</h3>
                  <p className="text-gray-700 mb-3">
                    Lors de votre première visite, un bandeau vous permet de :
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Accepter tous les cookies</li>
                    <li>Refuser les cookies non essentiels</li>
                    <li>Personnaliser vos préférences par catégorie</li>
                  </ul>
                  <button className="mt-4 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition">
                    Modifier mes préférences
                  </button>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">🌐 Via votre navigateur</h3>
                  <p className="text-gray-700 mb-4">
                    Vous pouvez configurer votre navigateur pour refuser les cookies :
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded border">
                      <p className="font-bold text-gray-900 mb-2">🦊 Firefox</p>
                      <p className="text-sm text-gray-700">Paramètres → Vie privée et sécurité → Cookies et données</p>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <p className="font-bold text-gray-900 mb-2">🌐 Chrome</p>
                      <p className="text-sm text-gray-700">Paramètres → Confidentialité → Cookies et autres données</p>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <p className="font-bold text-gray-900 mb-2">🧭 Safari</p>
                      <p className="text-sm text-gray-700">Préférences → Confidentialité → Cookies et données</p>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <p className="font-bold text-gray-900 mb-2">🔷 Edge</p>
                      <p className="text-sm text-gray-700">Paramètres → Cookies et autorisations de site</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-300 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">⚠️ Conséquences du refus de cookies</h3>
                  <p className="text-gray-700 text-sm">
                    Si vous refusez ou supprimez les cookies, certaines fonctionnalités du site peuvent ne pas 
                    fonctionner correctement :
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-sm text-gray-700 space-y-1">
                    <li>Impossibilité de mémoriser votre panier</li>
                    <li>Obligation de vous reconnecter à chaque visite</li>
                    <li>Perte de vos préférences (langue, devise, etc.)</li>
                    <li>Statistiques de navigation non disponibles</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Durée de conservation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conformément aux recommandations de la CNIL :
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-xl">✅</span>
                    <div>
                      <strong className="text-gray-900">Cookies essentiels :</strong>
                      <span className="text-gray-700"> Durée de la session ou jusqu'à 13 mois</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">📊</span>
                    <div>
                      <strong className="text-gray-900">Cookies analytiques :</strong>
                      <span className="text-gray-700"> Maximum 13 mois (recommandation CNIL)</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">🎯</span>
                    <div>
                      <strong className="text-gray-900">Cookies publicitaires :</strong>
                      <span className="text-gray-700"> Maximum 13 mois</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">🍪</span>
                    <div>
                      <strong className="text-gray-900">Consentement :</strong>
                      <span className="text-gray-700"> Votre choix est mémorisé pendant 13 mois, puis redemandé</span>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies et données personnelles</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Les cookies peuvent collecter des données à caractère personnel. Le traitement de ces données 
                est conforme au RGPD et à notre <Link to="/privacy-policy" className="text-primary-600 hover:underline font-semibold">Politique de Confidentialité</Link>.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Vos droits RGPD :</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Droit d'accès à vos données collectées via cookies</li>
                  <li>Droit de rectification et d'effacement</li>
                  <li>Droit d'opposition au traitement</li>
                  <li>Droit à la portabilité de vos données</li>
                </ul>
                <p className="text-sm text-gray-700 mt-4">
                  Pour exercer vos droits : <a href="mailto:contact@monpetitbazaar.fr" className="text-primary-600 hover:underline font-semibold">contact@monpetitbazaar.fr</a>
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Technologies similaires</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                En plus des cookies, nous utilisons d'autres technologies de stockage local :
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">💾 LocalStorage</h3>
                  <p className="text-gray-700 text-sm">
                    Stockage persistant de données côté client (panier, préférences). 
                    Données accessibles uniquement par notre site.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">📦 SessionStorage</h3>
                  <p className="text-gray-700 text-sm">
                    Stockage temporaire pendant la session de navigation. 
                    Supprimé automatiquement à la fermeture du navigateur.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Mise à jour de la politique</h2>
              <p className="text-gray-700 leading-relaxed">
                Cette politique de cookies peut être modifiée à tout moment pour refléter les changements 
                dans nos pratiques ou la législation. Nous vous recommandons de la consulter régulièrement.
              </p>
            </section>

            {/* Date */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <strong>Dernière mise à jour :</strong> 8 février 2026
              </p>
            </div>

            {/* Contact & Links */}
            <div className="mt-8 space-y-4">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Des questions sur les cookies ?</h3>
                <p className="text-gray-700">
                  Contactez-nous : <a href="mailto:contact@monpetitbazaar.fr" className="text-primary-600 hover:underline font-semibold">contact@monpetitbazaar.fr</a>
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">En savoir plus :</h3>
                <div className="flex flex-wrap gap-4">
                  <Link to="/privacy-policy" className="text-primary-600 hover:underline font-semibold">
                    → Politique de Confidentialité
                  </Link>
                  <Link to="/legal-notice" className="text-primary-600 hover:underline font-semibold">
                    → Mentions Légales
                  </Link>
                  <a href="https://www.cnil.fr/fr/cookies-et-autres-traceurs" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-semibold">
                    → CNIL - Guide Cookies
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
