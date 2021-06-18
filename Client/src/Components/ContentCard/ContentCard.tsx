import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
export const ContentCard = () => {
    const [img, setImg] = useState<string>();

    const hitEndpoint = async () => {
        await axios
            .get("http://localhost:8080")
            .then(function (response) {
                console.log(response);
                setImg(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        hitEndpoint();
    }, []);

    return (
        <div>
            {ReactHtmlParser(img!)}
        </div>
    )
}
