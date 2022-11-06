const collection = document.querySelectorAll('td');

for (let i = 0; i < collection.length; i++) {
    collection[i].addEventListener('click', function func(){
        collection[i].style.backgroundColor = "red"; 
    });
    
}

