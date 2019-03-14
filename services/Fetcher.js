let Fetcher = async (url) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        return json
    } catch (error) {
        console.log('Error fetching data', error)
    }
};

export default Fetcher