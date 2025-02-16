import React, { Fragment, useState, useEffect } from 'react';




const filter = {
    "rating" : 5,
    "engine" : "any",
    "category" : "any",
    "price" : "FREE"
}


function RenderMarketplacePage() {
    import("./Marketplace.css");
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState('All Categories');
    const [engine, setEngine] = useState('Any');
    const [rating, setRating] = useState(5);
    const [price, setPrice] = useState('Any');

    useEffect(() => {
        async function loadJson() {
            try {
                const module = await import('../Component/json/products.json');
                const jsonData = module.default;
                setProducts(jsonData);
                setFilteredProducts(jsonData);
            } catch (error) {
                console.error('Failed to load JSON:', error);
            }
        }

        loadJson();
    }, []);

    useEffect(() => {
        const filtered = products.filter(product => {
            return (category === 'All Categories' || product.category === category) &&
                   (engine === 'Any' || product.engine === engine) &&
                   (rating === 5 || product.reviews.rating <= rating) &&
                   (price === 'Any' || price === 'Free' && product.price.toLowerCase() === 'free' || price === 'Paid' && product.price.toLowerCase() !== 'free' || product.price === price);
        });
        setFilteredProducts(filtered);
    }, [category, engine, rating, price, products]);

    if (products.length === 0) {
        return <div></div>;
    }

    return (
        <div class="page">
            <div class="container">
                <div class="filter">
                    <div id="category" class="category frame">
                        <div class="title">
                            <p>Refine by Category</p>
                        </div>
        
                        {['All Categories', 'Admin Panel', 'Donation Board', 'User Interface', 'Script', '3D Model', 'Map', 'Plugin'].map(cat => (
                            <button
                                key={cat}
                                className={category === cat ? 'active' : ''}
                                onClick={() => setCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
        
                    <div id="engine" class="category frame">
                        <div class="title">
                            <p>Engine</p>
                        </div>
        
                        <div class="options">
                            {['Any', 'Roblox', 'Unity', 'Unreal Engine', 'Blender', "Web"].map(eng => (
                                <button
                                    key={eng}
                                    className={engine === eng ? 'active' : ''}
                                    onClick={() => setEngine(eng)}
                                >
                                    {eng}
                                </button>
                            ))}
                        </div>
                    </div>
        
                    <div id="rating" class="category frame">
                        <div class="title">
                            <p>Rating</p>
                        </div>
        
                        <div class="options">
                            <div class="slider">
                                <input type="range" min="1" max="5" step="1" value={rating} onChange={
                                    (e) => {
                                        setRating(parseInt(e.target.value)); document.getElementById("ratingBackgroundTrack").style = `width: ${((e.target.value - (e.target.min/e.target.max)*5)/e.target.max)*100}%`

                                        document.querySelector(`.page .filter #rating #star2`).style = `opacity: ${e.target.value >= 2 ? "100%" : "25%"}`
                                        document.querySelector(`.page .filter #rating #star3`).style = `opacity: ${e.target.value >= 3 ? "100%" : "25%"}`
                                        document.querySelector(`.page .filter #rating #star4`).style = `opacity: ${e.target.value >= 4 ? "100%" : "25%"}`
                                        document.querySelector(`.page .filter #rating #star5`).style = `opacity: ${e.target.value >= 5 ? "100%" : "25%"}`
                                    }
                                } />
                                <div id="ratingBackgroundTrack" class="background"></div>
                                <div class="track"></div>
                            </div>
                            <div class="rating">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <div key={star} id={`star${star}`}>
                                        <p><svg className="star" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M2.40221 9.32503L3.04164 6.56074L3.08574 6.37011L2.9379 6.24194L0.793013 4.38238L3.62811 4.13628L3.82315 4.11935L3.89936 3.93902L5 1.33483L6.10064 3.93902L6.17685 4.11935L6.37189 4.13628L9.20699 4.38238L7.0621 6.24194L6.91426 6.37011L6.95836 6.56074L7.59779 9.32503L5.16787 7.85921L5 7.75795L4.83213 7.85921L2.40221 9.32503Z"/></svg>{star}</p>
                                    </div>
                                ))}                     
                            </div>
                        </div>
                    </div>
                    
                    <div id="price" class="category frame">
                        <div class="title">
                            <p>Price</p>
                        </div>
        
                        <div class="options">
                            {['Any', 'Free', 'Paid'].map(pri => (
                                <button
                                    key={pri}
                                    className={price === pri ? 'active' : ''}
                                    onClick={() => setPrice(pri)}
                                >
                                    {pri}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div class="viewport">
                    <div class="sort">
                        <div class="left">
                            <p class="result"></p>
                        </div>
        
                        <div class="right">
                            {/* <p>Sort By:</p> */}
                            {/* <button class="sortby"><p>Relavance</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></button> */}
                        </div>
                    </div>
                    <div class="content">
                        <Fragment>
                            {filteredProducts.map((product, index) => (
                                <CreateProduct key={index} product={product} />
                            ))}
                        </Fragment>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CreateProduct(json) {
    json = json.product

    if (filter.category.toLowerCase() !== "any" && filter.category.toLowerCase() !== json.category.toLowerCase()) return (null);
    if (filter.engine.toLowerCase() !== "any" && filter.engine.toLowerCase() !== json.engine.toLowerCase()) return (null);
    if (Math.floor(filter.rating) < Math.floor(json.reviews.rating)) return (null);
    if (filter.price.toLowerCase() == "free" && json.price.toLowerCase() !== "free") return (null)
    else if (filter.price.toLowerCase() == "paid" && json.price.toLowerCase() == "free") return (null);

    return (
        <a href={json.redirect}>
            <button class="product frame">
                <div>
                    <img class="thumbnail" src={json.thumbnail} alt="" />
                    <p class="category">{json.category}</p>
                    <p class="name">{json.name}</p>
                    <p class="price">{json.price}</p>
                </div>
            </button>
        </a>
    );
}


export default RenderMarketplacePage;