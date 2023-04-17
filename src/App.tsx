import { useState } from 'react'
import './App.css'

import AvatarList from './component/AvatarList'
import Modal from './component/Modal'

import { IAvatar } from './types/types'

const initialState = [
  { "src": "/src/assets/avatar1.png", "label": "Avatar 1", "id": 1 },
  { "src": "/src/assets/avatar2.png", "label": "Avatar 2", "id": 2 },
  { "src": "/src/assets/avatar3.png", "label": "Avatar 3", "id": 3 },
  { "src": "/src/assets/avatar4.png", "label": "Avatar 4", "id": 4 },
  { "src": "/src/assets/avatar5.png", "label": "Avatar 5", "id": 5 },
  { "src": "/src/assets/avatar6.png", "label": "Avatar 6", "id": 6 }
]

function App() {
  const [avatars] = useState(initialState)
  const [choosenAvatar, setChoosenAvatar] = useState(avatars[0])
  const [avatarModal, setAvatarModal] = useState(false)
  const [activeAvatar, setActiveAvatar] = useState<Number | undefined>()

  const toggleModal = () => {
    setAvatarModal(prev => !prev)
  }

  const handleAvatarChoose = (avatar: IAvatar) => {
    // Simulate api request (1 second)
    setActiveAvatar(avatar.id);
    setTimeout(() => {
      setChoosenAvatar(prevAvatar => {
        if (prevAvatar.id !== avatar.id) {
          return avatar
        } else {
          return prevAvatar
        }
      })
      setActiveAvatar(undefined)
      setAvatarModal(false)
    }, 1000)
  }

  const renderedAvatarList = (
    <ul className='avatar-list'>
      {avatars.map((avatar) => {
        return (
          <AvatarList
            key={avatar.id}
            avatar={avatar}
            choosenAvatar={choosenAvatar}
            setChoosenAvatar={() => handleAvatarChoose(avatar)}
            activeAvatar={activeAvatar}
          />
        )
      })}
    </ul>
  )

  return (
    <div className="content">
      <div className='avatar' onClick={toggleModal}>
        <img
          src={choosenAvatar.src}
          alt={choosenAvatar.label}
          className='avatar-icon'
        />
      </div>

      {avatarModal &&
        <Modal
          isOpen={avatarModal}
          close={toggleModal}
        >
          <h6>Choose your avatar</h6>
          {renderedAvatarList}
        </Modal>
      }
    </div>
  )
}

export default App
