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

### Conectar GitBook

1. Cree un Space en GitBook y elija la integración con GitHub.
2. Seleccione `cero1979/DescensoGrad` y la rama `main`.
3. Use la **raíz del repositorio (`/`)** como ruta de sincronización.

No seleccione `docs/` en la integración: `.gitbook.yaml`, ubicado en la raíz,
ya declara `root: ./docs`.

### Aplicación de Python en vivo

El laboratorio embebido usa Pyodide y se publica en GitHub Pages mediante
`.github/workflows/pages.yml`. En la configuración del repositorio, seleccione
**Settings → Pages → Source: GitHub Actions**. La URL esperada es:

`https://cero1979.github.io/DescensoGrad/`

Binder + Voilà queda disponible como alternativa externa. Voilà oculta las
celdas, pero Binder impide incrustar la aplicación en un dominio distinto.

> “Ocultar” significa que el estudiante no ve el código en la interfaz. Como
> el repositorio es público, el código fuente continúa siendo accesible en
> GitHub y no debe contener secretos.
