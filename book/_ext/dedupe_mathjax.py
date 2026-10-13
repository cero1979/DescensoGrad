"""Evita que los archivos de MathJax auto-alojado se inyecten como scripts.

Jupyter Book añade automáticamente a ``html_js_files`` todos los ``.js`` que
encuentra dentro de ``_static``. Como ``sphinx.ext.mathjax`` ya inserta el
archivo indicado en ``mathjax_path`` y el resto son módulos que MathJax carga
bajo demanda, el navegador terminaba ejecutando MathJax dos veces y la segunda
ejecución lanzaba un ``TypeError`` que dejaba las fórmulas sin renderizar.
Aquí se eliminan todas esas entradas.
"""

PREFIX = "mathjax/"


def _drop_mathjax_assets(app, config):
    kept = []
    for entry in config.html_js_files:
        name = entry[0] if isinstance(entry, (list, tuple)) else entry
        if not str(name).startswith(PREFIX):
            kept.append(entry)
    config.html_js_files = kept


def setup(app):
    app.connect("config-inited", _drop_mathjax_assets)
    return {"version": "1.0", "parallel_read_safe": True, "parallel_write_safe": True}
