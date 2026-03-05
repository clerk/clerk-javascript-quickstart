import { Clerk } from '@clerk/clerk-js'

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!publishableKey) {
  throw new Error('Add your VITE_CLERK_PUBLISHABLE_KEY to the .env file')
}

// Derive the Clerk frontend API domain from the publishable key
const clerkDomain = atob(publishableKey.split('_')[2]).slice(0, -1)

// Dynamically load the UI bundle so window.__internal_ClerkUICtor is available
await new Promise((resolve, reject) => {
  const script = document.createElement('script')
  script.src = `https://${clerkDomain}/npm/@clerk/ui@1/dist/ui.browser.js`
  script.crossOrigin = 'anonymous'
  script.onload = resolve
  script.onerror = reject
  document.head.appendChild(script)
})

const clerk = new Clerk(publishableKey)
await clerk.load({
  ui: { ClerkUI: window.__internal_ClerkUICtor },
})

if (clerk.isSignedIn) {
  document.getElementById('app').innerHTML = `
    <div id="user-button"></div>
  `
  const userButtonDiv = document.getElementById('user-button')
  clerk.mountUserButton(userButtonDiv)
} else {
  document.getElementById('app').innerHTML = `
    <div id="sign-in"></div>
  `
  const signInDiv = document.getElementById('sign-in')
  clerk.mountSignIn(signInDiv)
}
