import React, { Fragment } from 'react';
import "./NewsPost.css";

// Quick Write
function Title(title) { return (<h1 class="title">{title}</h1>) }
function SubTitle(subtitle) { return (<h1 class="subtitle">{subtitle}</h1>) }
function Info(author, published) { return (<div class="info"><p class="author">By <b>{author}</b></p> <p class="published">Published <b>{published}</b></p></div>) }
function Thumbnail(src) { return (<img class="thumbnail" src={src} />) }
function Alt(alt) { return (<p class="alt">{alt}</p>) }
function Back() { return (<a href="/blog" class="back"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg><p>Back</p></a>) }
const Break = <div class="___"></div>
function Topic(array) { return (<div class="topic">{SubTitle(array[0])}{array[1]}</div>)  }






export default () => (
    <Fragment>
        {Back()}
        {Title("Migration to Ban API in Nexus Dynamics v2.0.5")}
        {Info("Dev Equip", "Dec 10, 2024")}
        {Thumbnail("https://devequip.com/Resources/Blog/banCode.png")}
        {Alt("Source-Code for Universal Ban API")}    
        <p>Revoking Access to players that don't obey the rules is an essential tool for any administrative system and has been planned for a reworked to better control what administrators can do regarding future bans.</p>
        {Break}
        
        {Topic([
            "What is Roblox's Ban API",
            <Fragment>
                <p>If you've been living under a rock, Roblox has released a new Ban API with many capabilities ordinary scripts developed by Roblox developers can't manage with the given environment. These include the detection of alternative accounts (alts) and giving us the ability to use these API outside Roblox without requiring a running server. This feature was released shortly after the final phase of Nexus Dynamic's development; Therefore, we didn't have time to implement this system.</p>
            </Fragment>
        ])}
        
        {Break}

        {Topic([
            "Implementing Ban API into Roblox",
            <Fragment>
                <p>This has been our most requested feature for Nexus Dynamics and has gone through decision making to implement. We're still a little skeptical at the time of this post but we've been keeping an eye on recent reports that fully utilize this new system without any problems. Therefore, we've decided to implement this into Nexus Dynamics v2.0.5.</p>
                <br />
                <p>The new system will now give all developers the capability of managing Nexus Dynamics bans outside of the game and still be able to configure them in-game! In addition to this, we won't be wasting valuable memory on DataStoreService, assisting people that use global leaderboards with Nexus Dynamics in their experience.</p>
            </Fragment>
        ])}

        {Break}

        {Topic([
            "When should this be expected?",
            <Fragment>
                <p>The Ban API has already been developed and tested, marking it complete and ready for release. However, we're releasing it with version 2.0.5 due to the new framework we're implementing to increase performance.</p>
                <br />
                <p>The exact release date for version 2.0.5 has not yet been decided; however, we've planned an approximate release date within Q1 of 2025.</p>
            </Fragment>
        ])}
    </Fragment>
);