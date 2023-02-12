interface icon {
    name: string,
    vendor: string,
    svg: string,
}

declare var icons: Array<icon>;


(() => {
    
    const input = document.querySelector("#icon-search") as HTMLInputElement
    input.addEventListener("keydown", () => {
        search()
    })

    const vendor = document.querySelector("#icon-vendor") as HTMLSelectElement
    vendor.addEventListener("change", () => {
        search()
    })

    const container = document.querySelector('.hugo-mod-icons')
    const search = () => {
        container.innerHTML = ''
        const q = input.value
        const v = vendor.value

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
        container.insertAdjacentHTML('beforeend', s)
    }

    search()
})()
