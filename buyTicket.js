function buyTicket(){
    wizard.style.display = 'none';
    let html, url;
    url = 'https://railapp.railway.gov.bd/';
    html = '<iframe src="' + url + '"></iframe>';
    pl.innerHTML = html;
}