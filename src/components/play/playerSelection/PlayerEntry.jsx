import React from 'react';

import lessIcon from '../../../assets/less.png';
import getIcon from '../../logo/Icon';

export default function PlayerEntry(props) {
  const { player } = props;

  return (
    <div>
      <div className="playerTokenBackground">
        <div className="playerToken">
          <img src={getIcon(player.icon)} alt="add-player" className="playerTokenImage" />
        </div>
        <div className="playerTokenDelete">
          <img src={lessIcon} alt="less-icon" className="playerTokenDeleteIcon" />
        </div>
      </div>
      <p className="playerTokenName">{player.name}</p>
    </div>
  );
}
