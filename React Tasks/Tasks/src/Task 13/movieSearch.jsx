import React from "react";

export default class MovieSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: "",
            movieData: null,
            loading: false,
            error: null,
        };
    }

    handleSearch = () => {


        this.setState({ loading: true, error: null, movieData: null });
        fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(this.state.movie)}&apikey=thewdb`)
            .then(res => res.json())
            .then(data => {
                if (data.Response === "False") {
                    return fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(this.state.movie)}&apikey=61e15fa3`)
                        .then(res => res.json());
                }
                return data;
            })
            .then(data => {
                if (data.Response === "False") {
                    throw new Error(data.Error || "Movie not found!");
                }
                this.setState({ movieData: data, loading: false });
            })
            .catch(err => {
                this.setState({ error: err.message, loading: false });
            });
    }

    render() {
        const { movie, movieData, loading, error } = this.state;

        return (
            <div >
                <h1>Movie Search</h1>

                <div >
                    <input
                        type="text"
                        placeholder="Search movie..."
                        value={movie}
                        onChange={(e) => this.setState({ movie: e.target.value })}
                    />
                    <button onClick={this.handleSearch} >
                        Search
                    </button>
                </div>

                {loading && <div >Searching...</div>}

                {error && <div >MOVIE NOT FOUND</div>}

                {movieData && (
                    <div >
                        <div >
                            <img
                                src={movieData.Poster !== "N/A" ? movieData.Poster : "https://via.placeholder.com/300x450?text=No+Poster"}
                                alt={movieData.Title}
                            />
                        </div>
                        <div >
                            <h2 >{movieData.Title}</h2>
                            <div >
                                <span>{movieData.Year}</span>
                                <span>{movieData.Genre}</span>
                                <span>{movieData.imdbRating}</span>
                            </div>
                            <p >{movieData.Plot}</p>
                            <div >
                                <strong>Actors:</strong> {movieData.Actors}
                            </div>
                            <div >
                                <strong>Director:</strong> {movieData.Director}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
