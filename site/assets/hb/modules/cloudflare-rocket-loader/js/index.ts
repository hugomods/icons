// Cloudflare rocket loader dose not trigger the DOMContentLoaded event.
(() => {
    let cfRocketLoader = true
    window.addEventListener("DOMContentLoaded", function () {
        cfRocketLoader = false
        console.log('DOMContentLoaded reached')
    })
    console.log('cfrl', cfRocketLoader)

    if (document.readyState === "loading") {
        window.addEventListener("load", function () {
            console.log('cfrl', cfRocketLoader)
            cfRocketLoader && window.dispatchEvent(new Event("DOMContentLoaded"))
        })
    }

    window.addEventListener('readystatechange', (e) => {
        console.log(e)
    })
})()
