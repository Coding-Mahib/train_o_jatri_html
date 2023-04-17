const wizard = document.querySelector('#wizard');
const pl = document.querySelector('#pl');
const pl_c = document.querySelector('#pl-c');
const api = 'https://trainojatri-api.000webhostapp.com/api/api.php';
const access_token = '151090987';
const loader = document.querySelector('.loader-place');
const connStat = document.querySelector('#connStatus');

window.onload = function(){
    loader.style.display = 'none';
}
function returnHome(){
    pl.innerHTML = '';
    pl_c.innerHTML = '';
    wizard.style.display = 'block';
    loader.style.display = 'none';
}

window.addEventListener('online', (e) => {
    //console.log('Internet !!')
    connStat.style.display = 'none';
    null;
});
window.addEventListener('offline', (e) => {
    connStat.style.display = 'block';
});

if (navigator.onLine === false){
    connStat.style.display = 'block';
}