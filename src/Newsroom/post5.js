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
        {Title("Donation Board Hotfix v3.2.5")}
        {Info("Dev Equip", "Jan 4, 2025")}
        {Thumbnail("https://devequip.com/Resources/Blog/dbboard2.jpg")}
        <br />
        {Topic([
            "CHANGES",
            <Fragment>
                <ul>
                    <li>Developer products with an invaid ID will no longer be displayed.</li>
                </ul>
            </Fragment>
        ])}

        {Break}

        {Topic([
            "FIXES",
            <Fragment>
                <ul>
                    <li>
                        Correctly configured the following themes:
                        <ul>
                            <li><b>Dev Equip Theme</b></li>
                            <li><b>Hacker Theme</b></li>
                            <li><b>Custom Theme</b></li>
                        </ul>
                    </li>

                    <li>Rigs will no longer disappear after theme failures.</li>
                </ul>
            </Fragment>
        ])}
    </Fragment>
);;