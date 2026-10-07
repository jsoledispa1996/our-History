// ============================================
// FUNCIONES ROMÁNTICAS
// ============================================

// Generar fondo animado de fotos en forma de mosaico organizado
function generateHeartBackground(container) {
    if (!container) {
        container = document.getElementById('heartBackground');
    }
    
    if (!container) return;
    
    // Lista de todas las imágenes disponibles
    const images = [
        'mayo/mayo_1.jpg', 'mayo/mayo_2.jpg', 'mayo/mayo_3.jpg', 'mayo/mayo_4.jpg',
        'junio/junio_1.jpg', 'agosto/agosto_1.jpg', 'agosto/agosto_2.jpg', 'agosto/agosto_3.jpg', 
        'agosto/agosto_4.jpg', 'agosto/agosto_5.jpg', 'agosto/agosto_6.jpg', 'agosto/agosto_7.jpg',
        'agosto/agosto_8.jpg', 'septiembre/septiembre_1.jpg', 'septiembre/septiembre_2.jpg', 'septiembre/septiembre_3.jpg',
        'septiembre/septiembre_4.jpg', 'septiembre/septiembre_5.jpg', 'septiembre/septiembre_6.jpg', 'septiembre/septiembre_7.jpg',
        'septiembre/septiembre_8.jpg', 'septiembre/septiembre_9.jpg', 'mayo/mayo_5.jpg',
        'mayo/mayo_6.jpg', 'mayo/mayo_7.jpg'
    ];
    
    // DESIGN 2: MARCOS POLAROID FLOTANTES - Estilo vintage con marco blanco grande
    const positions = [
        // Lado izquierdo
        { x: 5, y: 8, size: 85, rotation: -8, label: true },
        { x: 8, y: 28, size: 90, rotation: 12, label: true },
        { x: 3, y: 48, size: 88, rotation: -6, label: true },
        { x: 9, y: 68, size: 85, rotation: 10, label: true },
        
        // Centro superior
        { x: 30, y: 5, size: 80, rotation: -10, label: true },
        { x: 50, y: 2, size: 75, rotation: 8, label: true },
        { x: 70, y: 6, size: 82, rotation: -7, label: true },
        
        // Centro inferior
        { x: 28, y: 78, size: 78, rotation: 9, label: true },
        { x: 50, y: 82, size: 76, rotation: -11, label: true },
        { x: 72, y: 80, size: 79, rotation: 6, label: true },
        
        // Lado derecho
        { x: 91, y: 8, size: 85, rotation: 8, label: true },
        { x: 88, y: 28, size: 90, rotation: -12, label: true },
        { x: 95, y: 48, size: 88, rotation: 6, label: true },
        { x: 89, y: 68, size: 85, rotation: -10, label: true },
        
        // Esparcidas
        { x: 18, y: 35, size: 70, rotation: 5, label: false },
        { x: 20, y: 60, size: 72, rotation: -8, label: false },
        { x: 78, y: 38, size: 71, rotation: 7, label: false },
        { x: 80, y: 62, size: 73, rotation: -6, label: false }
    ];
    
    // Crear fotos en posiciones definidas
    positions.forEach((pos, index) => {
        // Marco polaroid
        const frame = document.createElement('div');
        frame.className = 'polaroid-frame';
        frame.style.left = pos.x + '%';
        frame.style.top = pos.y + '%';
        frame.style.width = (pos.size + 18) + 'px';
        frame.style.height = (pos.size + 28) + 'px';
        frame.style.transform = `translate(-50%, -50%) rotate(${pos.rotation}deg)`;
        frame.style.animationDelay = (index * 0.05) + 's';
        
        // Foto dentro del marco
        const photo = document.createElement('img');
        photo.className = 'polaroid-photo';
        photo.src = `images/${images[index % images.length]}`;
        photo.alt = `Foto ${index + 1}`;
        photo.style.width = pos.size + 'px';
        photo.style.height = pos.size + 'px';
        
        // Texto (etiqueta) si es un polaroid grande
        if (pos.label) {
            const label = document.createElement('div');
            label.className = 'polaroid-label';
            label.textContent = '💕';
            frame.appendChild(label);
        }
        
        frame.appendChild(photo);
        container.appendChild(frame);
    });
}

// Generar pétalos cayendo
function generatePetals() {
    const petalsContainer = document.getElementById('petalsContainer');
    const petals = ['🌹', '🌷', '🌸', '💕', '🎀'];
    
    setInterval(() => {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.textContent = petals[Math.floor(Math.random() * petals.length)];
        
        const randomLeft = Math.random() * window.innerWidth;
        const randomDuration = 6 + Math.random() * 4;
        
        petal.style.left = randomLeft + 'px';
        petal.style.animationDuration = randomDuration + 's';
        petal.style.animationDelay = (Math.random() * 2) + 's';
        
        petalsContainer.appendChild(petal);
        
        setTimeout(() => petal.remove(), randomDuration * 1000 + 2000);
    }, 500);
}

// Generar luciérnagas
function generateFireflies() {
    const firefliesContainer = document.getElementById('firefliesContainer');
    
    // Crear 10 luciérnagas
    for (let i = 0; i < 10; i++) {
        const firefly = document.createElement('div');
        firefly.className = 'firefly';
        firefliesContainer.appendChild(firefly);
    }
    
    // Animar movimiento
    setInterval(() => {
        const fireflies = document.querySelectorAll('.firefly');
        fireflies.forEach(firefly => {
            const randomTop = Math.random() * (window.innerHeight - 20);
            const randomLeft = Math.random() * (window.innerWidth - 20);
            const randomDuration = 4 + Math.random() * 4;
            
            firefly.style.top = randomTop + 'px';
            firefly.style.left = randomLeft + 'px';
            firefly.style.animationDuration = randomDuration + 's';
        });
    }, 5000);
}

// ============================================
// 100 RAZONES POR LAS QUE TE AMO
// ============================================
const razones = [
    '🌟 Tu sonrisa brilla más que las estrellas',
    '💫 Haces que cada día sea especial',
    '🎵 Tu risa es mi música favorita',
    '🌹 Eres hermosa dentro y fuera',
    '💪 Tu fuerza me inspira',
    '🎨 Pintas mi vida de colores',
    '🔥 Me enciendes el corazón',
    '🌊 Eres mi calma en la tormenta',
    '🌙 Eres lo primero en mis pensamientos',
    '☀️ Eres mi luz en la oscuridad',
    '❤️ Te quiero más cada día',
    '🎯 Eres mi propósito',
    '🏆 Eres mi mejor logro',
    '🎁 Eres mi regalo del cielo',
    '🌺 Tu belleza es natural',
    '💎 Vales más que las joyas',
    '🦋 Tienes gracia en cada movimiento',
    '🎪 Haces la vida emocionante',
    '🌈 Eres mi arco iris',
    '🍀 Eres mi buena suerte',
    '🎭 Tus expresiones son encantadoras',
    '🎸 Tocas las cuerdas de mi alma',
    '🌻 Iluminas mi camino',
    '💝 Tu amor es mi tesoro',
    '🚀 Me llevas a nuevas alturas',
    '🏖️ Eres mi destino favorito',
    '📖 Eres mi historia favorita',
    '🎬 Cada momento contigo es un film',
    '🍫 Eres más dulce que el chocolate',
    '🌸 Tu perfume es adictivo',
    '✨ Brillas como diamante',
    '🎊 Eres mi celebración diaria',
    '🌍 Eres mi mundo',
    '💖 Te amo con todo mi ser',
    '🎀 Eres mi fantasía hecha realidad',
    '🏅 Eres mi campeona',
    '🌊 Tu amor es un océano infinito',
    '🎨 Eres mi obra maestra',
    '🔮 Tienes un brillo mágico',
    '💕 Mi corazón late por ti',
    '🎪 La vida contigo es un circo feliz',
    '🌙 Eres más bella que la luna',
    '⭐ Eres una estrella fugaz',
    '🎁 Cada beso es un regalo',
    '🦅 VuelasNegro alto y libre conmigo',
    '🌺 Tu elegancia es cautivadora',
    '💎 Eres mi joya más preciosa',
    '🎵 Cantaría mil canciones para ti',
    '🏰 Eres mi castillo de cuento',
    '🌹 Eres la reina de mi corazón',
    '🎯 Atrapaste mi corazón para siempre',
    '🎊 Cada día con tú es celebración',
    '📸 Quiero fotografiar cada momento',
    '🌊 Te seguiría hasta el fin del mundo',
    '💝 Eres mi razón de sonreír',
    '🎭 Tu personalidad es magnética',
    '🌟 Eres mi estrella guía',
    '🍀 Eres mi buena suerte permanente',
    '🎀 Tu feminidad es hipnotizante',
    '💫 Eres mi sueño realizado',
    '🌺 Tu compañía es terapia',
    '🎸 Tocas mi corazón a diario',
    '🏆 Eres mi victoria',
    '🌈 Tu amor es colorido',
    '🔥 Me derrites el alma',
    '🌙 Eres mi luna en las noches oscuras',
    '⚡ Eres mi energía',
    '🌻 Tu presencia es sanadora',
    '💕 Te amo sin condiciones',
    '🎊 Eres mi fiesta favorita',
    '🦋 Vuelas en mis sueños',
    '🌸 Tu dulzura es infinita',
    '💎 Eres irremplazable',
    '🎁 Eres mi sorpresa diaria',
    '🌊 Naufrago en tus ojos',
    '🎨 Pintaste mi destino',
    '🔮 Tu magia me cautiva',
    '🌹 Eres mi amor eterno',
    '💝 Mi vida es mejor contigo',
    '🎯 Eres mi objetivo final',
    '🌟 Tu brillo nunca se apaga',
    '🎊 Celebro amarte cada segundo',
    '🏅 Eres mi primer lugar',
    '🎭 Tu esencia es bella',
    '🌺 Eres mi paraíso',
    '💫 Eres mi deseo más grande',
    '🦅 Volaría contigo al infinito',
    '🎵 Eres mi melodía',
    '❤️ Te amo infinitamente',
    '💕 Eres mi destino y mi libertad',
    '🌸 Tu amor me hace completo',
    '🔥 Me abrasas con tu pasión',
    '✨ Eres magia pura en mi vida',
    '🎀 Cada detalle tuyo me enamora',
    '🌊 Tu amor es profundo e infinito',
    '💎 Eres la joya que nunca podré perder',
    '🎭 Tu amor es la mejor obra de arte',
    '🌙 Bajo tus ojos descubrí el amor',
    '⭐ Eres mi constelación favorita',
    '❣️ Por siempre será tuyo mi corazón',
];

function generateRazones() {
    const razoneGrid = document.getElementById('razones-grid');
    if (!razoneGrid) return;
    
    razones.forEach((razon, index) => {
        const card = document.createElement('div');
        card.className = 'razon-card';
        card.style.animationDelay = (index * 0.05) + 's';
        
        card.innerHTML = `
            <div class="razon-numero">#${index + 1}</div>
            <div class="razon-texto">${razon}</div>
        `;
        
        card.addEventListener('click', () => {
            card.style.transform = 'scale(1.1)';
            triggerConfetti();
            setTimeout(() => {
                card.style.transform = '';
            }, 300);
        });
        
        razoneGrid.appendChild(card);
    });
}

// ============================================
// 100 RAZONES - CARRUSEL PROFESIONAL
// ============================================
let razonActual = 1;

function generateRazones() {
    mostrarRazon(1);
}

function mostrarRazon(numero) {
    razonActual = Math.max(1, Math.min(numero, razones.length));
    
    // Actualizar display
    const razonDiv = document.getElementById('razonActual');
    if (razonDiv) {
        razonDiv.textContent = razones[razonActual - 1];
        razonDiv.style.animation = 'none';
        setTimeout(() => {
            razonDiv.style.animation = 'fadeIn 0.5s ease';
        }, 10);
    }
    
    // Actualizar número
    const numeroDiv = document.getElementById('razonNumero');
    if (numeroDiv) {
        numeroDiv.textContent = razonActual;
    }
    
    // Actualizar slider
    const slider = document.getElementById('razonSlider');
    if (slider) {
        slider.value = razonActual;
    }
    
    // Actualizar barra de progreso
    const progreso = document.getElementById('progresoBar');
    if (progreso) {
        const porcentaje = (razonActual / razones.length) * 100;
        progreso.style.width = porcentaje + '%';
    }
}

function razonesNext() {
    mostrarRazon(razonActual + 1);
    triggerConfetti();
}

function razonesPrev() {
    mostrarRazon(razonActual - 1);
    triggerConfetti();
}

function razonesIr(numero) {
    mostrarRazon(parseInt(numero));
}

// ============================================
// CARTAS SECRETAS
// ============================================
const secretLetters = [
    {
        title: 'Mi primer pensamiento',
        content: 'Cada mañana, lo primero en mi mente eres tú. Mi corazón se acelera al pensar en tu sonrisa. Te amo más de lo que las palabras pueden expresar. Eres mi sueño hecho realidad, mi amor eterno, mi razón de vivir. 💕'
    },
    {
        title: 'Tu belleza me hipnotiza',
        content: 'No necesitas maquillaje para brillar. Tu belleza natural es lo más cautivador que he visto. Cada gesto, cada movimiento, cada mirada me enamorada más de ti. Eres perfecta tal como eres. 🌹'
    },
    {
        title: 'Nuestro futuro juntos',
        content: 'Veo un futuro hermoso contigo. Lleno de risas, viajes, abrazos y amor infinito. Quiero despertar cada día a tu lado. Quiero ser tu persona favorita, tu refugio, tu hogar. Te prometo amarte siempre. 💑'
    },
    {
        title: 'Notas en la madrugada',
        content: 'A las 3 am, pienso en ti. En cómo me haces sentir. En la suerte que tengo de tenerte. Tu ausencia deja un vacío que solo tu presencia puede llenar. Te necesito, te quiero, te amo. 🌙'
    },
    {
        title: 'Mi secreto más profundo',
        content: 'No le he dicho a nadie esto, pero contigo... eres mi paz. En medio del caos, tu mano en la mía es lo único que necesito. Eres mi hogar, mi verdad, mi todo. Gracias por existir. 💫'
    },
    {
        title: 'Cuando te veo...',
        content: 'Cuando entras a la habitación, todo se ilumina. Mi corazón late diferente. El tiempo se detiene. Solo existes tú y yo en ese momento perfecto. Eres la razón de mi felicidad. 🌟'
    }
];

function unlockLetters() {
    const password = document.getElementById('letterPassword').value;
    // La contraseña es la fecha del aniversario: 08052026 o variantes
    const validPasswords = ['08052026', '08-05-2026', '0805', '8mayo', '8 mayo'];
    
    if (validPasswords.some(p => p.toLowerCase() === password.toLowerCase())) {
        const lettersContainer = document.getElementById('letters-container');
        lettersContainer.style.display = 'grid';
        
        secretLetters.forEach((letter, index) => {
            const card = document.createElement('div');
            card.className = 'letter-card';
            card.style.animationDelay = (index * 0.1) + 's';
            
            card.innerHTML = `
                <div class="letter-title">${letter.title}</div>
                <div class="letter-content">${letter.content}</div>
            `;
            
            lettersContainer.appendChild(card);
        });
        
        triggerConfetti();
        alert('¡Cartas desbloqueadas! 💌');
    } else {
        alert('Contraseña incorrecta. Pista: La fecha de nuestro primer día juntos.');
    }
}

// ============================================
// CONFETI
// ============================================
function triggerConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    
    canvas.style.display = 'block';
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confetti = [];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
            opacity: Math.random() * 0.5 + 0.5,
            vx: Math.random() * 4 - 2,
            vy: Math.random() * 5 + 2,
            rotation: Math.random() * 360,
            colors: ['#ff1654', '#ff6b9d', '#ffd89b', '#667eea', '#764ba2']
        });
    }
    
    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confetti.forEach((c, i) => {
            c.y += c.vy;
            c.x += c.vx;
            c.rotation += 5;
            c.opacity -= 0.01;
            
            ctx.save();
            ctx.globalAlpha = c.opacity;
            ctx.fillStyle = c.colors[Math.floor(Math.random() * c.colors.length)];
            ctx.translate(c.x, c.y);
            ctx.rotate(c.rotation * Math.PI / 180);
            ctx.fillRect(-c.width / 2, -c.height / 2, c.width, c.height);
            ctx.restore();
            
            if (c.opacity <= 0) {
                confetti.splice(i, 1);
            }
        });
        
        if (confetti.length > 0) {
            requestAnimationFrame(animateConfetti);
        } else {
            canvas.style.display = 'none';
        }
    }
    
    animateConfetti();
}

// ============================================

const mediaConfig = {
    mayo: {
        images: 7,
        videos: [
            'videos/mayo/mayo_8.mp4',
            'videos/mayo/mayo_9.mp4'
        ]
    },
    junio: {
        images: 1,
        videos: ['videos/junio/junio_2.mp4']
    },
    agosto: {
        images: 16,
        videos: ['videos/agosto/agosto_17.mp4']
    },
    septiembre: {
        images: 16,
        videos: [
            'videos/septiembre/septiembre_17.mp4',
            'videos/septiembre/septiembre_18.mp4',
            'videos/septiembre/septiembre_19.mp4',
            'videos/septiembre/septiembre_20.mp4'
        ]
    },
    octubre: {
        images: 1,
        videos: []
    }
};

// Calcular días juntos
function calculateDays() {
    const startDate = new Date(2026, 4, 8); // Mayo 8, 2026
    const today = new Date();
    
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
}

// Calcular meses y semanas dinámicamente
function calculateTimeStats() {
    const startDate = new Date(2026, 4, 8); // Mayo 8, 2026
    const today = new Date();
    
    // Días
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Semanas
    const diffWeeks = Math.floor(diffDays / 7);
    
    // Meses (aproximado)
    let months = (today.getFullYear() - startDate.getFullYear()) * 12;
    months += (today.getMonth() - startDate.getMonth());
    if (today.getDate() < startDate.getDate()) {
        months--;
    }
    
    return {
        days: diffDays,
        weeks: diffWeeks,
        months: months,
        daysInMonth: diffDays % 30
    };
}

// Mostrar pantalla de carga con ramo de flores
function initSplashScreen() {
    const days = calculateDays();
    const splashDays = document.getElementById('splashDays');
    
    if (splashDays) {
        splashDays.textContent = days;
    }
    
    // La pantalla de carga desaparece automáticamente después de 4.5 segundos
    // gracias a la animación CSS (fadeOutScreen)
}

// Generar corazones flotantes
function generateFloatingHearts() {
    const container = document.getElementById('hearts');
    if (!container) return;

    const hearts = ['💕', '❤️', '💖', '💗', '💝'];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            
            const randomDelay = Math.random() * 5;
            const randomLeft = Math.random() * window.innerWidth;
            const randomDuration = 4 + Math.random() * 4;
            
            heart.style.left = randomLeft + 'px';
            heart.style.bottom = '-50px';
            heart.style.animationDelay = randomDelay + 's';
            heart.style.animationDuration = randomDuration + 's';
            
            container.appendChild(heart);
            
            setTimeout(() => heart.remove(), (randomDelay + randomDuration) * 1000);
        }, i * 500);
    }
}

// Inicializar contadores CON TIEMPO REAL
function initCounters() {
    const stats = calculateTimeStats();
    
    const daysElement = document.getElementById('days');
    const weeksElement = document.getElementById('weeks');
    const monthsElement = document.getElementById('months');
    const footerDate = document.getElementById('footer-date');
    
    if (daysElement) daysElement.textContent = stats.days;
    if (weeksElement) weeksElement.textContent = stats.weeks;
    if (monthsElement) monthsElement.textContent = stats.months;
    
    if (footerDate) {
        footerDate.textContent = `${stats.months} meses, ${stats.weeks % 4} semanas y ${stats.days % 7} días de amor ❤️`;
    }
}

// Cargar imágenes de la galería
function loadGalleries() {
    // Lista de todas las imágenes disponibles para selección aleatoria
    const allImages = [
        'mayo/mayo_1.jpg', 'mayo/mayo_2.jpg', 'mayo/mayo_3.jpg', 'mayo/mayo_4.jpg',
        'mayo/mayo_5.jpg', 'mayo/mayo_6.jpg', 'mayo/mayo_7.jpg',
        'junio/junio_1.jpg', 
        'agosto/agosto_1.jpg', 'agosto/agosto_2.jpg', 'agosto/agosto_3.jpg', 
        'agosto/agosto_4.jpg', 'agosto/agosto_5.jpg', 'agosto/agosto_6.jpg', 'agosto/agosto_7.jpg',
        'agosto/agosto_8.jpg', 'agosto/agosto_9.jpg', 'agosto/agosto_10.jpg', 'agosto/agosto_11.jpg',
        'agosto/agosto_12.jpg', 'agosto/agosto_13.jpg', 'agosto/agosto_14.jpg', 'agosto/agosto_15.jpg',
        'agosto/agosto_16.jpg',
        'septiembre/septiembre_1.jpg', 'septiembre/septiembre_2.jpg', 'septiembre/septiembre_3.jpg',
        'septiembre/septiembre_4.jpg', 'septiembre/septiembre_5.jpg', 'septiembre/septiembre_6.jpg', 'septiembre/septiembre_7.jpg',
        'septiembre/septiembre_8.jpg', 'septiembre/septiembre_9.jpg', 'septiembre/septiembre_10.jpg', 'septiembre/septiembre_11.jpg',
        'septiembre/septiembre_12.jpg', 'septiembre/septiembre_13.jpg', 'septiembre/septiembre_14.jpg', 'septiembre/septiembre_15.jpg',
        'septiembre/septiembre_16.jpg'
    ];
    
    Object.keys(mediaConfig).forEach(month => {
        const container = document.getElementById(`${month}-gallery`);
        if (!container) return;
        
        const imageCount = mediaConfig[month].images;
        
        for (let i = 1; i <= imageCount; i++) {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            
            const img = document.createElement('img');
            
            // Para octubre (o meses sin imágenes propias), usar imagen aleatoria
            if (month === 'octubre' || imageCount === 0) {
                const randomImage = allImages[Math.floor(Math.random() * allImages.length)];
                img.src = `images/${randomImage}`;
            } else {
                img.src = `images/${month}/${month}_${i}.jpg`;
            }
            
            img.alt = `${month.charAt(0).toUpperCase() + month.slice(1)} - Momento ${i}`;
            img.loading = 'lazy';
            
            img.onerror = function() {
                console.warn(`Imagen no encontrada: ${this.src}`);
                item.style.opacity = '0.5';
            };
            
            item.appendChild(img);
            item.onclick = () => openLightbox(img.src);
            
            container.appendChild(item);
        }
    });
}

// Cargar videos
function loadVideos() {
    Object.keys(mediaConfig).forEach(month => {
        const container = document.getElementById(`${month}-videos`);
        if (!container) return;
        
        const videoList = mediaConfig[month].videos;
        
        if (videoList.length === 0) {
            container.innerHTML = '<p style="color: #999; text-align: center; padding: 2rem;">No hay videos este mes</p>';
            return;
        }
        
        videoList.forEach((videoPath) => {
            const item = document.createElement('div');
            item.className = 'video-item';
            
            const video = document.createElement('video');
            video.src = videoPath;
            video.preload = 'metadata';
            
            video.onerror = function() {
                console.warn(`Video no encontrado: ${this.src}`);
                item.innerHTML = '<div class="video-item-placeholder">⚠️ Video no disponible</div>';
                return;
            };
            
            item.appendChild(video);
            item.onclick = () => openVideoModal(videoPath);
            
            container.appendChild(item);
        });
    });
}

// Abrir lightbox
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const img = lightbox.querySelector('.lightbox-content');
    img.src = src;
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Abrir modal de video
function openVideoModal(src) {
    const modal = document.getElementById('video-modal');
    const video = modal.querySelector('.modal-video');
    video.src = src;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    video.play();
}

// Cerrar lightbox/modal
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const modal = document.getElementById('video-modal');
    const video = modal ? modal.querySelector('.modal-video') : null;
    
    if (lightbox) lightbox.style.display = 'none';
    if (modal) modal.style.display = 'none';
    if (video) video.pause();
    
    document.body.style.overflow = 'auto';
}

// Event listeners para cerrar
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.onclick = closeLightbox;
    });
});

// Cerrar al hacer click fuera
window.onclick = function(event) {
    const lightbox = document.getElementById('lightbox');
    const modal = document.getElementById('video-modal');
    
    if (event.target === lightbox || event.target === modal) {
        closeLightbox();
    }
};

// Cerrar con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Intersection Observer para animaciones
function initScrollAnimations() {
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-on-scroll');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.style.opacity = '1';
        observer.observe(item);
    });
    
    document.querySelectorAll('.future-month').forEach(month => {
        observer.observe(month);
    });
}

// Establecer imagen del carrusel (Foto especial de nosotros juntos)
function setRandomCarruselImage() {
    const carruselImg = document.getElementById('carruselFoto');
    if (carruselImg) {
        carruselImg.src = `images/nosotros_juntos.jpg`;
    }
}

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎉 Inicializando página de Nuestra Historia...');
    
    // Generar mosaico de fotos en hero-background
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        generateHeartBackground(heroBackground);
    }
    
    // Mostrar pantalla de carga
    initSplashScreen();
    
    // Después de 5.3 segundos, inicializar la página
    setTimeout(() => {
        initCounters();
        loadGalleries();
        loadVideos();
        initScrollAnimations();
        generateFloatingHearts();
        
        // 🎉 GENERAR SECCIÓN DE RAZONES 🎉
        generateRazones();     // 100 Razones en esfera 3D
        
        // Establecer imagen aleatoria en el carrusel
        setRandomCarruselImage();
        
        // Generar nuevos corazones cada 10 segundos
        setInterval(generateFloatingHearts, 10000);
        
        console.log('✅ ¡Página completamente cargada y hermosa!');
    }, 5300);
});

// Actualizar contador CADA MINUTO en tiempo real
setInterval(initCounters, 60000);
