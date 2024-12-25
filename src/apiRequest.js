const apiRequest = async (url = '', optionsObj = null) => {
    let errMsg = null; // Declare a local errMsg variable
    try {
        const response = await fetch(url, optionsObj);
        if (!response.ok) {
            // Log the status code and status text to understand the error
            console.error(`Error: ${response.status} ${response.statusText}`);
            throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }

        // Return the response data if successful (assuming JSON response)
        return await response.json();
    } catch (err) {
        errMsg = err.message; // Capture the error message
        console.error(`Error caught in apiRequest: ${errMsg}`);
    } finally {
        return errMsg; // Return the error message or null if successful
    }
};

export default apiRequest;
