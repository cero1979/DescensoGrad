# 2. Laboratorio interactivo

La siguiente aplicación ejecuta Python en vivo dentro del navegador mediante
Pyodide. El código fuente no se muestra en la interfaz: solo aparecen los
controles, la gráfica de curvas de nivel, la ruta y el costo inicial y final.

{% embed url="https://cero1979.github.io/DescensoGrad/" %}

Si el bloque no se carga dentro de su visor, ábralo directamente:

[Abrir el laboratorio de Python en vivo](https://cero1979.github.io/DescensoGrad/)

## Qué se puede ajustar

- **Inicio `x₀`**: inversión inicial en publicidad.
- **Inicio `y₀`**: inventario inicial de seguridad.
- **Paso `η`**: tamaño de cada corrección.
- **Iteraciones**: número de rondas.

### Preguntas para explorar

1. ¿Qué cambia si comenzamos más lejos del mínimo?
2. ¿Qué ocurre cuando `η` es pequeño?
3. ¿Qué ocurre cuando `η` se acerca a `0.50`?
4. ¿La ruta siempre baja el costo?

## Alternativa con Voilà

También puede abrir el cuaderno mediante Binder + Voilà:

[Abrir el cuaderno con Voilà](https://mybinder.org/v2/gh/cero1979/DescensoGrad/main?urlpath=voila%2Frender%2Fdescenso_gradiente_2_variables_autocontenido.ipynb)

Voilà oculta las celdas de código, pero Binder no permite ser mostrado dentro
de GitBook por su política de seguridad. Por eso se conserva como enlace
externo y la aplicación Pyodide se usa para el bloque embebido.
