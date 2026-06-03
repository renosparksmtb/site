
## Early Bird Pricing Extension

Add the early bird tier back to the site with the new June 9, 2026 deadline, keeping the language factual (no countdowns or pressure).

### 1. `src/components/JoinSection.tsx` — Registration & Fees grid
Change the 2-column grid to a 3-card layout:
- **Card 1 (highlighted, secondary border):** "Early Bird Registration" — **$370** — "Register by June 9, 2026 (11:59 PM) to lock in the early rate."
- **Card 2:** "Season Registration" — **$385** — "Standard rate beginning June 10, 2026."
- **Card 3:** "Included" — All Nevada North NICA race fees included.

Use `sm:grid-cols-2 lg:grid-cols-3` so it stays clean on tablet/mobile.

### 2. `src/pages/Season2026.tsx` — Key Dates
Update `KEY_DATES` to four entries:
- Registration Open — Now (highlight)
- Early Bird Deadline — June 9, 2026 (highlight)
- Standard Rate Begins — $385 (June 10)
- Official Practices Begin — July 1, 2026

(Grid is already `lg:grid-cols-4`, so layout stays intact.)

### 3. Small consistency fix
The Race Schedule row for Nov 14–15 currently says "St. George, UT" but the Western Regionals section was updated to **Vernal, UT**. Update the race schedule row to "Vernal, UT" to match.

### Out of scope
- No countdown timers, urgency banners, or "limited time" language
- No layout, color, or branding changes elsewhere
- Donate section, navigation, and all other pricing references stay as-is
