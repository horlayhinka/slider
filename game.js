       
     const display = document.querySelector('.display')
       const controlsButtons= document.querySelector('.controls').children
       const allSymbols = ['+','-','X','/','%','C','=']
       let firstValue = ''
       let secondValue = ''
       let symbol = ''

       const calculate =() => {
        firstValue = parseFloat(firstValue)
        secondValue = parseFloat(secondValue)


        if (symbol === '+')result =firstValue +secondValue
        if (symbol === '-')result =firstValue - secondValue
        if (symbol=== 'X') result = firstValue * secondValue
        if (symbol=== '/') result =firstValue / secondValue
        if (symbol === '%') result = firstValue % secondValue

        display.innerText = result
        firstValue = result
        secondValue = ''
       }

       for (let button of controlsButtons){
        button.addEventListener('click', {handleEvent:listener}); ()  {
            const {innerText: btnValue } = button
            const btnValueIsSymbol = allSymbols.includes(btnValue)
            if (!secondValue&& btnValue==='=')return null
            if (btnValue==='C'){
                firstValue=secondValue=symbol=''
            }

            if (firstValue && btnValueIsSymbol){
            secondValue && calculate()
                symbol=btnValue
            }
            else if(!symbol) firstValue += btnValue
        else if (!symbol) secondValue += btnValue

        if(btnValue!== '=') display.innerText +=btnValue
            display.innerText +=btnValue
        }

        
       

        display.innerText = result
        firstValue = result
        secondValue = ''
       }

       for (let button of controlsButtons){
        button.addEventListener('click', {handleEvent:listener}); ()  {
            const {innerText: btnValue } = button
            const btnValueIsSymbol = allSymbols.includes(btnValue)
            if (!secondValue&& btnValue==='=')return null
            if (btnValue==='C'){
                firstValue=secondValue=symbol=''
            }

            if (firstValue && btnValueIsSymbol){
            secondValue && calculate()
                symbol=btnValue
            }
            else if(!symbol) firstValue += btnValue
        else if (!symbol) secondValue += btnValue

        if(btnValue!== '=') display.innerText +=btnValue
            display.innerText +=btnValue
        }

        
       }
       