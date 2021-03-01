const cep = document.querySelector("#cep")
//getting the input with id = "cep"

const showdata = (result)=>{
    for(const campo in result){ // javascrpit's foreach
        if(document.querySelector("#"+campo)){//this is checking if the fields in result exist on html
            document.querySelector("#"+campo).value = result[campo]
            //this is putting the results's fields values at the inputs that are equal to the fields
        }
    }
}

cep.addEventListener("blur", (e)=>{ //when the focus is at the input for the cep
    let search = cep.value.replace("-", "")
    
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)//connecting to the api
    //${search} is the var that keeps the cep
    
    .then(response => { response.json()// this wil load if the connetion works
        //this will try bring the data from api in  json format
        
        .then(data => showdata(data))
        //calling the function showdata
    })
    .catch(e => console.log('Deu erro'+ e.message))// this will load if the connection doesnt work
})