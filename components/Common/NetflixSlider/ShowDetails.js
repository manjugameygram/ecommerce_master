import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faPlay,
  faHeart,
  faSortDown
} from '@fortawesome/free-solid-svg-icons';
import { Tooltip, Badge } from 'antd';

const ShowDetails = ({ onClick }) => (
  <div className="main-container">
    <div className="show-buttons">
      <div style={{display: 'flex', padding: '5px', flexDirection: 'row', width: '75%'}}>
        <button onClick={onClick} className="icon-btn">
          <Tooltip placement="top" title="Like">
            <FontAwesomeIcon icon={faThumbsUp} />
          </Tooltip>
        </button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={onClick} className="icon-btn">
          <Tooltip placement="top" title="Favourite">
            <FontAwesomeIcon icon={faHeart} />
          </Tooltip>
        </button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={onClick} className="icon-btn" >
          <Tooltip placement="top" title="Play Teaser">
            <FontAwesomeIcon icon={faPlay} />
          </Tooltip>
        </button>
      </div>
      <div style={{display: 'flex', padding: '5px', flexDirection: 'row', width: '25%', justifyContent: 'flex-end'}}>
        <button onClick={onClick} className="icon-btn">
          <Tooltip placement="top" title="More">
            <FontAwesomeIcon icon={faSortDown} />
          </Tooltip>
        </button>
      </div>
    </div>
    <div style={{padding: '5px'}}>
      <span className="tags-style">Adventure</span>
      <Badge status="success" />
      <span className="tags-style">Suspenceful</span>
      <Badge status="success" />
      <span className="tags-style">Action</span>
    </div>
  </div>
);

export default ShowDetails;
