const display = document.getElementById('display').value;
// Inserting numbers 
function insert(num) {
    document.getElementById('display').value = document.getElementById('display').value + num; 
}
// Equals to
function equal() {
    document.getElementById('display').value = eval(document.getElementById('display').value);
}

// Clear
function clean(){
    const clean =  "";
    document.getElementById('display').value = clean;  
}


