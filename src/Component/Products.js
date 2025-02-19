import React, { Fragment, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function RenderProductPage() {
    import ("./Products.css");
    const { productId } = useParams();
    const [jsonContent, setJsonContent] = useState();
    const [installationGuide, setInstallationGuide] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentTab, setCurrentTab] = useState("Overview");

    useEffect(() => {
        const loadPost = async () => {
            try {
                var module = await import(`../Component/json/products.json`);
                
                try {
                    var productJs = await import(`../Products/${productId}.js`);
                    if (productJs) setInstallationGuide(productJs.default()) 
                } catch (err) {}
            
                for (let i = 0; i < module.default.length; i++) {
                    const data = module.default[i]
                    
                    if (data.name.replaceAll(" ", "").toLowerCase() === productId) {
                        setJsonContent(() => data);
                        setIsLoading(false);
                    }
                }
            } catch (err) {
                setError(err);
                setIsLoading(false);
            }
        };

        loadPost();
    }, [productId]);

    if (isLoading) {
        return <div></div>;
    }

    if (error) {
        import ("../Products/ProductsPage.css");
        console.error(error)
        return (<div class="failed">
            <h1>404</h1>
            <h2>Not Found</h2>
        </div>);
    }

    const hasKeyFeatures = jsonContent.keyfeatures.length > 0 ? "div" : "hidden"
    const hasCompatability = jsonContent.compatibility.length > 0 ? "div" : "hidden"

    return (
        <Fragment>
            <div class="page frame">
                {
                    !jsonContent.discontinued ? <Fragment /> : (
                        <div class="discontinued frame">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
                            <p>This product has been discontinued and isn't recommended</p>
                        </div>
                    )
                }

                <div class="main horizontal-container">
                    <div class="thumbnail frame">
                        <img class="current" src={jsonContent.thumbnail} />
                    </div>
            
                    <div class="action frame">
                        <div class="wrapper">
                            <div class="about bottom-border">
                                <img src={jsonContent.logo} />
            
                                <div class="content">
                                    <p class="title">{jsonContent.name}</p>
            
                                    <div class="bottom">
                                        <div class="profile">
                                            <img src={jsonContent.author.image} /><p>{jsonContent.author.name}</p>
                                        </div>
            
                                        <div class="reviews">
                                            <p class="starCount">{jsonContent.reviews.rating}</p>
                                            <svg class="active-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
            
                            <div class="download bottom-border">
                                <a href={jsonContent.download.href} class="button">
                                    <p>Download</p>
                                </a>
            
                                <div class="content">
                                    <span class="seperator"><p class="price">{jsonContent.price}</p> <div><svg class="download-icon" width="8" height="8" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg"><path fill="#475569" d="M4 6L1.5 3.5L2.2 2.775L3.5 4.075V0H4.5V4.075L5.8 2.775L6.5 3.5L4 6ZM1 8C0.725 8 0.489583 7.90208 0.29375 7.70625C0.0979167 7.51042 0 7.275 0 7V5.5H1V7H7V5.5H8V7C8 7.275 7.90208 7.51042 7.70625 7.70625C7.51042 7.90208 7.275 8 7 8H1Z"/></svg><p class="download-count">({formatNumber(jsonContent.download.count)})</p></div></span>
                                    <a href={jsonContent.download.source}>
                                        View Source-Code
                                    </a>
                                </div>
                            </div>
            
                            <div class="details">
                                <h2>Details</h2>
                                <p>License Agreement:<span class="license">{jsonContent.details.license}</span></p>
                                <p>Latest Version:<span class="version">{jsonContent.details.version}</span></p>
                                <p>Release Date:<span class="releasedate">{jsonContent.details.releasedate}</span></p>
                                <p>Updated:<span class="updated">{jsonContent.details.updated}</span></p>
                            </div>
            
                            <div class="bugreport">
                                <p>Found a problem?</p><a href="/react/discord">Report Bug</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="information frame">
                    <div class="navigation">
                        <button class={currentTab == "Overview" ? "active" : ""} id="Overview" onClick={() => setCurrentTab("Overview")}>
                            <p>Overview</p>
                        </button>

                        <button class={currentTab == "Reviews" ? "active" : ""} onClick={() => setCurrentTab("Reviews")}>
                            <p>Reviews</p>
                        </button>

                        {!installationGuide ? <Fragment /> : (
                            <button class={currentTab == "Installation" ? "active" : ""} onClick={() => setCurrentTab("Installation")}>
                                <p>Installation</p>
                            </button>
                        )}
                    </div>
                
                    <div class={`overview section ${currentTab == "Overview" ? "active" : ""}`}>
                        <div class="div description">
                            <p>{jsonContent.description}</p>
                        </div>

                        {!hasKeyFeatures ? (<Fragment />) : (
                            <div className={hasKeyFeatures}>
                                <h1>Key Features</h1>
                                {
                                    Object.values(jsonContent.keyfeatures).map((text, index) => (
                                        <p key={index}>{text}</p>
                                    ))
                                }
                            </div>
                        )}

                        {!hasCompatability ? (<Fragment />) : (
                            <div className={hasCompatability}>
                                <h1>Compatability</h1>
                                {
                                    Object.values(jsonContent.compatibility).map((text, index) => (
                                        <p key={index}>{text}</p>
                                    ))
                                }
                            </div>
                        )}


                        <h2 class="softwareused">This product was developed using Roblox Studio and Visual Studio Code</h2>
                    </div>
                
                    <div class={`reviews section ${currentTab == "Reviews" ? "active" : ""}`}>
                        <p>Currently unavailable...</p>
                    </div>

                    {!installationGuide ? <Fragment /> : (
                        <div class={`installation section ${currentTab == "Installation" ? "active" : ""}`}>
                            {installationGuide}
                        </div>
                    )}
                </div>
            </div>
        </Fragment>
    );
}

function formatNumber(num) { if(num >= 1000) { return (num / 1000) + 'k'; } return num; }

export default RenderProductPage