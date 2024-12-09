const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTUzYzhhMThlZTI2ODJkZWFiYjE4MTI1ZDA2MzE1MSIsIm5iZiI6MTcyNjY1NTk0NC40NDYsInN1YiI6IjY2ZWFhZGM4NWMwNTE5YTIzNGQzNTViYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQSFb6mxn5n9hl6OpxWOgzKPCKA-9eq9PJEzXv_3hsw"
},
};



export const fetchMovieData = async (pageNum: number) => {
    try {
        const response = await fetch (
            `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNum}`,
            options

        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error("Something Went Wrong");
        }
        return {data: data?.results};

    }catch(error:unknown) {
        if (error instanceof Error) {
            return { error: error.message || "Something Went Wrong" }; ;
        }
    }
};