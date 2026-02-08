import { Link } from 'react-router-dom';

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de Retour et Remboursement</h1>
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <p className="text-gray-700 font-medium mb-3">
              <strong>📚 Projet d'apprentissage :</strong> Ce site est un projet éducatif. Cette politique de retour 
              est rédigée à titre d'exemple pour comprendre les obligations légales en e-commerce.
            </p>
            <p className="text-sm text-gray-600">
              Aucune vente réelle n'est effectuée actuellement sur ce site.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
            <p className="text-gray-700 font-medium">
              ✨ Chez Mon Petit Bazaar, votre satisfaction est notre priorité. Vous disposez de 14 jours 
              pour retourner tout article qui ne vous conviendrait pas, conformément à la législation européenne.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Droit de rétractation (14 jours)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conformément aux <strong>articles L221-18 et suivants du Code de la consommation</strong>, 
                vous disposez d'un délai de <span className="text-primary-600 font-bold">14 jours francs</span> 
                pour exercer votre droit de rétractation sans avoir à justifier de motifs ni à payer de pénalités.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">📅 Point de départ du délai :</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Pour les biens : le jour de la réception du produit par vous-même ou un tiers désigné</li>
                  <li>Pour une commande de plusieurs articles : le jour de réception du dernier article</li>
                  <li>Pour une livraison en plusieurs lots : le jour de réception du dernier lot</li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Comment retourner un produit ?</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-600">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                    Informez-nous de votre décision
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Avant de retourner un article, contactez-nous par :
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                      <strong>Email :</strong> <a href="mailto:contact@monpetitbazaar.fr" className="text-primary-600 hover:underline">contact@monpetitbazaar.fr</a>
                    </li>
                    <li><strong>Objet :</strong> "Demande de retour - Commande #[NUMERO]"</li>
                    <li><strong>Indiquez :</strong> Numéro de commande, produit(s) concerné(s), motif du retour (optionnel)</li>
                  </ul>
                  <div className="mt-4 bg-white p-4 rounded border">
                    <p className="text-sm text-gray-700">
                      📝 <strong>Formulaire de rétractation :</strong> Vous pouvez utiliser le formulaire type 
                      de rétractation disponible en téléchargement (non obligatoire).
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-600">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                    Préparez le colis
                  </h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>📦 Emballez le produit dans son <strong>emballage d'origine</strong> si possible</li>
                    <li>🏷️ Incluez tous les <strong>accessoires, notices, étiquettes</strong></li>
                    <li>📄 Joignez une copie de la <strong>facture</strong> ou du bon de commande</li>
                    <li>✍️ Ajoutez un <strong>petit mot</strong> avec votre numéro de commande et coordonnées</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-600">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                    Renvoyez le colis
                  </h3>
                  <div className="bg-yellow-50 border border-yellow-300 p-4 rounded mb-4">
                    <p className="text-gray-700 font-semibold mb-2">⚠️ Frais de retour à votre charge</p>
                    <p className="text-sm text-gray-700">
                      Sauf produit défectueux ou erreur de notre part, les frais de retour sont à votre charge.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <p className="font-bold text-gray-900 mb-2">📮 Adresse de retour :</p>
                    <p className="text-gray-700">
                      Mon Petit Bazaar - Service Retours<br />
                      [Votre adresse complète]<br />
                      [Code postal] [Ville]<br />
                      France
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    💡 <strong>Conseil :</strong> Conservez la preuve d'expédition (reçu) et le numéro de suivi. 
                    Nous vous recommandons d'utiliser un envoi avec assurance et suivi.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-600">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                    Recevez votre remboursement
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Dès réception et vérification du produit retourné, nous procéderons au remboursement dans les 
                    <strong className="text-primary-600"> 14 jours</strong> suivants.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>💳 Remboursement sur le moyen de paiement utilisé pour la commande</li>
                    <li>📧 Email de confirmation du remboursement</li>
                    <li>⏱️ Délai bancaire : 3 à 5 jours ouvrés supplémentaires</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Conditions de retour</h2>
              
              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">✅</span>
                    Produits acceptés pour retour
                  </h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Article <strong>neuf, non utilisé, non porté</strong></li>
                    <li>Emballage d'origine <strong>intact ou présent</strong></li>
                    <li>Étiquettes <strong>non retirées</strong></li>
                    <li>Tous les accessoires et notices <strong>inclus</strong></li>
                    <li>État permettant une <strong>remise en vente</strong></li>
                  </ul>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">❌</span>
                    Produits exclus du droit de rétractation
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation 
                    ne s'applique pas aux :
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Biens confectionnés selon les spécifications du consommateur ou <strong>personnalisés</strong></li>
                    <li>Biens susceptibles de se détériorer ou de se périmer rapidement</li>
                    <li>Biens scellés ne pouvant être retournés pour des raisons <strong>d'hygiène ou de santé</strong> 
                      et qui ont été descellés après livraison (ex: cosmétiques, sous-vêtements)</li>
                    <li>Enregistrements audio, vidéo ou logiciels informatiques descellés</li>
                    <li>Journaux, périodiques ou magazines</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Produit défectueux ou erreur de livraison</h2>
              
              <div className="bg-orange-50 border border-orange-300 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">🔧 Produit défectueux, endommagé ou non conforme</h3>
                <p className="text-gray-700 mb-4">
                  Si vous recevez un produit défectueux, endommagé ou ne correspondant pas à votre commande :
                </p>
                <ol className="list-decimal pl-6 text-gray-700 space-y-3">
                  <li>
                    <strong>Contactez-nous immédiatement</strong> (dans les 48h si possible) à 
                    <a href="mailto:contact@monpetitbazaar.fr" className="text-primary-600 hover:underline ml-1">contact@monpetitbazaar.fr</a>
                  </li>
                  <li>
                    <strong>Joignez des photos</strong> du produit défectueux et de l'emballage
                  </li>
                  <li>
                    Nous vous enverrons un <strong>bon de retour prépayé</strong> (frais de retour à notre charge)
                  </li>
                  <li>
                    Vous aurez le choix entre :
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>📦 <strong>Échange</strong> du produit (réexpédition gratuite)</li>
                      <li>💰 <strong>Remboursement intégral</strong> (produit + frais de port aller)</li>
                    </ul>
                  </li>
                </ol>
              </div>

              <div className="bg-blue-50 border border-blue-300 p-6 rounded-lg mt-4">
                <h3 className="font-bold text-gray-900 mb-3">📦 Colis endommagé à la réception</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Important :</strong> Si le colis présente des dommages apparents (écrasé, ouvert, etc.) :
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>✋ <strong>Refusez le colis</strong> ou émettez des <strong>réserves écrites</strong> sur le bon de livraison</li>
                  <li>📸 Prenez des <strong>photos</strong> du colis endommagé</li>
                  <li>📧 Contactez-nous sous <strong>48h</strong> avec photos et numéro de commande</li>
                  <li>📝 Confirmez par écrit au transporteur dans les <strong>3 jours ouvrés</strong> (recommandé avec AR)</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Garanties légales</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">⚖️ Garantie légale de conformité (2 ans)</h3>
                  <p className="text-gray-700 mb-3">
                    Tous nos produits bénéficient de la <strong>garantie légale de conformité</strong> 
                    (articles L217-4 et suivants du Code de la consommation) pendant 2 ans à compter de la livraison.
                  </p>
                  <p className="text-gray-700">
                    Elle vous permet de demander la réparation ou le remplacement du bien défectueux, ou à défaut, 
                    le remboursement.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">🔍 Garantie des vices cachés</h3>
                  <p className="text-gray-700">
                    Vous bénéficiez également de la <strong>garantie légale contre les vices cachés</strong> 
                    (articles 1641 et suivants du Code civil) permettant de demander le remboursement ou une 
                    réduction du prix.
                  </p>
                </div>

                <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
                  <h3 className="font-bold text-gray-900 mb-3">📞 Pour faire valoir vos garanties</h3>
                  <p className="text-gray-700">
                    Contactez notre service client à 
                    <a href="mailto:contact@monpetitbazaar.fr" className="text-primary-600 hover:underline ml-1 font-semibold">contact@monpetitbazaar.fr</a> avec :
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
                    <li>Numéro de commande et date d'achat</li>
                    <li>Description détaillée du problème</li>
                    <li>Photos du défaut constaté</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Délais et modalités de remboursement</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-4">💰 Montant remboursé</h3>
                <table className="w-full text-sm border border-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left border-b">Situation</th>
                      <th className="px-4 py-3 text-left border-b">Remboursement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="px-4 py-3">Rétractation (14 jours)</td>
                      <td className="px-4 py-3">Prix du produit + frais de port aller*</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Produit défectueux</td>
                      <td className="px-4 py-3">Prix du produit + frais de port aller</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Erreur de livraison</td>
                      <td className="px-4 py-3">Prix du produit + frais de port aller</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Produit retourné incomplet/endommagé</td>
                      <td className="px-4 py-3">Remboursement partiel ou refusé</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-600 mt-3">
                  * Les frais de port retour restent à votre charge sauf produit défectueux ou erreur de notre part
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-4">
                <h3 className="font-bold text-gray-900 mb-3">⏱️ Délais de remboursement</h3>
                <div className="space-y-2 text-gray-700">
                  <p>📅 <strong>Réception du retour :</strong> Nous vérifions l'état du produit sous 2-3 jours ouvrés</p>
                  <p>💳 <strong>Traitement du remboursement :</strong> Sous 14 jours maximum après réception</p>
                  <p>🏦 <strong>Virement bancaire :</strong> 3 à 5 jours ouvrés supplémentaires selon votre banque</p>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Échange de produit</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Si vous souhaitez échanger un produit (taille, couleur, modèle différent) :
              </p>
              <ol className="list-decimal pl-6 text-gray-700 space-y-3">
                <li>Contactez-nous pour vérifier la <strong>disponibilité</strong> du produit souhaité</li>
                <li>Retournez le produit initial selon la procédure standard</li>
                <li>Passez une <strong>nouvelle commande</strong> pour le produit de remplacement</li>
                <li>Nous vous <strong>rembourserons</strong> le premier produit dès réception</li>
              </ol>
              <p className="text-sm text-gray-600 mt-4">
                💡 Cette procédure garantit que vous recevez rapidement le nouvel article sans attendre le traitement du retour.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Questions fréquentes (FAQ)</h2>
              
              <div className="space-y-4">
                <details className="bg-gray-50 p-6 rounded-lg">
                  <summary className="font-bold text-gray-900 cursor-pointer">
                    ❓ Puis-je retourner un produit après avoir retiré l'étiquette ?
                  </summary>
                  <p className="text-gray-700 mt-3 text-sm">
                    Les étiquettes doivent être présentes pour un retour dans le cadre de la rétractation. 
                    Si elles ont été retirées, le produit peut être considéré comme utilisé et le retour refusé.
                  </p>
                </details>

                <details className="bg-gray-50 p-6 rounded-lg">
                  <summary className="font-bold text-gray-900 cursor-pointer">
                    ❓ Qui paie les frais de retour ?
                  </summary>
                  <p className="text-gray-700 mt-3 text-sm">
                    Dans le cadre d'une rétractation, les frais de retour sont à votre charge. 
                    Si le produit est défectueux ou s'il y a une erreur de notre part, nous prenons en charge 
                    les frais de retour.
                  </p>
                </details>

                <details className="bg-gray-50 p-6 rounded-lg">
                  <summary className="font-bold text-gray-900 cursor-pointer">
                    ❓ Combien de temps pour recevoir mon remboursement ?
                  </summary>
                  <p className="text-gray-700 mt-3 text-sm">
                    Le remboursement est effectué dans les 14 jours suivant la réception du produit retourné. 
                    Comptez 3 à 5 jours ouvrés supplémentaires pour que votre banque crédite votre compte.
                  </p>
                </details>

                <details className="bg-gray-50 p-6 rounded-lg">
                  <summary className="font-bold text-gray-900 cursor-pointer">
                    ❓ Puis-je être remboursé(e) par un autre moyen de paiement ?
                  </summary>
                  <p className="text-gray-700 mt-3 text-sm">
                    Non, conformément à la loi, le remboursement doit être effectué par le même moyen de paiement 
                    que celui utilisé pour l'achat initial.
                  </p>
                </details>

                <details className="bg-gray-50 p-6 rounded-lg">
                  <summary className="font-bold text-gray-900 cursor-pointer">
                    ❓ Que faire si mon colis de retour est perdu ?
                  </summary>
                  <p className="text-gray-700 mt-3 text-sm">
                    Conservez toujours votre preuve d'expédition et votre numéro de suivi. Si le colis est perdu, 
                    contactez le transporteur avec votre preuve d'envoi. Nous vous recommandons d'assurer les envois 
                    de valeur.
                  </p>
                </details>
              </div>
            </section>

            {/* Date */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">
                <strong>Dernière mise à jour :</strong> 8 février 2026
              </p>
              <p className="text-sm text-gray-500">
                Cette politique peut être modifiée à tout moment. Les conditions applicables sont celles 
                en vigueur à la date de votre commande.
              </p>
            </div>

            {/* Contact */}
            <div className="mt-8 space-y-4">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">💬 Besoin d'aide pour un retour ?</h3>
                <p className="text-gray-700 mb-3">
                  Notre service client est là pour vous aider :
                </p>
                <p className="text-gray-700">
                  📧 Email : <a href="mailto:contact@monpetitbazaar.fr" className="text-primary-600 hover:underline font-semibold">contact@monpetitbazaar.fr</a><br />
                  📞 Téléphone : [Votre numéro]<br />
                  ⏰ Horaires : Lundi - Vendredi, 9h - 18h
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">📚 Documents utiles :</h3>
                <div className="flex flex-wrap gap-4">
                  <Link to="/terms" className="text-primary-600 hover:underline font-semibold">
                    → Conditions Générales de Vente
                  </Link>
                  <Link to="/legal-notice" className="text-primary-600 hover:underline font-semibold">
                    → Mentions Légales
                  </Link>
                  <a href="#" className="text-primary-600 hover:underline font-semibold">
                    → Télécharger le formulaire de rétractation
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

export default ReturnPolicy;
