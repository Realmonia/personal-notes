// ==UserScript==
// @name         Design Checklist
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add a checklist side panel to the website
// @author       han.heming@icloud.com
// @match        *://*/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // Styles for the side panel
    const style = document.createElement('style');
    style.innerHTML = `
        #checklistPanel {
            position: fixed;
            top: 20px;
            right: 20px;
            width: 300px;
            max-height: 80vh; /* set a maximum height */
            background: #FFFF99; /* light yellow */
            color: black;
            border: 1px solid #ccc;
            padding: 10px;
            z-index: 10000;
            box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
            overflow-y: auto; /* enable vertical scrolling */
        }
        #checklistPanel ul {
            list-style: none;
            padding: 0;
            margin-top: 5px;
        }
        #checklistPanel .section {
            border-top: 1px solid #ddd;
            padding-top: 10px;
        }
        #checklistPanel .section:first-child {
            border-top: none;
            padding-top: 0;
        }
        #checklistPanel h3 {
            color: black;
            margin-top: 0;
        }
        #checklistPanel li {
            color: black;
            margin-bottom: 5px;
        }
        #closeBtn {
            position: absolute;
            top: 5px;
            right: 5px;
            cursor: pointer;
            font-size: 20px;
            background: none;
            border: none;
        }
    `;
    document.head.appendChild(style);

    // Create the side panel
    const panel = document.createElement('div');
    panel.id = 'checklistPanel';
    document.body.appendChild(panel);

    // Add content to the side panel with sections
    const checklistHTML = `
        <button id="closeBtn">×</button>

        <strong>Checklist</strong>
        <div class="section">
            <h3>User Experience</h3>
            <ul>
                <li><input type="checkbox" id="ue1" /> Who is the target user? Construct user story? </li>
                <li><input type="checkbox" id="ue2" /> Read the documentation as someone with no context and as customer. </li>
                <li><input type="checkbox" id="ue3" /> What are the assumptions made? Why are they the correct assumption? </li>
                <li><input type="checkbox" id="ue4" /> Why do we need to make this change? Why is this necessary? What if we don't make this change? Why this is the correct time for this change? </li>
                <li><input type="checkbox" id="ue5" /> Are there at least 3 viable choices presented? Are pros and cons clearly listed? For each choice, what's the customer's experience? </li>
                <li><input type="checkbox" id="ue6" /> How did we test around the customer behavior? Should we do test driven development and design for this? </li>
            </ul>
        </div>
        <div class="section">
            <h3>Technical Detail - Reliability</h3>
            <ul>
                <li><input type="checkbox" id="re1" /> Minimize opportunity for error - Abstraction? Interface? API? Are these necessary? Are parameters properly defined? What will be the SLA? </li>
                <li><input type="checkbox" id="re2" /> Separate where user could make mistakes vs. where there is a failure. Do we need sandbox? PoC? </li>
                <li><input type="checkbox" id="re3" /> Proper metrics and monitorability. How do we know when it fails? How fast do we know? How fast we can recover? Rollbackable? </li>
            </ul>
        </div>
        <div class="section">
            <h3>Technical Detail - Scalability</h3>
            <ul>
                <li><input type="checkbox" id="sc1" /> Define load and performance of this feature. What are the directions for scaling? </li>
                <li><input type="checkbox" id="sc2" /> If we keep resource but increase the load. What will the performance be? </li>
                <li><input type="checkbox" id="sc3" /> If we want to keep the performance, how much more resource we need to bring in when load increases? </li>
                <li><input type="checkbox" id="sc5" /> Stateless or stateful? </li>
                <li><input type="checkbox" id="sc6" /> If we want to keep the performance, how much more resource we need to bring in when load increases? </li>
            </ul>
        </div>
        <div class="section">
            <h3>Technical Detail - Maintainablity and Testability</h3>
            <ul>
                <li><input type="checkbox" id="re1" /> Are we able to do unit tests, component level tests, then integ tests and canary? </li>
                <li><input type="checkbox" id="re2" /> Operability? Simplicity? Evolvability? </li>
            </ul>
        </div>
    `;
    panel.innerHTML = checklistHTML;

    // Handle close button click
    document.getElementById('closeBtn').addEventListener('click', function() {
        panel.style.display = 'none';
    });
})();