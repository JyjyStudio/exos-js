"use strict";

import axios from "../../node_modules/axios/index";
console.log(axios)
let axiosUrl = "https://blockchain.info/ticker";
axios.get(axiosUrl)
    .then((response) => {
        let prixEnEuros = response.data.EUR.last;
        document.getElementById('price-label')!.textContent = prixEnEuros;
    });
