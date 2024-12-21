import axios from "axios";

const api = axios.create({
    baseURL: "/api", // Utilise le proxy configuré
    timeout: 10000,
});

// Récupérer des vidéos
const searchVideos = async (query) => {
    try {
        const response = await api.get("/search", {
            params: {
                part: "snippet",
                q: query,
                key: "AIzaSyASeHsdX2IF85pd5G5gIt2ngEv_zqnMNU8", // Remplace par ta clé API
                type: "video",
                maxResults: 5,
            },
        });
        return response.data.items; // Retourne uniquement les vidéos
    } catch (error) {
        console.error("Erreur lors de la récupération des vidéos :", error.response?.data || error.message);
        throw error; // Lève une erreur pour permettre de gérer le cas dans le composant
    }
};

export default api;