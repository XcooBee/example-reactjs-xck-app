import React, { Component, Fragment } from 'react';

import coffeeShopImg from "../assets/images/coffeeshop.jpg";
import coffeeHouse2Img from "../assets/images/coffeehouse2.jpg";

class HomeComponent extends Component {
    openMenu = (evt, menuName) => {
        let i, x, tablinks;
        x = document.getElementsByClassName("menu");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < x.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
        }
        document.getElementById(menuName).style.display = "block";
        evt.currentTarget.firstElementChild.className += " w3-dark-grey";
    };

    render() {
        return (
            <Fragment>
                <div className="w3-container" id="about">
                    <div className="w3-content" style={{ maxWidth: "700px" }}>
                        <h5 className="w3-center w3-padding-64"><span className="w3-tag w3-wide">ABOUT THE CAFE</span></h5>
                        <p>
                            The Cafe was founded in blabla by Mr. Smith. This is a sample template from w3 schools we use to show the use of XcooBee Cookie Kit.
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            In addition to our full espresso and brew bar menu, we serve fresh made-to-order breakfast and lunch sandwiches, as well as a selection of sides and salads and other good stuff.
                        </p>
                        <div className="w3-panel w3-leftbar w3-light-grey">
                            <p><i>"Use products from nature for what it's worth - but never too early, nor too late." Fresh is the new sweet.</i></p>
                            <p>Chef, Coffeeist and Owner: Liam Brown</p>
                        </div>
                        <img alt="Coffee Shop" src={coffeeShopImg} style={{ width: "100%", maxWidth: "1000px" }} className="w3-margin-top" />
                        <p><strong>Opening hours:</strong> everyday from 6am to 5pm.</p>
                        <p><strong>Address:</strong> 15 Adr street, 5015, NY</p>
                    </div>
                </div>

                {/* Menu Container */}
                <div className="w3-container" id="menu">
                    <div className="w3-content" style={{ maxWidth: "700px" }}>
                        <h5 className="w3-center w3-padding-48"><span className="w3-tag w3-wide">THE MENU</span></h5>
                        <div className="w3-row w3-center w3-card w3-padding">
                            {/* eslint-disable-next-line no-script-url, jsx-a11y/anchor-is-valid */}
                            <a href="javascript:void(0)" onClick={e => this.openMenu(e, 'Eat')} id="myLink">
                                <div className="w3-col s6 tablink w3-dark-grey">Eat</div>
                            </a>
                            {/* eslint-disable-next-line no-script-url, jsx-a11y/anchor-is-valid */}
                            <a href="javascript:void(0)" onClick={e => this.openMenu(e, 'Drinks')}>
                                <div className="w3-col s6 tablink">Drink</div>
                            </a>
                        </div>

                        <div id="Eat" className="w3-container menu w3-padding-48 w3-card" style={{ display: "block" }}>
                            <h5>Bread Basket</h5>
                            <p className="w3-text-grey">Assortment of fresh baked fruit breads and muffins 5.50</p><br />

                            <h5>Honey Almond Granola with Fruits</h5>
                            <p className="w3-text-grey">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p><br />

                            <h5>Belgian Waffle</h5>
                            <p className="w3-text-grey">Vanilla flavored batter with malted flour 7.50</p><br />

                            <h5>Scrambled eggs</h5>
                            <p className="w3-text-grey">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p><br />

                            <h5>Blueberry Pancakes</h5>
                            <p className="w3-text-grey">With syrup, butter and lots of berries 8.50</p>
                        </div>

                        <div id="Drinks" className="w3-container menu w3-padding-48 w3-card" style={{ display: "none" }}>
                            <h5>Coffee</h5>
                            <p className="w3-text-grey">Regular coffee 2.50</p><br />

                            <h5>Chocolato</h5>
                            <p className="w3-text-grey">Chocolate espresso with milk 4.50</p><br />

                            <h5>Corretto</h5>
                            <p className="w3-text-grey">Whiskey and coffee 5.00</p><br />

                            <h5>Iced tea</h5>
                            <p className="w3-text-grey">Hot tea, except not hot 3.00</p><br />

                            <h5>Soda</h5>
                            <p className="w3-text-grey">Coke, Sprite, Fanta, etc. 2.50</p>
                        </div>
                        <img alt="Coffee House" src={coffeeHouse2Img} style={{ width: "100%", maxWidth: "1000px", marginTop: "32px" }} />
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default HomeComponent;