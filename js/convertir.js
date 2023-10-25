const datos_de_monedas = {
    "ARS": { "USD": 0.001, "EUR": 0.00085, "ARS": 1 },
    "USD": { "ARS": 1000, "EUR": 1100 },
    "EUR": { "ARS": 1100, "USD": 1.10 }
}

async function convertCurrency() {
    


    const amount = parseFloat(document.getElementById('amount').value);

    if(isNaN(amount)){
        Swal.fire(
            `Error`,
            `Monto invalido`,
            'error'
        );

        return;
    }

    if(amount <= 0){
        Swal.fire(
            `Error`,
            `El monto debe ser mayor a 0`,
            'info'
        );

        return;
    }

    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    const exchangeRates = datos_de_monedas;

    const conversionRate = exchangeRates[fromCurrency][toCurrency];
    const result = (amount * conversionRate).toFixed(2);

    Swal.fire(
        `El resultado de la conversion es`,
        `$${amount} ${fromCurrency} = $${result} ${toCurrency}`,
        'success'
    )

    document.getElementById('result').value = result;
}