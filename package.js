Package.describe({
  summary: "See https://github.com/Esri/esri-leaflet/tree/v2.0.0-beta.7",
  version: '2.0.0b7',
  name: 'kairos:esri-leaflet',
  git: 'https://github.com/KairosAerospace/esri-leaflet'
});

Package.on_use(function (api) {
  api.use('bevanhunt:leaflet', 'client');
  api.add_files(['esri-leaflet.js'], 'client');
});
