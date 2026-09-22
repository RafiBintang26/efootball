/* ==========================================================================
   eFOOTBALL BEST MOMENTS - JAVASCRIPT LOGIC
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. VIDEO DATA ARRAY (EASY TO EXPAND)
// --------------------------------------------------------------------------
/* 
   CATATAN UNTUK PENGEMBANG / USER:
   Untuk menambahkan video baru:
   1. Simpan file video Anda ke folder: assets/videos/moment-7.mp4
   2. Simpan gambar thumbnail ke folder: assets/images/moment-7.jpg
   3. Tambahkan objek baru di bawah ini ke dalam array `moments`:
   
   {
       id: 7,
       title: "Judul Moment Baru",
       category: "GOALS", // Pilihan: "GOALS", "SKILLS", "SAVES", "MATCHES", "FUN"
       duration: "00:20",
       thumbnail: "assets/images/moment-7.jpg",
       video: "assets/videos/moment-7.mp4",
       description: "Deskripsi singkat momen sepak bola terbaik ini.",
       rating: "99",
       position: "CF",
       flag: "🇧🇷",
       stars: "★★★★★"
   }
*/

const moments = [
    {
        id: 1,
        title: "Yamal Ori (Blitz Manja)",
        category: "GOALS",
        duration: "00:18",
        thumbnail: "assets/images/moment-1.jpg",
        video: "assets/videos/moment-1.mp4",
        description: "yamal kok bansos cihuyy",
        rating: "99",
        position: "CF",
        flag: "🇮🇹",
        stars: "★★★★★"
    },
    {
        id: 2,
        title: "Insane Long Shot",
        category: "GOALS",
        duration: "00:15",
        thumbnail: "assets/images/moment-2.jpg",
        video: "assets/videos/moment-2.mp4",
        description: "An unbelievable 35-yard screamer soaring past the diving goalkeeper directly into the top corner.",
        rating: "98",
        position: "SS",
        flag: "🇧🇷",
        stars: "★★★★★"
    },
    {
        id: 3,
        title: "Perfect Counter Attack",
        category: "SKILLS",
        duration: "00:22",
        thumbnail: "assets/images/moment-3.jpg",
        video: "assets/videos/moment-3.mp4",
        description: "A lightning-fast 3-pass counter attack from box-to-box executed with surgical precision and skill.",
        rating: "97",
        position: "RWF",
        flag: "🇦🇷",
        stars: "★★★★☆"
    },
    {
        id: 4,
        title: "Unbelievable Save",
        category: "SAVES",
        duration: "00:14",
        thumbnail: "assets/images/moment-4.jpg",
        video: "assets/videos/moment-4.mp4",
        description: "Heroic double-reflex fingertip stop denying a certain goal right on the goal line.",
        rating: "99",
        position: "GK",
        flag: "🇪🇸",
        stars: "★★★★★"
    },
    {
        id: 5,
        title: "Top Corner Free Kick",
        category: "GOALS",
        duration: "00:19",
        thumbnail: "assets/images/moment-5.jpg",
        video: "assets/videos/moment-5.mp4",
        description: "A curling free-kick over the wall dipping perfectly into the top corner under pressure.",
        rating: "98",
        position: "AMF",
        flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        stars: "★★★★★"
    },
    {
        id: 6,
        title: "The Ultimate Comeback",
        category: "MATCHES",
        duration: "00:28",
        thumbnail: "assets/images/moment-6.jpg",
        video: "assets/videos/moment-6.mp4",
        description: "Overcoming a 2-0 deficit in the final 5 minutes with two spectacular late team goals.",
        rating: "99",
        position: "CMF",
        flag: "🇫🇷",
        stars: "★★★★★"
    }
];

// --------------------------------------------------------------------------
// 2. DOM ELEMENTS SELECTION
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');
    const momentsGrid = document.getElementById('moments-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Video Modal Elements
    const videoModal = document.getElementById('video-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalClose = document.getElementById('modal-close');
    const modalVideo = document.getElementById('modal-video');
    const modalFallback = document.getElementById('modal-fallback');
    const fallbackPath = document.getElementById('fallback-path');
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalDescription = document.getElementById('modal-description');
    const modalRating = document.getElementById('modal-rating');
    const modalPos = document.getElementById('modal-pos');

    // Featured Video Elements
    const featuredVideo = document.getElementById('featured-video-player');
    const featuredOverlay = document.getElementById('featured-video-overlay');
    const featuredPlayBtn = document.getElementById('featured-play-btn');
    const btnPlayFeatured = document.getElementById('btn-play-featured');

    // --------------------------------------------------------------------------
    // 3. NAVBAR SCROLL & MOBILE MENU
    // --------------------------------------------------------------------------
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-active');
            const isOpened = navLinks.classList.contains('mobile-active');
            mobileToggle.innerHTML = isOpened ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('mobile-active');
            if (mobileToggle) mobileToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });

    // --------------------------------------------------------------------------
    // 4. RENDER GALLERY CARDS
    // --------------------------------------------------------------------------
    function renderMoments(categoryFilter = 'ALL') {
        momentsGrid.innerHTML = '';

        const filteredMoments = categoryFilter === 'ALL'
            ? moments
            : moments.filter(m => m.category.toUpperCase() === categoryFilter.toUpperCase());

        if (filteredMoments.length === 0) {
            momentsGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--color-text-muted);">
                    <i class="fa-solid fa-film" style="font-size: 3rem; color: var(--color-gold-main); margin-bottom: 16px;"></i>
                    <h3 style="font-family: var(--font-heading); font-size: 2rem; color: var(--color-off-white);">NO MOMENTS FOUND</h3>
                    <p>Belum ada video untuk kategori ini.</p>
                </div>
            `;
            return;
        }

        filteredMoments.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'moment-card';
            card.dataset.id = item.id;
            card.style.animationDelay = `${index * 0.1}s`;

            card.innerHTML = `
                <div class="card-thumbnail-wrapper">
                    <img src="${item.thumbnail}" alt="${item.title}" class="card-thumbnail" loading="lazy" onerror="this.src='assets/images/hero.jpg'">
                    <div class="card-overlay">
                        <div class="card-play-btn">
                            <i class="fa-solid fa-play"></i>
                        </div>
                    </div>
                    <span class="card-badge-num">MOMENT 0${item.id}</span>
                    <span class="card-duration">${item.duration}</span>
                </div>
                <div class="card-body">
                    <span class="card-category">${item.category}</span>
                    <h3 class="card-title">${item.title}</h3>
                    <p class="card-desc">${item.description}</p>
                    <div class="card-player-accent">
                        <span class="mini-rating">${item.rating} OVR | ${item.position}</span>
                        <span class="mini-flag">${item.flag}</span>
                    </div>
                </div>
            `;

            card.addEventListener('click', () => openVideoModal(item));
            momentsGrid.appendChild(card);
        });
    }

    // Initialize Gallery
    renderMoments('ALL');

    // --------------------------------------------------------------------------
    // 5. CATEGORY FILTER LOGIC
    // --------------------------------------------------------------------------
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-category');
            renderMoments(category);
        });
    });

    // --------------------------------------------------------------------------
    // 6. VIDEO MODAL PLAYER & FALLBACK
    // --------------------------------------------------------------------------
    function openVideoModal(momentItem) {
        modalTitle.textContent = momentItem.title;
        modalCategory.textContent = momentItem.category;
        modalDescription.textContent = momentItem.description;
        modalRating.textContent = momentItem.rating;
        modalPos.textContent = momentItem.position;

        // Reset Fallback state
        modalFallback.style.display = 'none';
        modalVideo.style.display = 'block';

        // Set video source
        modalVideo.src = momentItem.video;
        fallbackPath.textContent = momentItem.video;

        // Show Modal
        videoModal.classList.add('active');
        videoModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        // Attempt playback
        modalVideo.play().catch(err => {
            console.warn('Video playback warning / missing file:', err);
            // If local video mp4 doesn't exist or play fails, trigger fallback cleanly
            modalVideo.style.display = 'none';
            modalFallback.style.display = 'flex';
        });
    }

    // Handle video load error fallback
    modalVideo.addEventListener('error', () => {
        modalVideo.style.display = 'none';
        modalFallback.style.display = 'flex';
    });

    function closeVideoModal() {
        videoModal.classList.remove('active');
        videoModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        modalVideo.pause();
        modalVideo.currentTime = 0;
        modalVideo.src = '';
    }

    if (modalClose) modalClose.addEventListener('click', closeVideoModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeVideoModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeVideoModal();
        }
    });

    // --------------------------------------------------------------------------
    // 7. FEATURED VIDEO PLAYER INTERACTION
    // --------------------------------------------------------------------------
    function playFeaturedVideo() {
        if (featuredOverlay) featuredOverlay.style.display = 'none';
        featuredVideo.play().catch(err => {
            console.warn('Featured video play warning:', err);
            alert('Video featured.mp4 belum tersedia di assets/videos/featured.mp4');
        });
    }

    if (featuredOverlay) featuredOverlay.addEventListener('click', playFeaturedVideo);
    if (featuredPlayBtn) featuredPlayBtn.addEventListener('click', playFeaturedVideo);
    if (btnPlayFeatured) btnPlayFeatured.addEventListener('click', playFeaturedVideo);

    // --------------------------------------------------------------------------
    // 8. STATS COUNTER ANIMATION ON SCROLL
    // --------------------------------------------------------------------------
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;

    function animateStats() {
        statNumbers.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            let current = 0;
            const increment = Math.ceil(target / 40);

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target;
                    clearInterval(timer);
                } else {
                    stat.textContent = current;
                }
            }, 30);
        });
    }

    const statsSection = document.getElementById('stats');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animateStats();
                    animated = true;
                }
            });
        }, { threshold: 0.4 });

        observer.observe(statsSection);
    }
});
