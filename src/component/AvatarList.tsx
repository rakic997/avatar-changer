import React from 'react'
import { IAvatar } from '../types/types';

interface IAvatarProps {
    avatar: IAvatar;
    choosenAvatar: IAvatar;
    setChoosenAvatar: React.Dispatch<React.SetStateAction<IAvatar>>
    activeAvatar: Number | undefined;
}

const AvatarList = ({ avatar, choosenAvatar, setChoosenAvatar, activeAvatar }: IAvatarProps) => {
    const findActiveAvatar = choosenAvatar.id === avatar.id;
    const choosenActiveAvatar = activeAvatar === avatar.id;

    return (
        <li>
            <div className='avatar-icon-container'>
                <img
                    src={avatar.src}
                    alt={avatar.label}
                    onClick={() => setChoosenAvatar(avatar)}
                    className={`avatar-icon ${findActiveAvatar ? `active` : ``}`}
                />
                {choosenActiveAvatar && <div className='spinner'></div>}
            </div>
        </li>
    )
}

export default AvatarList