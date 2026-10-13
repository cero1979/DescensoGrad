# Descenso del gradiente — GitBook

La documentación publicada se encuentra en `docs/`.

## Desarrollo local

Para probar el laboratorio ocultando el código:

```bash
python -m pip install -r requirements.txt
voila descenso_gradiente_2_variables_autocontenido.ipynb
```

Abra la URL que muestra Voilà. La aplicación presenta las gráficas y los
sliders, pero no las celdas de código.

## Publicación

GitBook usa `.gitbook.yaml` y `docs/SUMMARY.md` para construir el libro.
El laboratorio embebido usa Binder + Voilà. Binder puede tardar en iniciar el
primer entorno; para una clase con muchos estudiantes conviene desplegar el
mismo notebook en un servicio Voilà persistente y reemplazar la URL del embed
en `docs/02-laboratorio.md`.
