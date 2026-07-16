(function() {
    // ========== AUDIO ==========
    // Create audio element for your uploaded file
    const audio = new Audio();
    
    // !!! UPDATE THIS PATH TO MATCH YOUR AUDIO FILE LOCATION !!!
    // If audio is in the same folder as index.html:
    audio.src = 'Olivia Rodrigo - traitor (Official Video).mp3';
    // If audio is in an "audio" folder:
    // audio.src = 'audio/formidable.mp3';
    
    let isPlaying = false;
    let isDragging = false;

    // DOM elements
    const playBtn = document.getElementById('playBtn');
    
    // Create audio controls container
    const audioControls = document.createElement('div');
    audioControls.className = 'audio-controls-enhanced';
    
    // Progress bar
    const progressBar = document.createElement('input');
    progressBar.type = 'range';
    progressBar.min = 0;
    progressBar.max = 100;
    progressBar.value = 0;
    progressBar.setAttribute('aria-label', 'Audio progress');
    
    // Time display
    const timeDisplay = document.createElement('span');
    timeDisplay.className = 'time-display';
    timeDisplay.textContent = '0:00 / 0:00';
    
    // Assemble controls - keep the original play button
    audioControls.appendChild(playBtn);
    audioControls.appendChild(progressBar);
    audioControls.appendChild(timeDisplay);
    
    // Insert controls after the original play button's parent
    const originalParent = playBtn.parentNode;
    originalParent.insertBefore(audioControls, playBtn);
    audioControls.prepend(playBtn); // Move the play button to the start
    
    // Update play button styling
    playBtn.style.margin = '0';
    playBtn.style.minWidth = '100px';
    
    // ========== AUDIO EVENT LISTENERS ==========
    
    // Update progress bar
    audio.addEventListener('timeupdate', function() {
        if (!isDragging && audio.duration) {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressBar.value = progress;
            updateTimeDisplay();
        }
    });
    
    // Update time display
    function updateTimeDisplay() {
        const current = formatTime(audio.currentTime);
        const total = formatTime(audio.duration);
        timeDisplay.textContent = `${current} / ${total}`;
    }
    
    function formatTime(seconds) {
        if (!seconds || isNaN(seconds) || !isFinite(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    
    // Seek functionality
    progressBar.addEventListener('input', function() {
        isDragging = true;
        if (audio.duration) {
            const seekTime = (this.value / 100) * audio.duration;
            audio.currentTime = seekTime;
            updateTimeDisplay();
        }
    });
    
    progressBar.addEventListener('change', function() {
        isDragging = false;
    });
    
    // Audio ended event
    audio.addEventListener('ended', function() {
        isPlaying = false;
        playBtn.textContent = '▶ play';
        playBtn.style.opacity = '1';
        progressBar.value = 0;
        timeDisplay.textContent = '0:00 / 0:00';
    });
    
    // Audio loaded metadata
    audio.addEventListener('loadedmetadata', function() {
        updateTimeDisplay();
    });
    
    // Handle errors
    audio.addEventListener('error', function(e) {
        console.error('Audio loading error:', e);
        playBtn.textContent = '⚠️ error';
        playBtn.style.opacity = '0.5';
    });
    
    // ========== TOGGLE AUDIO ==========
    function toggleAudio() {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
            playBtn.textContent = '▶ play';
            playBtn.style.opacity = '1';
        } else {
            audio.play()
                .then(() => {
                    isPlaying = true;
                    playBtn.textContent = '⏸ playing';
                    playBtn.style.opacity = '0.7';
                })
                .catch(error => {
                    console.error('Playback failed:', error);
                    alert('Unable to play audio. Please try again.');
                });
        }
    }

    // Event listener for play button
    playBtn.addEventListener('click', toggleAudio);

    // Optional: Keyboard shortcut (Spacebar)
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space' && !e.target.matches('input, textarea')) {
            e.preventDefault();
            toggleAudio();
        }
    });

    // ========== MASTERFUL HEARTS (Page 2) ==========
    function createMasterHearts() {
        const container = document.getElementById('heartsPage');
        const emojis = ['❤️', '💖', '💗', '💘', '💝', '❤️‍🔥', '💕', '✨', '🌸', '🩷', '💓'];
        for (let i = 0; i < 60; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart-float';
            heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.fontSize = (1.2 + Math.random() * 3) + 'rem';
            heart.style.animationDuration = (10 + Math.random() * 18) + 's';
            heart.style.animationDelay = (Math.random() * 20) + 's';
            heart.style.color = ['#ff4d6d', '#ff6b8a', '#ff8a9e', '#d45a7a', '#ff2d55'][Math.floor(Math.random() * 5)];
            container.appendChild(heart);
        }
    }
    createMasterHearts();

    // ========== MASTERFUL FLAMES (Page 3) ==========
    function createMasterFlames() {
        const container = document.getElementById('hellParticlesPage');
        const colors = ['#5a2a3a', '#4a1a2a', '#6a3a4a', '#3d1a28', '#4d2a3a', '#2a1020', '#7a3a4a'];
        for (let i = 0; i < 100; i++) {
            const ember = document.createElement('div');
            ember.className = 'ember-page';
            const size = 3 + Math.random() * 12;
            ember.style.width = size + 'px';
            ember.style.height = size + 'px';
            ember.style.left = Math.random() * 100 + '%';
            ember.style.top = Math.random() * 100 + '%';
            ember.style.setProperty('--duration', (2.5 + Math.random() * 5) + 's');
            ember.style.setProperty('--delay', (Math.random() * 6) + 's');
            ember.style.color = colors[Math.floor(Math.random() * colors.length)];
            ember.style.background = 'currentColor';
            ember.style.boxShadow = '0 0 15px currentColor, 0 0 40px currentColor';
            container.appendChild(ember);
        }

        const flameEmojis = ['🔥', '🌋', '💀', '👹', '😈', '⚡', '🔥', '🔥', '👿'];
        for (let i = 0; i < 20; i++) {
            const flame = document.createElement('div');
            flame.className = 'flame-page';
            flame.textContent = flameEmojis[Math.floor(Math.random() * flameEmojis.length)];
            flame.style.left = (5 + Math.random() * 90) + '%';
            flame.style.top = (5 + Math.random() * 90) + '%';
            flame.style.setProperty('--flame-duration', (1.5 + Math.random() * 2.5) + 's');
            flame.style.fontSize = (3 + Math.random() * 6) + 'rem';
            const darkColors = ['#5a2a3a', '#4a1a2a', '#6a3a4a', '#3d1a28', '#4d2a3a', '#7a3a4a'];
            flame.style.color = darkColors[Math.floor(Math.random() * darkColors.length)];
            flame.style.animationDelay = (Math.random() * 4) + 's';
            container.appendChild(flame);
        }
    }
    createMasterFlames();

    // ========== CONFESSION SENDER ==========
    const WEBHOOK_URL = ''; // <-- PUT YOUR WEBHOOK URL HERE

    document.getElementById('sendBtn').addEventListener('click', function() {
        const input = document.getElementById('confessionInput');
        const message = input.value.trim();
        const statusMsg = document.getElementById('statusMsg');

        if (!message) {
            statusMsg.textContent = '⚠️ please write something...';
            statusMsg.style.color = '#6a4a52';
            return;
        }

        statusMsg.textContent = '📤 sending...';
        statusMsg.style.color = '#6a5a62';

        const data = {
            text: message,
            timestamp: new Date().toISOString(),
            source: 'formidable_website'
        };

        if (WEBHOOK_URL) {
            fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
            .then(response => {
                if (response.ok) {
                    statusMsg.textContent = '✅ sent. the truth is out.';
                    statusMsg.style.color = '#5a7a5a';
                    input.value = '';
                } else {
                    statusMsg.textContent = '❌ error sending. try again.';
                    statusMsg.style.color = '#6a4a52';
                }
            })
            .catch(err => {
                console.error('Send error:', err);
                statusMsg.textContent = '❌ connection error. check console.';
                statusMsg.style.color = '#6a4a52';
            });
        } else {
            console.log('💔 CONFESSION:', message);
            statusMsg.textContent = '✅ sent (demo). check console.';
            statusMsg.style.color = '#5a7a5a';
            input.value = '';
            alert('💔 Your confession has been sent.\n\n"' + message + '"');
        }
    });

    // ========== OBSERVER FOR PAGE 3 ==========
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.target.id === 'page3' && entry.isIntersecting) {
                document.querySelectorAll('.flame-page').forEach(el => {
                    el.style.animationDuration = (0.8 + Math.random() * 1.2) + 's';
                });
            }
        });
    }, { threshold: 0.3 });

    observer.observe(document.getElementById('page3'));

    // ========== PAGE TRANSITION EFFECTS (Optional enhancement) ==========
    // Pages already have CSS animations, but we can add a small extra effect
    // when scrolling to a new page
    const pages = document.querySelectorAll('.page');
    const pageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a subtle pulse effect when page becomes visible
                entry.target.style.animation = 'none';
                // Trigger reflow
                void entry.target.offsetHeight;
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }, { threshold: 0.2 });

    pages.forEach(page => {
        pageObserver.observe(page);
    });

    console.log('❤️ formidable · page transitions + audio controls');
    console.log('🎵 Audio: progress bar, timer, seek functionality');
    console.log('⌨️ Keyboard shortcut: Spacebar to play/pause');
    console.log('📝 Set WEBHOOK_URL to receive confessions.');
})();
