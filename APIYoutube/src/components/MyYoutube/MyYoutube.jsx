import UiLeft from "../UiLeft/UiLeft.jsx";
import Liste from "../UIRight/Liste.jsx";
import { useEffect, useState } from "react";
import searchVideos  from "../../services/api"; // Importe la fonction

const MyYoutube = () => {



    const [query, setQuery] = useState("");
    const [fetchAPI, setFetchAPI] = useState({
        loading: false,
        data: null,
        error: null,
    });
    const [response, setResponse] = useState({});

    // Valeur component Formulaire
    const onQueryRecieve = (query) => {
        setQuery(query);
        console.log("query", query);
    };

    useEffect(() => {
        if (!query) return;

        setFetchAPI({ loading: true, data: null, error: null });

        // Utilise la fonction `searchVideos`
        searchVideos(query)
            .then((videos) => {
                setFetchAPI({ loading: false, data: videos, error: null });
                setResponse(videos);
            })
            .catch((error) => {
                console.error("Erreur lors du chargement des vidéos :", error);
                setFetchAPI({ loading: false, data: null, error });
            });
    }, [query]);

    useEffect(() => {
        console.log("query", query);
    }, [query]);

    useEffect(() => {
        console.log(response)
    }, [response]);

    return (
        <>
            <div className="w-full h-screen bg-white dark:bg-slate-800">
                <div className="grid grid-cols-4">
                    <div className="col-span-3 p-10 h-dvh">
                        <UiLeft onQueryRecieve={onQueryRecieve} />
                    </div>
                    <div className="col-span-1 bg-gray-700">
                        {fetchAPI.loading && <p>Chargement...</p>}
                        {fetchAPI.error && <p>Erreur : {fetchAPI.error.message}</p>}
                        {fetchAPI.data && <Liste data={fetchAPI.data} />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyYoutube;
