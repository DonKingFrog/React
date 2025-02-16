import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function NewsPost() {
    const { postId } = useParams();
    const [PostComponent, setPostComponent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPost = async () => {
            try {
                // Dynamically import the post content based on postId
                const module = await import(`../Newsroom/${postId}.js`);
                setPostComponent(() => module.default);
                setIsLoading(false);
            } catch (err) {
                setError('Post not found or failed to load');
                setIsLoading(false);
            }
        };

        loadPost();
    }, [postId]);

    if (isLoading) {
        return <div></div>;
    }

    if (error) {
        import ("../Newsroom/NewsPost.css");
        
        return (<div class="failed">
            <h1>404</h1>
            <h2>Not Found</h2>
        </div>);
    }

    return (
        <div class="page frame">
            {PostComponent ? <PostComponent /> : null}
        </div>
    );
}

export default NewsPost;
