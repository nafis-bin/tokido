import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'

// import the generated route tree
import { routeTree } from './routeTree.gen'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

// create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

const client = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
	<QueryClientProvider client={client}>
		<RouterProvider router={router} />
	</QueryClientProvider>
  </StrictMode>,
)
