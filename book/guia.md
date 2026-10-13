# Guía para presentar

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

### 4. Usar el laboratorio

Pida a los estudiantes predecir la ruta antes de mover los sliders. Compare un
paso pequeño con un paso cercano al límite de estabilidad y use el botón
**Animar la ruta**.

### 5. Cerrar con tres ideas

- el gradiente tiene una señal por decisión;
- el signo indica hacia dónde corregir;
- una buena ruta se verifica observando si el costo disminuye.

## Qué no hace el ejemplo

El modelo es deliberadamente sencillo. En una empresa real se estiman costos
con datos, existen restricciones y puede haber varios mínimos. El método
organiza la mejora; no sustituye el juicio gerencial.
