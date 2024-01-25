import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import reviewService from "./reviewService";

const initialState = {
    reviews: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
  }

// Create new review
export const createReview = createAsyncThunk("reviews/create", async (reviewData, thunkAPI) => {
    try {
        return await reviewService.createReview(reviewData);
    } catch (error) {
        const message = 
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// // Login user
// export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
//     try {
//         return await authService.login(user);
//     } catch (error) {
//         const message = 
//             (error.response &&
//                 error.response.data &&
//                 error.response.data.message) ||
//                 error.message ||
//                 error.toString();
//         return thunkAPI.rejectWithValue(message);
//     }
// })

// // Logout user
// export const logout = createAsyncThunk("auth/logout", async()=> {
//     await authService.logout();
// })

export const reviewSlice = createSlice({
    name: "review",
    initialState,
    reducers: {
        reset: (state) => initialState,
      },
    extraReducers: (builder) => {
        builder
            .addCase(createReview.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createReview.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.reviews.push(action.payload)
            })
            .addCase(createReview.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                // state.user = null
            })
            // .addCase(getReviews.pending, (state) => {
            //     state.isLoading = true
            // })
            // .addCase(getReviews.fulfilled, (state,action) => {
            //     state.isLoading = false;
            //     state.isSuccess = true;
            //     state.user = action.payload;
            // })
            // .addCase(getReviews.rejected, (state,action) => {
            //     state.isError = false;
            //     state.isError = true;
            //     state.message = action.payload;
            //     state.user = null;
            // })
            // .addCase(logout.fulfilled, (state) => {
            //     state.user = null
            // })
    }
});

export const {reset} = reviewSlice.actions
export default reviewSlice.reducer