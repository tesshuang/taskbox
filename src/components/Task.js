import React from 'react';

export default function Task({ task:{id, title, state }, onArchiveTask, onPinTask }) {
  return(
    <div className="list-item">
      <input tyep="text" value={title} readOnly={true} />
    </div>
  )
}