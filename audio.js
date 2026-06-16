// ==================== LECTEUR SPOTIFY-LIKE ====================

const PLAYLIST = [
    { 
        name: "📖 Le Temps des Lumières", 
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", 
        artist: "SavoirsFR · Bibliothèque",
        image: "📚",
        bgColor: "#8B5CF6"
    },
    { 
        name: "🌿 Sous la canopée", 
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", 
        artist: "SavoirsFR · Nature",
        image: "🌳",
        bgColor: "#10B981"
    },
    { 
        name: "☕ L'Écho du café", 
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", 
        artist: "SavoirsFR · Ambiance",
        image: "☕",
        bgColor: "#F59E0B"
    },
    { 
        name: "🌙 Rêverie nocturne", 
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", 
        artist: "SavoirsFR · Nuit",
        image: "🌙",
        bgColor: "#6366F1"
    },
    { 
        name: "🎹 Les pages du passé", 
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", 
        artist: "SavoirsFR · Piano",
        image: "🎹",
        bgColor: "#EC4899"
    },
    { 
        name: "📜 L'Encre et le parchemin", 
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", 
        artist: "SavoirsFR · Classique",
        image: "📜",
        bgColor: "#F59E0B"
    },
    { 
        name: "🏛️ Les Voix de la bibliothèque", 
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", 
        artist: "SavoirsFR · Institution",
        image: "🏛️",
        bgColor: "#8B5CF6"
    },
    { 
        name: "🌊 L'Océan de savoir", 
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", 
        artist: "SavoirsFR · Évasion",
        image: "🌊",
        bgColor: "#3B82F6"
    },
    { 
        name: "🕯️ Les Illuminations", 
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3", 
        artist: "SavoirsFR · Lumières",
        image: "🕯️",
        bgColor: "#F59E0B"
    },
    { 
        name: "🌹 Le Jardin des muses", 
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3", 
        artist: "SavoirsFR · Poésie",
        image: "🌹",
        bgColor: "#EC4899"
    },
    { 
        name: "⏳ L'Horloge du temps", 
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", 
        artist: "SavoirsFR · Mémoire",
        image: "⏳",
        bgColor: "#8B5CF6"
    },
    { 
        name: "🌟 La Voie lactée des mots", 
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", 
        artist: "SavoirsFR · Cosmique",
        image: "🌟",
        bgColor: "#F59E0B"
    },
    { 
        name: "🍂 L'Automne des penseurs", 
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", 
        artist: "SavoirsFR · Saisons",
        image: "🍂",
        bgColor: "#F97316"
    },
    { 
        name: "🕊️ Le Vol du savoir", 
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", 
        artist: "SavoirsFR · Liberté",
        image: "🕊️",
        bgColor: "#3B82F6"
    },
    { 
        name: "✨ Étincelles de génie", 
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", 
        artist: "SavoirsFR · Inspiration",
        image: "✨",
        bgColor: "#F59E0B"
    }
];

let audio = null;
let currentTrack = 0;
let isPlaying = false;
let isShuffled = false;
let repeatMode = 0;
let isAudioInitialized = false;

function initAudio() {
    if (isAudioInitialized) return;
    isAudioInitialized = true;
    
    audio = new Audio();
    audio.volume = 0.3;
    audio.loop = false;

    // Gestion des erreurs audio
    audio.addEventListener('error', function(e) {
        console.error('Erreur audio:', e);
    });

    loadTrack(0);

    // Écouteurs mini-player
    const miniPlayBtn = document.getElementById('miniPlayBtn');
    if (miniPlayBtn) {
        miniPlayBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            togglePlayPause();
        });
    }

    const miniPlayer = document.getElementById('miniPlayer');
    if (miniPlayer) {
        miniPlayer.addEventListener('click', function(e) {
            if (e.target.closest('.controls')) return;
            document.getElementById('fullPlayer').classList.add('show');
            updateFullUI();
        });
    }

    // Écouteurs full-player
    const fullPlayBtn = document.getElementById('fullPlayBtn');
    if (fullPlayBtn) {
        fullPlayBtn.addEventListener('click', togglePlayPause);
    }
    
    const fullNextBtn = document.getElementById('fullNextBtn');
    if (fullNextBtn) {
        fullNextBtn.addEventListener('click', nextTrack);
    }
    
    const fullPrevBtn = document.getElementById('fullPrevBtn');
    if (fullPrevBtn) {
        fullPrevBtn.addEventListener('click', prevTrack);
    }
    
    const fullShuffleBtn = document.getElementById('fullShuffleBtn');
    if (fullShuffleBtn) {
        fullShuffleBtn.addEventListener('click', toggleShuffle);
    }
    
    const fullRepeatBtn = document.getElementById('fullRepeatBtn');
    if (fullRepeatBtn) {
        fullRepeatBtn.addEventListener('click', toggleRepeat);
    }
    
    const closeFullBtn = document.getElementById('closeFullBtn');
    if (closeFullBtn) {
        closeFullBtn.addEventListener('click', function() {
            document.getElementById('fullPlayer').classList.remove('show');
        });
    }

    const volumeSlider = document.getElementById('fullVolumeSlider');
    if (volumeSlider) {
        volumeSlider.addEventListener('input', function() {
            if (audio) audio.volume = this.value;
            localStorage.setItem('savoirs_volume', this.value);
        });
    }

    // Barre de progression full
    const progressBar = document.getElementById('fullProgressBar');
    if (progressBar) {
        progressBar.addEventListener('input', function() {
            if (audio.duration) {
                const seekTime = (this.value / 100) * audio.duration;
                audio.currentTime = seekTime;
            }
        });
    }

    // Mise à jour du temps
    audio.addEventListener('timeupdate', function() {
        if (audio.duration) {
            const progress = (audio.currentTime / audio.duration) * 100;
            const progressBar = document.getElementById('fullProgressBar');
            const currentTime = document.getElementById('fullCurrentTime');
            const totalTime = document.getElementById('fullTotalTime');
            if (progressBar) progressBar.value = progress;
            if (currentTime) currentTime.textContent = formatTime(audio.currentTime);
            if (totalTime) totalTime.textContent = formatTime(audio.duration);
        }
    });

    audio.addEventListener('ended', function() {
        if (repeatMode === 2) {
            audio.currentTime = 0;
            audio.play().catch(() => {});
        } else {
            nextTrack();
        }
    });

    // Restaurer le volume
    const savedVolume = localStorage.getItem('savoirs_volume');
    if (savedVolume !== null) {
        const volumeSlider = document.getElementById('fullVolumeSlider');
        if (volumeSlider) {
            volumeSlider.value = savedVolume;
        }
        if (audio) audio.volume = parseFloat(savedVolume);
    }

    // Remplir la playlist
    renderPlaylist();

    // Tentative de lecture automatique
    setTimeout(() => {
        if (audio) {
            audio.play().then(() => {
                isPlaying = true;
                updateAllButtons();
            }).catch(() => {
                isPlaying = false;
                updateAllButtons();
                showMiniPlayerHint();
            });
        }
    }, 800);
}

function showMiniPlayerHint() {
    const miniPlayer = document.getElementById('miniPlayer');
    if (miniPlayer) {
        const playBtn = document.getElementById('miniPlayBtn');
        if (playBtn) {
            playBtn.style.animation = 'pulse 2s infinite';
            setTimeout(() => {
                playBtn.style.animation = '';
            }, 5000);
        }
    }
}

function loadTrack(index) {
    const track = PLAYLIST[index];
    if (!track) return;
    if (audio) {
        audio.src = track.url;
        audio.currentTime = 0;
    }
    
    const miniTitle = document.getElementById('miniTitle');
    const miniArtist = document.getElementById('miniArtist');
    const miniCover = document.getElementById('miniCover');
    const bigTitle = document.getElementById('bigTitle');
    const bigArtist = document.getElementById('bigArtist');
    const bigCover = document.getElementById('bigCover');
    
    // Mettre à jour les informations textuelles
    if (miniTitle) miniTitle.textContent = track.name;
    if (miniArtist) miniArtist.textContent = track.artist;
    if (bigTitle) bigTitle.textContent = track.name;
    if (bigArtist) bigArtist.textContent = track.artist;
    
    // Mettre à jour les images avec le bon emoji et couleur
    const coverEmoji = track.image || track.name.charAt(0);
    const bgColor = track.bgColor || 'var(--accent-glow)';
    
    if (miniCover) {
        miniCover.textContent = coverEmoji;
        miniCover.style.background = bgColor;
        miniCover.style.color = '#FFFFFF';
        miniCover.style.display = 'flex';
        miniCover.style.alignItems = 'center';
        miniCover.style.justifyContent = 'center';
        miniCover.style.fontSize = '2rem';
    }
    
    if (bigCover) {
        bigCover.textContent = coverEmoji;
        bigCover.style.background = bgColor;
        bigCover.style.color = '#FFFFFF';
        bigCover.style.display = 'flex';
        bigCover.style.alignItems = 'center';
        bigCover.style.justifyContent = 'center';
        bigCover.style.fontSize = '5rem';
    }
    
    currentTrack = index;
    updatePlaylistHighlight();
}

function togglePlayPause() {
    if (!audio) return;
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        audio.play().catch(() => {});
        isPlaying = true;
    }
    updateAllButtons();
}

function nextTrack() {
    if (!audio) return;
    let next = (currentTrack + 1) % PLAYLIST.length;
    if (isShuffled) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * PLAYLIST.length);
        } while (randomIndex === currentTrack && PLAYLIST.length > 1);
        next = randomIndex;
    }
    loadTrack(next);
    if (isPlaying) {
        audio.play().catch(() => {});
    }
    updateAllButtons();
}

function prevTrack() {
    if (!audio) return;
    let prev = (currentTrack - 1 + PLAYLIST.length) % PLAYLIST.length;
    if (isShuffled) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * PLAYLIST.length);
        } while (randomIndex === currentTrack && PLAYLIST.length > 1);
        prev = randomIndex;
    }
    loadTrack(prev);
    if (isPlaying) {
        audio.play().catch(() => {});
    }
    updateAllButtons();
}

function toggleShuffle() {
    isShuffled = !isShuffled;
    const shuffleBtn = document.getElementById('fullShuffleBtn');
    if (shuffleBtn) {
        shuffleBtn.classList.toggle('active', isShuffled);
    }
}

function toggleRepeat() {
    repeatMode = (repeatMode + 1) % 3;
    const btn = document.getElementById('fullRepeatBtn');
    if (btn) {
        if (repeatMode === 0) {
            btn.classList.remove('active', 'one');
        } else if (repeatMode === 1) {
            btn.classList.add('active');
            btn.classList.remove('one');
        } else {
            btn.classList.add('active', 'one');
        }
    }
}

function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return mins + ':' + (secs < 10 ? '0' : '') + secs;
}

function updateAllButtons() {
    const miniBtn = document.getElementById('miniPlayBtn');
    const fullBtn = document.getElementById('fullPlayBtn');
    
    if (isPlaying) {
        if (miniBtn) {
            miniBtn.innerHTML = '<i class="fas fa-pause"></i>';
            miniBtn.classList.add('playing');
        }
        if (fullBtn) {
            fullBtn.innerHTML = '<i class="fas fa-pause"></i>';
            fullBtn.classList.add('playing');
        }
    } else {
        if (miniBtn) {
            miniBtn.innerHTML = '<i class="fas fa-play"></i>';
            miniBtn.classList.remove('playing');
        }
        if (fullBtn) {
            fullBtn.innerHTML = '<i class="fas fa-play"></i>';
            fullBtn.classList.remove('playing');
        }
    }
}

function updateFullUI() {
    const progressBar = document.getElementById('fullProgressBar');
    const currentTime = document.getElementById('fullCurrentTime');
    const totalTime = document.getElementById('fullTotalTime');
    if (progressBar) progressBar.value = 0;
    if (currentTime) currentTime.textContent = '0:00';
    if (totalTime) totalTime.textContent = '0:00';
    if (audio && audio.duration) {
        if (totalTime) totalTime.textContent = formatTime(audio.duration);
    }
}

function renderPlaylist() {
    const container = document.getElementById('playlistContainer');
    if (!container) return;
    container.innerHTML = '';
    PLAYLIST.forEach((track, idx) => {
        const item = document.createElement('div');
        item.className = 'playlist-item' + (idx === currentTrack ? ' active' : '');
        const bgColor = track.bgColor || 'var(--accent-glow)';
        item.innerHTML = `
            <span class="p-emoji" style="
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 36px;
                height: 36px;
                border-radius: 8px;
                background: ${bgColor};
                color: #FFFFFF;
                font-size: 1.2rem;
                flex-shrink: 0;
            ">${track.image || track.name.charAt(0)}</span>
            <span class="p-name">${track.name}</span>
            <span class="p-artist">${track.artist}</span>
        `;
        item.onclick = function() {
            loadTrack(idx);
            if (isPlaying) {
                audio.play().catch(() => {});
            }
            updateAllButtons();
        };
        container.appendChild(item);
    });
}

function updatePlaylistHighlight() {
    document.querySelectorAll('.playlist-item').forEach((el, idx) => {
        el.classList.toggle('active', idx === currentTrack);
    });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        initAudio();
    }, 500);
});