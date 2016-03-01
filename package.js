Package.describe({
  summary: "See https://github.com/Esri/esri-leaflet/tree/v1.0.2a",
  version: '1.0.2',
  name: 'kairos:esri-leaflet',
  git: 'https://github.com/KairosAerospace/esri-leaflet'
});

Package.on_use(function (api) {
  api.use('kairos:leaflet-stack', 'client');
  api.add_files(['esri-leaflet.js'], 'client');
});
