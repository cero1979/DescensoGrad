# Descenso del gradiente — Jupyter Book

Libro visual en el formato de
[Jupyter Book](https://jupyterbook.org/), con navegación lateral, capítulos y
un laboratorio de Python en vivo.

## Construir el libro localmente

```bash
python -m pip install -r requirements.txt
jupyter-book build book
cp -R webapp book/_build/html/lab
python -m http.server --directory book/_build/html 8000
```

Abra `http://localhost:8000/intro.html`.

## Publicación

El libro y el laboratorio Pyodide se publican en GitHub Pages mediante
`.github/workflows/pages.yml`. La URL esperada es:

`https://cero1979.github.io/DescensoGrad/`

La fuente del libro está en `book/`; `_config.yml` controla su apariencia y
`_toc.yml` define la navegación lateral. Binder + Voilà queda disponible como
alternativa externa para ejecutar el cuaderno completo:

```bash
voila descenso_gradiente_2_variables_autocontenido.ipynb
```

> “Ocultar” significa que el estudiante no ve el código en la interfaz. Como
> el repositorio es público, el código fuente continúa siendo accesible en
> GitHub y no debe contener secretos.
