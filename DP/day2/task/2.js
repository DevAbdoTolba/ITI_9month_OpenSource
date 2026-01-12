const api = {
    getCountries: () => ["Egypt", "USA", "France"]
};

const cache = {};
const proxy = {
    getCountries: () => {
        if (!cache.data) {
            console.log("Fetching...");
            cache.data = api.getCountries();
        } else {
            console.log("Cached:");
        }
        return cache.data;
    }
};

console.log(proxy.getCountries());
console.log(proxy.getCountries());