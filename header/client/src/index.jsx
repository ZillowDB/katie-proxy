import React from 'react';
import ReactDOM from 'react-dom';
import '../dist/style.css';

const Header = () => (
	<div>
    <header>
        <nav>
            <div className="logo-wrapper">
                <div className="logo">
                    <div className="logo-img">
                        <svg viewBox="0 0 100 100"><path d="M30 48.8c4.9-5.1 22.6-21.5 22.6-21.5c-9.2 2.2-18.8 5.1-22.3 6.7l-5.2 5.3c4.3-0.9 5.7-1.1 8.9-1.6L30 48.8z M62.8 23.2c0 0-15.6 15.8-18.1 18c4.8-1.7 14.5-3.8 20.7-4.1c0.7-2.2 1.5-3.8 1.5-3.8l8.3-0.8C75.2 32.5 68.9 27.4 62.8 23.2z M27.3 56.3c1.8-0.8 18.6-6.4 34.1-7.3c0.3-1.3 2-5.7 2.3-6.9c-16.1 1.1-29.1 6-34.4 8.4L27.3 56.3z M52.4 16.3 c-2.8 1.3-10.8 7.5-15.1 10.7c5.2-1.8 17.8-4.6 24.3-4.7C59.6 20.9 53.9 17.1 52.4 16.3z"></path></svg>
                    </div>
                    <div className="logo-txt">
                        <svg viewBox="0 0 100 100"><path d="M61.2 81.8c1.1-1.2 1.5-2.6 1.5-4.7c0-2-0.4-3.3-1.4-4.5c-1.1-1.2-2.4-1.8-4.2-1.8c-3.3 0-5.5 2.6-5.5 6.4 c0 3.9 2.2 6.4 5.5 6.4C59 83.5 60.3 82.9 61.2 81.8z M58.6 73.7c0.4 0.6 0.7 1.6 0.7 3.3c0 2.9-0.6 4.1-2 4.1c-0.6 0-1.3-0.3-1.6-1 c-0.3-0.6-0.4-1.7-0.4-3.1c0-1.2 0.1-2.1 0.3-2.7c0.3-0.8 0.9-1.2 1.7-1.2C57.8 73.1 58.3 73.3 58.6 73.7z M76.8 83.2L80.4 71H77 l-0.9 4.4c-0.3 1.6-0.6 3.5-0.7 4c0 0-0.4-2.1-0.9-4.3l-1-4.1h-3l-1.2 4.1c-0.6 2.1-0.9 4.3-0.9 4.3S68 77 67.7 75.5l-1-4.6h-3.3 l3.4 12.3h3l0.6-2.5c0.3-1.1 0.8-3.3 1.1-4.3c0.2-0.9 0.2-1.1 0.3-1.6c0.1 0.5 0.1 0.6 0.2 1.2c0.1 0.8 0.4 2 0.7 3l1.1 4.2H76.8z M45.8 83.2h3.3l0-17.7l-3.3 0.7L45.8 83.2z M39.4 83.2h3.3l0-17.7l-3.3 0.7L39.4 83.2z M33 83.3h3.2l0-11.5L33 72.5L33 83.3z M34.6 71c1.1 0 2-0.9 2-2c0-1.1-0.9-2-2-2c-1.1 0-2 0.9-2 2C32.7 70.2 33.6 71 34.6 71z M30 83.2l0.9-2.7h-5.6l-1.4 0 c0 0 0.3-0.5 0.6-1.1l6.4-11.1v-2.4h-10L20 68.7h5.2c1 0 1.4 0 1.4 0s-0.2 0.6-0.7 1.4l-6.3 10.8v2.3H30z"></path></svg>
                    </div>
                </div>   
            </div>
            <div className="upper-nav">
                <div className="container">
                    <div className="left-nav">
                        <div className="menu">Buy
                            <div className="depth">
                                <div className="ul-wrapper">
                                    <ul>
                                        <li className="ul-title">Homes for sale</li>
                                        <li>Homes for sale</li>
                                        <li>Foreclosures</li>
                                        <li>For sale by owner</li>
                                        <li>Open houses</li>
                                        <li>New construction</li>
                                        <li>Coming soon</li>
                                        <li>Recent home sales</li>
                                        <li>All homes</li>
                                    </ul>
                                    <ul>
                                        <li className="ul-title">Resources</li>
                                        <li>Buyers Guide</li>
                                        <li>Foreclosure center</li>
                                        <li>Real estate app</li>
                                        <li>Change your address</li>
                                    </ul> 
                                </div>
                            </div>
                        </div>      
                        <div className="menu">Rent
                            <div className="depth">
                                <div className="ul-wrapper">
                                    <ul>
                                        <li className="ul-title">Homes for sale</li>
                                        <li>Homes for sale</li>
                                        <li>Foreclosures</li>
                                        <li>For sale by owner</li>
                                        <li>Open houses</li>
                                        <li>New construction</li>
                                        <li>Coming soon</li>
                                        <li>Recent home sales</li>
                                        <li>All homes</li>
                                    </ul>
                                    <ul>
                                        <li className="ul-title">Resources</li>
                                        <li>Buyers Guide</li>
                                        <li>Foreclosure center</li>
                                        <li>Real estate app</li>
                                        <li>Change your address</li>
                                    </ul> 
                                </div>
                            </div>
                        </div>
                        <div className="menu">Sell
                            <div className="depth">
                                <div className="ul-wrapper">
                                    <ul>
                                        <li className="ul-title">Homes for sale</li>
                                        <li>Homes for sale</li>
                                        <li>Foreclosures</li>
                                        <li>For sale by owner</li>
                                        <li>Open houses</li>
                                        <li>New construction</li>
                                        <li>Coming soon</li>
                                        <li>Recent home sales</li>
                                        <li>All homes</li>
                                    </ul>
                                    <ul>
                                        <li className="ul-title">Resources</li>
                                        <li>Buyers Guide</li>
                                        <li>Foreclosure center</li>
                                        <li>Real estate app</li>
                                        <li>Change your address</li>
                                    </ul> 
                                </div>
                            </div>
                        </div>
                        <div className="menu">Mortgages
                            <div className="depth">
                                <div className="ul-wrapper">
                                    <ul>
                                        <li className="ul-title">Homes for sale</li>
                                        <li>Homes for sale</li>
                                        <li>Foreclosures</li>
                                        <li>For sale by owner</li>
                                        <li>Open houses</li>
                                        <li>New construction</li>
                                        <li>Coming soon</li>
                                        <li>Recent home sales</li>
                                        <li>All homes</li>
                                    </ul>
                                    <ul>
                                        <li className="ul-title">Resources</li>
                                        <li>Buyers Guide</li>
                                        <li>Foreclosure center</li>
                                        <li>Real estate app</li>
                                        <li>Change your address</li>
                                    </ul> 
                                </div>
                            </div>
                        </div>
                        <div className="menu">Agent Finder
                            <div className="depth">
                                <div className="ul-wrapper">
                                    <ul>
                                        <li className="ul-title">Homes for sale</li>
                                        <li>Homes for sale</li>
                                        <li>Foreclosures</li>
                                        <li>For sale by owner</li>
                                        <li>Open houses</li>
                                        <li>New construction</li>
                                        <li>Coming soon</li>
                                        <li>Recent home sales</li>
                                        <li>All homes</li>
                                    </ul>
                                    <ul>
                                        <li className="ul-title">Resources</li>
                                        <li>Buyers Guide</li>
                                        <li>Foreclosure center</li>
                                        <li>Real estate app</li>
                                        <li>Change your address</li>
                                    </ul> 
                                </div>
                            </div>
                        </div>
                        <div className="menu">More
                            <div className="depth">
                                <div className="ul-wrapper">
                                    <ul>
                                        <li className="ul-title">Homes for sale</li>
                                        <li>Homes for sale</li>
                                        <li>Foreclosures</li>
                                        <li>For sale by owner</li>
                                        <li>Open houses</li>
                                        <li>New construction</li>
                                        <li>Coming soon</li>
                                        <li>Recent home sales</li>
                                        <li>All homes</li>
                                    </ul>
                                    <ul>
                                        <li className="ul-title">Resources</li>
                                        <li>Buyers Guide</li>
                                        <li>Foreclosure center</li>
                                        <li>Real estate app</li>
                                        <li>Change your address</li>
                                    </ul> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-nav">
                        <div className="menu">List Your Rental</div>
                        <div className="menu">Advertise</div>
                        <div className="menu"><i className="fa fa-user"></i></div>
                        <div className="menu"><i className="fa fa-question"></i></div>
                    </div>  
                </div>
            </div>
            <div className="below-nav">
                <div className="menu-wrapper">
                    <div className="inner">
                        <div className="menu">contact agent</div>
                        <div className="menu"><i className="fa fa-heart"></i> save</div>
                        <div className="menu"><i className="fas fa-envelope"></i> share</div>
                        <div className="menu">more <i className="fas fa-caret-down"></i></div>
                    </div>
                </div>
            </div>
        </nav>
        <div className="middle-bar">
            <div className="inner">
                <div className="bar">Public View</div>
                <div className="right-menu">
                    <div className="menu">nevada</div>
                    <div className="menu">incline village</div>
                    <div className="menu">89402</div>
                    <div className="menu">300 State Route 28</div>
                </div>
            </div>   
        </div>
    </header>
  </div>
)

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);