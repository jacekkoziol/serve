self.addEventListener('install', function(event) {
  event.waitUntil(
    //fetchStuffAndInitDatabases()
    console.log(event)
  );
});

self.addEventListener('activate', function(event) {
  console.log(event);
  // You're good to go!
});