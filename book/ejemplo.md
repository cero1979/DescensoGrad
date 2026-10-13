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

## Interpretación

La empresa no adivinó la solución. Hizo una ronda de medición y corrección.
Después repite la misma receta:

1. calcular las dos pendientes;
2. actualizar publicidad e inventario;
3. comprobar si el costo bajó;
4. seguir mientras la mejora sea estable.

En el [laboratorio interactivo](laboratorio.md) puede cambiar el punto inicial,
el tamaño del paso y el número de rondas para comparar rutas.
