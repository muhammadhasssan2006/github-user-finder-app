 

let 

async function fetchData() {
    try {
        let apiData = await fetch("https://api.github.com/users/muhammadhasssan2006")
        let Data =await apiData.json();
        console.log(Data);
        
    } catch (error) {
        console.log(error);
        
    }
    
}

fetchData()