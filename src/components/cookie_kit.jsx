import React, { Component } from 'react';
import CookieKit from 'react-cookie-kit';

import 'react-cookie-kit/dist/xck-react.css';

import googleAnalyticsSet from "../scripts/google_analytics_set.txt";
import googleAnalyticsUnset from "../scripts/google_analytics_unset.txt";

class CookieKitWrapper extends Component {
    /**
     * Our main cookie handler. Make decision on all types of cookies to set or unset based on user interaction.
     * Will be called by XcooBee cookie kit after user makes cookie decision or page is loaded with known decisions.
     *
     * @param {*} cookieConsents
     */
    onCookieConsentsChange = cookieConsents => {
        console.log("Cookie consents have been called:", cookieConsents);

        // call for program coded cookies
        if (cookieConsents.application) {
            // set required cookies here
            this.xckSetCookie("myRequiredCookie", "this is a required cookie");
            this.xckLoadJs([googleAnalyticsSet]);
        } else {
            // remove required cookie here
            this.xckEraseCookie("myRequiredCookie");
            this.xckLoadJs([googleAnalyticsUnset]);
        }

        if (cookieConsents.usage) {
            // set user personalization cookies here
            this.xckSetCookie("usage1", "green");
            this.xckSetCookie("usage2", "blue");
        } else {
            // remove user personalization cookies here
            this.xckEraseCookie("usage1");
            this.xckEraseCookie("usage2");
        }

        if (cookieConsents.statistics) {
            // set site statistics gathering cookies here
            this.xckSetCookie("statCookie", "counter");
        } else {
            // remove site statistics gathering cookies here
            this.xckEraseCookie("statCookie");
        }

        if (cookieConsents.advertising) {
            // set advertising and marketing and tracking cookies here
            this.xckSetCookie("marketingCookie", "ads for all");
        } else {
            // remove advertising and marketing and tracking cookies here
            this.xckEraseCookie("marketingCookie");
        }
    };

    /**
     * Sets cookies
     *
     * @param {string} name the name of cookie
     * @param {string} value the value of cookie
     * @param {int=} days optional: the number of days to persist cookie, if not provided will become session cookie
     */
    xckSetCookie = (name, value, days) => {
        let expires = "";

        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }

        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    };

    /**
     * retrieve value of cookie
     *
     * @param {string} name the name of cookie
     * @returns {string, null} the value of cookie
     */
    xckGetCookie = name => {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');

        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];

            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }

        return null;
    };

    /**
     * deletes cookie with given name
     *
     * @param {string} name the name of cookie
     */
    xckEraseCookie = name => {
        document.cookie = name + '=; Max-Age=-99999999;';
    };

    /**
     * Load Javascript. Can load from remote file or code.
     * @param {object} loadScripts - The HTMLCollection of script tags to be loaded
     */
    xckLoadJs = (loadScripts) => {
        if (loadScripts.length > 0) {
            for (let i = 0; i < loadScripts.length; i++) {
                fetch(loadScripts[i])
                    .then(response => response.text())
                    .then(loadScript => {
                        const template = document.createElement("template");

                        template.innerHTML = loadScript.trim(); // Never return a text node of whitespace as the result

                        const item = template.content.firstChild;
                        const script = document.createElement("script");

                        if (!item.src) {
                            script.text = item.text;
                        } else {
                            // load from file
                            script.async = true; // we always load async
                            script.src = item.src;
                            script.onload = function () {
                                console.log(`cookie script from ${item.src} is ready!`);
                            };

                            // other elements
                            if (item.integrity) {
                                script.integrity = item.integrity;
                            }
                            if (item.crossOrigin) {
                                script.crossOrigin = item.crossOrigin;
                            }
                        }

                        // now append to document for execution
                        document.body.appendChild(script);
                    });
            }
        }
    };

    render() {
        return (
            <CookieKit
                cssAutoLoad={false}
                cookieHandler={this.onCookieConsentsChange}
                privacyUrl="http://localhost:3000/privacy"
                termsUrl="http://localhost:3000/terms"
                requestDataTypes={['advertising', 'application', 'statistics', 'usage']}
                textMessage={{
                    "de-de": "Die Beschreibung.",
                    "en-us": "The description.",
                    "es-419": "La descripción.",
                    "fr-fr": "La description.",
                }}
            />
        );
    }
}

export default CookieKitWrapper;