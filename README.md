# Leaflet.MapCenterCoord

A Leaflet control to display the coordinates of the map center, especially useful on **touch/mobile devices**.

The initial idea was based on the plugin [Leaflet.MousePosition](https://github.com/ardhi/Leaflet.MousePosition).


## Usage

Add the following line to your map initialization:

``` js
L.control.mapCenterCoord().addTo(map);
```
You can also pass a configuration.


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

## Examples

http://xguaita.github.io/Leaflet.MapCenterCoord/

## License

This software is released under the [MIT license](http://opensource.org/licenses/mit-license.php).
