self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open("static").then(Cache=>{
            return Cache.addAll(["./","./ayurveda.css","./images/64.png","./images/512.png"])
        })
    )
})

self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request);
        })
    )
})