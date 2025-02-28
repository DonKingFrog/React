import { useEffect } from "react";

function Loading() {
    useEffect(() => {
        const handleLoad = () => {
            const preloader = document.querySelector("#preloader")
            if (preloader) { preloader.classList.add("loaded") };
        };

        window.addEventListener("load", handleLoad);

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, [])
    return (
        <div id="preloader"></div>
    );
}

export default Loading;