import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function RenderAboutPage() {
    import('./About.css');

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            })
        })
        
        const hiddenElements = document.querySelectorAll(".hidden, .hiddenBlur");
        hiddenElements.forEach((el, index) => {
            observer.observe(el)
        });
    })

    return (
        <div class="page-about">
            <section id="about">
                <h1>About Us</h1>
                {/* <p>Dev Equip was founded by Donavan, following his resignment from Bangkok Entertainment, a Roblox EDM concert group. Is now a company specialized in donation boards and administrator panels.</p> */}
                <p>Empowering you to become a professional developer.</p>
                <div id="overlay"></div>
                <img src="imgs/cashierview.png" alt="" id="backdrop" />
            </section>
            
            <section id="description">
                <h1>Our Story</h1>
                <p>
                We believe every developer should have a chance at success. Therefore, we’ve started Dev Equip to make that possible. Dev Equip is all about helping developers build games without worrying about cost.
<br /><br />
A small company called DNTech (Don’s Technology) was founded in 2022, shortly after the founder Donavan resigned from Bangkok Entertainment. The main purpose of this company was to sell electronic dance music concert equipment such as lighting systems nad 3D models for stages.
<br /><br />
Later down the line, DNTech expanded its territory and began releasing more varieties of products. After releasing Ultimate Admin Panel and Exploiter Mayhem, DNTech rebranded into Dev Equip.
<br /><br />
Dev Equip started mainly focusing on high-end systems like donation boards and administrator panels but is still being run by one developer, Donavan.
                </p>
            </section>
        
            <section id="values">
                    <img src="imgs/developerVectorArt.gif" alt="" />
                    
                    <div class="wrapper">
                        <h1 class="hidden">Core Values</h1>
                        <div class="hidden">
                            <div class="top">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 96c0 14.3-3.1 27.9-8.8 40.2L396 227.4c-23.7 25.3-54.2 44.1-88.5 53.6L256 192c0 0 0 0 0 0s0 0 0 0l-68 117.5c21.5 6.8 44.3 10.5 68.1 10.5c70.7 0 133.8-32.7 174.9-84c11.1-13.8 31.2-16 45-5s16 31.2 5 45C428.1 341.8 347 384 256 384c-35.4 0-69.4-6.4-100.7-18.1L98.7 463.7C94 471.8 87 478.4 78.6 482.6L23.2 510.3c-5 2.5-10.9 2.2-15.6-.7S0 501.5 0 496l0-55.4c0-8.4 2.2-16.7 6.5-24.1l60-103.7C53.7 301.6 41.8 289.3 31.2 276c-11.1-13.8-8.8-33.9 5-45s33.9-8.8 45 5c5.7 7.1 11.8 13.8 18.2 20.1l69.4-119.9c-5.6-12.2-8.8-25.8-8.8-40.2c0-53 43-96 96-96s96 43 96 96zm21 297.9c32.6-12.8 62.5-30.8 88.9-52.9l43.7 75.5c4.2 7.3 6.5 15.6 6.5 24.1l0 55.4c0 5.5-2.9 10.7-7.6 13.6s-10.6 3.2-15.6 .7l-55.4-27.7c-8.4-4.2-15.4-10.8-20.1-18.9L373 393.9zM256 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
                                <h1>Simplicity</h1>                                
                            </div>
                            <p>Our products are carefully crafted so the installation process is made as swiftly as possible.</p>
                        </div>

                        <div class="hidden">
                            <div class="top">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"/></svg>
                                <h1>Innovation</h1>                                
                            </div>
                            <p>Unique products is what we're known for. All our products go through a unique design process making our products different from the rest.</p>
                        </div>

                        <div class="hidden">
                            <div class="top">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM609.3 512l-137.8 0c5.4-9.4 8.6-20.3 8.6-32l0-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2l61.4 0C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/></svg>
                                <h1>User-Friendliness</h1>                                
                            </div>
                            <p>Our products are built under the influence that monkeys might be using our products, therefore we must make it easy to use!</p>
                        </div>
                    </div>
                </section>
        </div>
    );
}

export default RenderAboutPage;