function showTrainList(){
    wizard.style.display = 'none';
    var html, input, trains,json;
    

    // Get Trains
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            let response = this.responseText;
            json = JSON.parse(response);
            //json = Object.values(json['data']);

            trains = json['data'];
            console.log(trains)

            html = '<div class="card-lg" style="width: 100%;">';
            html += '<select id="trSelect">';

            for (let i in trains){
                html += '<option>' + trains[i] + '</option>';
                console.log(trains[i]);
            }

            html += '</select>';
            html += '<button class="btn" id="sBtn" onclick="showDescription()">Search</button>';
            html += '</div>';
            pl.innerHTML = html;
        }
    }

    xhr.open('POST', api, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('token='+access_token+'&&action_type=getTrainsName');
}
function showDescription(){
    let select = document.querySelector('#trSelect');
    let option = select.options[select.selectedIndex].text;
    let html = '';
    
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            let response = this.responseText;
            let json = JSON.parse(response);
            let data = json['data'];
            for (x in data){
                let d = data[x];
                let days = d['days'];
                let routes = d['routes'];
                let fri, sat, sun, mon, tue, wed, thu;

                for (let i = 0; i < days.length; i++){
                    if (days[i] == 'Fri'){
                        fri = true;
                    }else if(days[i] == 'Sat'){
                        sat = true;
                    }else if(days[i] == 'Sun'){
                        sun = true;
                    }else if(days[i] == 'Mon'){
                        mon = true;
                    }else if(days[i] == 'Tue'){
                        tue = true;
                    }else if(days[i] == 'Wed'){
                        wed = true;
                    }else if(days[i] == 'Thu'){
                        thu = true;
                    }
                }

                html += '<div class="card-lg" id="des">';
                html += '<div class="flex">';

                if (fri === true){
                    html += '<span class="green">Friday</span>';
                }else{
                    html += '<span class="red">Friday</span>'
                }
                if (sat === true){
                    html += '<span class="green">Saturday</span>';
                }else{
                    html += '<span class="red">Saturday</span>';
                }
                if (sun === true){
                    html += '<span class="green">Sunday</span>';
                }else{
                    html += '<span class="red">Sunday</span>';
                }
                if (mon == true){
                    html += '<span class="green">Monday</span>';
                }else{
                    html += '<span class="red">Monday</span>';
                }
                if (tue == true){
                    html += '<span class="green">Tuesday</span>';
                }else{
                    html += '<span class="red">Tuesday</span>';
                }
                if (wed == true){
                    html += '<span class="green">Wednsday</span>';
                }else{
                    html += '<span class="red">Wednsday</span>';
                }
                if (thu == true){
                    html += '<span class="green">Thursday</span>';
                }else{
                    html += '<span class="red">Thursday</span>';
                }
                html += '</div><br />'
                for (let i = 0; i < routes.length; i++){
                    html += '<hr /><div class="flex" style="display: block">';
                    html += '<span style="text-align: left;">City: <h3 style="text-align: left;">' + routes[i].city + '</h3></span>';
                    html += '<br />';
                    html += '<p>Duration: ' + routes[i].duration + '</p>';
                    html += '<br />';
                    html += '<p>Arrival Time: ' + routes[i].arrival_time + '</p>';
                    html += '<br />';
                    html += '<p>Departure Time: ' + routes[i].departure_time + '</p>';
                    html += '</div><hr />';
                }                
                html += '</div>';
                pl_c.innerHTML = html;
            }
        }
    }
    xhr.open('POST', api, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send('token='+access_token+'&&action_type=getTrainDetails&&train='+option);
}
