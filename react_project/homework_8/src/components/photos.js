import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addPhotos, removeFromBlackList, addToBlackList} from "../redux/action-creators";


const Photos = () => {
    const {photos, blackList} = useSelector(({photos}) => ({
        photos: photos.photos,
        blackList: photos.blacklist,
    }))
    const dispatch = useDispatch();

    const fetchPhoto = async () => {
        const responce = await fetch('https://dummyapi.io/data/api/user?limit=10', {
            headers: {
                'app-id': 'lTE5abbDxdjGplutvTuc'
            }
        })
        const json = await responce.json();
        dispatch(addPhotos(json.data));

    };
    useEffect(() => {
        if(!photos.length){
            fetchPhoto();
        }
    },[])

    const checkBlackList = (id) => {
        if(blackList.includes(id)){
            dispatch(removeFromBlackList(id));
        }else {
            dispatch(addToBlackList(id));
        }

    }

    return(
        <div>
            {photos.map(el=>(<img
                                  style={{filter: blackList.includes(el.id) ? 'blur(3px)': ''}}
                                  onClick={() => checkBlackList(el.id)}
                                  key={el.id}
                                  src={el.picture}
                                  alt={el.title}/>))}
        </div>
    )
}

export default Photos;