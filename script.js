const availableWords = [
    "Delhi Pollution Hits Severe Mark",
    "India Thrash Sri Lanka By 302 Runs",
    "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
    "Huge Blobs Near Earth's Core Are From",
    "Scarlett Johansson Takes Legal Action",
    "Wasim Akram Names New Threat For Under-Fire Pakistan",
    "Apple to Develop iPhone 17 in India by 2024",
]

const resultBox = document.querySelector(".resultBox")
const inputBox = document.getElementById("searchInput")
resultBox.style.display = 'none';

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableWords.filter((item) =>  {
            return item.toLowerCase().includes(input && input.toString().toLowerCase())
        });
    }
    display(result)

    if(!result.length){
        resultBox.style.display = 'none'
    }
    
}

function display(result){
    resultBox.style.display = 'block';
    const content = result.map((item) => {
       return "<li onclick=selectInput(this)>" + item + "</li>"
    })
    resultBox.innerHTML = "<ul>" + content.join("")  + "</ul>"
}

function selectInput(item){
    inputBox.value = item.innerHTML;
    resultBox.innerHTML = ""
    resultBox.style.display = 'none';
}