# La idea en un mapa

## Una decisión o dos decisiones

Con una decisión, imaginamos una curva de costos. Con dos decisiones, cada
política empresarial es un punto $(x,y)$ en un mapa:

- desplazarse horizontalmente cambia la publicidad;
- desplazarse verticalmente cambia el inventario;
- las curvas de nivel unen políticas con costos parecidos;
- el centro del mapa representa la zona de menor costo.

La pregunta práctica es:

> Desde el punto donde estamos, ¿en qué dirección disminuye el costo?

## La fórmula general

Si $\boldsymbol{\theta}$ reúne todas las decisiones y
$J(\boldsymbol{\theta})$ es el costo:

$$
\boldsymbol{\theta}_{k+1}
=\boldsymbol{\theta}_k-\eta\,\nabla J(\boldsymbol{\theta}_k).
$$

Para dos decisiones:

$$
\begin{aligned}
x_{k+1}
&=x_k-\eta\,\frac{\partial J}{\partial x}(x_k,y_k),\\
y_{k+1}
&=y_k-\eta\,\frac{\partial J}{\partial y}(x_k,y_k).
\end{aligned}
$$

## La ruta de aplicación

1. Definir las decisiones y el indicador que se quiere reducir.
2. Elegir una política inicial $(x_0,y_0)$.
3. Medir las dos pendientes parciales.
4. Mover cada decisión en sentido contrario a su pendiente.
5. Registrar el nuevo punto y su costo.
6. Repetir mientras la mejora sea útil y estable.

La sucesión

$$
(x_0,y_0)\longrightarrow(x_1,y_1)
\longrightarrow(x_2,y_2)\longrightarrow\cdots
$$

es la **ruta** del algoritmo. Cada punto es una política y cada flecha es una
corrección.

## Derivadas parciales, sin miedo

La derivada parcial respecto de $x$ pregunta qué ocurre si cambiamos publicidad
manteniendo fijo el inventario. La derivada parcial respecto de $y$ hace el
experimento contrario.

No necesitamos demostrar formalmente las reglas para interpretar el método:
solo distinguir qué variable cambia y cuál permanece fija.
