import React from 'react';
import ReactDOM from 'react-dom';
import '../dist/style.css';

const Footer = () => (
    <div>
        <footer>
            <div class="upper-wrapper">
                <div class="upper-footer">
                    <div class="detail">
                        <div class="column">
                            <div class="title">NEARBY CITIES</div>
                            <div>Cold Springs Real Estate</div>
                            <div>Empire Real Estate</div>
                            <div>Gerlach Real Estate</div>
                            <div>Incline Village Real Estate</div>
                            <div>Nixon Real Estate</div>
                        </div>
                        <div class="column">
                            <div class="title">NEARBY NEIGHBORHOODS</div>
                            <div>Incline Village-Crystal Bay Real</div>
                            <div>Estate</div>
                        </div>
                        <div class="column">
                            <div class="title">NEARBY ZIP CODES</div>
                            <div>89402 Real Estate</div>
                            <div>89402 Real Estate</div>
                            <div>89402 Real Estate</div>
                            <div>89402 Real Estate</div>
                            <div>89402 Real Estate</div>
                        </div>
                        <div class="column">
                            <div class="title">OTHER INCLINE VILLAGE TOPICS</div>
                            <div>Apartments for Rent in 89402</div>
                            <div>Houses for Sale in 89402</div>
                            <div>Houses for Rent in 89402</div>
                            <div>89402 Real Estate</div>
                            <div>Incline Village Condos</div>
                        </div>
                    </div>
                    
                </div>
                <div class="see-more">
                    <div class="pop">See More</div>
                </div>
            </div>
            <div class="below-footer">
                <div class="refs">
                    <div>ABOUT</div>
                    <div>ZESTIMATES</div>
                    <div>RESEARCH</div>
                    <div>CAREERS</div>
                    <div>HELP</div>
                    <div>ADVERTISE</div>
                    <div>TERMS OF USE & PRIVACY</div>
                    <div>AD CHOICE</div>
                    <div>COOKIE PREFERENCES</div>
                    <div>BLOG</div>
                    <div>DATA SCIENCE</div>
                    <div>MOBILE APPS</div>
                </div>
                <div class="contact">
                    <i class="fas fa-warehouse"></i>
                    <div>© 2006-2018 Zillow</div>
                    <div>follow us</div>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-google-plus"></i>
                </div>
            </div>
        </footer>
    </div>
)

ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
);