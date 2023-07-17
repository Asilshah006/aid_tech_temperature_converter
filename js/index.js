const calculateTemp = () =>{
    const inputTemp = document.getElementById('temp').value
    const tempSelected = document.getElementById('temp_diff')
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celToFah = (cel)=>{
        let celsius = ((cel * 9/5) + 32).toFixed(1)
        return celsius
    }
    const fahToCel = (fah)=>{
        let farenheit = ((fah -32) * 5/9).toFixed(1)
        return farenheit
    }

    if(valueTemp === 'cel'){
        document.getElementById('result').innerHTML = celToFah(inputTemp) + "&#176; Farenheit"
    }
    if(valueTemp === 'fah'){
        document.getElementById('result').innerHTML = fahToCel(inputTemp) + "&#176; Celsius"
    }

}