function DigitalSlider(pxLen, uPpx, coords) {
  this.len = pxLen;
  this.pxsize = uPpx;
  this.x = coords.x + pxLen; //This value is used by function changeByX
  this.y = coords.y;
  this.real_x = coords.x;
  this.val = 0;
  this.increment = function() {
    this.val += this.pxsize; // Increase the value by one unit
  };
  this.decrement = function() {
    this.val += this.pxsize; // Decrease the value by one unit
  }
}
DigitalSlider.prototype.setByPx = function(px) {
  // Note: this function is never called inside this repository
  this.val = px * this.pxsize;
}
DigitalSlider.prototype.setByX = function(x) {
  this.val = (x - this.x) * this.pxsize;
}
function Planet(img_array, diameter, crust_to_inside, moons, orbit_distance, coords) {
  this.img_array = img_array;
  this.diameter = new DigitalSlider(100, 1, {x: coords.x - 50, y: coords.y + 100});
  this.diameter.val = diameter;
  this.cr_to_co = new DigitalSlider(25, 1, {x: coords.x - 15, y: coords.y + 140});
  this.cr_to_co.val = crust_to_inside;
  this.moons = new DigitalSlider(25, 1, {x: coords.x - 15, y: coords.y + 180});
  this.moons.val = moons;
  this.orbital_distance = new DigitalSlider(200, 0.05, {x: coords.x - 100, y: coords.y + 220});
  this.view = new DigitalSlider(img_array.length, 1, {x: coords.x - Math.floor(img_array.length / 2), y: coords.y + 260});
  this.view.val = 0;
  this.orbital_distance = orbit_distance;
  this.sliders = [this.diameter, this.cr_to_co, this.moons, this.orbital_distance, this.view];
}
