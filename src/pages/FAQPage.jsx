import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      category: 'Commandes',
      questions: [
        {
          question: 'Comment puis-je passer une commande ?',
          answer: 'Pour passer une commande, ajoutez simplement les produits souhaités à votre panier en cliquant sur "Ajouter au panier". Une fois vos achats terminés, cliquez sur l\'icône du panier et suivez les étapes de paiement.'
        },
        {
          question: 'Puis-je modifier ma commande après l\'avoir passée ?',
          answer: 'Oui, vous pouvez modifier votre commande dans les 24 heures suivant sa validation. Contactez-nous par email ou téléphone avec votre numéro de commande pour effectuer les modifications nécessaires.'
        },
        {
          question: 'Comment puis-je suivre ma commande ?',
          answer: 'Dès l\'expédition de votre commande, vous recevrez un email avec un numéro de suivi. Vous pourrez suivre votre colis en temps réel grâce à ce numéro.'
        }
      ]
    },
    {
      category: 'Livraison',
      questions: [
        {
          question: 'Quels sont les délais de livraison ?',
          answer: 'Les délais de livraison varient selon votre localisation : 2-3 jours ouvrés en France métropolitaine, 4-7 jours ouvrés pour l\'Europe, et 7-14 jours ouvrés pour le reste du monde.'
        },
        {
          question: 'Quels sont les frais de livraison ?',
          answer: 'Les frais de livraison sont de 5,90€ pour la France métropolitaine. La livraison est gratuite pour toute commande supérieure à 50€. Pour les autres destinations, les frais sont calculés automatiquement lors du paiement.'
        },
        {
          question: 'Livrez-vous à l\'international ?',
          answer: 'Oui, nous livrons dans le monde entier. Les frais de livraison et les délais varient selon la destination. Ces informations sont affichées lors du processus de commande.'
        }
      ]
    },
    {
      category: 'Retours et Remboursements',
      questions: [
        {
          question: 'Quelle est votre politique de retour ?',
          answer: 'Vous disposez de 14 jours à compter de la réception de votre commande pour retourner un article. Les produits doivent être dans leur état d\'origine, non utilisés et dans leur emballage d\'origine.'
        },
        {
          question: 'Comment effectuer un retour ?',
          answer: 'Contactez notre service client pour obtenir une autorisation de retour. Nous vous fournirons les instructions et l\'étiquette de retour. Les frais de retour sont à votre charge, sauf en cas de produit défectueux.'
        },
        {
          question: 'Quand serai-je remboursé ?',
          answer: 'Le remboursement est effectué dans les 14 jours suivant la réception du produit retourné, après vérification de son état. Le remboursement sera effectué sur le moyen de paiement utilisé lors de l\'achat.'
        }
      ]
    },
    {
      category: 'Paiement',
      questions: [
        {
          question: 'Quels moyens de paiement acceptez-vous ?',
          answer: 'Nous acceptons les cartes bancaires (Visa, Mastercard, American Express), PayPal, et les virements bancaires. Tous les paiements sont sécurisés.'
        },
        {
          question: 'Mes informations de paiement sont-elles sécurisées ?',
          answer: 'Oui, toutes les transactions sont cryptées et sécurisées. Nous n\'enregistrons aucune information bancaire sur nos serveurs. Les paiements sont traités par des prestataires certifiés PCI-DSS.'
        },
        {
          question: 'Puis-je obtenir une facture ?',
          answer: 'Oui, une facture est automatiquement générée et envoyée par email après chaque commande. Vous pouvez également la télécharger depuis votre espace client.'
        }
      ]
    },
    {
      category: 'Produits',
      questions: [
        {
          question: 'Les produits sont-ils authentiques et de qualité ?',
          answer: 'Tous nos produits sont soigneusement sélectionnés et proviennent de fournisseurs de confiance. Nous garantissons l\'authenticité et la qualité de chaque article.'
        },
        {
          question: 'Que faire si un produit est défectueux ?',
          answer: 'Si vous recevez un produit défectueux, contactez-nous immédiatement avec des photos du défaut. Nous organiserons un remplacement ou un remboursement complet, y compris les frais de retour.'
        },
        {
          question: 'Proposez-vous des produits personnalisés ?',
          answer: 'Certains de nos produits peuvent être personnalisés. Consultez la fiche produit ou contactez-nous pour connaître les options de personnalisation disponibles.'
        }
      ]
    },
    {
      category: 'Compte Client',
      questions: [
        {
          question: 'Dois-je créer un compte pour commander ?',
          answer: 'Non, vous pouvez commander en tant qu\'invité. Cependant, créer un compte vous permet de suivre vos commandes, enregistrer vos adresses et accéder à des offres exclusives.'
        },
        {
          question: 'Comment réinitialiser mon mot de passe ?',
          answer: 'Cliquez sur "Mot de passe oublié" sur la page de connexion. Vous recevrez un email avec un lien pour réinitialiser votre mot de passe.'
        },
        {
          question: 'Comment modifier mes informations personnelles ?',
          answer: 'Connectez-vous à votre compte et accédez à la section "Mon profil". Vous pourrez y modifier vos informations personnelles, adresses et préférences.'
        }
      ]
    }
  ];

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <HelpCircle className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Questions Fréquentes</h1>
        <p className="text-lg text-gray-600">
          Trouvez rapidement des réponses à vos questions. Si vous ne trouvez pas ce que vous cherchez, n'hésitez pas à nous contacter.
        </p>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto">
        {faqData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.questions.map((item, questionIndex) => {
                const index = `${categoryIndex}-${questionIndex}`;
                const isOpen = openIndex === index;

                return (
                  <div
                    key={questionIndex}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-left font-medium text-gray-900 pr-4">
                        {item.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="flex-shrink-0 w-5 h-5 text-blue-600" />
                      ) : (
                        <ChevronDown className="flex-shrink-0 w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-4 pt-2">
                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="max-w-4xl mx-auto mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Vous n'avez pas trouvé votre réponse ?
        </h3>
        <p className="text-gray-600 mb-6">
          Notre équipe est là pour vous aider. N'hésitez pas à nous contacter.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Contactez-nous
        </a>
      </div>
    </div>
  );
}

export default FAQPage;
