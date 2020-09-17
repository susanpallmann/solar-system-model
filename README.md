# Solar System Model
Just for fun: creating a model of the solar system that semi-accurately represents relative speeds, orbits, rotations, etc.

Also on [Codepen](https://codepen.io/susanpallmann/pen/eYZLBeN)

## Notes
### Relative Accuracy
Although the original goal was to have all attributes (size, speed, distance from sun) be to scale, it became evident very quickly that this would not be practical on a website. The sun, when to scale with the other planets, took up nearly the entire page. If I made the overall scale smaller to compensate, then planets like Mercury were barely visible. Having orbital distance from the Sun relative to scale of planets made the page so long it was difficult to *find* a planet. 

So, in the interest of making something that still looks reasonable, accuracy is only within certain guides.

* Planetary distances from the sun are proportional to each other.
* Planetary sizes are proportional to each other.
* Planetary orbital speeds are proportional to each other.
* Planetary sizes and distances from the sun are not proportional to each other.
* Orbit speed is not proportional to distances or sizes.
* The sun's size is not proportional.

### Imported Data
Information for this project is from [NASA](https://nssdc.gsfc.nasa.gov/planetary/factsheet/), and then adjusted as described below.

#### Information
```javascript
// Mass is in units of 10^24kg
// Diameter is in km
// Gravity is in terms of Earth's (converted from m/s^2)
// Rotation period is in Earth days (converted from hours)
// Length of day is in Earth days (converted from hours)
// Distance from Sun in 10^6 km
// Orbital period is in Earth days
// Mean temperature is in Celsius
// Information from:
// https://nssdc.gsfc.nasa.gov/planetary/factsheet/
// https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html

var sun = {
	name: 'sun',
	mass: 1988500,
	diameter: 1392700,
	gravity: Math.round(274/9.8 * 10) / 10,
	rotationPeriod: null,
	dayLength: null,
	sunDistance: null,
	orbitalPeriod: null,
	temperature: 5505,
	caption: 'The Sun is a medium/small sized star at the center of our solar system.'
}

var mercury = {
	name: 'mercury',
	mass: 0.330,
	diameter: 4879,
	gravity: Math.round(3.7/9.8 * 10) / 10,
	rotationPeriod: Math.round((1407.6)/24 * 10) / 10,
	dayLength: Math.round(((4222.6)/24) * 10) / 10,
	sunDistance: 57.9,
	orbitalPeriod: 88.0,
	temperature: 167,
	caption: 'Mercury is a small, hot planet that orbits the closest to the sun.'
}

var venus = {
	name: 'venus',
	mass: 4.87,
	diameter: 12104,
	gravity: Math.round(8.9/9.8 * 10) / 10,
	rotationPeriod: Math.round((243*12)/24 * 10) / 10,
	dayLength: Math.round(((2802.0)/24) * 10) / 10,
	sunDistance: 108.2,
	orbitalPeriod: 224.7,
	temperature: 464,
	caption: 'Venus is a hot planet about the size and mass of Earth, sometimes called our sister planet.'
}

var earth = {
	name: 'earth',
	mass: 5.97,
	diameter: 12756,
	gravity: 9.8/9.8,
	rotationPeriod: (23.9)/23.9,
	dayLength: (24)/24,
	sunDistance: 149.6,
	orbitalPeriod: 365.2,
	temperature: 15,
	caption: 'Earth is the planet we call home. It is uniquely suited to life, which is why you\'re here!'
}

var mars = {
	name: 'mars',
	mass: 0.642,
	diameter: 6792,
	gravity: Math.round(3.7/9.8 * 10) / 10,
	rotationPeriod: Math.round(24.6/24 * 10) / 10,
	dayLength: Math.round(((24.7)/24) * 10) / 10,
	sunDistance: 227.9,
	orbitalPeriod: 687.0,
	temperature: -65,
	caption: 'Mars is a little smaller than Earth, but has the largest mountain in our solar system.'
}

var jupiter = {
	name: 'jupiter',
	mass: 1898,
	diameter: 142984,
	gravity: Math.round(23.1/9.8 * 10) / 10,
	rotationPeriod: Math.round(9.9/24 * 10) / 10,
	dayLength: Math.round(((9.9)/24) * 10) / 10,
	sunDistance: 778.6,
	orbitalPeriod: 4331,
	temperature: -110,
	caption: 'Jupiter is the largest planet in our solar system and has a large red spot that is actually a long, ongoing storm!'
}

var saturn = {
	name: 'saturn',
	mass: 568,
	diameter: 120536,
	gravity: Math.round(9/9.8 * 10) / 10,
	rotationPeriod: Math.round(10.7/24 * 10) / 10,
	dayLength: Math.round(((10.7)/24) * 10) / 10,
	sunDistance: 1433.5,
	orbitalPeriod: 10747,
	temperature: -140,
	caption: 'Saturn is best known for its prominent rings, although it is not actually the only planet with rings in our system.'
}

var uranus = {
	name: 'uranus',
	mass: 86.8,
	diameter: 51118,
	gravity: Math.round(8.7/9.8 * 10) / 10,
	rotationPeriod: Math.round(17.2/24 * 10) / 10,
	dayLength: Math.round(((17.2)/24) * 10) / 10,
	sunDistance: 2872.5,
	orbitalPeriod: 30589,
	temperature: -195,
	caption: 'Uranus is a bright green planet, so colored due to the absorption of red light by methane gas in the atmosphere.'
}

var neptune = {
	name: 'neptune',
	mass: 102,
	diameter: 49528,
	gravity: Math.round(11/9.8 * 10) / 10,
	rotationPeriod: Math.round(16.1/24 * 10) / 10,
	dayLength: Math.round(((16.1)/24) * 10) / 10,
	sunDistance: 4495.1,
	orbitalPeriod: 59800,
	temperature: -200,
	caption: 'Neptune is a very blue planet in the outer solar system. Although it is much larger than Earth, its gravity is remarkably similar to ours!'
}

var pluto = {
	name: 'pluto',
	mass: 0.0146,
	diameter: 2370,
	gravity: Math.round(0.7/9.8 * 10) / 10,
	rotationPeriod: Math.round(153.3/24 * 10) / 10,
	dayLength: Math.round(((153.3)/24) * 10) / 10,
	sunDistance: 5906.4,
	orbitalPeriod: 90560,
	temperature: -225,
	caption: 'Although Pluto is now considered a dwarf planet rather than a full planet, I included it to make my model feel more nostalgic. :)'
}
```

#### Scaling
As mentioned, many variables of this model are not to scale with each other.
