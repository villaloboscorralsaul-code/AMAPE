# AMAPE — Sitio web

**Asesores en Manufactura Avanzada y Proyectos Especiales** · Ciudad Juárez, Chihuahua · +52 656 822 9302

Sitio de una sola página en HTML estático, sin build ni dependencias. Funciona en cualquier hosting estático (Netlify, Cloudflare Pages, GitHub Pages o un hosting tradicional).

## Probar en local

```
python -m http.server 8000
```

Luego abrir http://localhost:8000

## Estructura

| Archivo | Qué es |
|---|---|
| `index.html` | La página completa, con CSS y JS integrados |
| `assets/` | Logo, 1 video en B/N (~0.9 MB), fotos de líneas de producción en B/N e imagen para compartir |
| `favicon-32.png`, `apple-touch-icon.png` | Íconos |
| `robots.txt` | Permite indexar todo |

## Secciones (v3.2)

Marca de agua animada (línea de producción en SVG) detrás del hero y del llamado intermedio.


1. **Hero:** *Hacemos avanzar su manufactura*, con botón para agendar y enlace a WhatsApp
2. **Credenciales:** +30 años · A la medida · Ciudad Juárez
3. **Retos (interactivo):** el visitante elige su reto, ve los servicios que le ayudan y abre WhatsApp con el mensaje escrito
4. **Servicios:** los de la presentación original, más un bloque de "¿busca algo que no está en la lista?". **No publicar el número de servicios**
5. **Galería en piso:** 6 tomas (automotriz, médico, arranque, revisión, traslado, línea en operación)
6. **Cómo trabajamos:** 6 pasos agrupados en Servicio → Proyecto → Entrega, válidos para cualquier servicio
7. **Llamado intermedio:** WhatsApp y teléfono
8. **Enfoque:** Crecimiento · Mejora · Calidad
9. **Nosotros:** misión, valores e industrias
10. **Preguntas frecuentes:** 5 preguntas
11. **Contacto:** formulario que se envía por WhatsApp (o por correo, si se configura)
12. **Botón flotante de WhatsApp:** aparece al bajar del hero

## Contacto

- El teléfono y el WhatsApp están escritos directo en el HTML. Para cambiarlos, buscar `6568229302`.
- `CONTACTO.correo` va al final de `index.html`. Si se llena, el formulario abre un correo y el dato aparece en la sección de contacto; si queda vacío, el formulario manda el mensaje por WhatsApp.

## Pendiente antes de publicar

- [ ] **Correo** de contacto (opcional)
- [ ] **Dominio:** agregar `<link rel="canonical">`, poner URLs absolutas en `og:image` y crear `sitemap.xml`
- [ ] **Confirmar con el Ing.:**
  - las descripciones de los 8 servicios
  - los 6 pasos de cómo trabajamos
  - las industrias (Automotriz, Dispositivos médicos, Electrónica), que salen del brief de marca, no de clientes confirmados
- [ ] **Casos de éxito, cifras y logos de clientes.** Es lo que más usa la competencia y no se puede inventar.
- [ ] **Fotos reales:** las imágenes y los videos actuales son generados con IA. Sirven de ambiente, pero no deben presentarse como proyectos de AMAPE.
- [ ] **Búsqueda IMPI** de la marca

## Reglas de marca aplicadas

- Azul `#00579B` · Naranja `#F86A1B` (solo acento) · Blanco · Tinta `#0E1013`
- Titulares en Oswald (grotesca condensada, como el wordmark); cuerpo en Inter
- Fotografía en blanco y negro; sin degradados, sombras, 3D, engranes ni emojis
