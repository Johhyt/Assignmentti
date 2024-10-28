import { useEffect, useState } from "react";
import './/Opendata.css'


const Dogpic = () => {
    const [imageUrl, setImageUrl] = useState('');

    const API_URL = 'https://dog.ceo/api/breed/rottweiler/images/random';

    const fetchimage = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setImageUrl(data.message);
    }


    useEffect(() => {
        fetchimage();
    }, [])

    return(
        <>
        <div>
            {imageUrl && (
                <img src={imageUrl} alt="rottweiler"></img>
            )}
        </div>
        <button onClick={fetchimage}>AGAIN</button>
        </>
    )
}

export default Dogpic;