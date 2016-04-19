void function() {
  var scriptEle = document.querySelector('script[app-cache-timeout]');
  var time, key;

  if (!scriptEle) {
    console.error('script with app-cache-timeout attribute not found');
  } else {
    time = parseInt(scriptEle.getAttribute('app-cache-timeout'));
    key = scriptEle.getAttribute('app-cache-timeout-key');
  }

  if (!window.applicationCache) {
    console.error('applicationCache not support');
    return;
  }

  key = key || 'appCache:timeout';

  window.applicationCache.addEventListener('cached', function () {
    try {
      window.localStorage.setItem(key, Date.now());
    } catch (e) {
      return;
    }
  });

  applicationCache.addEventListener('updateready', function () {
    if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
      try {
        var diff = Date.now() - localStorage.getItem(key);
      } catch (e) {
        return;
      }
      try {
        window.localStorage.setItem(key, Date.now());
      } catch (e) {
        return;
      }
      if (diff > time) {
        window.applicationCache.swapCache();
        window.location.reload();
      }
    }
  });
}();
