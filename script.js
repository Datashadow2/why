// ============================================
// GENERATE TEARS (Page 1)
// ============================================
function createTears() {
    const page1 = document.getElementById('page1');
    if (!page1) return;
    
    // Remove existing tears container if any
    const existingContainer = document.getElementById('tearsContainer');
    if (existingContainer) existingContainer.remove();
    
    const container = document.createElement('div');
    container.className = 'tears-container';
    container.id = 'tearsContainer';
    page1.prepend(container);
    
    const tearCount = window.innerWidth < 768 ? 15 : 30;
    
    for (let i = 0; i < tearCount; i++) {
        const tear = document.createElement('div');
        tear.className = 'tear-drop';
        const left = Math.random() * 100;
        const duration = 3 + Math.random() * 4;
        const delay = Math.random() * 6;
        tear.style.left = left + '%';
        tear.style.setProperty('--duration', duration + 's');
        tear.style.animationDelay = delay + 's';
        tear.style.height = (15 + Math.random() * 20) + 'px';
        container.appendChild(tear);
    }
}

// ============================================
// GENERATE FLYING HEARTS (Page 2)
// ============================================
function createFlyingHearts() {
    const page2 = document.getElementById('page2');
    if (!page2) return;
    
    // Remove existing flying hearts container
    const existingContainer = document.getElementById('flyingHearts');
    if (existingContainer) existingContainer.remove();
    
    const container = document.createElement('div');
    container.className = 'flying-hearts';
    container.id = 'flyingHearts';
    page2.prepend(container);
    
    const heartCount = window.innerWidth < 768 ? 12 : 25;
    const emojis = ['♥', '❤️', '💖', '💗', '💕', '💓', '❤️‍🔥', '💝', '💘'];
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'flying-heart';
        heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        const left = Math.random() * 100;
        const duration = 6 + Math.random() * 6;
        const delay = Math.random() * 8;
        
        // Random path variations for each heart
        const tx1 = (Math.random() - 0.5) * 400;
        const tx2 = (Math.random() - 0.5) * 400;
        const tx3 = (Math.random() - 0.5) * 400;
        const tx4 = (Math.random() - 0.5) * 400;
        const tx5 = (Math.random() - 0.5) * 400;
        const tx6 = (Math.random() - 0.5) * 400;
        
        heart.style.left = left + '%';
        heart.style.setProperty('--duration', duration + 's');
        heart.style.setProperty('--tx1', tx1 + 'px');
        heart.style.setProperty('--tx2', tx2 + 'px');
        heart.style.setProperty('--tx3', tx3 + 'px');
        heart.style.setProperty('--tx4', tx4 + 'px');
        heart.style.setProperty('--tx5', tx5 + 'px');
        heart.style.setProperty('--tx6', tx6 + 'px');
        heart.style.animationDelay = delay + 's';
        heart.style.fontSize = (1.2 + Math.random() * 2.5) + 'rem';
        
        container.appendChild(heart);
    }
}

// ============================================
// GENERATE FIREWORKS (Page 2)
// ============================================
function createFireworks() {
    const page2 = document.getElementById('page2');
    if (!page2) return;
    
    // Remove existing fireworks container
    const existingContainer = document.getElementById('fireworksContainer');
    if (existingContainer) existingContainer.remove();
    
    const container = document.createElement('div');
    container.className = 'fireworks-container';
    container.id = 'fireworksContainer';
    page2.prepend(container);
    
    const fireworkCount = window.innerWidth < 768 ? 3 : 6;
    const colors = ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#ff6bcb', '#ff9f43', '#a29bfe', '#fd79a8', '#00cec9'];
    
    for (let i = 0; i < fireworkCount; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        
        const x = 10 + Math.random() * 80;
        const y = 10 + Math.random() * 70;
        const duration = 2 + Math.random() * 3;
        const delay = Math.random() * 10;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const particleCount = 8 + Math.floor(Math.random() * 12);
        
        firework.style.left = x + '%';
        firework.style.top = y + '%';
        firework.style.setProperty('--duration', duration + 's');
        firework.style.animationDelay = delay + 's';
        
        // Create particles for each firework
        for (let j = 0; j < particleCount; j++) {
            const particle = document.createElement('div');
            particle.className = 'firework-particle';
            const angle = (j / particleCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
            const distance = 40 + Math.random() * 80;
            const px = Math.cos(angle) * distance;
            const py = Math.sin(angle) * distance;
            particle.style.setProperty('--px', px + 'px');
            particle.style.setProperty('--py', py + 'px');
            particle.style.setProperty('--duration', (0.8 + Math.random() * 0.8) + 's');
            particle.style.background = color;
            particle.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}`;
            particle.style.width = (2 + Math.random() * 4) + 'px';
            particle.style.height = (2 + Math.random() * 4) + 'px';
            particle.style.animationDelay = (Math.random() * 0.3) + 's';
            firework.appendChild(particle);
        }
        
        container.appendChild(firework);
    }
}

// ============================================
// GENERATE ASHES (Page 3)
// ============================================
function createAshes() {
    const page3 = document.getElementById('page3');
    if (!page3) return;
    
    // Remove existing ashes container
    const existingContainer = document.getElementById('ashesContainer');
    if (existingContainer) existingContainer.remove();
    
    const container = document.createElement('div');
    container.className = 'ashes-container';
    container.id = 'ashesContainer';
    page3.prepend(container);
    
    const ashCount = window.innerWidth < 768 ? 20 : 40;
    
    for (let i = 0; i < ashCount; i++) {
        const ash = document.createElement('div');
        ash.className = 'ash-particle';
        const left = Math.random() * 100;
        const duration = 4 + Math.random() * 5;
        const delay = Math.random() * 8;
        const size = 2 + Math.random() * 5;
        ash.style.left = left + '%';
        ash.style.setProperty('--duration', duration + 's');
        ash.style.animationDelay = delay + 's';
        ash.style.width = size + 'px';
        ash.style.height = size + 'px';
        container.appendChild(ash);
    }
}

// ============================================
// CREATE CRACKED HEART (Page 3)
// ============================================
function createCrackedHeart() {
    const page3 = document.getElementById('page3');
    if (!page3) return;
    
    const existingHeart = document.querySelector('#page3 .cracked-heart');
    if (existingHeart) return;
    
    const heart = document.createElement('div');
    heart.className = 'cracked-heart';
    heart.textContent = '💔';
    page3.prepend(heart);
}

// ============================================
// CREATE DEPRESSION OVERLAY (Page 3)
// ============================================
function createDepressionOverlay() {
    const page3 = document.getElementById('page3');
    if (!page3) return;
    
    const existingOverlay = document.querySelector('#page3 .depression-overlay');
    if (existingOverlay) return;
    
    const overlay = document.createElement('div');
    overlay.className = 'depression-overlay';
    page3.prepend(overlay);
}

// ============================================
// GENERATE FLAMES (Page 3)
// ============================================
function createFlames() {
    const page3 = document.getElementById('page3');
    if (!page3) return;
    
    const particlesPage = document.getElementById('hellParticlesPage');
    if (!particlesPage) return;
    
    // Add embers
    const emberCount = window.innerWidth < 768 ? 8 : 16;
    const colors = ['#ff4444', '#ff6644', '#ff5533', '#ff7744', '#ff3333', '#ff8855'];
    
    for (let i = 0; i < emberCount; i++) {
        const ember = document.createElement('div');
        ember.className = 'ember-page';
        const left = Math.random() * 100;
        const bottom = Math.random() * 30;
        const duration = 3 + Math.random() * 4;
        const delay = Math.random() * 5;
        const size = 4 + Math.random() * 8;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        ember.style.left = left + '%';
        ember.style.bottom = bottom + '%';
        ember.style.setProperty('--duration', duration + 's');
        ember.style.setProperty('--delay', delay + 's');
        ember.style.width = size + 'px';
        ember.style.height = size + 'px';
        ember.style.background = color;
        ember.style.color = color;
        ember.style.boxShadow = `0 0 20px ${color}`;
        
        particlesPage.appendChild(ember);
    }
}

// ============================================
// AUDIO PLAYER CONTROLS
// ============================================
function setupAudio() {
    const playBtn = document.getElementById('playBtn');
    if (!playBtn) return;
    
    // Create audio element if it doesn't exist
    let audio = document.getElementById('bgMusic');
    if (!audio) {
        audio = document.createElement('audio');
        audio.id = 'bgMusic';
        audio.loop = true;
        audio.innerHTML = `
            <source src="https://raw.githubusercontent.com/yourusername/yourrepo/main/audio.mp3" type="audio/mpeg">
        `;
        document.body.appendChild(audio);
    }
    
    let isPlaying = false;
    
    playBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        
        if (!isPlaying) {
            audio.play().then(() => {
                isPlaying = true;
                playBtn.textContent = '⏸ pause';
                playBtn.classList.add('playing');
            }).catch(err => {
                console.log('Audio play failed:', err);
                // Fallback: toggle visual state anyway
                isPlaying = !isPlaying;
                playBtn.textContent = isPlaying ? '⏸ pause' : '▶ play';
                if (isPlaying) {
                    playBtn.classList.add('playing');
                } else {
                    playBtn.classList.remove('playing');
                }
            });
        } else {
            audio.pause();
            isPlaying = false;
            playBtn.textContent = '▶ play';
            playBtn.classList.remove('playing');
        }
    });
    
    // Auto-play attempt (many browsers block this)
    document.addEventListener('click', function tryAutoPlay() {
        if (!isPlaying && !playBtn.classList.contains('playing')) {
            audio.play().then(() => {
                isPlaying = true;
                playBtn.textContent = '⏸ pause';
                playBtn.classList.add('playing');
            }).catch(() => {
                // Silently fail - user needs to click play
            });
        }
        document.removeEventListener('click', tryAutoPlay);
    }, { once: true });
}

// ============================================
// CONFESSION BOX FUNCTIONALITY
// ============================================
function setupConfession() {
    const textarea = document.getElementById('confessionInput');
    const sendBtn = document.getElementById('sendBtn');
    const statusMsg = document.getElementById('statusMsg');
    
    if (!textarea || !sendBtn || !statusMsg) return;
    
    sendBtn.addEventListener('click', function() {
        const text = textarea.value.trim();
        if (!text) {
            statusMsg.textContent = '💔 Please write something...';
            statusMsg.style.color = '#9a5a6a';
            return;
        }
        
        // Simulate sending
        statusMsg.textContent = '⏳ Sending your confession...';
        statusMsg.style.color = '#6a5a62';
        
        setTimeout(() => {
            statusMsg.textContent = '💔 Your confession has been buried in the ashes...';
            statusMsg.style.color = '#4a3a42';
            textarea.value = '';
            
            // Reset after 4 seconds
            setTimeout(() => {
                statusMsg.textContent = '';
            }, 4000);
        }, 1500);
    });
    
    // Enter key support
    textarea.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendBtn.click();
        }
    });
}

// ============================================
// INITIALIZE EVERYTHING
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    createTears();
    createFlyingHearts();
    createFireworks();
    createAshes();
    createCrackedHeart();
    createDepressionOverlay();
    createFlames();
    setupAudio();
    setupConfession();
    
    // Handle resize for responsive animations
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Regenerate hearts and fireworks on resize
            createFlyingHearts();
            createFireworks();
        }, 500);
    });
});
