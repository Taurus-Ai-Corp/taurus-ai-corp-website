import { Metadata } from 'next'
import PitchDeck from './PitchDeck'

export const metadata: Metadata = {
  title: 'Partnership Proposal | TAURUS AI + YQG Digital',
  description: 'Scale your agency without losing your personal touch.',
}

export default function Page() {
  return <PitchDeck />
}