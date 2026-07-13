self.addEventListener('fetch', (event) => {
  // Jeśli to zapytanie do Google Sheets, pobierz zawsze z sieci
  if (event.request.url.includes('script.google.com')) {
    event.respondWith(fetch(event.request));
    return;
  }
  // W pozostałych przypadkach ładuj z sieci, a w razie błędu z cache
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
