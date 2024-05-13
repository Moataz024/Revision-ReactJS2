import { createSlice } from "@reduxjs/toolkit";
let initialState = {
    participants: [],
};
const participantsSlice = createSlice({
    name: "participants",
    initialState,
    reducers: {
        increment(state, action) {
            const payload = action.payload;
            const exists = state.participants.some((p)=>p===payload.name);
            if(exists){
                console.log("exists");
            }else{
                state.participants.push(payload.name);
            }
        },
        decrement(state, action) {
            state.selectedEvent = action.payload;
        },
    },
});

export const selectParticipants = (state)=>{
    return state.participants.participants;
}

export const {
    increment,
} = participantsSlice.actions;
export default participantsSlice.reducer;