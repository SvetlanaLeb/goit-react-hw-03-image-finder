const imageApi = (newName, pageNumber) => {
    const KEY = '22384127-56cbd68b25450c364ed3164a8';

    return fetch(
        `https://pixabay.com/api/?q=${newName}&page=${pageNumber}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    ).then(response => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(
            new Error(`No results were found for ${newName} `),
        );
    });
};

export default imageApi;
