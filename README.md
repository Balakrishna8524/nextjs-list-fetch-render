# Next.js Fetch Rendering Methods Demonstration

This project is a **Next.js** application designed to demonstrate the various **fetch rendering methods** available in Next.js, including **Static Site Generation (SSG)**, **Server-Side Rendering (SSR)**, and **Incremental Static Regeneration (ISR)**. It is aimed at helping junior developers understand and implement these rendering techniques effectively.

## Features

- **Next.js Fetch Rendering Methods**: Demonstrates SSG, SSR, and ISR with practical examples.
- **Material-UI Integration**: Styled components using **Material-UI** for a modern and responsive design.
- **Dynamic Data Fetching**: Fetches user data from an external API (`https://jsonplaceholder.typicode.com/users`) to showcase real-world use cases.
- **Search Functionality**: Includes a search field in the "User List Fetch Render - By default" page to filter user data dynamically.
- **Component-Based Architecture**: Modular and reusable components for better code organization.
- **Hot Reloading**: Auto-updates the page as you edit the code.
- **Optimized Fonts**: Uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) for automatic font optimization.

## Getting Started

Follow these steps to run the project locally:

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or later)
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/nextjs-fetch-rendering-demo.git
   cd nextjs-fetch-rendering-demo
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
