import api from "../../api/axiosConfig";

const API_URL = "/api/v1/reviews";

// Create new review
const createReview = async (reviewData) => {
    const response = await api.post(API_URL, reviewData)

    return response.data;
}

// Get user reviews
const getReviews = async (userEmail) => {
    const response = await api.post(API_URL, userEmail)

    return response.data
}

// Delete user goal

const reviewService = {
    createReview,
    getReviews,
}
export default reviewService;