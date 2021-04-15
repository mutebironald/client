export const handleResponse = async(response) => {
    if(response.data) return response.data.People;
    throw new Error("Network response was not ok.");
}

export const handleError = (error) => {
    console.error("API call failed. " + error);
    throw error;
}
