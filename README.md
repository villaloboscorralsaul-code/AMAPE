# AMAPE — Sitio web

**Asesores en Manufactura Avanzada y Proyectos Especiales** · Ciudad Juárez, Chihuahua · +52 656 822 9302

Sitio de una sola página en HTML estático, sin build. Todo vive en `index.html` (CSS y JS integrados) más `assets/`.

## Probar en local

```
python -m http.server 8000
```

## Secciones

1. Hero con línea de producción animada
2. Datos: +30 años · A la medida · Cd. Juárez
3. Servicios
4. ¿Qué frena a su planta? (animaciones; carrusel en teléfono)
5. Galería (carrusel en teléfono)
6. Cómo trabajamos: Diagnóstico → Proyecto → Entrega
7. Llamado a WhatsApp
8. Preguntas frecuentes
9. Contacto: formulario que abre WhatsApp

## Reglas

- No publicar el número de servicios; la oferta va abierta ("¿Busca algo más? Pregúntenos").
- Nada de secciones oscuras. Azul `#00579B`, naranja `#F86A1B` solo como acento, fondos claros.
- Textos cortos: una idea por tarjeta.
- Para cambiar el WhatsApp, buscar `526568229302` en `index.html`.
