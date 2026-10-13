# Guía para presentar

```{admonition} Libreto listo para imprimir
:class: tip
[Descargar el libreto de tablero en PDF](./_static/descenso_gradiente_libreto.pdf).
La regla de parada y el final numérico del ejemplo aparecen en la sección
**Mostrar cuándo termina**.
```

## Secuencia sugerida

### 1. Pregunta de apertura

> Si una empresa prueba una política y el costo aumenta, ¿qué debería cambiar
> en el siguiente intento?

### 2. Dibujar el mapa

Trace dos ejes, varias curvas de nivel y un punto inicial. Explique que una
política completa necesita dos coordenadas.

### 3. Escribir la fórmula

$$
\boldsymbol{\theta}_{k+1}
=\boldsymbol{\theta}_k-\eta\,\nabla J(\boldsymbol{\theta}_k).
$$

Tradúzcala como:

> nueva decisión = decisión actual − tamaño del paso × señal de subida.

### 4. Mostrar cuándo termina

Escriba en el tablero esta pregunta después de cada actualización:

$$
\text{¿La mejora }J(\boldsymbol{\theta}_k)
-J(\boldsymbol{\theta}_{k+1})\text{ todavía es importante?}
$$

Use una tolerancia pequeña $\varepsilon$ y detenga el proceso cuando se cumpla
al menos una de estas condiciones:

$$
\boxed{
J(\boldsymbol{\theta}_k)-J(\boldsymbol{\theta}_{k+1})<\varepsilon
\quad\text{o}\quad
k+1=K_{\max}
}
$$

Tradúzcalo como:

> Terminamos porque el costo casi no cambia o porque agotamos el número máximo
> de rondas. No basta con decir “se repite”; siempre debe existir una regla de
> parada.

En el ejemplo de clase puede usar $\varepsilon=0.01$ y
$K_{\max}=30$. Desde $(2,2)$, con $\eta=0.10$, la primera mejora menor que
$0.01$ ocurre en la ronda 20:

$$
J_{19}\approx100.0208,\qquad
J_{20}\approx100.0133,\qquad
J_{19}-J_{20}\approx0.0075<0.01.
$$

Por tanto, escriba claramente:

> **FIN en la ronda 20:** la mejora ya es menor que $0.01$. La política es
> aproximadamente $(x,y)=(11.885,8.000)$ y el costo es $100.013$.

Si se muestran solamente ocho rondas, aclare que el proceso termina por el
límite elegido para la demostración, **no** porque ya haya convergido:

> **FIN de la demostración en la ronda 8:** se alcanzó el límite de rondas.
> El algoritmo podría continuar.

### 5. Usar el laboratorio

Pida a los estudiantes predecir la ruta antes de mover los sliders. Compare un
paso pequeño con un paso cercano al límite de estabilidad y use el botón
**Animar la ruta**.

### 6. Cerrar con tres ideas

- el gradiente tiene una señal por decisión;
- el signo indica hacia dónde corregir;
- una buena ruta se verifica observando si el costo disminuye;
- el proceso termina con una regla de parada explícita.

## Qué no hace el ejemplo

El modelo es deliberadamente sencillo. En una empresa real se estiman costos
con datos, existen restricciones y puede haber varios mínimos. El método
organiza la mejora; no sustituye el juicio gerencial.
