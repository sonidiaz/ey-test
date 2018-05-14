import React, { Component } from 'react';
import fs from 'fs';
import MainCss from '../assets/scss/main.scss';
import NavTopBar from './NavTopBar';
import '../assets/scss/main.scss';


const TopBar = ({botones}) => {
    return(
        <div className="topBar is-fluid is-hidden-touch">
						<div className="is-fluid-topbar">
            <div className="columns is-desktop">
							<div className="column is-half call-top-bar">
									<div className="columns  is-gapless">
										<div className="column is-2">Llámanos</div>
										<div className="column is-1"><img src='./images/icon-phone.png' alt=""/></div>
										<div className="column is-3 is-offset-1">(+34) 555 55 55</div>
									</div>
							</div>
							<div className="column">
								<NavTopBar />
							 </div>
						</div>
					</div>
        </div>
    )
}

export default TopBar;