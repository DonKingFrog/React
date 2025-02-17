import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import "./NewsPost.css";

// Quick Write
function Title(title) { return (<h1 class="title">{title}</h1>) }
function SubTitle(subtitle) { return (<h1 class="subtitle">{subtitle}</h1>) }
function Info(author, published) { return (<div class="info"><p class="author">By <b>{author}</b></p> <p class="published">Published <b>{published}</b></p></div>) }
function Thumbnail(src) { return (<img class="thumbnail" src={src} />) }
function Alt(alt) { return (<p class="alt">{alt}</p>) }
function Back() { return (<Link to="/blog" class="back"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg><p>Back</p></Link>) }
const Break = <div class="___"></div>
function Topic(array) { return (<div class="topic">{SubTitle(array[0])}{array[1]}</div>)  }






export default () => ( 
    <Fragment>
        {Back()}
        {Title("Launch of Dev Equip's website")}
        {Info("Dev Equip", "Jan 1, 2025")}
        {Thumbnail("https://devequip.com/Resources/Blog/websitePreview.png")}
        {Alt("Store page of Nexus Dynamics")}    
        <p>Dev Equip was created Feb 26, 2022 on Discord. Since then, we've been uploading our assets with the purpose supporting developers on their journey to create spectacular games.</p>
        <p>We generally centered our community on Discord but we're ready to take a bigger step forward!</p>
        {Break}
        
        {Topic([
            "Official Website",
            <Fragment>
                <p>The official website of Dev Equip is still under development but we're actively working on updating it for a much more user-friendly feel whilst also bringing more content to our developers.</p>
                <br />
                <p>You'll only be able to access three of our major products <a href="https://devequip.com/products/nexusdynamics">Nexus Dynamics 2.0</a> / <a href="https://devequip.com/products/donationboard3.0">Donation Board 3.0</a> / <a href="https://devequip.com/products/axisindicator">Axis Indicator</a> until we've developed a better marketplace for all our products.</p>
                <br />
                <sub><b>THE STORE STATS SUCH AS REVIEWS AND DOWNLOADS ARE BASED OF THE ROBLOX CREATOR STORE UNTIL OUR OWN REVIEW SYSTEM</b></sub>
            </Fragment>
        ])}
        
        {Break}

        {Topic([
            "Official Discord Server",
            <Fragment>
                <p>We're renovating the Discord server to be more of a dev community server whilst still running it as a central hub for developers. We'll notify any changes or new content from the website within specific channels, whilst having fun events with our community.</p>
                <br />
                <p>It'll be our main source of communication with our community whilst we continue to deliver high quality products!</p>
            </Fragment>
        ])}

        {Break}

        {Topic([
            "Future of Dev Equip",
            <Fragment>
                <p>We're planning on creating a public marketplace for developers that would like to share free or paid creations using a similar design as our current products.</p>
                <br />
                <p>As we're continuing o develop the website further, we're going to be expanding our engine/platforms to: <br /><b>Roblox | Unity | Unreal Engine | Blender | Visual Studio | HTML5</b></p>
            </Fragment>
        ])}
    </Fragment>
);