import React, { useState, useEffect } from 'react';

const NewsApp = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            setError(null);
            try {
                const url = `https://saurav.tech/NewsAPI/top-headlines/category/general/in.json`;
                const response = await fetch(url);
                const data = await response.json();

                if (data.status === 'ok') {
                    setArticles(data.articles);
                } else {
                    throw new Error('Failed to fetch news');
                }
            } catch (err) {
                setError(err.message);
                console.error('Error fetching news:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    return (
        <div>
            <header>
                <h1>News App</h1>
            </header>

            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div style={{ textAlign: 'center', color: '#fb7185', padding: '2rem' }}>
                    <h2>Oops! Connection Error</h2>
                    <p>{error}</p>
                </div>
            ) : (
                <div>
                    {articles.length > 0 ? (
                        articles.map((article, index) => (
                            <article key={index}>
                                {article.urlToImage && (
                                    <img src={article.urlToImage} alt={article.title} style={{ width: '200px' }} />
                                )}
                                <div>
                                    <span>{article.source.name}</span>
                                    <h3>{article.title}</h3>
                                    <p>{article.description}</p>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div>
                            <h3>No articles found.</h3>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default NewsApp;