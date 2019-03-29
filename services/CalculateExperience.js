
export const XpNeeded = (level) => {
  var points = 0;

  for(var lvl = 1; lvl <= level; lvl++){
    points += Math.floor(lvl + 300 * Math.pow(2, lvl / 7.));
  }
  return Math.floor(points/4);
}
