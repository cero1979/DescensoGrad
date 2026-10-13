# Laboratorio interactivo

La aplicación ejecuta Python en vivo en el navegador. El código permanece
oculto en la interfaz: solo se muestran cuatro sliders, la gráfica de curvas de
nivel, la ruta animada sobre el mapa, la superficie 3D y el cambio en el costo.

<iframe
  src="lab/index.html"
  title="Laboratorio interactivo de descenso del gradiente"
  style="width:100%; min-height:1050px; border:1px solid #dbe3ef; border-radius:12px;"
  loading="lazy"
></iframe>

## Qué puede explorar

- **Inicio $x_0$**: inversión inicial en publicidad.
- **Inicio $y_0$**: inventario inicial de seguridad.
- **Paso $\eta$**: intensidad de cada corrección.
- **Iteraciones**: número de rondas.

Pruebe $\eta=0.10$, después $\eta=0.45$ y finalmente $\eta=0.50$. Observe
cuándo la ruta avanza suavemente y cuándo oscila.

```{admonition} Alternativa con Voilà
:class: note
Si su navegador bloquea el laboratorio, puede
[abrir el cuaderno con Binder + Voilà](https://mybinder.org/v2/gh/cero1979/DescensoGrad/main?urlpath=voila%2Frender%2Fdescenso_gradiente_2_variables_autocontenido.ipynb).
La primera carga puede tardar porque Binder crea un servidor temporal.
```
