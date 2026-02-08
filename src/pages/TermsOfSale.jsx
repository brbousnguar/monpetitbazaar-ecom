import { Link } from 'react-router-dom';

const TermsOfSale = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Conditions Générales de Vente (CGV)</h1>
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <p className="text-gray-700 font-medium mb-3">
              <strong>📚 Projet d'apprentissage :</strong> Ce site est un projet éducatif dans le domaine de l'e-commerce. 
              Les CGV ci-dessous sont présentées à titre d'exemple et de formation.
            </p>
            <p className="text-sm text-gray-600">
              Aucune transaction financière réelle n'est actuellement effectuée sur ce site. Si le site devient commercial 
              à l'avenir, ces conditions seront mises à jour en conséquence.
            </p>
          </div>

          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mb-8">
            <p className="text-gray-700 font-medium">
              Les présentes Conditions Générales de Vente (CGV) régissent les ventes de produits effectuées 
              sur le site monpetitbazaar.fr. Toute commande implique l'acceptation sans réserve des présentes CGV.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Article 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 1 - Objet</h2>
              <p className="text-gray-700 leading-relaxed">
                Les présentes CGV régissent les relations contractuelles entre <strong>Mon Petit Bazaar</strong> 
                (ci-après "le Vendeur") et toute personne physique ou morale (ci-après "l'Acheteur" ou "le Client") 
                souhaitant effectuer un achat sur le site monpetitbazaar.fr.
              </p>
            </section>

            {/* Article 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 2 - Produits</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Les produits proposés sont ceux qui figurent sur le site monpetitbazaar.fr, dans la limite des stocks disponibles.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Descriptions des produits :</strong> Les produits sont décrits et présentés avec la plus grande exactitude possible. 
                Toutefois, si des erreurs ou omissions ont pu se produire, la responsabilité du Vendeur ne pourra être engagée.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Photos :</strong> Les photographies des produits ne sont pas contractuelles. Des différences peuvent apparaître 
                entre les photos et les produits livrés, notamment au niveau des couleurs.
              </p>
            </section>

            {/* Article 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 3 - Prix</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Les prix de nos produits sont indiqués en euros (€) toutes taxes comprises (TTC), hors frais de livraison.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le Vendeur se réserve le droit de modifier ses prix à tout moment, mais les produits seront facturés 
                sur la base des tarifs en vigueur au moment de la validation de la commande.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>TVA :</strong> Pour les clients particuliers français et européens, la TVA applicable est celle en vigueur 
                en France au jour de la commande.
              </p>
            </section>

            {/* Article 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 4 - Commande</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>4.1. Processus de commande :</strong>
              </p>
              <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
                <li>Sélection des produits et ajout au panier</li>
                <li>Vérification du contenu du panier</li>
                <li>Validation de la commande</li>
                <li>Saisie des informations de livraison</li>
                <li>Choix du mode de paiement</li>
                <li>Confirmation de la commande et paiement</li>
              </ol>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>4.2. Confirmation :</strong> Après validation de votre commande, vous recevrez un email de confirmation 
                récapitulant votre commande, le montant total et les détails de livraison.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>4.3. Disponibilité :</strong> En cas d'indisponibilité d'un produit commandé, vous serez informé dans les 
                plus brefs délais. Vous pourrez alors choisir un produit de remplacement ou demander l'annulation de la commande 
                avec remboursement des sommes versées.
              </p>
            </section>

            {/* Article 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 5 - Paiement</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le paiement s'effectue en ligne de manière sécurisée via :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Carte bancaire :</strong> Visa, Mastercard, American Express</li>
                <li><strong>PayPal :</strong> Compte PayPal ou carte bancaire via PayPal</li>
                <li><strong>Autres modes :</strong> [Stripe, Apple Pay, Google Pay, etc.]</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Sécurité :</strong> Les paiements sont sécurisés par SSL (Secure Socket Layer) et 3D Secure. 
                Vos coordonnées bancaires ne sont jamais communiquées au Vendeur.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Validation :</strong> La commande est validée et expédiée uniquement après confirmation du paiement 
                par l'organisme bancaire.
              </p>
            </section>

            {/* Article 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 6 - Livraison</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>6.1. Zones de livraison :</strong> Nous livrons en France métropolitaine et dans les pays de l'Union Européenne.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>6.2. Délais de livraison :</strong>
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>France métropolitaine : 3 à 5 jours ouvrés</li>
                <li>Union Européenne : 5 à 10 jours ouvrés</li>
                <li>DOM-TOM : Sur demande</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>6.3. Frais de livraison :</strong> Les frais de port sont calculés en fonction du poids et de la destination. 
                Ils sont indiqués avant la validation finale de la commande.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>6.4. Réception :</strong> À la réception de votre colis, vérifiez son état. En cas de dommage apparent, 
                refusez le colis ou émettez des réserves précises sur le bon de livraison.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>6.5. Retard :</strong> En cas de retard de livraison supérieur à 7 jours après la date prévue, 
                vous pouvez demander l'annulation de la commande et le remboursement.
              </p>
            </section>

            {/* Article 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 7 - Droit de rétractation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conformément aux articles L221-18 et suivants du Code de la consommation, vous disposez d'un délai de 
                <strong className="text-primary-600"> 14 jours francs</strong> à compter de la réception de votre commande pour exercer 
                votre droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalités.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Procédure :</strong>
              </p>
              <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
                <li>Informez-nous de votre décision de rétractation par email : contact@monpetitbazaar.fr</li>
                <li>Renvoyez le produit dans son emballage d'origine, en parfait état, à vos frais</li>
                <li>Le remboursement sera effectué dans les 14 jours suivant la réception du produit retourné</li>
              </ol>
              <p className="text-gray-700 leading-relaxed">
                <strong>Exceptions :</strong> Le droit de rétractation ne s'applique pas aux produits personnalisés, 
                aux produits scellés pour raisons d'hygiène ou de protection de la santé qui ont été descellés après la livraison.
              </p>
            </section>

            {/* Article 8 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 8 - Garanties</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>8.1. Garantie légale de conformité :</strong> Tous nos produits bénéficient de la garantie légale 
                de conformité (articles L217-4 et suivants du Code de la consommation) et de la garantie contre les vices 
                cachés (articles 1641 et suivants du Code civil).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>8.2. Durée :</strong> La garantie légale de conformité est de 2 ans à compter de la livraison du produit.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>8.3. Mise en œuvre :</strong> En cas de défaut de conformité, contactez-nous à contact@monpetitbazaar.fr 
                avec photos et description du problème.
              </p>
            </section>

            {/* Article 9 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 9 - Responsabilité</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le Vendeur ne saurait être tenu responsable de l'inexécution du contrat en cas de :
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Rupture de stock ou indisponibilité du produit</li>
                <li>Force majeure</li>
                <li>Fait d'un tiers</li>
                <li>Erreur dans l'adresse de livraison fournie par le Client</li>
              </ul>
            </section>

            {/* Article 10 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 10 - Données personnelles</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Les données personnelles collectées sont traitées conformément au RGPD et à la loi Informatique et Libertés.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Pour plus d'informations, consultez notre <Link to="/privacy-policy" className="text-primary-600 hover:underline font-semibold">Politique de Confidentialité</Link>.
              </p>
            </section>

            {/* Article 11 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 11 - Médiation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conformément à l'article L612-1 du Code de la consommation, en cas de litige, vous pouvez recourir 
                gratuitement à un médiateur de la consommation :
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Médiateur :</strong> [Nom du médiateur]</p>
                <p className="mb-2"><strong>Site web :</strong> [URL du médiateur]</p>
                <p className="mb-2"><strong>Adresse :</strong> [Adresse du médiateur]</p>
              </div>
            </section>

            {/* Article 12 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 12 - Droit applicable</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Les présentes CGV sont soumises au droit français. La langue du contrat est le français.
              </p>
              <p className="text-gray-700 leading-relaxed">
                En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>

            {/* Date */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">
                <strong>Dernière mise à jour :</strong> 8 février 2026
              </p>
              <p className="text-sm text-gray-500">
                Le Vendeur se réserve le droit de modifier les présentes CGV à tout moment. Les CGV applicables 
                sont celles en vigueur à la date de la commande.
              </p>
            </div>

            {/* Contact */}
            <div className="mt-8 bg-primary-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Besoin d'aide ?</h3>
              <p className="text-gray-700">
                Pour toute question, contactez-nous : <a href="mailto:contact@monpetitbazaar.fr" className="text-primary-600 hover:underline font-semibold">contact@monpetitbazaar.fr</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfSale;
