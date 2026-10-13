/* WAY BEYOND - LÓGICA PRINCIPAL & RENDERIZAÇÃO DA HOME (COM PROTEÇÕES) */

import { destinosData } from './destinos-data.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. MENU HAMBÚRGUER (MOBILE) - Protegido com verificação de existência
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            hamburgerBtn.classList.toggle('active');
        });
    }

    // 2. ALTERNÂNCIA DE TEMA (DARK / LIGHT MODE) E LOGÓTIPO DINÂMICO
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const logoImg = document.getElementById('logo-img');
    const userTheme = localStorage.getItem('theme');

    // Função segura para atualizar o logótipo
    const updateLogo = (isDark) => {
        if (logoImg) {
            logoImg.src = isDark ? 'logo-way-beyond-transparent-faviconb.png' : 'logo-way-beyond-favicon.png';
        }
    };

    // Aplica o tema salvo de forma segura ao iniciar
    if (userTheme === 'dark') {
        document.body.classList.add('dark-mode');
        updateLogo(true);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            const isDark = document.body.classList.contains('dark-mode');
            
            // Atualiza o logo e salva a preferência com salvaguarda no localStorage
            updateLogo(isDark);
            try {
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
            } catch (e) {
                console.warn('Não foi possível gravar a preferência de tema no localStorage:', e);
            }
        });
    }

    // 3. RENDERIZAR DESTINOS EM DESTAQUE (INDEX.HTML) - Protegido contra dados em falta
    const featuredContainer = document.getElementById('featured-destinos-grid') || document.getElementById('destinos-grid');

    if (featuredContainer) {
        try {
            // Validação se a base de dados existe e é um array válido
            if (typeof destinosData !== 'undefined' && Array.isArray(destinosData) && destinosData.length > 0) {
                const featuredDestinos = destinosData.slice(0, 3);
                
                featuredContainer.innerHTML = featuredDestinos.map(destino => {
                    // Salvaguardas individuais caso alguma propriedade venha em falta no objeto
                    const id = destino.id || '#';
                    const numero = destino.numero || destino.id || '01';
                    const imagem = destino.imagem || 'assets/images/placeholder.jpg';
                    const titulo = destino.titulo || 'Destino Exclusivo';
                    const pais = destino.pais ? destino.pais.toUpperCase() : 'MUNDO';
                    const descricao = destino.descricaoCurta || destino.descricao || 'Explore este destino incrível com profundidade e calma.';

                    return `
                        <article class="destino-card">
                            <div class="card-image-wrapper">
                                <span class="card-number">${numero}</span>
                                <img src="${imagem}" alt="${titulo} - ${pais}" loading="lazy">
                            </div>
                            <div class="card-content">
                                <span class="card-country">${pais}</span>
                                <h3 class="card-title">${titulo}</h3>
                                <p class="card-description">${descricao}</p>
                                <a href="destino-detalhes.html?id=${id}" class="card-link">Descobrir <span class="arrow">&rarr;</span></a>
                            </div>
                        </article>
                    `;
                }).join('');
            } else {
                throw new Error('A variável destinosData não está definida ou está vazia.');
            }
        } catch (error) {
            console.error('Erro ao carregar os destinos em destaque:', error);
            featuredContainer.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: var(--text-color); opacity: 0.7;">Não foi possível carregar os destinos no momento.</p>`;
        }
    }
});