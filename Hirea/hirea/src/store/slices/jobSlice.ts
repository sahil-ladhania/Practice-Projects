import type { Job, JobsState } from "@/types/job";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: JobsState = {
    jobs: []
};

export const JobsSlice = createSlice({
    name : 'jobs',
    initialState,
    reducers : {
        setJobs(state , action: PayloadAction<Job[]>) {
            state.jobs = action.payload;
        }
    }
});

export const { 
    setJobs
} = JobsSlice.actions;
export default JobsSlice.reducer;