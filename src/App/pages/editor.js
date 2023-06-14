import React, {useEffect} from 'react'
import {
    useParams, useLocation, useNavigate
} from 'react-router-dom'
import MemeSvgViewer from '../components/ui/MemeSvgViewer/MemeSvgViewer'
import FlexH1Grow from '../components/layout/FlexH1Grow/FlexH1Grow'
import { MemeFormStoredConnected } from '../components/MemeForm/MemeForm'
import { update } from '../store/currentSlice'
import {useSelector, useDispatch} from 'react-redux'
import {emptyMeme} from 'orsys-tjs-meme'

export default function Editor() {
    console.log(useParams());
    const d=useDispatch();
    const memes = useSelector(s=>s.ressources.memes)
    const params=useParams();
    useEffect(()=>{
        if(undefined!==params.id){
            const toViewMeme=memes.find(m=>m.id==params.id);
            if (undefined===toViewMeme) {}
            else {d(update(toViewMeme));}
        } else {
            d(update(emptyMeme))
        }
    }, [params, memes])
    return (
        <FlexH1Grow>
            <MemeSvgViewer basePath='' />
            <MemeFormStoredConnected />
        </FlexH1Grow>
    )
}
