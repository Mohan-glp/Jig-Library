/**
 * JIG LIBRARY - Professional Edition v1.5
 * Core Application Logic
 */

// 1. Translations & Language Management
const translations = {
    en: {
        'app-title': 'JIG LIBRARY',
        'db-active': 'Database Active',
        'tab-library': 'Library',
        'tab-inventory': 'Inventory',
        'inventory-title': 'Inventory Library',
        'inventory-subtitle': 'Manage and search your registered manufacturing jigs',
        'search-placeholder': 'Search by style, ID or location...',
        'reg-title': 'New Registration',
        'reg-subtitle': 'Add a new jig to the digital library',
        'label-jig-id': 'Jig ID / Serial Number',
        'label-style': 'Style Name / Order No',
        'label-size-range': 'Size Range',
        'label-width': 'Width',
        'label-height': 'Height',
        'label-lh1': 'Left H1',
        'label-rh1': 'Right H1',
        'label-lh2': 'Left H2',
        'label-rh2': 'Right H2',
        'label-rack': 'Rack loc',
        'label-notes': 'Technical Notes',
        'label-quantity': 'Quantity (Total Units)',
        'label-symmetry': 'Symmetry',
        'label-shape': 'Bottom Shape',
        'opt-symmetrical': 'Symmetrical',
        'opt-asymmetrical': 'Asymmetrical',
        'opt-straight': 'Straight',
        'opt-curve': 'Curve',
        'notes-placeholder': 'Enter special machine settings or handling instructions...',
        'btn-save': 'SAVE TO LIBRARY',
        'btn-update': 'UPDATE RECORD',
        'btn-cancel': 'CANCEL EDIT',
        'footer-copyright': '&copy; 2024 JIG LIBRARY - Advanced Machinery Division. All rights reserved.',
        'footer-designed': 'Designed for Professional Apparel Manufacturing',
        'guide-title': 'Technical Measurement Guide',
        'guide-badge': 'GUIDE',
        'guide-desc': 'Follow labels (W, H, LH1, RH1, LH2, RH2) to record precise dimensions in millimeters (mm).',
        'empty-title': 'No matching jigs found',
        'empty-subtitle': 'Try adjusting your search filters or register a new jig in the inventory tab.',
        'toast-theme-dark': 'Theme switched to Dark Mode',
        'toast-theme-light': 'Theme switched to Light Mode',
        'toast-lang-switch': 'Language changed to English',
        'toast-save-success': 'Jig Successfully Registered!',
        'toast-update-success': 'Jig Record Updated Successfully!',
        'toast-save-error': 'Error saving data: ',
        'toast-delete-confirm': 'Permanently archive and delete this jig record?',
        'toast-delete-success': 'Record removed successfully',
        'toast-delete-error': 'Delete failed',
        'toast-edit-mode': 'Editing mode: Change details & Save',
        'toast-load-error': 'Error loading library',
        'card-added': 'Added',
        'card-pocket': 'Pocket Specs',
        'card-location': 'Location',
        'card-quantity': 'Quantity',
        'card-no-notes': 'No technical notes recorded for this jig.',
        'prompt-password': 'Admin Password Required:',
        'error-password': 'Incorrect Password! Access Denied.',
        'label-edit-title': 'Edit Registration',
        'btn-export': 'Backup Data',
        'btn-import': 'Restore Data',
        'toast-export-success': 'Database exported successfully!',
        'toast-import-success': 'Database restored successfully!',
        'toast-import-error': 'Invalid backup file!',
        'confirm-import': 'Restoring will merge new data with existing records. Proceed?',
        'recent-title': 'Recent Entries',
        'btn-login': 'Admin Login',
        'btn-logout': 'Exit Admin',
        'toast-login-success': 'Admin Access Granted',
        'toast-logout-success': 'Switched to Viewer Mode',
        'label-sort': 'Sort By',
        'opt-sort-id': 'Jig Number',
        'opt-sort-new': 'Newest First',
        'opt-sort-old': 'Oldest First',
        'btn-share': 'Share Data',
        'update-message': 'A new version of Jig Library is available!',
        'btn-update-now': 'Update Now',
    },
    es: {
        'app-title': 'BIBLIOTECA DE JIGS',
        'db-active': 'Base de Datos Activa',
        'tab-library': 'Biblioteca',
        'tab-inventory': 'Inventario',
        'inventory-title': 'Biblioteca de Inventario',
        'inventory-subtitle': 'Administre y busque sus jigs de fabricación registrados',
        'search-placeholder': 'Buscar por estilo, ID o ubicación...',
        'reg-title': 'Nuevo Registro',
        'reg-subtitle': 'Agregar un nuevo jig a la biblioteca digital',
        'guide-title': 'Guía de Medición Técnica',
        'guide-badge': 'GUÍA',
        'guide-desc': 'Siga las etiquetas (W, H, LH1, RH1, LH2, RH2) para registrar dimensiones precisas en milímetros (mm).',
        'label-jig-id': 'ID de Jig / Número de Serie',
        'label-style': 'Nombre de Estilo / Nº de Pedido',
        'label-width': 'Ancho',
        'label-height': 'Altura',
        'label-lh1': 'Alt. Izq 1',
        'label-rh1': 'Alt. Der 1',
        'label-lh2': 'Alt. Izq 2',
        'label-rh2': 'Alt. Der 2',
        'label-rack': 'Ubicación en Rack',
        'label-notes': 'Notas Técnicas',
        'label-quantity': 'Cantidad (Unidades Totales)',
        'label-symmetry': 'Simetría',
        'label-shape': 'Forma del Fondo',
        'opt-symmetrical': 'Simétrico',
        'opt-asymmetrical': 'Asimétrico',
        'opt-straight': 'Recto',
        'opt-curve': 'Curvo',
        'notes-placeholder': 'Ingrese configuraciones especiales de la máquina...',
        'btn-save': 'GUARDAR EN BIBLIOTECA',
        'btn-update': 'ACTUALIZAR REGISTRO',
        'btn-cancel': 'CANCELAR EDICIÓN',
        'footer-copyright': '&copy; 2024 BIBLIOTECA DE JIGS - División de Maquinaria Avanzada. Todos los derechos reservados.',
        'footer-designed': 'Diseñado para la Fabricación Profesional de Prendas',
        'empty-title': 'No se encontraron jigs',
        'empty-subtitle': 'Intente ajustar sus filtros de búsqueda o registre un nuevo jig en la pestaña de inventario.',
        'toast-theme-dark': 'Tema cambiado a Modo Oscuro',
        'toast-theme-light': 'Tema cambiado a Modo Claro',
        'toast-lang-switch': 'Idioma cambiado a Español',
        'toast-save-success': '¡Jig Registrado con Éxito!',
        'toast-update-success': '¡Registro actualizado con éxito!',
        'toast-save-error': 'Error al guardar datos: ',
        'toast-delete-confirm': '¿Archivar y eliminar permanentemente este registro?',
        'toast-delete-success': 'Registro eliminado con éxito',
        'toast-delete-error': 'Error al eliminar',
        'toast-edit-mode': 'Modo de edición: Cambie los detalles y guarde',
        'toast-load-error': 'Error al cargar la biblioteca',
        'card-added': 'Agregado',
        'card-pocket': 'Especificaciones',
        'card-location': 'Ubicación',
        'card-quantity': 'Cantidad',
        'card-no-notes': 'No hay notas técnicas registradas para este jig.',
        'prompt-password': 'Se requiere contraseña de administrador:',
        'error-password': '¡Contraseña incorrecta! Acceso denegado.',
        'label-edit-title': 'Editar Registro',
        'btn-export': 'Respaldar Datos',
        'btn-import': 'Restaurar Datos',
        'toast-export-success': '¡Base de datos exportada con éxito!',
        'toast-import-success': '¡Base de datos restaurada con éxito!',
        'toast-import-error': '¡Archivo de respaldo inválido!',
        'confirm-import': 'La restauración fusionará los nuevos datos con los registros existentes. ¿Proceder?',
        'recent-title': 'Entradas Recientes',
        'btn-login': 'Acceso Admin',
        'btn-logout': 'Salir Admin',
        'toast-login-success': 'Acceso de Administrador Concedido',
        'toast-logout-success': 'Cambiado a Modo Visor',
        'label-sort': 'Ordenar por',
        'opt-sort-id': 'Número de Jig',
        'opt-sort-new': 'Más nuevos primero',
        'opt-sort-old': 'Más antiguos primero',
        'btn-share': 'Compartir Datos',
        'update-message': '¡Una nueva versión de Jig Library está disponible!',
        'btn-update-now': 'Actualizar Ahora',
    }
};

let currentLang = localStorage.getItem('lang') || 'en';
const ADMIN_PASSWORD = '123'; // Default admin password
let isAdmin = sessionStorage.getItem('isAdmin') === 'true';
let editingId = null;

function updateUI() {
    const langData = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (langData[key]) {
            el.innerHTML = langData[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (langData[key]) {
            el.placeholder = langData[key];
        }
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (langData[key]) {
            el.title = langData[key];
        }
    });

    document.getElementById('lang-text').innerText = currentLang.toUpperCase();

    // Admin Restricted UI
    const adminToggle = document.getElementById('login-toggle');
    const adminText = document.getElementById('login-text');
    const lockIcon = document.getElementById('login-icon-lock');
    const unlockIcon = document.getElementById('login-icon-unlock');

    if (isAdmin) {
        adminText.setAttribute('data-i18n', 'btn-logout');
        adminText.innerText = langData['btn-logout'];
        lockIcon.classList.add('hidden');
        unlockIcon.classList.remove('hidden');
        adminToggle.classList.replace('bg-primary/10', 'bg-emerald-500/10');
        adminToggle.classList.replace('text-primary', 'text-emerald-500');
        adminToggle.classList.replace('border-primary/20', 'border-emerald-500/20');

        document.querySelectorAll('[data-admin-only]').forEach(el => {
            el.classList.remove('hidden');
            if (el.tagName === 'DIV' && el.classList.contains('md:flex')) {
                el.classList.add('flex');
            }
        });
    } else {
        adminText.setAttribute('data-i18n', 'btn-login');
        adminText.innerText = langData['btn-login'];
        lockIcon.classList.remove('hidden');
        unlockIcon.classList.add('hidden');
        adminToggle.classList.replace('bg-emerald-500/10', 'bg-primary/10');
        adminToggle.classList.replace('text-emerald-500', 'text-primary');
        adminToggle.classList.replace('border-emerald-500/20', 'border-primary/20');

        document.querySelectorAll('[data-admin-only]').forEach(el => {
            el.classList.add('hidden');
            if (el.tagName === 'DIV' && el.classList.contains('md:flex')) {
                el.classList.remove('flex');
            }
        });

        // If on inventory tab, switch to library
        if (tabs && tabs.inventory && tabs.inventory.btn.classList.contains('active')) {
            switchTab('library');
        }
    }
}

// 2. Database Initialization
const db = new Dexie("JigLibraryProfessionalV3");
db.version(1).stores({
    jigs: '++id, jigId, styleName, sizeRange, rackLocation, dateAdded'
});

// DOM References
const form = document.getElementById('jig-form');
const list = document.getElementById('jig-list');
const searchInput = document.getElementById('searchJig');
const countBadge = document.getElementById('count');
const sortSelect = document.getElementById('sortLibrary');
const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const dbStatus = document.getElementById('db-status');
const cancelEditBtn = document.getElementById('cancel-edit');
const submitBtnText = document.querySelector('button[type="submit"] [data-i18n]');
const regTitle = document.querySelector('[data-i18n="reg-title"]');

// 3. Theme Management
function initTheme() {
    const isDark = localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDark) {
        document.documentElement.classList.add('dark');
        sunIcon?.classList.remove('hidden');
        moonIcon?.classList.add('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        sunIcon?.classList.add('hidden');
        moonIcon?.classList.remove('hidden');
    }
}

themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    sunIcon?.classList.toggle('hidden');
    moonIcon?.classList.toggle('hidden');

    const msg = isDark ? translations[currentLang]['toast-theme-dark'] : translations[currentLang]['toast-theme-light'];
    showToast(msg, 'info');
});

// 4. Language Management
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    localStorage.setItem('lang', currentLang);
    updateUI();
    refreshLibrary(searchInput.value);
    showToast(translations[currentLang]['toast-lang-switch'], 'info');
});

// 5. Guide Image Management
const guideUpload = document.getElementById('guide-upload');
const guidePreview = document.getElementById('guide-preview');
const guideEnlarged = document.getElementById('guide-enlarged');
const libraryGuideImg = document.querySelector('#content-library img');

function loadCustomGuide() {
    const customGuide = localStorage.getItem('custom-pocket-guide');
    if (customGuide) {
        if (guidePreview) guidePreview.src = customGuide;
        if (guideEnlarged) guideEnlarged.src = customGuide;
        if (libraryGuideImg) libraryGuideImg.src = customGuide;
        const modalImg = document.getElementById('modal-guide-img');
        if (modalImg) modalImg.src = customGuide;
    }
}

function openGuideModal() {
    loadCustomGuide();
    const modal = document.getElementById('guide-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

function closeGuideModal() {
    const modal = document.getElementById('guide-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

window.openGuideModal = openGuideModal;
window.closeGuideModal = closeGuideModal;

// 6. Jig Detail / Zoom Modal
async function showJigDetail(id) {
    const item = await db.jigs.get(id);
    if (!item) return;

    // Load custom guide if available
    const customGuide = localStorage.getItem('custom-pocket-guide') || 'pocket_guide.png';
    document.getElementById('detail-guide-img').src = customGuide;

    // Populate Fields
    document.getElementById('detail-jig-id').innerText = item.jigId;
    document.getElementById('detail-style-name').innerText = item.styleName;
    document.getElementById('detail-rack-location').innerText = item.rackLocation || '---';
    document.getElementById('detail-quantity').innerText = item.quantity || 1;
    document.getElementById('detail-width').innerText = (item.pocketWidth || '---') + ' mm';
    document.getElementById('detail-height').innerText = (item.pocketHeight || '---') + ' mm';
    document.getElementById('detail-size-range').innerText = item.sizeRange || '---';
    document.getElementById('detail-lh1').innerText = (item.pocketLH1 || '---') + ' mm';
    document.getElementById('detail-rh1').innerText = (item.pocketRH1 || '---') + ' mm';
    document.getElementById('detail-lh2').innerText = (item.pocketLH2 || '---') + ' mm';
    document.getElementById('detail-rh2').innerText = (item.pocketRH2 || '---') + ' mm';
    document.getElementById('detail-symmetry').innerText = item.symmetry || 'Symmetrical';
    document.getElementById('detail-shape').innerText = item.pocketShape || 'Straight';
    document.getElementById('detail-notes').innerText = item.notes || 'No technical notes recorded for this jig.';

    const modal = document.getElementById('jig-detail-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
    lucide.createIcons();
}

function closeJigDetail() {
    const modal = document.getElementById('jig-detail-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

window.showJigDetail = showJigDetail;
window.closeJigDetail = closeJigDetail;

guideUpload?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const base64 = event.target.result;
            localStorage.setItem('custom-pocket-guide', base64);
            loadCustomGuide();
            showToast("Guide Image Updated Successfully!");
        };
        reader.readAsDataURL(file);
    }
});

// 5. Tab Management
const tabs = {
    library: {
        btn: document.getElementById('tab-library'),
        content: document.getElementById('content-library')
    },
    inventory: {
        btn: document.getElementById('tab-inventory'),
        content: document.getElementById('content-inventory')
    }
};

function switchTab(tabKey) {
    Object.keys(tabs).forEach(key => {
        if (key === tabKey) {
            tabs[key].btn.classList.add('active');
            tabs[key].content.classList.remove('hidden');
        } else {
            tabs[key].btn.classList.remove('active');
            tabs[key].content.classList.add('hidden');
        }
    });

    // If switching away from inventory, cancel edit
    if (tabKey !== 'inventory' && editingId) {
        cancelEdit();
    }
}

tabs.library.btn.addEventListener('click', () => switchTab('library'));
tabs.inventory.btn.addEventListener('click', () => {
    switchTab('inventory');
    suggestNextJigId();
});

// 6. UI Helpers
function showToast(message, type = 'success') {
    const colors = {
        success: "linear-gradient(to right, #00b09b, #96c93d)",
        error: "linear-gradient(to right, #ff5f6d, #ffc371)",
        info: "linear-gradient(to right, #2193b0, #6dd5ed)"
    };

    Toastify({
        text: message,
        duration: 3000,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
            background: colors[type]
        }
    }).showToast();
}

function checkAdmin() {
    if (isAdmin) return true;

    const pwd = prompt(translations[currentLang]['prompt-password']);
    if (pwd === ADMIN_PASSWORD) {
        isAdmin = true;
        sessionStorage.setItem('isAdmin', 'true');
        updateUI();
        refreshLibrary(searchInput.value);
        showToast(translations[currentLang]['toast-login-success']);
        return true;
    } else if (pwd !== null) {
        showToast(translations[currentLang]['error-password'], 'error');
    }
    return false;
}

function logoutAdmin() {
    isAdmin = false;
    sessionStorage.removeItem('isAdmin');
    updateUI();
    refreshLibrary(searchInput.value);
    showToast(translations[currentLang]['toast-logout-success'], 'info');
}

document.getElementById('login-toggle').addEventListener('click', () => {
    if (isAdmin) {
        logoutAdmin();
    } else {
        checkAdmin();
    }
});

// 7. Core Logic: Load and Display Jigs
async function refreshLibrary(filter = "") {
    list.style.opacity = '0.5';
    const langData = translations[currentLang];
    const sortValue = sortSelect?.value || 'id';

    try {
        let jigs = await db.jigs.toArray();

        // Apply Sorting
        if (sortValue === 'id') {
            jigs.sort((a, b) => {
                const idA = String(a.jigId || '');
                const idB = String(b.jigId || '');
                if (!idA && !idB) return 0;
                if (!idA) return 1;
                if (!idB) return -1;
                return idA.localeCompare(idB, undefined, { numeric: true, sensitivity: 'base' });
            });
        } else if (sortValue === 'new') {
            jigs.sort((a, b) => new Date(b.dateAdded || 0) - new Date(a.dateAdded || 0));
        } else if (sortValue === 'old') {
            jigs.sort((a, b) => new Date(a.dateAdded || 0) - new Date(b.dateAdded || 0));
        }

        if (filter) {
            const query = filter.toLowerCase();
            jigs = jigs.filter(j =>
                j.styleName.toLowerCase().includes(query) ||
                j.jigId.toLowerCase().includes(query) ||
                (j.sizeRange && j.sizeRange.toLowerCase().includes(query)) ||
                (j.rackLocation && j.rackLocation.toLowerCase().includes(query)) ||
                (j.symmetry && j.symmetry.toLowerCase().includes(query)) ||
                (j.pocketShape && j.pocketShape.toLowerCase().includes(query))
            );
        }

        countBadge.innerText = jigs.length;
        list.innerHTML = '';

        if (jigs.length === 0) {
            const emptyState = `
                <div class="col-span-full py-32 flex flex-col items-center text-center animate-in fade-in duration-700">
                    <div class="w-24 h-24 bg-slate-100 dark:bg-slate-800/50 rounded-full flex items-center justify-center mb-6 border border-slate-200 dark:border-slate-700">
                        <i data-lucide="package-search" class="w-12 h-12 text-slate-300 dark:text-slate-600"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-700 dark:text-slate-300">${langData['empty-title']}</h3>
                    <p class="text-slate-400 mt-2 max-w-xs mx-auto">${langData['empty-subtitle']}</p>
                </div>
            `;
            list.innerHTML = emptyState;
            list.style.opacity = '1';
            lucide.createIcons();
            return;
        }

        jigs.forEach((j, index) => {
            const card = document.createElement('div');
            card.className = "jig-card glass-container p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col justify-between group h-full cursor-zoom-in hover:border-primary/50 transition-all active:scale-[0.98]";
            card.style.animationDelay = `${index * 50}ms`;
            card.onclick = (e) => {
                // Don't open detail if clicking buttons
                if (e.target.closest('button')) return;
                showJigDetail(j.id);
            };

            card.innerHTML = `
                <div>
                    <div class="flex justify-between items-start mb-5">
                        <span class="bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-400 text-[10px] font-black px-2.5 py-1.5 rounded-lg uppercase tracking-wider border border-primary/20 dark:border-primary/40">${j.jigId}</span>
                        <div class="flex space-x-1 ${isAdmin ? 'opacity-0 group-hover:opacity-100' : 'hidden'} transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                            <button onclick="editRecord(${j.id})" class="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full transition-all" title="Edit">
                                <i data-lucide="edit-3" class="w-4 h-4"></i>
                            </button>
                            <button onclick="deleteRecord(${j.id})" class="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-full transition-all" title="Delete">
                                <i data-lucide="trash-2" class="w-4 h-4"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="flex justify-between items-start mb-2">
                        <div class="space-y-1">
                            <h3 class="font-bold text-slate-800 dark:text-white text-xl leading-tight uppercase group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">${j.styleName}</h3>
                            <div class="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                                <i data-lucide="ruler-combined" class="w-3 h-3 text-slate-300"></i>
                                ${langData['label-size-range']}: <span class="text-slate-600 dark:text-slate-300">${j.sizeRange || '---'}</span>
                            </div>
                        </div>
                        <div class="flex flex-col items-end shrink-0 pl-4 border-l border-slate-100 dark:border-slate-800/50">
                            <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">${langData['card-quantity']}</span>
                            <span class="text-xl font-black text-primary dark:text-blue-400 leading-none mt-1">${j.quantity || 1}</span>
                        </div>
                    </div>
                    
                    <div class="mt-4 p-4 bg-slate-50/50 dark:bg-slate-800/30 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                        <div class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                            <i data-lucide="maximize" class="w-3 h-3"></i>
                            ${langData['card-pocket']}
                        </div>
                        <div class="grid grid-cols-3 gap-y-3 gap-x-2">
                            <div class="flex flex-col">
                                <span class="text-[8px] font-bold text-slate-400 uppercase">${langData['label-width']}</span>
                                <span class="text-xs font-bold text-slate-700 dark:text-slate-300">${j.pocketWidth ? j.pocketWidth + ' mm' : '---'}</span>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-[8px] font-bold text-slate-400 uppercase">${langData['label-height']}</span>
                                <span class="text-xs font-bold text-slate-700 dark:text-slate-300">${j.pocketHeight ? j.pocketHeight + ' mm' : '---'}</span>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-[8px] font-bold text-slate-400 uppercase">${langData['label-rack']}</span>
                                <span class="text-xs font-bold text-amber-600 dark:text-amber-400">${j.rackLocation || '---'}</span>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-[8px] font-bold text-slate-400 uppercase">${langData['label-lh1']}</span>
                                <span class="text-xs font-medium text-slate-600 dark:text-slate-400">${j.pocketLH1 ? j.pocketLH1 + ' mm' : '---'}</span>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-[8px] font-bold text-slate-400 uppercase">${langData['label-rh1']}</span>
                                <span class="text-xs font-medium text-slate-600 dark:text-slate-400">${j.pocketRH1 ? j.pocketRH1 + ' mm' : '---'}</span>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-[8px] font-bold text-slate-400 uppercase">...</span>
                                <span class="text-xs font-medium text-slate-600 dark:text-slate-400"></span>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-[8px] font-bold text-slate-400 uppercase">${langData['label-lh2']}</span>
                                <span class="text-xs font-medium text-slate-600 dark:text-slate-400">${j.pocketLH2 ? j.pocketLH2 + ' mm' : '---'}</span>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-[8px] font-bold text-slate-400 uppercase">${langData['label-rh2']}</span>
                                <span class="text-xs font-medium text-slate-600 dark:text-slate-400">${j.pocketRH2 ? j.pocketRH2 + ' mm' : '---'}</span>
                            </div>
                        </div>

                        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/50 flex flex-wrap gap-2">
                             <span class="px-2 py-1 rounded bg-slate-100 dark:bg-slate-700/50 text-[9px] font-black uppercase text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-600 flex items-center gap-1">
                                <i data-lucide="layers-2" class="w-3 h-3"></i>
                                ${j.symmetry || 'Symmetrical'}
                             </span>
                             <span class="px-2 py-1 rounded bg-slate-100 dark:bg-slate-700/50 text-[9px] font-black uppercase text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-600 flex items-center gap-1">
                                <i data-lucide="spline" class="w-3 h-3"></i>
                                ${j.pocketShape || 'Straight'}
                             </span>
                        </div>
                    </div>
 
                    <div class="mt-6 pt-4 border-t border-dashed border-slate-200 dark:border-slate-800 text-center md:text-left">
                        <p class="text-[11px] text-slate-400 dark:text-slate-500 italic line-clamp-2" title="${j.notes || ''}">
                            ${j.notes || langData['card-no-notes']}
                        </p>
                    </div>
                </div>
                
                <div class="mt-4 flex items-center justify-between">
                    <span class="text-[9px] text-slate-400 uppercase font-bold tracking-widest">${langData['card-added']}: ${new Date(j.dateAdded).toLocaleDateString()}</span>
                    <i data-lucide="info" class="w-3 h-3 text-slate-200 dark:text-slate-700"></i>
                </div>
            `;
            list.appendChild(card);
        });

        lucide.createIcons();
    } catch (err) {
        console.error("Library Refresh Error:", err);
        showToast(langData['toast-load-error'], "error");
    } finally {
        list.style.opacity = '1';
    }
}

async function updateRecentEntries() {
    const recentList = document.getElementById('recent-entries-list');
    if (!recentList) return;

    try {
        const jigs = await db.jigs.orderBy('dateAdded').reverse().limit(3).toArray();
        const langData = translations[currentLang];

        if (jigs.length === 0) {
            recentList.innerHTML = `
                <div class="p-6 bg-white dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 text-center">
                    <p class="text-xs text-slate-400 font-medium italic">No recent activity found.</p>
                </div>
            `;
            return;
        }

        recentList.innerHTML = jigs.map(j => `
            <div class="group p-4 bg-white dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-700/50 shadow-sm hover:border-primary/30 transition-all">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-[10px] font-black text-primary dark:text-blue-400 uppercase tracking-widest">${j.jigId}</span>
                    <span class="text-[9px] text-slate-400 font-bold">${new Date(j.dateAdded).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                <h4 class="text-sm font-bold text-slate-700 dark:text-slate-200 uppercase truncate">${j.styleName}</h4>
                <div class="flex items-center gap-3 mt-2">
                    <div class="flex items-center gap-1.5">
                        <i data-lucide="map-pin" class="w-3 h-3 text-amber-500"></i>
                        <span class="text-[11px] font-bold text-amber-600 dark:text-amber-400">${j.rackLocation || '---'}</span>
                    </div>
                </div>
            </div>
        `).join('');

        lucide.createIcons();
    } catch (err) {
        console.error("Recent Entries Error:", err);
    }
}

// 8. Action: Add / Update Jig
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const langData = translations[currentLang];

    const data = {
        jigId: document.getElementById('jigId').value.trim(),
        styleName: document.getElementById('styleName').value.trim(),
        sizeRange: document.getElementById('sizeRange').value.trim(),
        pocketWidth: document.getElementById('pocketWidth').value.trim(),
        pocketHeight: document.getElementById('pocketHeight').value.trim(),
        pocketLH1: document.getElementById('pocketLH1').value.trim(),
        pocketRH1: document.getElementById('pocketRH1').value.trim(),
        pocketLH2: document.getElementById('pocketLH2').value.trim(),
        pocketRH2: document.getElementById('pocketRH2').value.trim(),
        rackLocation: document.getElementById('rackLocation').value.trim(),
        symmetry: document.querySelector('input[name="symmetry"]:checked')?.value || 'Symmetrical',
        pocketShape: document.querySelector('input[name="pocketShape"]:checked')?.value || 'Straight',
        quantity: parseInt(document.getElementById('quantity').value) || 1,
        notes: document.getElementById('notes').value.trim()
    };

    try {
        if (editingId) {
            await db.jigs.update(editingId, data);
            showToast(langData['toast-update-success']);
            cancelEdit();
        } else {
            data.dateAdded = new Date();
            await db.jigs.add(data);
            form.reset();
            showToast(langData['toast-save-success']);
        }

        refreshLibrary();
        updateRecentEntries();
        suggestNextJigId(); // Suggest next ID after save
        // Removed automatic switch back to library as per user request
    } catch (err) {
        showToast(langData['toast-save-error'] + err, "error");
    }
});

// New Helper: Suggest next Jig ID
async function suggestNextJigId() {
    try {
        const jigs = await db.jigs.toArray();
        if (jigs.length === 0) return;

        // Find the highest numeric part in jigId
        let maxNum = 0;
        let prefix = "";

        jigs.forEach(j => {
            const match = (j.jigId || '').match(/^(.*?)(\d+)$/);
            if (match) {
                const p = match[1];
                const n = parseInt(match[2]);
                if (n > maxNum) {
                    maxNum = n;
                    prefix = p;
                }
            }
        });

        if (maxNum > 0) {
            const nextId = prefix + String(maxNum + 1).padStart(3, '0');
            const jigIdInput = document.getElementById('jigId');
            if (jigIdInput && !jigIdInput.value && !editingId) {
                jigIdInput.value = nextId;
            }
        }
    } catch (err) {
        console.error("Suggestion Error:", err);
    }
}

// 9. Action: Delete Jig
window.deleteRecord = async (id) => {
    const langData = translations[currentLang];
    if (confirm(langData['toast-delete-confirm'])) {
        if (checkAdmin()) {
            try {
                await db.jigs.delete(id);
                refreshLibrary(searchInput.value);
                updateRecentEntries();
                showToast(langData['toast-delete-success'], "info");
            } catch (err) {
                showToast(langData['toast-delete-error'], "error");
            }
        }
    }
};

// 10. Action: Edit Record
window.editRecord = async (id) => {
    if (!checkAdmin()) return;

    const item = await db.jigs.get(id);
    if (!item) return;

    editingId = id;
    document.getElementById('jigId').value = item.jigId;
    document.getElementById('styleName').value = item.styleName;
    document.getElementById('sizeRange').value = item.sizeRange || '';
    document.getElementById('pocketWidth').value = item.pocketWidth || '';
    document.getElementById('pocketHeight').value = item.pocketHeight || '';
    document.getElementById('pocketLH1').value = item.pocketLH1 || '';
    document.getElementById('pocketRH1').value = item.pocketRH1 || '';
    document.getElementById('pocketLH2').value = item.pocketLH2 || '';
    document.getElementById('pocketRH2').value = item.pocketRH2 || '';
    document.getElementById('rackLocation').value = item.rackLocation || '';
    document.getElementById('quantity').value = item.quantity || 1;
    document.getElementById('notes').value = item.notes || '';

    // Set radio buttons
    const symmetryRadio = document.querySelector(`input[name="symmetry"][value="${item.symmetry || 'Symmetrical'}"]`);
    if (symmetryRadio) symmetryRadio.checked = true;

    const shapeRadio = document.querySelector(`input[name="pocketShape"][value="${item.pocketShape || 'Straight'}"]`);
    if (shapeRadio) shapeRadio.checked = true;

    // Update UI for Edit Mode
    if (cancelEditBtn) cancelEditBtn.classList.remove('hidden');
    if (submitBtnText) submitBtnText.setAttribute('data-i18n', 'btn-update');
    if (regTitle) regTitle.setAttribute('data-i18n', 'label-edit-title');
    updateUI();

    switchTab('inventory');
    showToast(translations[currentLang]['toast-edit-mode'], "info");
};

function cancelEdit() {
    editingId = null;
    form.reset();
    if (cancelEditBtn) cancelEditBtn.classList.add('hidden');
    if (submitBtnText) submitBtnText.setAttribute('data-i18n', 'btn-save');
    if (regTitle) regTitle.setAttribute('data-i18n', 'reg-title');
    updateUI();
}

window.cancelEdit = cancelEdit;

// 11. Action: Live Search
let searchTimeout;
searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        refreshLibrary(e.target.value);
    }, 200);
});

// 12. Action: Sort Change
sortSelect?.addEventListener('change', (e) => {
    localStorage.setItem('library-sort', e.target.value);
    refreshLibrary(searchInput.value);
});

// Keyboard Shortcut: Ctrl + F to focus search
window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        switchTab('library');
        searchInput.focus();
    }
});

// 12. Action: Backup & Restore
async function exportData() {
    try {
        const jigs = await db.jigs.toArray();
        const dataStr = JSON.stringify(jigs, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

        const exportFileDefaultName = `jig_library_backup_${new Date().toISOString().slice(0, 10)}.json`;

        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();

        showToast(translations[currentLang]['toast-export-success']);
    } catch (err) {
        showToast("Export failed: " + err, "error");
    }
}

const importFileInput = document.getElementById('import-file');
importFileInput?.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!confirm(translations[currentLang]['confirm-import'])) {
        e.target.value = '';
        return;
    }

    const reader = new FileReader();
    reader.onload = async (event) => {
        try {
            const jigs = JSON.parse(event.target.result);
            if (!Array.isArray(jigs)) throw new Error("Invalid Format");

            // Basic validation and formatting check if needed
            for (const item of jigs) {
                // Ensure dates are parsed correctly if stored as strings
                if (item.dateAdded) item.dateAdded = new Date(item.dateAdded);

                // Add or update (merge by jigId or just add everything)
                // For safety, we just add everything as new entries or we can clear and replace
                // Let's just add them
                delete item.id; // Let Dexie generate new IDs
                await db.jigs.add(item);
            }

            showToast(translations[currentLang]['toast-import-success']);
            refreshLibrary();
        } catch (err) {
            console.error(err);
            showToast(translations[currentLang]['toast-import-error'], "error");
        } finally {
            e.target.value = '';
        }
    };
    reader.readAsText(file);
});

window.exportData = exportData;

// 13. Action: Share Data (Mobile)
async function shareData() {
    try {
        const jigs = await db.jigs.toArray();
        const dataStr = JSON.stringify(jigs, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const file = new File([blob], `jig_library_backup_${new Date().toISOString().slice(0, 10)}.json`, { type: 'application/json' });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
                title: 'Jig Library Backup',
                text: 'Here is the latest backup of the Jig Library.',
                files: [file]
            });
            showToast("Shared successfully!");
        } else if (navigator.share) {
            await navigator.share({
                title: 'Jig Library Backup',
                text: 'Jig Library Backup ' + new Date().toLocaleDateString(),
                url: window.location.href
            });
        } else {
            showToast("Sharing not supported on this browser", "error");
        }
    } catch (err) {
        if (err.name !== 'AbortError') {
            console.error("Share failed:", err);
            showToast("Share failed: " + err, "error");
        }
    }
}
window.shareData = shareData;

// 14. Action: Update System
const APP_VERSION = "1.6";
async function checkForUpdates() {
    const updateBanner = document.getElementById('update-banner');
    if (!updateBanner) return;

    try {
        // In a real scenario, this would be a URL to your version.json on GitHub or a server
        // Example: const res = await fetch('https://raw.githubusercontent.com/user/repo/main/version.json');

        // FOR NOW: We simulate a check. In production, provide a real URL.
        // Add cache-busting timestamp to bypass cache
        const res = await fetch(`version.json?t=${Date.now()}`).catch(e => null);
        if (res && res.ok) {
            const data = await res.json();
            if (data.version && data.version !== APP_VERSION) {
                updateBanner.classList.remove('hidden');
            }
        }
    } catch (err) {
        console.log("Update check skipped (local environment)");
    }
}

// 15. Initial Boot
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    updateUI();
    loadCustomGuide();
    checkForUpdates();

    // Set initial sort focus
    if (sortSelect) {
        sortSelect.value = 'id';
    }

    refreshLibrary();
    updateRecentEntries();
    suggestNextJigId();
    lucide.createIcons();

    setTimeout(() => {
        dbStatus?.classList.remove('hidden');
    }, 800);
});
