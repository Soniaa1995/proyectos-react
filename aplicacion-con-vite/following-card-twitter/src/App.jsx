import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'ejemploAvatar',
    name: 'Ejemplo Avatar',
    isFollowing: true
  },
  {
    userName: 'Merenwen151',
    name: 'Meren',
    isFollowing: false
  },
  {
    userName: 'DarkMasterZzYT',
    name: 'DarkMasterZz',
    isFollowing: true
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({userName, name, isFollowing}) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}

