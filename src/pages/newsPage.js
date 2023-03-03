import React, { useEffect, useState, useRef }from "react";
import Hero from '../containers/hero';
import NewsExpanded from '../containers/newsExpanded';
// import Story from '../components/story'
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