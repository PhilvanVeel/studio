var panorama, viewer, container, infospot, panel;

container = document.querySelector( '#container' );
panel = document.querySelector('#panel');

panorama = new PANOLENS.ImagePanorama( 'https://i.imgur.com/R4ARuP6.jpg' );

infospot = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot.position.set( 328.94, -164.47, -5000.00);
infospot.addHoverElement( panel, 150 );

panorama.add( infospot );

infospot2 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot2.position.set( -2424.38, 542.14, -5000.00);
infospot2.addHoverElement( panel2, 150 );

panorama.add( infospot2 );

infospot3 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot3.position.set( 3968.70, -1740.24, 5000.00);
infospot3.addHoverElement( panel3, 150 );

panorama.add( infospot3 );

viewer = new PANOLENS.Viewer( { container: container, output: 'console'} );
viewer.add( panorama );

var renderer, camera, scene, box;

;


