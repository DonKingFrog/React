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
        {Title("What's next for Nexus Dynamics 2.0?")}
        {Info("Dev Equip", "Oct 17, 2024")}
        {Thumbnail("https://devequip.com/Resources/Blog/futureNexusDynamics.png")}
        {Alt("Discord message sent by DonKingFrog")}    
        <p>Nexus Dynamics has been a huge success and we're thrilled to talk about our vision of its future!<br />(This post has been slightly altered with more information)</p>
        {Break}
        
        {Topic([
            "New Editors",
            <Fragment>
                <p>The community greatly appreciated the new Terrain Editor, allowing administrators to control the shape of terrain in-game using studio-like tools. Therefore, we've decided to give extra time before the next editors arrive, helping us improve the UI and performance so administrators can do big task within seconds.</p>
                <br />
                <p>We're introducing three new editors in the future that'll enhance your development in-game. These three will be entirely independent and not assosiated with each other. All three should work the same as Terrain Editor and be somewhat connected to other properties within manager.</p>
                <br />
                <p>The first editor will be <b>Studio Editor</b>. This editor has already been showcased in our previous dev preview, but has since gone through many stages of tools and customizability. We've planned to not only give you ordinar studio tools but some of the Roblox plugins that make building super simplistic and efficient for any task.</p>
                <br />
                {Thumbnail("https://devequip.com/Resources/Blog/futureNexusDynamics.png")}
                <br />
                <br />
                <p>The other two editors will be revealed after version 2.0.5 has been released. One of these two editors will play a unique roll in lighting whilst the other will stay mysterious.</p>
            </Fragment>
        ])}
        
        {Break}

        {Topic([
            "Themes & Customization",
            <Fragment>
                <p>Now that Nexus Dynamics is officially finished it's main design, we've planned a lot of themes for the future to come. These themes will work in two ways:</p>
                <br />
                <p><b>Preset Themes</b>, these are our own presets of themes you can pick for your panel such as light mode, dark mode, midnight, etc.</p>
                <br />
                <p><b>Custom Themes</b>, these you're able to customize through a long list of color values that'll save as part of your settings.</p>
                <br />
                <p>Additionally, we'll introduce a lot more settings for people that want the panel to fit not only the appearance of their game but functionality. Some might not like where the position of the topbar sits, and we've planned to make it move around or hide entirely. Same can be said for other features like notifications, panel scale, and icons.</p>
            </Fragment>
        ])}

        {Break}

        {Topic([
            "Framework overhaul",
            <Fragment>
                <p>Currently Nexus Dynamics sits at around 11k UI elements per player and is extremely laggy to move around. We're going through extensive measures to reduce each element and increase performance. This will also help us create much better hitboxes for some of the elements that we've overlooked.</p>
                <br />
                <p><b>Mobile Support</b> will be included with this overhaul due to us manually going through each element, we're now able to spot any element not supported for mobile displays. We'll also give you the option to go full-screen on mobile due to vast majority of the panel consisting of small buttons.</p>
            </Fragment>
        ])}
    </Fragment>
);