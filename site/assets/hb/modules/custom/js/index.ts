interface icon {
    name: string,
    vendor: string,
    svg: string,
}

declare var icons: Array<icon>;


(() => {
    let timer = 0
    
    const input = document.querySelector("#icon-search") as HTMLInputElement
    input.addEventListener("keyup", () => {
        // remove the delay search action if user is still typing.
        clearInterval(timer)
        // create a delay search action when typing.
        timer = setInterval(() => {
            search()
        }, 300)
    })

    const vendor = document.querySelector("#icon-vendor") as HTMLSelectElement
    vendor.addEventListener("change", () => {
        search()
    })

    let lock = false
    const container = document.querySelector('.hugo-mod-icons')
    const search = () => {
        if (lock) {
            return
        }
        lock = true

        container.innerHTML = 'searching...'
        const q = input.value.trim()
        const v = vendor.value.trim()

        const items = icons.filter((icon) => icon.name.indexOf(q) >= 0 && icon.vendor.indexOf(v) === 0)
        let s = ''
        for (let i = 0; i < items.length; i++) {
            const icon = items[i]
            s += `<li class="hugo-mod-icon col mb-4">
  <div class="bg-light d-flex align-items-center justify-content-center p-5">${icon.svg}</div>
  <div class="text-muted text-center mt-2 user-select-all">${icon.vendor}</div>
  <div class="text-muted text-center mt-1 user-select-all">${icon.name}</div>
</li>`
        }
        container.innerHTML = s
        lock = false
    }

    search()
})()
