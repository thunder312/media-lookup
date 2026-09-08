# media-lookup

## Project setup
```
npm install
```

Google-API-Keys in `.env.local` eintragen (Vorlage: `.env.example`).

### Startet Client (Vite) UND Server (Express + MySQL) gleichzeitig
```
npm run start
```

### Nur Client: Vite-Dev-Server mit Hot-Reload (Port 8081)
```
npm run dev
```

### Production-Build (Ausgabe nach dist/)
```
npm run build
```

### Production-Build lokal ansehen
```
npm run preview
```

### Lint (nur Frontend-Code) und Auto-Fix
```
npm run lint
```

## Build-Tooling
Vite 8 + `@vitejs/plugin-vue`. Konfiguration in `vite.config.mjs`.
