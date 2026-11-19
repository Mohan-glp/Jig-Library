# 📱 SIP ITALY - Jig Management Library (Professional Edition v2.0)

A high-performance Progressive Web App (PWA) designed for tracking, managing, and measuring apparel manufacturing jigs on desktop, tablets, and mobile devices (Android & iOS).

---

## 🚀 Key Features

1. **📏 Technical Measurement Search with Tolerance**:
   - Filter jigs by precise dimensions: **W** (Width), **H** (Height), **LH1**, **RH1**, **LH2**, **RH2**, **CH1**, **CH2**.
   - **Custom Tolerance**: `±0 mm` (Exact), `±1 mm`, `±2 mm`, `±5 mm`, or custom decimal tolerance.
   - **Match Conditions**:
     - `Match All (AND)`: All specified dimensions must match within tolerance.
     - `Match Any (OR)`: Any specified dimension matching will return the jig.
   - **Mobile Touch Optimized**: Instant numeric keypad with `inputmode="decimal"` and touch presets.

2. **📊 Dual Inventory Tracking**:
   - Distinct **Jig Styles/Models** count (`X Jigs`).
   - Total **Physical Stock Units** count (`Y Total Units`).
   - Dynamic real-time calculation with search and dimension filters.

3. **🛡️ Data Integrity & Duplicate Protection**:
   - **Smart Upsert on Backup Restore**: Matches by `Jig ID` and updates existing records instead of creating duplicate entries.
   - **Clean Duplicates Tool**: Dedicated admin tool (`<i data-lucide="copy-slash"></i>`) to detect and remove duplicate entries.
   - **Registration Check**: Prevents accidental registration of duplicate Jig IDs.

4. **📲 Native Mobile & PWA Optimization**:
   - Fast offline operation via Service Worker cache.
   - Network-First caching strategy ensures mobile devices get live updates when online.
   - Native mobile sharing via Web Share API (`navigator.share`).
   - Fully responsive layout tailored for smartphones.

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

## 🔄 Updating the Mobile App
When you receive an update (via WhatsApp/Email), simply replace the files on your server/folder:
- The Service Worker is configured with `skipWaiting()` and network-first caching, so mobile devices receive updates automatically on reload.
- If a new version is detected, the top notification banner will also say **"Update Now"**. Tap it to refresh to the latest version immediately.
