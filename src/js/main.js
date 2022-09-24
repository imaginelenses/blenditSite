document.addEventListener('DOMContentLoaded', () => {
    
    const nPanel = new bootstrap.Offcanvas('#nPanel')
    document.addEventListener('keydown', e => {
        if (e.code === 'KeyN') {
            nPanel.toggle()
        }
        else if (e.code === 'Escape') {
            nPanel.hide()
        }
    })
    
    let touchstartX = 0
    let touchendX = 0
        
    function checkDirection() {
        if (Math.abs(touchendX - touchstartX) < 130) {
            return
        }

        if (touchendX < touchstartX) {
            nPanel.show()
        }
        else if (touchendX > touchstartX) {
            nPanel.hide()
        }
    }

    document.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX
    })
    
    document.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX
        checkDirection()
    })
    
    
    const nPanelElement = document.querySelector('#nPanel')
    const nPanelButton = document.querySelector('.nPanelButton')

    nPanelElement.addEventListener('show.bs.offcanvas', e => {
        nPanelButton.style.visibility = "hidden"
    })
    
    nPanelElement.addEventListener('hidden.bs.offcanvas', e => {
        nPanelButton.style.visibility = "visible"
    })
})
