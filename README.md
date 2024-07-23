<p align="center">
  <a href="https://clerk.com?utm_source=github&utm_medium=clerk_docs" target="_blank" rel="noopener noreferrer">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./public/light-logo.png">
      <img alt="Clerk Logo for light background" src="./public/dark-logo.png" height="64">
    </picture>
  </a>
  <br />
</p>
<div align="center">
  <h1>
    Clerk JavaScript Quickstart
  </h1>
  <a href="https://www.npmjs.com/package/@clerk/clerk-js">
    <img alt="Downloads" src="https://img.shields.io/npm/dm/@clerk/clerk-js" />
  </a>
  <a href="https://discord.com/invite/b5rXHjAg7A">
    <img alt="Discord" src="https://img.shields.io/discord/856971667393609759?color=7389D8&label&logo=discord&logoColor=ffffff" />
  </a>
  <a href="https://twitter.com/clerkdev">
    <img alt="Twitter" src="https://img.shields.io/twitter/url.svg?label=%40clerkdev&style=social&url=https%3A%2F%2Ftwitter.com%2Fclerkdev" />
  </a>
  <br />
  <br />
  <img alt="Clerk Hero Image" src="./public/hero.png">
</div>

## Introduction

Clerk is a developer-first authentication and user management solution. ClerkJS is our foundational JavaScript library for building user management and authentication. It enables you to register, sign in, verify, and manage users for your application using highly customizable flows.

After following the [ClerkJS quickstart](https://clerk.com/docs/quickstarts/javascript), you will have learned how to:

- Add the ClerkJS SDK to your JavaScript application
- Use Clerk components to allow users to sign in or out

### Branches of this repository

To add the [ClerkJS SDK](/docs/references/javascript/overview) to your JavaScript application, you have two options:

1. Install the package using a package manager, like `npm`, `yarn`, or `pnpm`.
2. Use the `<script>` tag to load the ClerkJS package from our CDN.

The branches of this repository represent the results of these implementation:

- `main`: The result of following the JavaScript quickstart if you chose `NPM module` as your preferred method.
- `with-script-tag`: The result of following the JavaScript quickstart if you chose `<script>` as your preferred method.

## Deploy

Easily deploy the template to Vercel with the button below. You will need to set the required environment variables in the Vercel dashboard.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fclerk%2Fclerk-javascript-quickstart&env=VITE_CLERK_PUBLISHABLE_KEY&envDescription=Clerk%20API%20key&envLink=https%3A%2F%2Fclerk.com%2Fdocs%2Fquickstart%2Fjavascript&redirect-url=https%3A%2F%2Fclerk.com%2Fdocs%2Fquickstart%2Fjavascript)

## Running the template

```bash
git clone https://github.com/clerk/clerk-javascript-quickstart
```

To run the example locally, you need to:

<!-- Need new UTM link? Replaced "react" with "javascript" for now-->

1. Sign up for a Clerk account at [https://clerk.com](https://dashboard.clerk.com/sign-up?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=10-24-2023&utm_term=clerk-javascript-quickstart).
<!-- Need new UTM link? Replaced "react" with "javascript" for now-->
2. Go to the [Clerk dashboard](https://dashboard.clerk.com?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=10-24-2023&utm_term=clerk-javascript-quickstart) and create an application.

3. Set the required Clerk environment variables as shown in [the example `env` file](./.env.sample).

4. `npm install` the required dependencies.

5. `npm run dev` to launch the development server.

## Learn more

To learn more about Clerk and JavaScript, check out the following resources:

<!-- Need UTM link-->

- [ClerkJS SDK Reference Documentation](https://clerk.com/docs/references/javascript/overview)
<!-- Need new UTM link? Replaced "react" with "javascript" for now-->
- [Clerk Documentation](https://clerk.com/docs?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=10-24-2023&utm_term=clerk-javascript-quickstart)

- [Vite Documentation](https://vitejs.dev/guide/)

## Found an issue or want to leave feedback

Feel free to create a support thread on our [Discord](https://clerk.com/discord). Our support team will be happy to assist you in the `#support` channel.

## Connect with us

You can discuss ideas, ask questions, and meet others from the community in our [Discord](https://discord.com/invite/b5rXHjAg7A).

If you prefer, you can also find support through our [Twitter](https://twitter.com/ClerkDev), or you can [email](mailto:support@clerk.dev) us!
