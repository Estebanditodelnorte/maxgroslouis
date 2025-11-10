# Agent Handbook – Max Gros-Louis Museum

## Quick Context
- Stack: Astro 5, forest-inspired dark theme, Source Sans 3 / Cormorant Garamond.
- Static assets live under `public/`; reference them via `/images/...` paths in markup.
- Goal: Replace temporary Unsplash links with onsite photography reflecting the museum community.

## Using Local Media
1. Import images directly in Astro via `<img src="/images/..." loading="lazy" />`.
2. Favor 1920×1080 stills for hero/section backgrounds; 4K shots exist for cropping.
3. Logos live as PNG/SVG/WEBP for vector-quality usage in nav/footer.

## Key Hero / Logo Assets
| Use | Path | Notes |
| --- | --- | --- |
| EMGLlogo.png | `/images/EMGLlogo.png` | Brand mark / raven symbol (PNG 1056x992) |
| Logo.svg | `/images/Logo.svg` | Brand mark / raven symbol (SVG vector) |
| hero.webp | `/images/hero.webp` | Forest hero background (WEBP 1024x1024) |
| logo.webp | `/images/logo.webp` | Brand mark / raven symbol (WEBP 1056x992) |

## Optimized WEBP Set
| Path | Subject | Notes |
| --- | --- | --- |
| `/images/webp/forest-installation.webp` | Carved figures + wings | 4096×2160, use for exhibit hero/backgrounds |
| `/images/webp/mask-gallery.webp` | Mask shelving | 1920×1080, good for cards |
| `/images/webp/community-collection.webp` | Overhead visitor view | 1920×1080 |
| `/images/webp/elder-portrait.webp` | Elder in archive room | 1920×1080 |
| `/images/webp/council-circle.webp` | Roundtable dialogue | 1920×1080 |
| `/images/webp/community-speaker.webp` | Speaker with microphone | 1920×1080 |
| `/images/webp/visitor-elder.webp` | Elder viewing artifacts | 1920×1080 |
| `/images/webp/emgl-logo.webp` | Vectorized turtle + raven logo | 1056×992 |

## Documentary Photos
| Path | File | Format | Size | Orientation | Notes |
| --- | --- | --- | --- | --- | --- |
| `/images/Photos/Photo 16.jpg` | Photo 16.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 21.jpg` | Photo 21.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 22.jpg` | Photo 22.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 26.jpg` | Photo 26.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 27.jpg` | Photo 27.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 29.jpg` | Photo 29.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 34.jpg` | Photo 34.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 4.jpg` | Photo 4.jpg | JPEG | 4096x2160 | landscape | Archival gallery photo |
| `/images/Photos/Photo 40.jpg` | Photo 40.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 45.jpg` | Photo 45.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 46.jpg` | Photo 46.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 47.jpg` | Photo 47.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 48.jpg` | Photo 48.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 49.jpg` | Photo 49.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 50.jpg` | Photo 50.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 52.jpg` | Photo 52.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 54.jpg` | Photo 54.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 56.jpg` | Photo 56.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 59.jpg` | Photo 59.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 60.jpg` | Photo 60.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 62.jpg` | Photo 62.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 66.jpg` | Photo 66.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 67.jpg` | Photo 67.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 78.jpg` | Photo 78.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 79.jpg` | Photo 79.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 8.jpg` | Photo 8.jpg | JPEG | 4096x2160 | landscape | Archival gallery photo |
| `/images/Photos/Photo 80.jpg` | Photo 80.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 82.jpg` | Photo 82.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 83.jpg` | Photo 83.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 84.jpg` | Photo 84.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 85.jpg` | Photo 85.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 86.jpg` | Photo 86.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photo 9.jpg` | Photo 9.jpg | JPEG | 4096x2160 | landscape | Archival gallery photo |
| `/images/Photos/Photo 92.jpg` | Photo 92.jpg | JPEG | 4080x3072 | landscape | Archival gallery photo |
| `/images/Photos/Photo 94.jpg` | Photo 94.jpg | JPEG | 4080x3072 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 1.jpg` | Photo 1.jpg | JPEG | 4096x2160 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 10.jpg` | Photo 10.jpg | JPEG | 4096x2160 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 11.jpg` | Photo 11.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 12.jpg` | Photo 12.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 13.jpg` | Photo 13.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 14.jpg` | Photo 14.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 15.jpg` | Photo 15.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 17.jpg` | Photo 17.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 18.jpg` | Photo 18.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 19.jpg` | Photo 19.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 2.jpg` | Photo 2.jpg | JPEG | 4096x2160 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 20.jpg` | Photo 20.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 23.jpg` | Photo 23.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 24.jpg` | Photo 24.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 25.jpg` | Photo 25.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 28.jpg` | Photo 28.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 3.jpg` | Photo 3.jpg | JPEG | 4096x2160 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 30.jpg` | Photo 30.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 31.jpg` | Photo 31.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 32.jpg` | Photo 32.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 33.jpg` | Photo 33.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 35.jpg` | Photo 35.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 36.jpg` | Photo 36.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 37.jpg` | Photo 37.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 38.jpg` | Photo 38.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 39.jpg` | Photo 39.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 41.jpg` | Photo 41.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 42.jpg` | Photo 42.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 43.jpg` | Photo 43.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 44.jpg` | Photo 44.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 5.jpg` | Photo 5.jpg | JPEG | 4096x2160 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 51.jpg` | Photo 51.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 53.jpg` | Photo 53.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 55.jpg` | Photo 55.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 57.jpg` | Photo 57.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 58.jpg` | Photo 58.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 6.jpg` | Photo 6.jpg | JPEG | 4096x2160 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 61.jpg` | Photo 61.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 63.jpg` | Photo 63.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 64.jpg` | Photo 64.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 65.jpg` | Photo 65.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 68.jpg` | Photo 68.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 69.jpg` | Photo 69.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 7.jpg` | Photo 7.jpg | JPEG | 4096x2160 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 70.jpg` | Photo 70.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 71.jpg` | Photo 71.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 72.jpg` | Photo 72.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 73.jpg` | Photo 73.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 74.jpg` | Photo 74.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 75.jpg` | Photo 75.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 76.jpg` | Photo 76.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 77.jpg` | Photo 77.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 81.jpg` | Photo 81.jpg | JPEG | 1920x1080 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 87.jpg` | Photo 87.jpg | JPEG | 4080x3072 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 88.jpg` | Photo 88.jpg | JPEG | 4080x3072 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 89.png` | Photo 89.png | PNG | 1919x1079 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 90.png` | Photo 90.png | PNG | 1919x1079 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 91.jpg` | Photo 91.jpg | JPEG | 4080x3072 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 93.jpg` | Photo 93.jpg | JPEG | 4080x3072 | landscape | Archival gallery photo |
| `/images/Photos/Photos_utilisées/Photo 95.jpg` | Photo 95.jpg | JPEG | 4080x3072 | landscape | Archival gallery photo |

## Photos Utilisées (curated selections)
| Path | File | Format | Size | Orientation | Notes |
| --- | --- | --- | --- | --- | --- |

## Workflow Notes
- For new assets, drop them into `public/images/…` and re-run the Pillow script in `.venv` to refresh this catalog.
- When wiring assets, include descriptive `alt` text (people names, artifact types).
- Prefer `.webp` for performance; convert large JPGs as needed.
