import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2> this Category has {categoryNews.length} news</h2>
            {categoryNews ?
                <div>{
                    categoryNews.map(news => <NewsSummaryCard
                        key={news._id}
                        news={news}

                    ></NewsSummaryCard>)
                }</div> :
                <h1>No News Found</h1>
            }
        </div>
    );
};

export default Category;