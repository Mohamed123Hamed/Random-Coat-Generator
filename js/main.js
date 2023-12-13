// assement 2 javaScript Quote
 // array of quotes
var arrayOfTextRandom = [
    {
        'message1': 'Frank Sinatra', 
        'message2': 'The best revenge is massive success.'
    },
    {
     'message1': 'Epictetus', 
     'message2': 'what happens to you, but how you react to it that matters.'
    },
    {
     'message1': 'Jim Rohn', 
     'message2': 'Beware of what you become in pursuit of what you want.'

    },
    {
     'message1': 'Wayne Gretzy', 
     'message2': 'You miss 100% of the shots you don take.'
    },
    {
     'message1': 'Nelson Mandela', 
     'message2': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {
     'message1': 'Elbert Hubbard', 
     'message2': 'Do not take life too seriously. You will not get out alive.'
    },
];

// function generate random text

function generateRandomQuote(){
    var textRandom = Number.parseInt(Math.random() * arrayOfTextRandom.length);
    document.getElementById('Output1').innerHTML = "'\'" + arrayOfTextRandom[textRandom].message1;
    document.getElementById('Output2').innerHTML = " --" + arrayOfTextRandom[textRandom].message2;
}