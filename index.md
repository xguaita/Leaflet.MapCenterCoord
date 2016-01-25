---
layout: default
title: MapCenterCoord
---

Usually in mobile or touch devices there is no pointer. The alternative is, for example, display the coordinates of the map center.

# Usage

+ [Download](https://github.com/xguaita/Leaflet.MapCenterCoord/releases/latest) latest release  
  - Source code in `/src` folder  
  - Minified versions in `/dist`  

+ Include js and css files located in the `/dist` folder (production) or `/src` (development)

```html
<!-- Production--> 
<link rel="stylesheet" href="dist/L.Control.MapCenterCoord.min.css" />
<script src="dist/L.Control.MapCenterCoord.min.js"></script>
```

```html
<!-- Development / debug --> 
<link rel="stylesheet" href="src/L.Control.MapCenterCoord.css" />
<script src="src/L.Control.MapCenterCoord.js"></script>
```

+ Then create a MapCenterCoord control and add it to map:

```javascript
L.control.mapCenterCoord().addTo(map);
```

<div style="text-align:center;width:100%;">
  <iframe src="examples/simple.html" width="360" height="600" marginheight="0" marginwidth="0" scrolling="no"></iframe>
</div><br>

<a href="{{ site.source_link }}/blob/master/examples/simple.html" target="_blank" >Source code...</a>

You can also add configuration parameters.

## Configuration options

The MapCenterCoord control inherits options from [Leaflet Controls](http://leafletjs.com/reference.html#control-options).

| Option | Type | Default | Description
| --- | --- | --- | ---
| position | String | `'bottomleft'` | The standard Leaflet.Control [position parameter](http://leafletjs.com/reference.html#control-positions)
| icon | Boolean | `true` | Shows crosshair icon on map center
| onMove | Boolean | `false` | Update the coordinates of the map center while dragging
| template | String | <code>'{y} &#124; {x}'</code> | Display template
| latlngFormat | String | `'DD'` | Show lat/lng coordinates in 3 possible formats:<br>Decimal degrees `'DD'` (DDD.DDDDD°)<br>Degrees and decimal minutes `'DM'` (DDD° MM.MMM')<br>Degrees, minutes and seconds `'DMS'` (DDD° MM' SS.S")
| latlngDesignators | Boolean | `false` | Show N-S and E-W
| projected | Boolean | `false` | Show projected coordinates
| formatProjected | String | `'#.##0,0'` | Number format mask for projected coordinates.<br>[JavaScript Number Formatter](https://code.google.com/p/javascript-number-formatter/) project: [sample/help page](http://www.integraxor.com/developer/codes/js-formatter/format-sample.htm )

<br>

# Examples

## DM and designators

Degrees and decimal minutes. Show N-S and E-W.

```javascript
L.control.mapCenterCoord({
  latlngFormat: 'DM',
  latlngDesignators: true
}).addTo(map);
```

<div style="text-align:center;width:100%;">
  <iframe src="examples/ddmm.html" width="360" height="600" marginheight="0" marginwidth="0" scrolling="no"></iframe>
</div><br>

<a href="{{ site.source_link }}/blob/master/examples/ddmm.html" target="_blank" >Source code...</a>

## DMS

Degrees, minutes and seconds.

```javascript
L.control.mapCenterCoord({
  latlngFormat: 'DMS'
}).addTo(map);
```

<div style="text-align:center;width:100%;">
  <iframe src="examples/ddmmss.html" width="360" height="600" marginheight="0" marginwidth="0" scrolling="no"></iframe>
</div><br>

<a href="{{ site.source_link }}/blob/master/examples/ddmmss.html" target="_blank" >Source code...</a>

## Projected coordinate system and change crosshair icon

Show projected coordinates and change crosshair icon.

+ Link proj4.js library and <a href="http://kartena.github.io/Proj4Leaflet/" target="_blank" >Proj4Leaflet</a> in your HTML document, define projection and configure map:  

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.3.12/proj4.js">
</script>
<script src="./lib/proj4leaflet.min.js"></script>
```

```javascript
var etrs89N31 = new L.Proj.CRS(
  "EPSG:25831", "+proj=utm +zone=31 +ellps=GRS80 +units=m +no_defs", {
  origin: [238379.2278, 4265559.3497],
  resolutions: [
    305.75, 152.87, 76.437, 38.219, 19.109, 9.5546, 4.7773, 2.3887, 1.1943, 0.5972
  ]
});

...

var map = L.map('map', {
  crs: etrs89N31,
  center: [39.588, 2.935],
  zoom: 0,
  layers: [orto],
  continuousWorld: true
});
```

+ Define new crosshair icon using css:  

```css
.leaflet-control-mapcentercoord-icon {
  background: url(../dist/icons/MapCenterCoordIcon2.svg) 50% 50% no-repeat;
}
```

+ Configure MapCenterCoord control (update map center coordinates while dragging, no decimals and edit template):  

```javascript
L.control.mapCenterCoord({
  iconFile: 'MapCenterCoordIcon2.png',
  template: '<b>ETRS89 UTM31N</b><br>x:{x} y:{y}',
  projected: true,
  onMove: true,
  formatProjected: '#.##0,'
}).addTo(map);
```

<div style="text-align:center;width:100%;">
  <iframe src="examples/etrs89-31n.html" width="360" height="600" marginheight="0" marginwidth="0" scrolling="no"></iframe>
</div><br>

<a href="{{ site.source_link }}/blob/master/examples/etrs89-31n.html" target="_blank" >Source code...</a>

# Requirements

Leaflet v7.x  
Tested ok on Leaflet 1.0 beta2  

### Some tested platforms

Android 4.4.2: Google Chrome 47 and stock browser  
iOS 9.2: Safari  

Desktops: Windows 7, Windows 10, Ubuntu 14.04 LTS  
Google Chrome 47, Firefox 43, Microsoft Internet Explorer 10, 11 and Edge 25  
