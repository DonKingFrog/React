function RenderBlogPage() {
    import('./Blog.css');
    return (
        <div class="page">
            <div class="container">
                {blogBlock({
                    "redirect" : "/newsroom/post6",
                    "thumbnail" : "https://devequip.com/Resources/Blog/marketplacepreview.png",
                    "category" : "NEWS",
                    "title" : "Introducing Marketplace",
                    "version" : "",
                    "date" : "Jan 23, 2025",
                })}

                {blogBlock({
                    "redirect" : "/newsroom/post5",
                    "thumbnail" : "https://devequip.com/Resources/Blog/dbboard2.jpg",
                    "category" : "HOTFIX",
                    "title" : "Donation Board Hotfix",
                    "version" : "v3.25",
                    "date" : "Jan 4, 2025",
                })}
                
                {blogBlock({
                    "redirect" : "/newsroom/post4",
                    "thumbnail" : "https://devequip.com/Resources/Blog/websitePreview.png",
                    "category" : "NEWS",
                    "title" : "Launch of Dev Equip's website",
                    "version" : "",
                    "date" : "Jan 1, 2025",
                })}

                {blogBlock({
                    "redirect" : "/newsroom/post3",
                    "thumbnail" : "https://devequip.com/Resources/Blog/topbarThumbnail.png",
                    "category" : "DEVELOPER PREVIEW",
                    "title" : "Nexus Dynamics + TopbarPlus Integration",
                    "version" : "",
                    "date" : "Dec 18, 2024",
                })}

                {blogBlock({
                    "redirect" : "/newsroom/post2",
                    "thumbnail" : "https://devequip.com/Resources/Blog/banCode.png",
                    "category" : "DEVELOPER PREVIEW",
                    "title" : "Migration to Ban API in Nexus Dynamics v2.0.5",
                    "version" : "",
                    "date" : "Dec 10, 2024",
                })}
                
                {blogBlock({
                    "redirect" : "/newsroom/post1",
                    "thumbnail" : "https://devequip.com/Resources/Blog/futureNexusDynamics.png",
                    "category" : "NEWS",
                    "title" : "What's next for Nexus Dynamics 2.0?",
                    "version" : "",
                    "date" : "Oct 17, 2024",
                })}
            </div>
        </div>
    );
}

function blogBlock({ redirect, thumbnail, category, title, version, date }) {
    return(
        <a href={redirect} class="frame">
            <div class="image">
                <img src={thumbnail} />
            </div>

            <div class="content">
                <h3>{category}</h3>
                <h2>{title}<span class="version">{version}</span></h2>
            </div>

            <div class="bottom">
                <div class="read">
                    <p>READ MORE</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                </div>

                <sup>{date}</sup>
            </div>
        </a>
    );
}


export default RenderBlogPage;