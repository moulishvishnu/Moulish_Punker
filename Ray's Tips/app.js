// Curated Campaign Brief Asia inspired industry facts & news snippets
const industryData = [
    {
        category: "Creative Agency Brief",
        stat: "78% YoY",
        title: "APAC Digital Ad Spend Surges",
        description: "Brands across Southeast Asia are heavily reallocating budgets toward performance-driven influencer ecosystems and interactive short-form video campaigns."
    },
    {
        category: "Campaign Insights",
        stat: "#1 Shift",
        title: "AI-Generated Creative Personalization",
        description: "Top regional ad agencies are integrating generative AI pipelines to customize localized video assets dynamically at a scale never seen before."
    },
    {
        category: "Media Landscape",
        stat: "3.4x ROI",
        title: "The Rise of Immersive Commerce",
        description: "Shoppable live-streaming modules embedded directly inside social platforms continue to outperform traditional web funnels across Asian markets."
    },
    {
        category: "Industry Talent",
        stat: "65% Demand",
        title: "Cross-Disciplinary Creatives",
        description: "Modern creative shops are prioritizing hybrid talent who blend data analysis capabilities with traditional copywriting and art direction."
    },
    {
        category: "Sustainable Marketing",
        stat: "82% Users",
        title: "Eco-Conscious Brand Loyalty",
        description: "Consumers in key APAC metropolitan hubs actively reward transparent supply chains and authentic green marketing initiatives over fast-fad promos."
    }
];

let currentIndex = 0;

// DOM Elements
const factCard = document.getElementById('factCard');
const cardCategory = document.getElementById('cardCategory');
const cardStat = document.getElementById('cardStat');
const cardTitle = document.getElementById('cardTitle');
const cardDesc = document.getElementById('cardDesc');
const counterBadge = document.getElementById('counterBadge');
const nextBtn = document.getElementById('nextBtn');

// Function to update content with smooth layout micro-animations
function updateCardData(index) {
    // Trigger exit animation
    factCard.classList.add('fade-out');

    setTimeout(() => {
        const item = industryData[index];
        cardCategory.textContent = item.category;
        cardStat.textContent = item.stat;
        cardTitle.textContent = item.title;
        cardDesc.textContent = item.description;
        
        // Update counter display with leading zero formatting
        const currentStr = String(index + 1).padStart(2, '0');
        const totalStr = String(industryData.length).padStart(2, '0');
        counterBadge.textContent = `${currentStr} / ${totalStr}`;

        // Swap out exit class for enter class
        factCard.classList.remove('fade-out');
        factCard.classList.add('fade-in');

        // Clean up enter class to settle back to natural state
        setTimeout(() => {
            factCard.classList.remove('fade-in');
        }, 50);
    }, 300);
}

// Event Listener for Interaction Flow
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % industryData.length;
    updateCardData(currentIndex);
});

// Initialize first view
updateCardData(currentIndex);

// Service Worker Registration for PWA Functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('ServiceWorker registered successfully scope: ', reg.scope))
            .catch(err => console.log('ServiceWorker registration failed: ', err));
    });
}
