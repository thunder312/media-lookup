const BASE_URL = "https://kgsearch.googleapis.com/v1/entities:search?query=";
const indent = "indent=";
const key = "key="

export async function globalSearch(query) {
    return new Promise((resolve, reject) => {
        console.log("url: " + BASE_URL +
            query +
            "&" +
            key + process.env.VUE_APP_GOOGLE_API_KEY + "&" +
            indent + "True");

        fetch(BASE_URL +
                query +
                "&" +
                key + process.env.VUE_APP_GOOGLE_API_KEY + "&"+
                indent + "True"
                )
            .then((response) => {
                console.log("response: " + response.json);
                resolve(response.json());
            })
            .catch((err) => {
                console.log("err: " + err.message);
                reject(err.message);
            });
    });
}