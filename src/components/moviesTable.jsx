import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";

class MoviesTable extends Component {
  columns = [
    { label: "Title", path: "title" },
    { label: "Genre", path: "genre.name" },
    { label: "Stock", path: "numberInStock" },
    { label: "Rate", path: "dailyRentalRate" },
    {
      key: "Like",
      content: (movie) => (
        <Like liked={movie.liked} onLiked={() => this.props.onLike(movie)} />
      ),
    },
    {
      key: "Delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={movies}
        onSort={onSort}
        sortColumn={sortColumn}
      />
    );
  }
}

export default MoviesTable;
