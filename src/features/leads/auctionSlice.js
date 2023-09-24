import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { latest_auctions } from '../../utils/dummyData'



export const getAuctionsContent = createAsyncThunk('/leads/content', async () => {
	const response = await axios.get('/api/users?page=2', {})
	console.log("🚀 ~ file: auctionSlice.js:9 ~ getAuctionsContent ~ response:", response.data)
    console.log("🚀 ~ file: auctionSlice.js:11 ~ getAuctionsContent ~ latest_auctions:", latest_auctions)
    return { data: latest_auctions};
	// return response.data;
})

export const leadsSlice = createSlice({
    name: 'leads',
    initialState: {
        isLoading: false,
        leads : []
    },
    reducers: {


        addNewLead: (state, action) => {
            let {newLeadObj} = action.payload
            state.leads = [...state.leads, newLeadObj]
        },

        deleteLead: (state, action) => {
            let {index} = action.payload
            state.leads.splice(index, 1)
        }
    },

    extraReducers: {
		[getAuctionsContent.pending]: state => {
			state.isLoading = true
		},
		[getAuctionsContent.fulfilled]: (state, action) => {
			state.leads = action.payload.data
			state.isLoading = false
		},
		[getAuctionsContent.rejected]: state => {
			state.isLoading = false
		},
    }
})

export const { addNewLead, deleteLead } = leadsSlice.actions

export default leadsSlice.reducer