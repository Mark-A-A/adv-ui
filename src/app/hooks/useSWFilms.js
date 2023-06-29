import React, { useState, useEffect } from "react";

// import swapiNode from "swapi-node";

export async function getFilmData() {
  const res = await fetch("https://swapi.dev/api/films");
  const resJSON = await res.json();
  const films = resJSON?.results || [];

  const filmsParsed = films.map((film) => {
    const { title, episode_id, director, producer, release_date, url } = film;

    return {
      title,
      episode_id,
      director,
      producer,
      release_date,
      url,
    };
  });

  return filmsParsed;
}

export const headers = [
  { id: "title", numeric: false, label: "Title" },
  { id: "episode_id", numeric: true, label: "Episode" },
  { id: "producer", numeric: false, label: "Producer" },
  { id: "director", numeric: false, label: "Director" },
  {
    id: "release_date",
    numeric: false,
    label: "Release",
  },
  {
    id: "url",
    numeric: false,
    label: "SWAPI URI",
  },
];

export const useFilmsTableData = () => {
  const [loading, setLoading] = useState(true);
  const [films, setFilmsList] = useState([]);

  useEffect(() => {
    // async fetch
    setLoading(true);
    getFilmData()
      .then((result) => {
        setFilmsList(result);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
    // return () => {
    //     second
    // }
  }, []);

  return {
    headers: headers,
    rows: films,
    loading,
  };
};
