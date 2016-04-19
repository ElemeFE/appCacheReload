# appCacheReload
当manifest文件改变后，如果缓存文件超过给定时长，立即更新

# 快速开始
```html
<script src="index.js" app-cache-timeout="604800000" app-cache-timeout-key="appCache:timeout"></script>
```
app-cache-timeout为必填项，app-cache-timeout-key的默认值是appCache:timeout
