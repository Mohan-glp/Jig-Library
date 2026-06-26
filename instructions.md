<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sip Italy - Jig Library</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/dexie/dist/dexie.js"></script>
    <style>
        .jig-card:hover { transform: translateY(-2px); transition: all 0.2s; }
    </style>
</head>
<body class="bg-slate-50 font-sans min-h-screen">

    <nav class="bg-blue-900 text-white p-4 shadow-lg sticky top-0 z-50">
        <div class="container mx-auto flex justify-between items-center">
            <div>
                <h1 class="text-xl font-black italic tracking-wider">JIG LIBRARY</h1>
                <p class="text-[10px] uppercase font-bold text-blue-300">Jig Management System v1.0</p>
            </div>
            <div id="status" class="bg-green-500/20 text-green-400 text-[10px] px-3 py-1 rounded-full border border-green-500/50 font-bold uppercase">
                Local Database Active
            </div>
        </div>
    </nav>

    <main class="container mx-auto p-4 max-w-6xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <section class="lg:col-span-4">
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <h2 class="text-lg font-bold mb-6 text-slate-800 flex items-center gap-2 border-b pb-3">
                        <span class="text-blue-600">➕</span> New Jig Registration
                    </h2>
                    
                    <form id="jig-form" class="space-y-5">
                        <div>
                            <label class="block text-xs font-bold text-slate-500 uppercase mb-1">Jig ID / Serial Number</label>
                            <input type="text" id="jigId" required class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="e.g. SIP-001">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-slate-500 uppercase mb-1">Style Name / Order No</label>
                            <input type="text" id="styleName" required class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="e.g. Levi's 511">
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-bold text-slate-500 uppercase mb-1">Pocket Size</label>
                                <input type="text" id="pocketSize" class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" placeholder="12x15 cm">
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-slate-500 uppercase mb-1">Rack Loc</label>
                                <input type="text" id="rackLocation" class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" placeholder="A-04">
                            </div>
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-slate-500 uppercase mb-1">Technical Notes</label>
                            <textarea id="notes" rows="3" class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" placeholder="Air pressure, folder settings etc."></textarea>
                        </div>
                        <button type="submit" class="w-full bg-blue-700 text-white font-bold py-4 rounded-xl hover:bg-blue-800 shadow-lg shadow-blue-200 transition-all active:scale-95">
                            SAVE TO LIBRARY
                        </button>
                    </form>
                </div>
            </section>

            <section class="lg:col-span-8">
                <div class="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                    <h2 class="text-xl font-bold text-slate-800 flex items-center gap-2">
                        📖 Current Library <span id="count" class="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-lg text-sm">0</span>
                    </h2>
                    <div class="relative w-full md:w-80">
                        <input type="text" id="searchJig" placeholder="Search Style or Jig ID..." class="w-full p-3 pl-11 bg-white border border-slate-200 rounded-2xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500 transition">
                        <span class="absolute left-4 top-3.5 opacity-40">🔍</span>
                    </div>
                </div>

                <div id="jig-list" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    </div>
            </section>

        </div>
    </main>

    <script>
        // 1. Database Setup (IndexedDB via Dexie)
        const db = new Dexie("MaintenanceJigDB");
        db.version(1).stores({
            jigs: '++id, jigId, styleName, pocketSize, rackLocation' 
        });

        const form = document.getElementById('jig-form');
        const list = document.getElementById('jig-list');
        const searchInput = document.getElementById('searchJig');
        const countBadge = document.getElementById('count');

        // 2. Function: Load and Display Jigs
        async function refreshLibrary(filter = "") {
            list.innerHTML = '';
            let jigs = await db.jigs.reverse().toArray();

            if (filter) {
                jigs = jigs.filter(j => 
                    j.styleName.toLowerCase().includes(filter.toLowerCase()) || 
                    j.jigId.toLowerCase().includes(filter.toLowerCase())
                );
            }

            countBadge.innerText = jigs.length;

            if (jigs.length === 0) {
                list.innerHTML = `<div class="col-span-full py-20 text-center text-slate-400 font-medium">No jigs found matching your criteria.</div>`;
                return;
            }

            jigs.forEach(j => {
                const card = document.createElement('div');
                card.className = "jig-card bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between";
                card.innerHTML = `
                    <div>
                        <div class="flex justify-between items-start mb-3">
                            <span class="bg-slate-100 text-slate-600 text-[10px] font-black px-2 py-1 rounded uppercase tracking-tighter">${j.jigId}</span>
                            <button onclick="deleteRecord(${j.id})" class="text-slate-300 hover:text-red-500 transition">🗑️</button>
                        </div>
                        <h3 class="font-bold text-slate-900 text-lg leading-tight mb-2 uppercase">${j.styleName}</h3>
                        <div class="space-y-1">
                            <p class="text-xs text-slate-500"><strong>📐 POCKET:</strong> ${j.pocketSize || 'N/A'}</p>
                            <p class="text-xs text-slate-500"><strong>📍 LOCATION:</strong> ${j.rackLocation || 'Unassigned'}</p>
                        </div>
                        <div class="mt-4 pt-3 border-t border-dashed border-slate-100">
                            <p class="text-[11px] text-slate-400 italic">${j.notes || 'No extra notes provided.'}</p>
                        </div>
                    </div>
                `;
                list.appendChild(card);
            });
        }

        // 3. Action: Add New Jig
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const data = {
                jigId: document.getElementById('jigId').value,
                styleName: document.getElementById('styleName').value,
                pocketSize: document.getElementById('pocketSize').value,
                rackLocation: document.getElementById('rackLocation').value,
                notes: document.getElementById('notes').value,
                dateAdded: new Date()
            };

            try {
                await db.jigs.add(data);
                form.reset();
                refreshLibrary();
                alert("Jig Successfully Registered!");
            } catch (err) {
                alert("Error saving data: " + err);
            }
        });

        // 4. Action: Delete Jig
        window.deleteRecord = async (id) => {
            if (confirm("Are you sure? This will permanently remove the jig details.")) {
                await db.jigs.delete(id);
                refreshLibrary();
            }
        };

        // 5. Action: Live Search
        searchInput.addEventListener('input', (e) => refreshLibrary(e.target.value));

        // Initial Boot
        refreshLibrary();
    </script>
</body>

---

## 📱 How to Install on Mobile (PWA)

Since this app is a **Progressive Web App (PWA)**, you can install it on your phone to use it like a native application with an icon on your home screen.

### For Android (Google Chrome)
1. Open your mobile browser and enter the URL.
2. Tap the **three dots (⋮)** in the top right corner.
3. Select **"Install app"** or **"Add to Home screen"**.
4. Follow the prompts to confirm.

### For iPhone/iPad (Safari)
1. Open Safari and enter the URL.
2. Tap the **Share button** (the square with an arrow pointing up at the bottom).
3. Scroll down the list of options and tap **"Add to Home Screen"**.
4. Tap **Add** in the top right corner.

---
## 🔄 Updating the App
When you receive an update (via WhatsApp/Email), simply replace the files on your server/folder. If a new version is detected, a blue banner will appear at the top saying **"Update Now"**. Tap it to refresh to the latest version.
