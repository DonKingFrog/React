import React, { Fragment } from 'react';
import "./NewsPost.css";

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
        {Title("Introducing Marketplace")}
        {Info("Dev Equip", "Jan 23, 2025")}
        {Thumbnail("https://devequip.com/Resources/Blog/marketplacepreview.png")}
        {Alt("Official teaser for Dev Equip's marketplace")}    
        <p>Hello everyone, hope your doing well! We're taking big leaps for developers this year and want to introduce a new way we'll provide products for developers of any experience.</p>
        {Break}
        
        {Topic([
            "Official Marketplace",
            <Fragment>
                <p>As we expand the website, we're slowly turning it into the official hub for Dev Equip products. Our products will now be primarily obtained within the marketplace, and fitted with source/file formats. All files will remain as Roblox creator store assets with RBXM/RBXL until file formating arrives. We'll talk more about file formats later on.</p>
                <br />
                <p>Additionally, we're introducing our own review system for people willing to leave a review. These will only be available after accounts arrive and will have a chance to have your review hand-picked to be displayed on the landing page.</p>
            </Fragment>
        ])}
        
        {Break}

        {Topic([
            "Discord Products Category",
            <Fragment>
                <p>We've already removed all products discontinued due to newer version such as:</p>
                <ul>
                    <li>Chat Plus +</li>
                    <li>Nexus Dynamics [Phase 1]</li>
                    <li>Donation Board [v1/v2]</li>
                </ul>
                <br />
                <p>Whilst also removing products that need a rework for user-friendly reasons:</p>
                <ul>
                    <li>Proximity Prompt [v2]</li>
                    <li>Mini-Map</li>
                </ul>
                <br />
                <p>Furthermore, we've removed all products that sit at the bottom of our statistics bin:</p>
                <ul>
                    <li>Various 3D Models</li>
                    <li>Various User Interfaces</li>
                    <li>All Luau Modules</li>
                </ul>
            </Fragment>
        ])}

        {Break}

        {Topic([
            "File Formats",
            <Fragment>
                <p>We're introducing more file formats per category when downloading for a more flexable workflow. For products that use scripts, we'll provide the source from github. For all products listed below will be given unique formats:</p>
                <br /><br />
                <b class="extraBold">Admin Panel</b>
                <p>Format: RBXM</p>
                <p>Source: Github</p>
                <br />
                <b class="extraBold">Donation Board</b>
                <p>Format: RBXM</p>
                <p>Source: Github</p>
                <br />
                <b class="extraBold">User Interface</b>
                <p>Format: RBXM</p>
                <p>Source: None</p>
                <br />
                <b class="extraBold">Script</b>
                <p>Format: RBXM | Lua</p>
                <p>Source: Github</p>
                <br />
                <b class="extraBold">3D Model</b>
                <p>Format: OBJ | FBX | BLEND | RBXM</p>
                <p>Source: None</p>
                <br />
                <b class="extraBold">Map</b>
                <p>Format: RBXL</p>
                <p>Source: None</p>
                <br />
                <b>Plugin</b>
                <p>Format: Creator Store | Local Plugin | RBXM</p>
                <p>Source: Github</p>
            </Fragment>
        ])}

        {Break}

        {Topic([
            "Deprecating Creator Store Products",
            <Fragment>
                <p>Unfortunately, once all products has been successfully moved to the marketplace and the introduction of file formats, we're deprecating the usage of creator store versions. This will require you to manually insert all files unless you use our dedicated plugin which will release around the same time as file formats. It'll act as our version of the official Roblox toolbox but only for Dev Equip products.</p>
                <br />
                <p>Keep in mind we're <b>DEPRECATING</b> not removing the creator store products. You'll still be able to access them if need be.</p>
            </Fragment>
        ])}

        {Break}

        {Topic([
            "Community Marketplace",
            <Fragment>
                <p>Although we're not anywhere near the start of development for the community marketplace, we're very enthusiastic about this idea for a community that shares resources between each other regardless if its free or priced.</p>
                <br />
                <p>We'll share more information about this community marketplace once we start development.</p>
            </Fragment>
        ])}
    </Fragment>
);;