# Bitácora de Activos de Audio - Ecosistema de Idiomas
secret removed
Este archivo registra las configuraciones exactas utilizadas en las plataformas de IA para la generación de los bloques de audio del sistema.

## 🌐 Idioma: Inglés (Target)

| Archivo Final | Plataforma | Actor / Voz | Configuración Específica | Fecha | Estado / Notas |
Formato para archivo de audio:
# idioma_genero_nombre_plataforma_proyecto#_versión#.formato de audio(mp3, wav, etc 
    1- Idioma- formato de dos letras:
        en = english
        es = español
        pt = português
        he = hebreo
        de = Alemán o Deutsche
        etc.
    2- Gender
        m = Masculino
        f = Femenino
    3- nombre del actor
    4- Herramienta o plataforma
        rvcr = revoicer.ai
        clnv = clonevoice.ia
        11lbs = elevenlabs
        etc.
    5- Proyecto # (puede ses cualquier letra del abecedario mas número)
        En el archivo de productos como por ejemplo las frases de Erik son el primer proyecto o la primera producción, en todos los idiomas, entonces esto lo unifica pues al ver este codigo sabremos que todos los audios son de lo mismo.
    6- Version# = si hay algunos cambios pequeños va a cambiar a 2 y así sucesivamente.

| `en_m_milo_rvcr_P1_v1.mp3` | Revoicer = rvcr | "Milo" (English - US - Playful yet polished, perfect for animated characters, family-friendly storytelling, and lively cartoon adventures.) | Velocidad: 1.0x <br>Tono: Profesional / Serio <br>Pausas: 1.5s manuales entre líneas. | 16/06/2026 | **Activo.** Sonido limpio, buena cadencia en frases largas. |








| `en_hombre_clone_v1.mp3` | CloneVoice.ai | Clon Propio (Actor 1) | Estilo: Narrativo <br>Bloque de texto continuo. Sin pausas forzadas. | 14/06/2026 | **Prueba.** Flujo más rápido, requiere ajustar timestamps de forma más ajustada. |

---

## 📑 Detalles de Regeneración y Correcciones
Sección para anotar si alguna frase específica dio problemas en la IA durante la lectura del bloque:

* **14/06/2026 - Frase 14 (`emails`):** En la versión de Revoicer, el actor "David" tendía a forzar la pronunciación. Se ajustó el texto internamente en la plataforma a "e-mails" antes de exportar el bloque definitivo para mejorar la naturalidad.
* **14/06/2026 - Frase 12 (`teeth`):** En CloneVoice se escuchaba una micro-respiración antes de la palabra. Se mantiene aceptable para producción.

| `en_hombre_revoicer_v1.mp3` | Revoicer | "David" (US Mature) | Velocidad: 1.0x <br>Tono: Profesional <br>Pausas: 1.5s automáticas. | 14/06/2026 | **Activo.** Listo para sincronizar. |

* **14/06/2026 - Frase [Número] (`[Palabra Oculta]`):** [Escribe aquí tu nota o el ajuste que tuviste que hacer en la IA].