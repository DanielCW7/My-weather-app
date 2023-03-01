import React from 'react';
import Hero from '../containers/hero';
import NewsExpanded from '../containers/newsExpanded';
// only holds news stories from the newsExpanded component
const NewsPage = () => {
    return (
        <div>
            <Hero />
            <NewsExpanded />
        </div>
    )
}

export default NewsPage