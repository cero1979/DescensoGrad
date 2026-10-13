import json


def cost(x, y):
    return (x - 12) ** 2 + 2 * (y - 8) ** 2 + 100


def route_json(x0, y0, eta, iterations):
    x = float(x0)
    y = float(y0)
    points = [{"x": x, "y": y, "cost": cost(x, y)}]

    for _ in range(int(iterations)):
        partial_x = 2 * (x - 12)
        partial_y = 4 * (y - 8)
        x -= float(eta) * partial_x
        y -= float(eta) * partial_y
        points.append({"x": x, "y": y, "cost": cost(x, y)})

    return json.dumps(points)
