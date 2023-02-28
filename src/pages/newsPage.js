import React from 'react';
import Hero from '../containers/hero';
import Forecast from '../containers/forecast';
import News from '../containers/news';
import Intro from '../containers/intro';
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