var setReload = function(time) {
  if (!applicationCache) {
    throw new Error('applicationCache not support');
  }

  applicationCache.addEventListener('cached', function () {
    try {
      localStorage.setItem('manifest:cached', Date.now());
    } catch {

    }
  });

  applicationCache.addEventListener('updateready', function () {
    if (applicationCache.status === applicationCache.UPDATEREADY) {
      
      try {
        var diff = Date.now() - localStorage.getItem('manifest:cached');
        localStorage.setItem('manifest:cached', Date.now());
      } catch {
        
      }
      applicationCache.swapCache();
      location.reload();
    }
  });
};

