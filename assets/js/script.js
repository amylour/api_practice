const API_KEY = "tJbPkR97m_oANwNTT7uQFXPLjWw"
const API_URL = "https://ci-jshint.herokuapp.com/"
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    const queryString = `${API_KEY}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        console.log(data.expiry);
    }
}