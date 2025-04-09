
const persone = 
{
    name: "Mario",
    age: 30,
    address: {  via: "Via nazionale",
                città: "Roma", 
                Stato : "Italia",

             }  
            
};


/*
Il ciclo for in permette di iterare su tutte le proprietà di un oggetto.
in nome proprietà scorre tutte le proprietà dell'oggetto persone
e ad ogni ciclo assegna il nome della proprietà alla variabile nomeproprieta.
Quindi, per ogni proprietà dell'oggetto persone, viene stampato il nome della proprietà e il suo valore.
Stamerà in console:
name: Mario
age: 30
address: [object Object]
*/
for (var nomeproprieta in persone) {
    console.log (nomeproprieta + ": " + persone[nomeproprieta]);
}