# Ejemplo empresarial

Una cadena minorista quiere ajustar simultáneamente publicidad e inventario.
Usaremos el modelo didáctico:

$$
J(x,y)=(x-12)^2+2(y-8)^2+100.
$$

El punto $(12,8)$ representa la zona de menor costo del ejemplo.

## Derivadas parciales

$$
\frac{\partial J}{\partial x}=2(x-12),
\qquad
\frac{\partial J}{\partial y}=4(y-8).
$$

Con $x_0=2$, $y_0=2$ y $\eta=0.10$:

$$
\frac{\partial J}{\partial x}(2,2)=-20,
\qquad
\frac{\partial J}{\partial y}(2,2)=-24.
$$

Las dos señales son negativas. Por eso el algoritmo recomienda aumentar ambas
decisiones:

$$
x_1=2-0.10(-20)=4,
\qquad
y_1=2-0.10(-24)=4.4.
$$

El costo baja de

$$
J(2,2)=272
\quad\text{a}\quad
J(4,4.4)=189.92.
$$

## Tabla de las primeras rondas

La siguiente tabla conserva la cuenta que se generaba en el cuaderno. Cada fila
usa el punto de la ronda anterior, calcula sus dos pendientes y muestra la
política que se obtiene después de aplicar $\eta=0.10$.

| Ronda | $x$ publicidad | $y$ inventario | $g_x$ | $g_y$ | $x$ siguiente | $y$ siguiente | $J(x,y)$ |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 0 | 2.000 | 2.000 | -20.000 | -24.000 | 4.000 | 4.400 | 272.000 |
| 1 | 4.000 | 4.400 | -16.000 | -14.400 | 5.600 | 5.840 | 189.920 |
| 2 | 5.600 | 5.840 | -12.800 | -8.640 | 6.880 | 6.704 | 150.291 |
| 3 | 6.880 | 6.704 | -10.240 | -5.184 | 7.904 | 7.222 | 129.574 |
| 4 | 7.904 | 7.222 | -8.192 | -3.110 | 8.723 | 7.533 | 117.987 |
| 5 | 8.723 | 7.533 | -6.554 | -1.866 | 9.379 | 7.720 | 111.173 |
| 6 | 9.379 | 7.720 | -5.243 | -1.120 | 9.903 | 7.832 | 107.029 |
| 7 | 9.903 | 7.832 | -4.194 | -0.672 | 10.322 | 7.899 | 104.454 |

La fila 0 corresponde al punto inicial. La última política que aparece en la
columna de llegada es $(10.322,7.899)$, con costo aproximado
$J=102.835$. La tabla muestra dos ideas importantes: las pendientes se
acercan a cero y el costo disminuye en cada ronda.

## Qué ocurre si cambiamos el tamaño del paso

El cuaderno también permite comparar tres valores de $\eta$ partiendo de
$(2,2)$. La tabla resume la lectura de esas rutas después de nueve
actualizaciones:

| Tamaño del paso $\eta$ | Comportamiento visible | Interpretación |
|---:|---|---|
| 0.03 | Avance lento y estable | Correcciones prudentes; necesita más rondas. |
| 0.10 | Avance equilibrado | Buena opción para seguir la cuenta paso a paso. |
| 0.30 | Oscilación o saltos grandes | Una corrección demasiado intensa puede alejar la ruta del valle. |

## Interpretación

La empresa no adivinó la solución. Hizo una ronda de medición y corrección.
Después repite la misma receta:

1. calcular las dos pendientes;
2. actualizar publicidad e inventario;
3. comprobar si el costo bajó;
4. seguir mientras la mejora sea estable.

En el [laboratorio interactivo](laboratorio.md) puede cambiar el punto inicial,
el tamaño del paso y el número de rondas para comparar rutas.
