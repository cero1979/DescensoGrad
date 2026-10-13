const canvas = document.querySelector("#chart");
const context = canvas.getContext("2d");
const surfaceCanvas = document.querySelector("#surface");
const surfaceContext = surfaceCanvas.getContext("2d");
const status = document.querySelector("#status");
const summary = document.querySelector("#summary");
const animateButton = document.querySelector("#animate");
const resetButton = document.querySelector("#reset");
const controls = {
  x0: document.querySelector("#x0"),
  y0: document.querySelector("#y0"),
  eta: document.querySelector("#eta"),
  iterations: document.querySelector("#iterations"),
};
const outputs = {
  x0: document.querySelector("#x0-value"),
  y0: document.querySelector("#y0-value"),
  eta: document.querySelector("#eta-value"),
  iterations: document.querySelector("#iterations-value"),
};

let pyodide;
let currentRoute = [];
let animationTimer;

const plot = {
  left: 76,
  right: canvas.width - 34,
  top: 32,
  bottom: canvas.height - 62,
};

function mapX(value) {
  return plot.left + (value / 24) * (plot.right - plot.left);
}

function surfacePoint(x, y, cost) {
  return {
    x: 480 + (x - 12) * 19 - (y - 8) * 11,
    y: 385 - (x - 12) * 6 - (y - 8) * 4 - (cost - 100) * 0.62,
  };
}

function drawSurface3D(route, visiblePoints = route.length) {
  surfaceContext.fillStyle = "#f8fafc";
  surfaceContext.fillRect(0, 0, surfaceCanvas.width, surfaceCanvas.height);
  surfaceContext.font = "14px system-ui";
  surfaceContext.fillStyle = "#526176";
  surfaceContext.fillText("Altura = costo semanal J(x,y)", 28, 30);

  for (let x = 0; x <= 24; x += 2) {
    surfaceContext.beginPath();
    for (let y = 0; y <= 16; y += 0.5) {
      const point = surfacePoint(x, y, (x - 12) ** 2 + 2 * (y - 8) ** 2 + 100);
      if (y === 0) surfaceContext.moveTo(point.x, point.y);
      else surfaceContext.lineTo(point.x, point.y);
    }
    surfaceContext.strokeStyle = "rgba(14, 116, 144, 0.32)";
    surfaceContext.lineWidth = 1;
    surfaceContext.stroke();
  }

  for (let y = 0; y <= 16; y += 2) {
    surfaceContext.beginPath();
    for (let x = 0; x <= 24; x += 0.5) {
      const point = surfacePoint(x, y, (x - 12) ** 2 + 2 * (y - 8) ** 2 + 100);
      if (x === 0) surfaceContext.moveTo(point.x, point.y);
      else surfaceContext.lineTo(point.x, point.y);
    }
    surfaceContext.strokeStyle = "rgba(14, 116, 144, 0.32)";
    surfaceContext.stroke();
  }

  const minimum = surfacePoint(12, 8, 100);
  surfaceContext.fillStyle = "#15803d";
  surfaceContext.beginPath();
  surfaceContext.arc(minimum.x, minimum.y, 7, 0, 2 * Math.PI);
  surfaceContext.fill();
  surfaceContext.fillText("mínimo (12, 8, 100)", minimum.x + 12, minimum.y - 8);

  const points = route.slice(0, visiblePoints);
  if (!points.length) return;
  surfaceContext.strokeStyle = "#dc2626";
  surfaceContext.lineWidth = 4;
  surfaceContext.beginPath();
  points.forEach((item, index) => {
    const point = surfacePoint(item.x, item.y, item.cost);
    if (index === 0) surfaceContext.moveTo(point.x, point.y);
    else surfaceContext.lineTo(point.x, point.y);
  });
  surfaceContext.stroke();

  const last = points.at(-1);
  const current = surfacePoint(last.x, last.y, last.cost);
  surfaceContext.fillStyle = "#dc2626";
  surfaceContext.beginPath();
  surfaceContext.arc(current.x, current.y, 9, 0, 2 * Math.PI);
  surfaceContext.fill();
  surfaceContext.fillStyle = "#172033";
  surfaceContext.fillText(
    `ronda ${points.length - 1}: costo ${last.cost.toFixed(2)}`,
    current.x + 14,
    current.y - 12,
  );
  surfaceContext.fillText("publicidad x", 690, 505);
  surfaceContext.fillText("inventario y", 175, 455);
}

function mapY(value) {
  return plot.bottom - (value / 16) * (plot.bottom - plot.top);
}

function drawAxes() {
  context.fillStyle = "#fff7ed";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.strokeStyle = "#d9e2ec";
  context.lineWidth = 1;
  context.font = "14px system-ui";
  context.fillStyle = "#526176";

  for (let x = 0; x <= 24; x += 4) {
    const px = mapX(x);
    context.beginPath();
    context.moveTo(px, plot.top);
    context.lineTo(px, plot.bottom);
    context.stroke();
    context.fillText(String(x), px - 7, plot.bottom + 24);
  }

  for (let y = 0; y <= 16; y += 4) {
    const py = mapY(y);
    context.beginPath();
    context.moveTo(plot.left, py);
    context.lineTo(plot.right, py);
    context.stroke();
    context.fillText(String(y), plot.left - 28, py + 5);
  }

  context.save();
  context.translate(22, (plot.top + plot.bottom) / 2);
  context.rotate(-Math.PI / 2);
  context.fillText("Inventario y", -38, 0);
  context.restore();
  context.fillText("Publicidad x", (plot.left + plot.right) / 2 - 38, canvas.height - 18);
}

function drawContours() {
  const scaleX = (plot.right - plot.left) / 24;
  const scaleY = (plot.bottom - plot.top) / 16;
  context.strokeStyle = "rgba(194, 65, 12, 0.46)";
  context.lineWidth = 1.5;

  for (let extra = 8; extra <= 128; extra += 12) {
    context.beginPath();
    context.ellipse(
      mapX(12),
      mapY(8),
      Math.sqrt(extra) * scaleX,
      Math.sqrt(extra / 2) * scaleY,
      0,
      0,
      2 * Math.PI,
    );
    context.stroke();
  }
}

function drawRoute(route, visiblePoints = route.length) {
  drawAxes();
  drawContours();
  const points = route.slice(0, visiblePoints);
  if (!points.length) return;

  context.strokeStyle = "#0057b8";
  context.fillStyle = "#0057b8";
  context.lineWidth = 4;
  context.beginPath();
  points.forEach((point, index) => {
    const px = mapX(point.x);
    const py = mapY(point.y);
    if (index === 0) context.moveTo(px, py);
    else context.lineTo(px, py);
  });
  context.stroke();

  points.forEach((point, index) => {
    const px = mapX(point.x);
    const py = mapY(point.y);
    context.beginPath();
    context.arc(px, py, index === 0 ? 8 : 6, 0, 2 * Math.PI);
    context.fillStyle = index === 0 ? "#dc2626" : "#0057b8";
    context.fill();
    context.fillStyle = "#172033";
    context.fillText(String(index), px + 8, py - 8);
  });

  context.fillStyle = "#15803d";
  context.font = "24px system-ui";
  context.fillText("★", mapX(12) - 11, mapY(8) + 8);
  context.font = "14px system-ui";
}

function updateOutputs() {
  outputs.x0.value = Number(controls.x0.value).toFixed(1);
  outputs.y0.value = Number(controls.y0.value).toFixed(1);
  outputs.eta.value = Number(controls.eta.value).toFixed(2);
  outputs.iterations.value = controls.iterations.value;
}

async function calculateRoute() {
  if (!pyodide) return;
  clearInterval(animationTimer);
  updateOutputs();
  const values = Object.fromEntries(
    Object.entries(controls).map(([key, control]) => [key, Number(control.value)]),
  );
  Object.entries(values).forEach(([key, value]) => pyodide.globals.set(key, value));
  const result = await pyodide.runPythonAsync(
    "route_json(x0, y0, eta, iterations)",
  );
  currentRoute = JSON.parse(result);
  drawRoute(currentRoute);
  drawSurface3D(currentRoute);

  const first = currentRoute[0];
  const last = currentRoute.at(-1);
  const direction = last.cost < first.cost ? "bajó" : "subió";
  summary.textContent =
    `Costo ${direction}: ${first.cost.toFixed(2)} → ${last.cost.toFixed(2)}. ` +
    `Punto final: (${last.x.toFixed(2)}, ${last.y.toFixed(2)}).`;
}

function animateRoute() {
  clearInterval(animationTimer);
  let visible = 1;
  drawRoute(currentRoute, visible);
  drawSurface3D(currentRoute, visible);
  animationTimer = setInterval(() => {
    visible += 1;
    drawRoute(currentRoute, visible);
    drawSurface3D(currentRoute, visible);
    if (visible >= currentRoute.length) clearInterval(animationTimer);
  }, 480);
}

Object.values(controls).forEach((control) => {
  control.addEventListener("input", updateOutputs);
  control.addEventListener("change", calculateRoute);
});

animateButton.addEventListener("click", animateRoute);
resetButton.addEventListener("click", () => {
  controls.x0.value = 2;
  controls.y0.value = 2;
  controls.eta.value = 0.10;
  controls.iterations.value = 8;
  calculateRoute();
});

async function start() {
  try {
    pyodide = await loadPyodide();
    const pythonSource = await fetch("gradient.py").then((response) => {
      if (!response.ok) throw new Error("No se pudo cargar el módulo Python.");
      return response.text();
    });
    await pyodide.runPythonAsync(pythonSource);
    await calculateRoute();
    animateButton.disabled = false;
    status.textContent = "Python listo";
  } catch (error) {
    status.textContent = "No fue posible iniciar Python";
    summary.textContent = error.message;
    console.error(error);
  }
}

updateOutputs();
drawRoute([]);
start();
