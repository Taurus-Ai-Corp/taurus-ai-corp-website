import { Metadata } from 'next'
import YQGIntegrationDemo from './YQGIntegrationDemo'

export const metadata: Metadata = {
  title: 'TAURUS AI - YQG Digital Partnership Demo',
  description: 'Production-ready AI marketing tools for Windsor-Essex agencies. Zero cost, instantly deployable.',
}

export default function Page() {
  return <YQGIntegrationDemo />
}