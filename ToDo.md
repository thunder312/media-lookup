# media-lookup

---

# 🔴 Sicherheit / Aufräumen (Stand 2026-09-07)

Falls du das Projekt wieder aufnimmst – zuerst hier durch:

## 1. Google API-Key rotieren (dringend – Key ist öffentlich)
Der Key `AIzaSy…` (Google-Cloud-Projekt `media-lookup`) war früher **hartkodiert in `src/main.js`**
(Commits `b5fb1a9` und `f929d63`, beide gepusht) und steht damit in der **öffentlichen Git-History**
auf `github.com/thunder312/media-lookup`. `.gitignore` ändert daran nichts mehr.

- [ ] In der [Google Cloud Console](https://console.cloud.google.com/apis/credentials) → Projekt
      `media-lookup` den alten API-Key **löschen** und einen neuen erstellen.
- [ ] Neuen Key **nur** in `.env.local` eintragen (`VUE_APP_GOOGLE_API_KEY=…`) – ist gitignored.
- [ ] Neuen Key **einschränken**: HTTP-Referrer (eigene Domain / localhost) + API-Restrictions
      (nur genutzte APIs: Knowledge Graph Search, Books, …).

Hinweis: `VUE_APP_*` wird ins Client-Bundle einkompiliert und ist im Browser sowieso sichtbar –
ein Frontend-API-Key ist nie geheim, nur über Restriktionen absicherbar.

## 2. OAuth Client Secret rotieren (optional)
`MediaLookup/client_secret_…googleusercontent.com.json` enthält ein echtes OAuth Client Secret
(`GOCSPX-…`). Es war nur in einem lokalen Commit und wurde **vor dem Push entfernt** → **nicht auf
GitHub**. Datei ist jetzt via `.gitignore` (`client_secret_*.json`) ignoriert, liegt weiter lokal.

- [ ] Da die Datei in einem Dropbox-Ordner lag: Secret in der Cloud Console rotieren (billig, sicher).
- [ ] Prüfen ob überhaupt gebraucht: bei reinem Frontend nur `client_id` per PKCE-Flow → JSON löschen.
      Falls der OAuth-Austausch in `server.js` läuft, Secret als Env-Var auf den Server, nie ins Repo.

## 3. npm-Vulnerabilities
- [x] `nanoid` 3.3.7 → 3.3.18 (GHSA-xwg4-73v4-xw9w), erledigt 2026-09-07. War nur transitive
      Build-Abhängigkeit (`@vue/cli-service → postcss`), nicht im Runtime-Bundle.
- [x] `node-sass` → **Dart Sass** (`sass`), erledigt 2026-09-07. `node-sass@8` hat keine Binary
      für Node 22, `npm run build` brach ab. Läuft jetzt durch (nur Dart-Sass-Deprecation-Warnings:
      legacy JS API, `@import`, `map-get`/`map-merge` – erst bei Dart Sass 3.0 relevant, siehe unten).
- [x] `browserslist` → `^4.28.7` (GHSA-73wf-gq98-2v4g, Prototype Pollution / DoS via
      `browserslist-stats.json`), erledigt 2026-09-08. Nur transitive Build-Abhängigkeit
      (autoprefixer/babel/webpack). Per `overrides` in `package.json` erzwungen → jetzt 4.28.9.
- [ ] `npm audit` meldet weiterhin viele Funde – fast alles im veralteten `@vue/cli`-Tooling
      (Build-Zeit, nicht Runtime). Bei Wiederaufnahme überlegen:
  - Migration `@vue/cli` (EOL) → **Vite** räumt den Großteil auf.
- [ ] SCSS auf Modul-System umstellen (`@use`/`map.get` statt `@import`/`map-get`) in
      `src/scss/_themes.scss` + `_app.scss`, sonst bricht es mit Dart Sass 3.0.
      Automatischer Migrator: `npx sass-migrator module src/scss/*.scss`.

## 4. `MediaLookup/`-Unterordner
Enthält nur DB-Dumps (`db/Dump20231213/*.sql`), keinen Code. Prüfen ob noch gebraucht, sonst
archivieren/löschen.

---

## Routing

## Database

## Importer
### Books
``` by ISBN with Google API ready; see Home view ```
``` translate {{ books[index].volumeInfo.description}} to german  on the fly? ``` 

## GenericTable
``` make it one again :-) ```

## Modals
## Create new Dataset
``` make it visible modal-tag is always rendered in lower-case, but my export name of the component is in Camel Case ```

## i18n

## themes
``` done some first steps  ```