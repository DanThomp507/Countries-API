import React from 'react'

export const TopBar = ({ onInput, darkTheme } ) => (
  <div className="top-bar">
    <span className="logo">Countries API</span>
    <label htmlFor="theme-toggle-checkbox" className="theme-changer-container">
      <input type="checkbox" id="theme-toggle-checkbox" style={{ display: 'none' }} onInput={onInput} />
      <span className="theme-changer">
        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" className="icon">
          <path
            d="M160,136c0-30.62,4.51-61.61,16-88C99.57,81.27,48,159.32,48,248c0,119.29,96.71,216,216,216,88.68,0,166.73-51.57,200-128-26.39,11.49-57.38,16-88,16C256.71,352,160,255.29,160,136Z"
            style={{ fill: darkTheme ? 'white' : 'none' }}
          />
        </svg>
        <span className="dark-mode-text">
          Dark Mode
  </span>
      </span>
    </label>

  </div>
)