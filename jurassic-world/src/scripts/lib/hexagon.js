function getPoints(hexHeight, hexWidth) {
  return [
    {
      x: 0,
      y: hexHeight * 0.5
    },
    {
      x: hexWidth * 0.25,
      y: 0
    },    
    {
      x: hexWidth * 0.75,
      y: 0
    },
    {
      x: hexWidth,
      y: hexHeight * 0.5
    },
    {
      x: hexWidth * 0.75,
      y: hexHeight
    },
    {
      x: hexWidth * 0.25,
      y: hexHeight
    }
  ]
}

function getPolygonPoints(pts) {
  let polygon = "";
  pts.forEach((pt, index) => {
    polygon = polygon + (pt.x) + "," + (pt.y) + " ";
  });
  return polygon;
}

export { getPoints, getPolygonPoints }