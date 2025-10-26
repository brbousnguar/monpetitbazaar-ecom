/**
 * Mon Petit Bazaar - Coming Soon Page JavaScript
 * Interactive features and animations
 */

// Global Variables
let soundEnabled = true;
let gameScore = 0;
let visitorCount = Math.floor(Math.random() * 100) + 42;

// Fixed launch date - Set to January 2, 2026 at 10:00 AM
// This date will remain the same across all page refreshes
function getLaunchDate() {
    // Check if we have a saved launch date in localStorage
    let savedLaunchDate = localStorage.getItem('bazaarLaunchDate');
    
    if (!savedLaunchDate) {
        // Set fixed launch date: January 2, 2026 at 10:00 AM
        const launchDate = new Date('2026-01-02T10:00:00');
        localStorage.setItem('bazaarLaunchDate', launchDate.toISOString());
        return launchDate;
    } else {
        return new Date(savedLaunchDate);
    }
}

const launchDate = getLaunchDate();

// Fun Facts Data
const funFacts = [
    "💡 Chaque produit est personnellement sélectionné pour sa qualité !",
    "♻️ Donner une seconde vie aux objets, c'est écolo ET économique !",
    "🎨 Mes stickers sont créés avec amour dans mon petit atelier !",
    "✨ Nouveaux articles sélectionnés chaque semaine !",
    "🔍 Chaque article est testé et vérifié avant mise en vente !",
    "🎁 Premiers clients = accès privilégié aux meilleures affaires !",
    "💰 Économisez jusqu'à 50% par rapport aux prix habituels !",
    "🛍️ Ma philosophie : qualité d'abord, prix juste ensuite !",
    "🏆 Votre satisfaction est ma meilleure récompense !",
    "🎪 Passionné de belles trouvailles et bonnes affaires !"
];

// Dynamic Page Titles
const titles = [
    "Mon Petit Bazaar - Site en Construction 🚧",
    "Mon Petit Bazaar - Bientôt ouvert ! 🎉",
    "Mon Petit Bazaar - On arrive ! 🚀",
    "Mon Petit Bazaar - Patience... 😊",
    "Mon Petit Bazaar - Presque prêt ! ⏰",
    "Mon Petit Bazaar - Encore un peu... 🛠️"
];

// Dynamic Title Animation
let titleIndex = 0;
setInterval(() => {
    titleIndex = (titleIndex + 1) % titles.length;
    document.title = titles[titleIndex];
}, 3000);

/**
 * Countdown Timer Functions
 */
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = launchDate.getTime() - now;
    
    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        
        // Update progress bar (calculate from creation date to launch date)
        const creationDate = new Date('2025-10-26T00:00:00'); // Today's date when counter was created
        const totalTime = launchDate.getTime() - creationDate.getTime();
        const elapsed = now - creationDate.getTime();
        const progress = Math.min((elapsed / totalTime) * 100, 100);
        
        document.getElementById('progressBar').style.width = progress + '%';
        document.getElementById('progressText').textContent = 
            `${Math.round(progress)}% terminé`;
    } else {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        document.getElementById('progressText').textContent = 'C\'est ouvert ! 🎉';
    }
}

/**
 * Fun Facts Rotation
 */
let factIndex = 0;
function updateFunFact() {
    factIndex = (factIndex + 1) % funFacts.length;
    document.getElementById('funFact').textContent = funFacts[factIndex];
}

/**
 * Mini Game Functions
 */
function collectTreasure(element, points) {
    if (soundEnabled) {
        document.getElementById('clickSound').play().catch(() => {});
    }
    
    gameScore += points;
    document.getElementById('gameScore').textContent = gameScore;
    
    // Animate the clicked emoji
    element.style.transform = 'scale(1.5) rotate(360deg)';
    element.style.opacity = '0.5';
    
    setTimeout(() => {
        element.style.transform = 'scale(1) rotate(0deg)';
        element.style.opacity = '1';
    }, 300);
    
    // Show points animation
    const pointsDisplay = document.createElement('div');
    pointsDisplay.textContent = `+${points}`;
    pointsDisplay.style.position = 'absolute';
    pointsDisplay.style.color = '#00b894';
    pointsDisplay.style.fontWeight = 'bold';
    pointsDisplay.style.fontSize = '1.2em';
    pointsDisplay.style.animation = 'fadeOut 1s ease-out forwards';
    pointsDisplay.style.pointerEvents = 'none';
    
    element.parentNode.appendChild(pointsDisplay);
    setTimeout(() => {
        if (pointsDisplay.parentNode) {
            pointsDisplay.parentNode.removeChild(pointsDisplay);
        }
    }, 1000);
    
    // Milestone rewards
    if (gameScore === 50) {
        showMessage('🏆 Excellent ! Vous avez l\'œil pour les bonnes affaires !', 'success');
    } else if (gameScore === 100) {
        showMessage('🎉 100 points = 10€ de réduction sur votre première commande !', 'success');
    } else if (gameScore === 200) {
        showMessage('👑 VIP Chasseur d\'Affaires ! Accès prioritaire aux nouveautés !', 'success');
    }
}

/**
 * Email Subscription Functions
 */
function subscribeEmail() {
    const email = document.getElementById('emailInput').value.trim();
    const messageDiv = document.getElementById('emailMessage');
    
    if (!email) {
        showMessage('Veuillez entrer votre adresse email ! 📧', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showMessage('Adresse email invalide ! 😅', 'error');
        return;
    }
    
    if (soundEnabled) {
        document.getElementById('successSound').play().catch(() => {});
    }
    
    messageDiv.innerHTML = '✨ Merci ! Vous êtes maintenant sur notre liste VIP ! ✨';
    messageDiv.style.color = '#00b894';
    
    // Clear input
    document.getElementById('emailInput').value = '';
    
    // Add confetti effect
    createConfetti();
    
    setTimeout(() => {
        messageDiv.innerHTML = '';
    }, 5000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Sound Control Functions
 */
function toggleSound() {
    soundEnabled = !soundEnabled;
    const button = document.querySelector('.sound-control');
    button.textContent = soundEnabled ? '🔊' : '🔇';
    button.title = soundEnabled ? 'Désactiver le son' : 'Activer le son';
}

/**
 * Easter Egg Functions
 */
function easterEgg() {
    if (soundEnabled) {
        document.getElementById('successSound').play().catch(() => {});
    }
    
    const messages = [
        '🍯 Pot de miel secret trouvé ! +50 points économies !',
        '🔍 Chasseur d\'affaires confirmé ! Vous méritez une surprise !',
        '🕵️ L\'œil du dénicheur ! On aime ça !',
        '🎯 Excellent ! Revenez à l\'ouverture pour votre cadeau VIP !',
        '🎁 Code secret débloqué : HONEY2024 (-15% première commande)'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    showMessage(randomMessage, 'success');
    
    gameScore += 50;
    document.getElementById('gameScore').textContent = gameScore;
    
    createConfetti();
}

/**
 * Social Sharing Functions
 */
function shareOnSocial() {
    const text = "Découvrez Mon Petit Bazaar - Ouverture très bientôt ! 🎉";
    const url = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: 'Mon Petit Bazaar',
            text: text,
            url: url
        }).catch(() => {});
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(`${text} ${url}`).then(() => {
            showMessage('Lien copié ! Partagez-le avec vos amis ! 📱', 'success');
        }).catch(() => {
            showMessage('Impossible de copier le lien 😅', 'error');
        });
    }
}

/**
 * Utility Functions
 */
function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '20px';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translateX(-50%)';
    messageDiv.style.padding = '15px 20px';
    messageDiv.style.borderRadius = '25px';
    messageDiv.style.color = 'white';
    messageDiv.style.fontWeight = 'bold';
    messageDiv.style.zIndex = '1000';
    messageDiv.style.animation = 'slideDown 0.5s ease-out';
    
    if (type === 'success') {
        messageDiv.style.background = 'linear-gradient(135deg, #00b894, #00cec9)';
    } else {
        messageDiv.style.background = 'linear-gradient(135deg, #ff6b6b, #ee5a52)';
    }
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.style.animation = 'slideUp 0.5s ease-out forwards';
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 500);
    }, 3000);
}

function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#fd79a8'];
    const emojis = ['🎉', '✨', '🎊', '⭐', '💎', '🎁'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            const isEmoji = Math.random() > 0.5;
            
            if (isEmoji) {
                confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                confetti.style.fontSize = '20px';
            } else {
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            }
            
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-20px';
            confetti.style.pointerEvents = 'none';
            confetti.style.animation = `fall ${2 + Math.random() * 3}s linear forwards`;
            confetti.style.zIndex = '999';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 5000);
        }, i * 100);
    }
}

/**
 * Floating Particles System
 */
function createFloatingParticle() {
    const particles = ['✨', '💫', '⭐', '🌟', '💎', '🎊'];
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.textContent = particles[Math.floor(Math.random() * particles.length)];
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.fontSize = (Math.random() * 20 + 10) + 'px';
    particle.style.animationDuration = (Math.random() * 5 + 5) + 's';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 10000);
}

/**
 * Dynamic CSS Animations
 */
function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from { transform: translateX(-50%) translateY(-100%); opacity: 0; }
            to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
        @keyframes slideUp {
            from { transform: translateX(-50%) translateY(0); opacity: 1; }
            to { transform: translateX(-50%) translateY(-100%); opacity: 0; }
        }
        @keyframes fadeOut {
            from { transform: translateY(0); opacity: 1; }
            to { transform: translateY(-30px); opacity: 0; }
        }
        @keyframes fall {
            to { transform: translateY(100vh) rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
}

/**
 * Application Initialization
 */
document.addEventListener('DOMContentLoaded', function() {
    // Add dynamic styles
    addDynamicStyles();
    
    // Start countdown
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Start fun facts rotation
    setInterval(updateFunFact, 6000);
    
    // Create floating particles periodically
    setInterval(createFloatingParticle, 2000);
    
    // Update visitor count
    document.getElementById('visitorCount').textContent = visitorCount;
    
    // Load saved game score
    const savedScore = localStorage.getItem('bazaarGameScore');
    if (savedScore) {
        gameScore = parseInt(savedScore);
        document.getElementById('gameScore').textContent = gameScore;
    }
    
    // Save score when it changes
    const originalCollectTreasure = window.collectTreasure;
    window.collectTreasure = function(element, points) {
        originalCollectTreasure(element, points);
        localStorage.setItem('bazaarGameScore', gameScore);
    };
    
    // Console messages
    console.log("🕵️ Hé ! Tu inspectes notre code ? On aime ça ! 😄");
    console.log("🚧 Site en construction, mais le code est déjà là ! 💻");
    console.log("📧 Une suggestion ? contact@monpetitbazaar.fr");
    console.log("🎮 Essaie de taper 'bazaar()' dans la console pour une surprise !");
    
    // Secret console command
    window.bazaar = function() {
        console.log("🎉 Code secret chasseur d'affaires activé !");
        console.log("🎁 Code promo VIP : HUNTER2024 (-20% sur votre première commande)");
        console.log("📦 + Accès prioritaire aux articles Amazon Prime");
        showMessage('🎁 Code VIP trouvé ! HUNTER2024 (-20% + priorité)', 'success');
        createConfetti();
    };
    
    // Admin function to reset launch date (for testing)
    window.resetLaunchDate = function(daysFromNow = 30) {
        const newLaunchDate = new Date();
        newLaunchDate.setDate(newLaunchDate.getDate() + daysFromNow);
        localStorage.setItem('bazaarLaunchDate', newLaunchDate.toISOString());
        console.log(`🔧 Launch date reset to: ${newLaunchDate.toLocaleString('fr-FR')}`);
        console.log("📝 Refresh the page to see the new countdown!");
        return newLaunchDate;
    };
});