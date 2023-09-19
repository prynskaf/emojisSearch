import React from 'react';
import Emojis from './Emojis.json'
import EmojisItem from '../EmojisItem/EmojisItem';

const EmojisList = ( {filter}) => {
    const filteredEmojis = Emojis.filter((emoji) => 
    emoji.keywords.toLowerCase().includes(filter.toLowerCase())
    )
  return (
    <div className=''>
       {filteredEmojis.map((emoji, index) => (
        <EmojisItem key={index} emoji={emoji} />
      ))}
    </div>
  );
};

export default EmojisList;
