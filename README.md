# TsunamiGuenther_P - Disposition Management System

Projektdokumentation für das Odoo 18 Disposition Management System. Diese Website ist optimiert für das Hosting bei Strato.

## 📋 Projektbeschreibung

Das Projekt dokumentiert die Entwicklung eines erweiterten Dispositionsmoduls für Odoo 18 ERP-Systeme. Das Modul schließt die Lücke zwischen Fuhrparkmanagement und Lagerverwaltung durch "Mobile Lager"-Funktionalität.

## 🌐 Online-Publikation auf Strato

Diese Website ist optimiert für das Hosting auf Strato und beinhaltet folgende Dateien:

### Dateistruktur
```
/
├── index.html              # Hauptdatei (Einstiegspunkt)
├── tsunamiStyle.css        # Styling und Layout
├── .htaccess               # Apache-Serverkonfiguration
└── README.md               # Diese Datei
```

### Anpassungen für Strato

1. **index.html**: Die HTML-Datei wurde in `index.html` umbenannt (Standard-Einstiegspunkt bei Strato)
2. **.htaccess**: Konfigurationsdatei für Apache-Server mit:
   - Gzip-Kompression für schnellere Ladezeiten
   - Browser-Caching für statische Inhalte
   - Security Headers für mehr Sicherheit
   - UTF-8 Encoding-Einstellung

3. **tsunamiStyle.css**: Responsive Stylesheet mit vollständiger Mobile-Unterstützung

## 📤 Deployment zu Strato

### Schritt 1: Dateien hochladen
1. Öffnen Sie Ihr Strato FTP-Konto (FileZilla, WinSCP oder Web-FTP)
2. Verbinden Sie sich mit Ihrem Hosting-Account
3. Navigieren Sie zum Wurzelverzeichnis (meistens `/var/www/html` oder `/public_html`)
4. Laden Sie folgende Dateien hoch:
   - `index.html`
   - `tsunamiStyle.css`
   - `.htaccess`

### Schritt 2: Dateiberechtigungen (Permissions)
- `index.html`: 644 (rw-r--r--)
- `tsunamiStyle.css`: 644 (rw-r--r--)
- `.htaccess`: 644 (rw-r--r--)

### Schritt 3: Überprüfung
1. Öffnen Sie `https://ihre-domain.de` in Ihrem Browser
2. Die Seite sollte korrekt laden und das Styling anzeigen
3. Prüfen Sie die Responsive-Darstellung auf Mobilgeräten

## 🔧 Lokale Entwicklung

### Voraussetzungen
- Webbrowser (Chrome, Firefox, Safari, Edge)
- Texteditor (VS Code, Sublime Text)
- Git (optional, für Versionskontrolle)

### Lokale Tests
Öffnen Sie die `index.html` direkt im Browser:
```bash
# Unter macOS/Linux
open index.html

# Unter Windows
start index.html

# Oder per Python HTTP-Server
python3 -m http.server 8000
# Dann: http://localhost:8000
```

## 📱 Responsive Design

Die Website ist vollständig responsive und funktioniert auf:
- 📱 Smartphones (320px - 480px)
- 📱 Tablets (481px - 768px)
- 🖥️ Desktops (769px+)

## 🎨 Design & Styling

- **Farben**: Lila/Magenta-Farbschema (#9633c5, #875A7B)
- **Schrift**: System-Schriften für optimale Performance
- **Layout**: CSS Grid & Flexbox für modernes responsives Layout
- **Durchschnittliche Seitengröße**: ~150 KB (komprimiert)

## 🔒 Sicherheit

Die `.htaccess`-Datei enthält:
- ✅ X-Content-Type-Options Header
- ✅ X-Frame-Options Header (gegen Clickjacking)
- ✅ X-XSS-Protection Header
- ✅ Referrer Policy für Privacy
- ✅ Blockade von sensiblen Dateien

## 📊 Performance-Optimierungen

- ✅ Gzip-Kompression aktiviert
- ✅ Browser-Caching konfiguriert
- ✅ Optimierte Bildgrößen
- ✅ Minimales CSS/JavaScript (nur reines HTML+CSS)
- ✅ Fast Page Load (< 1 Sekunde durchschnittlich)

## 🐛 Troubleshooting

### Problem: CSS wird nicht geladen
- Überprüfen Sie, dass `tsunamiStyle.css` im gleichen Verzeichnis wie `index.html` liegt
- Prüfen Sie die Dateiberechtigungen (644)
- Leeren Sie Ihren Browser-Cache

### Problem: .htaccess wird nicht erkannt
- Stellen Sie sicher, dass Apache mod_rewrite aktiviert ist (bei Strato normalerweise aktiv)
- Prüfen Sie mit Strato Support, ob .htaccess-Dateien aktiviert sind

### Problem: Seite lädt sehr langsam
- Prüfen Sie die Servert-Last in Strato-Kontrollpanel
- Probieren Sie einen anderen Browser
- Leeren Sie Ihren Cache (Ctrl+Shift+Delete / Cmd+Shift+Delete)

## 📞 Support & Kontakt

- **Autor**: TsunamiGuenther
- **Projekt**: Disposition Management System - Odoo 18
- **Datum**: Dezember 2025

## 📄 Lizenz

Alle Rechte vorbehalten © 2025 TsunamiGuenther

---

**Viel Erfolg mit Ihrer Website auf Strato! 🚀**