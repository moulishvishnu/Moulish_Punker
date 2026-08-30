// Curated Campaign Brief Asia inspired industry facts & news snippets

// We'll generate 10,000 facts at runtime using templates so the repo file stays compact.
function generateFacts(count){
    const categories = [
        "Creative Agency Brief",
        "Campaign Insights",
        "Media Landscape",
        "Industry Talent",
        "Sustainable Marketing",
        "Product & UX",
        "Data & Analytics",
        "Platform Trends",
        "Ad Technology",
        "Consumer Behavior"
    ];

    const statTemplates = ["{n}% YoY","#{n} Shift","{n}.0x ROI","{n}% Demand","{n}% Users","Top {n}"]; 

    const titleTemplates = [
        "APAC Digital Ad Spend Surges",
        "AI-Generated Creative Personalization",
        "The Rise of Immersive Commerce",
        "Cross-Disciplinary Creatives",
        "Eco-Conscious Brand Loyalty",
        "Short-form Video Dominance",
        "Conversational Commerce Uptake",
        "First-party Data Activation",
        "Streaming Audio Ad Growth",
        "Micro-influencer Effectiveness"
    ];

    const descTemplates = [
        "Markets are reallocating budgets to performance-driven influencer ecosystems and interactive short-form video.",
        "Agencies are integrating generative AI pipelines to customize localized video assets dynamically at scale.",
        "Shoppable live-streaming modules embedded inside social platforms are outperforming traditional funnels.",
        "Brands prioritize hybrid talent blending data analysis with creative craft.",
        "Consumers reward transparent supply chains and authentic green marketing initiatives.",
        "Short-form content formats continue to shorten attention windows while increasing conversions.",
        "Conversational touchpoints in commerce channels reduce friction and lift AOV.",
        "First-party data strategies drive personalized experiences and measurement improvements.",
        "Streaming audio formats provide efficient reach for niche audiences.",
        "Micro-influencer partnerships show strong engagement-to-cost ratios in regional markets."
    ];

    const arr = new Array(count);
    for(let i=0;i<count;i++){
        const idx = i + 1;
        const cat = categories[i % categories.length];
        const titleBase = titleTemplates[i % titleTemplates.length];
        const descBase = descTemplates[i % descTemplates.length];

        // make a varied stat
        const statTemplate = statTemplates[i % statTemplates.length];
        const nVal = ((i * 7) % 90) + 10; // pseudo-random-ish 10..99
        const stat = statTemplate.replace(/{n}/g, nVal).replace(/#\{n\}/g, `#${(i%10)+1}`);

        let title = `${titleBase} — Insight #${String(idx).padStart(4,'0')}`;
        let description = `${descBase} (Insight ${idx} of ${count})`;

        arr[i] = {
            category: cat,
            stat: stat,
            title: title,
            description: description
        };
    }
    return arr;
}

const industryData = generateFacts(10000);

let currentIndex = 0;
let autoplayIntervalMs = 4000;
let autoplayTimer = null;
let isPlaying = true;

// DOM Elements
const factCard = document.getElementById('factCard');
const cardCategory = document.getElementById('cardCategory');
const cardStat = document.getElementById('cardStat');
const cardTitle = document.getElementById('cardTitle');
const cardDesc = document.getElementById('cardDesc');
const counterBadge = document.getElementById('counterBadge');
const nextBtn = document.getElementById('nextBtn');
const playPauseBtn = document.getElementById('playPauseBtn');
const appContainer = document.getElementById('appContainer');

// helper to format number with leading zero
function two(n){ return String(n).padStart(2,'0'); }

function renderIndexDisplay(i){
    // show current with infinity to indicate infinite loop
    counterBadge.textContent = `${two(i+1)} / ∞`;
}

// animation helpers: apply classes to trigger CSS keyframes
function animateCard(nextIndex){
    // add out class then replace content then add in class
    factCard.classList.remove('transition-in','transition-out');
    factCard.classList.add('transition-out');

    setTimeout(()=> {
        const item = industryData[nextIndex];
        cardCategory.textContent = item.category;
        cardStat.textContent = item.stat;
        cardTitle.textContent = item.title;
        cardDesc.textContent = item.description;
        renderIndexDisplay(nextIndex);

        // force reflow to allow reapplying class
        void factCard.offsetWidth;
        factCard.classList.remove('transition-out');
        factCard.classList.add('transition-in');

        // cleanup
        setTimeout(()=> {
            factCard.classList.remove('transition-in');
        }, 500);
    }, 280);
}

function goToIndex(idx){
    currentIndex = (idx + industryData.length) % industryData.length;
    animateCard(currentIndex);
}

function next(){
    goToIndex(currentIndex + 1);
}

function prev(){
    goToIndex(currentIndex - 1);
}

// autoplay control
function startAutoplay(){
    stopAutoplay();
    autoplayTimer = setInterval(()=> {
        next();
    }, autoplayIntervalMs);
    isPlaying = true;
    updatePlayPauseUI();
}

function stopAutoplay(){
    if(autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
    }
    isPlaying = false;
    updatePlayPauseUI();
}

function togglePlayPause(){
    if(isPlaying) stopAutoplay();
    else startAutoplay();
}

function updatePlayPauseUI(){
    if(playPauseBtn){
        playPauseBtn.textContent = isPlaying ? '⏸' : '▶';
        playPauseBtn.setAttribute('aria-pressed', String(isPlaying));
        playPauseBtn.title = isPlaying ? 'Pause autoplay' : 'Start autoplay';
    }
}

// interactions
nextBtn.addEventListener('click', () => {
    next();
    // small UX: restart autoplay so user sees next then resumes
    if(isPlaying) {
        stopAutoplay();
        setTimeout(startAutoplay, 1200);
    }
});

if(playPauseBtn){
    playPauseBtn.addEventListener('click', () => {
        togglePlayPause();
    });
}

// pause on hover/focus for better reading
factCard.addEventListener('mouseenter', stopAutoplay);
factCard.addEventListener('mouseleave', () => { if(isPlaying) startAutoplay(); });
factCard.addEventListener('focus', stopAutoplay);
factCard.addEventListener('blur', () => { if(isPlaying) startAutoplay(); });

// keyboard support
document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowRight') { next(); if(isPlaying){ stopAutoplay(); setTimeout(startAutoplay, 1200); } }
    if(e.key === 'ArrowLeft') { prev(); if(isPlaying){ stopAutoplay(); setTimeout(startAutoplay, 1200); } }
    if(e.key === ' ' || e.key === 'Spacebar') { // space toggles play/pause
        e.preventDefault();
        togglePlayPause();
    }
});

// initialize first view
goToIndex(currentIndex);
startAutoplay();

// Service Worker Registration for PWA Functionality (kept)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('ServiceWorker registered successfully scope: ', reg.scope))
            .catch(err => console.log('ServiceWorker registration failed: ', err));
    });
}
