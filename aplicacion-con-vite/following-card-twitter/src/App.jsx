import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  return (
    <section className='App'>
      <TwitterFollowCard userName="ejemploAvatar" initialIsFollowing={true}>
        Ejemplo Avatar
      </TwitterFollowCard>

      <TwitterFollowCard userName="Merenwen151">
        Meren
      </TwitterFollowCard>
    </section>
  )
}

