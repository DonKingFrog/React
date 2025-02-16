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
        {Title("Nexus Dynamics + TopbarPlus Integration")}
        {Info("Dev Equip", "Dec 18, 2024")}
        {Thumbnail("https://devequip.com/Resources/Blog/TopbarIntegration.png")}
        {Alt("Connection with TopbarPlus in Nexus Dynamics v2.0.5")}    
        <p>One very big problem about Nexus Dynamics has been thje topbar being in places many don't want to be in. Therefore, we're going to sit and talk about our plans to fix this.</p>
        {Break}
        
        {Topic([
            "What is TopbarPlus?",
            <Fragment>
                <p><a href="https://devforum.roblox.com/t/v3-topbarplus-v300-construct-intuitive-topbar-icons-customise-them-with-themes-dropdowns-captions-labels-and-much-more">TopbarPlus by @ForeverHD</a> is a popular module used to recreate the default topbar that Roblox's made for their menus. They are always on top of your screen and always in sight.</p>
                <br />
                <p>TopbarPlus allows you to create your own custom buttons to align with Roblox menus so you can have a much cleaner and modern looking game. TopbarPlus will automatically move buttons around to align them unless they aren't made using TopbarPlus.</p>
            </Fragment>
        ])}
        
        {Break}

        {Topic([
            "Integration of TopbarPlus to Nexus Dynamics",
            <Fragment>
                <p>We've made it so Nexus Dynamcis will now detect whether your using TopbarPlus in your game. If you are, it'll instead create its topbar icon using TopbarPlus to align itself without overlapping any buttons.</p>
                <br />
                <p>In settings, you'll get new options that'll give you selections of topbar alignment (left | center | right) along with some customization of the button itself.</p>
                <br />
                <img class="thumbnail" src="https://devequip.com/Resources/Blog/topbarThumbnail.png" />
            </Fragment>
        ])}

        {Break}

        {Topic([
            "What if I don't use TopbarPlus?",
            <Fragment>
                <p>If you don't use TopbarPlus, Nexus Dynamics will create its own version of TopbarPlus UI for only the parts it needs. You'll still be able to align them to the corners or center and with Roblox Menus</p>
            </Fragment>
        ])}
    </Fragment>
);