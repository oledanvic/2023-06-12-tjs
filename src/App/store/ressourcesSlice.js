import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { REST_ADR, ressourcesURI } from '../config/config';

const initialState = {
    images: [],
    memes: []
}

const ressourcesSlice = createSlice({
    name: 'ressources',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase('ressources/fetchRessources/fulfilled',(state,action)=>{
            state.images.splice(0);
            state.images.push(...action.payload.images)
            state.memes.splice(0);
            state.memes.push(...action.payload.memes)
        })
        builder.addCase('current/save/fulfilled', (state, action) => {
            const pos = state.memes.findIndex(meme => meme.id === action.payload.id)
            if (pos >= 0) {
                //existant dans la liste
                state.memes[pos] = action.payload;
            }
            else {
                //pas existant dans la liste
                state.memes.push(action.payload);
            }
        })
        builder.addDefaultCase(()=>{console.log('cas non pris en charge de declenchement par asynThunk')})
    }
});

// export const {} = ressourcesSlice.actions
export const fetchAllRessources = createAsyncThunk('ressources/fetchRessources',
    async () => {
        const promiseImages = await fetch(`${REST_ADR}${ressourcesURI.images}`)
        const promiseMemes = await fetch(`${REST_ADR}${ressourcesURI.memes}`)
        const jsoI= await promiseImages.json();const jsoM= await promiseMemes.json() 
        return {memes:jsoM,images:jsoI}
    })
export default ressourcesSlice.reducer