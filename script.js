/* Global variables containing preprogrammed data */

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

// Simple function to set a starting distance from the sun
function storeSunOffset () {
	const sunOffset = 120;
	return sunOffset;
}

// Calls some starting functions for each planet
// This function called on document ready
function initializePlanets () {
	$('.planet').each(function(i, obj) {
		let planetName = $(this).attr('id');
		switch(planetName) {
			case 'sun' :
			//planetSetup(sun);
			break;
			case 'mercury' :
			planetSetup(mercury);
			calculateOrbit(mercury);
			break;
			case 'venus' :
			planetSetup(venus);
			calculateOrbit(venus);
			break;
			case 'earth' :
			planetSetup(earth);
			calculateOrbit(earth);
			break;
			case 'mars' :
			planetSetup(mars);
			calculateOrbit(mars);
			break;
			case 'jupiter' :
			planetSetup(jupiter);
			calculateOrbit(jupiter);
			break;
			case 'saturn' :
			planetSetup(saturn);
			calculateOrbit(saturn);
			break;
			case 'uranus' :
			planetSetup(uranus);
			calculateOrbit(uranus);
			break;
			case 'neptune' :
			planetSetup(neptune);
			calculateOrbit(neptune);
			break;
			case 'pluto' :
			planetSetup(pluto);
			calculateOrbit(pluto);
			break;
			default :
			break;
		}
	});
}

// Function to scale and position planets
function planetSetup(obj) {
	const planet = obj.name;
	const size = obj.diameter * 0.001;
	const day = obj.dayLength;
	const orbit = obj.orbitalPeriod;
	const distance = obj.sunDistance * 100 * 0.003 + 50;
	const sunOffset = storeSunOffset();
	$('#' + planet).css({
		'height' : size + 'px',
		'width' : size + 'px',
		'top' : distance + sunOffset + 'px',
	});
}

// Function to calculate orbital speed, starts animation
function calculateOrbit(obj) {
	const planet = obj.name;
	const size = obj.diameter * 0.001;
	const sunOffset = storeSunOffset();
	const distance = obj.sunDistance * 100 * 0.003 + 50;
	const orbit = obj.orbitalPeriod;
	let pageDistance = $('#' + planet).offset().top;
	pageDistance = pageDistance - sunOffset;
	$('#' + planet + '-orbit').css({
		'width' : distance * 2 + (size) + 2 + 'px',
		'height' : distance * 2 + (size) + 2 + 'px',
		'top' : -distance + sunOffset - (size / 2) - 1 + 'px'
	});
	$('#' + planet).css({
		'transform-origin' : 'center ' + -pageDistance + 'px'
	});
	$('#' + planet).css({
		'-webkit-animation' : 'spin ' + orbit * 0.05 + 's linear infinite',
		'-moz-animation' : 'spin ' + orbit * 0.05 + 's linear infinite',
		'animation' : 'spin ' + orbit * 0.05 + 's linear infinite'
	});
}

/* Gets info for passed in object and displays applicable 
  information in side panel. */
function loadInfo(obj) {
  $('#name').text(obj.name);
  $('#diameter').text(obj.diameter);
  $('#gravity').text(obj.gravity);
  if (obj.dayLength !== null) {
    $('#day-container').css('display', 'block');
    $('#year-container').css('display', 'block');
    $('#day-length').text(obj.dayLength);
    $('#year-length').text(obj.orbitalPeriod);
  } else {
    $('#day-container').css('display', 'none');
    $('#year-container').css('display', 'none');
  }
  $('#temp').text(obj.temperature);
  $('#caption').text(obj.caption);
}

/* On document load, calls initialization, readies 
  click listeners */
$(document).ready(function(){
	initializePlanets();
  
    // On click, sends information to be loaded in panel
  /* Switch case probably isn't the best way to do this, 
     but I don't know how to call a variable using another 
     variable so ¯\_(ツ)_/¯ */
  $('.planet').click(function() {
    $('.selected').removeClass('selected');
		$(this).addClass('selected');
    let planetName = $(this).attr('id');
    let pName = planetName.name;
    console.log(planetName);
    switch(planetName) {
      case "sun":
        loadInfo(sun);
      break;
      case "mercury":
        loadInfo(mercury);
      break;
      case "venus":
        loadInfo(venus);
      break;
      case "earth":
        loadInfo(earth);
      break;
      case "mars":
        loadInfo(mars);
      break;
      case "jupiter":
        loadInfo(jupiter);
      break;
      case "saturn":
        loadInfo(saturn);
      break;
      case "uranus":
        loadInfo(uranus);
      break;
      case "neptune":
        loadInfo(neptune);
      break;
      case "pluto":
        loadInfo(pluto);
      break;
    }
  });
});
