document.getElementById('submit').onclick = function(){
    var page = document.getElementById('page').value;
    var name = document.getElementById('name').value;
    //chrome.tabs.create({url:'https://meet.medio.link/webapp/conference=' + page + '?name=' + name + '&role=guest'});
    chrome.tabs.create({url:'https://meet.medio.link/webapp/#/?conference=' + page + '&name=' + name + '&join=1'});
}


//join automatically link example: https://meet.medio.link/webapp/#/?conference=3996@medio.link&name=Bob&join=1 