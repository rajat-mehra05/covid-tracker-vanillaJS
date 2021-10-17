const api = "https://coronavirus-19-api.herokuapp.com/countries";
const errors = document.querySelector(".errors");
const loading = document.querySelector(".loading");
const cases = document.querySelector(".cases");
const recovered = document.querySelector(".recovered");
const deaths = document.querySelector(".deaths");
const tests = document.querySelector(".tests");
const todayCases = document.querySelector(".todayCases");
const todayDeaths = document.querySelector(".todayDeaths");

const results = document.querySelector(".result-container");
results.style.display = "none";
loading.style.display = "none";
errors.textContent = "";

// grabbing the form data
const form = document.querySelector(".form-data");
// grab the country name
const country = document.querySelector(".country-name");

// searching by country name
const searchForCountry = async (countryName) => {
  loading.style.display = "block";
  errors.textContent = "";
  try {
    const res = await axios.get(`${api}/${countryName}`);
    if (res.data === "Country not found") {
      throw error;
    }
    loading.style.display = "none";
    todayCases.textContent = res.data.todayCases;
    todayDeaths.textContent = res.data.todayDeaths;
    cases.textContent = res.data.cases;
    recovered.textContent = res.data.recovered;
    deaths.textContent = res.data.deaths;
    tests.textContent = res.data.totalTests;
    results.style.display = "block";
  } catch (error) {
    loading.style.display = "none";
    results.style.display = "none";
    errors.textContent = "No data available for the requested country";
  }
};

// form submission handle
const handleSubmit = async (e) => {
  e.preventDefault();
  searchForCountry(country.value);
  console.log(country.value);
};

form.addEventListener("submit", (e) => handleSubmit(e));
