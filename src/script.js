const frontendApi = 'your-frontend-api'

const startClerk = async () => {
    const Clerk = window.Clerk

    try {
        // Load Clerk environment & session if available
        await Clerk.load()

        const userButtonEl = document.getElementById('user-button')
        const authLinks = document.getElementById('auth-links')

        if (Clerk.user) {
            // Mount user button component
            Clerk.mountUserButton(userButtonEl)
            authLinks.style.display = 'none'
        } else {
            authLinks.style.display = 'block'
        }
    } catch (err) {
        console.error('Error starting Clerk: ', err)
    }
}

;(() => {
    const script = document.createElement('script')
    script.setAttribute('data-clerk-frontend-api', frontendApi)
    script.async = true
    script.src = `https://${frontendApi}/npm/@clerk/clerk-js@2/dist/clerk.browser.js`
    script.addEventListener('load', startClerk)
    document.body.appendChild(script)

    const noFrontendApiWarning = document.getElementById('no-frontend-api-warning')
    noFrontendApiWarning.style.display = 'none'
})()
