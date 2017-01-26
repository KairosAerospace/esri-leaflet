Package.describe({
  summary: "See https://github.com/Esri/esri-leaflet/tree/v1.0.2a",
  version: '1.0.3',
  name: 'kairos:esri-leaflet',
  git: 'https://github.com/KairosAerospace/esri-leaflet'
});

Package.onUse(function (api) {
  api.use('kairos:leaflet-stack', 'client', {unordered: false});
  api.addFiles(['esri-leaflet.js', 'esri-leaflet-renderers.js'], 'client');
});
