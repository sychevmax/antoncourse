const params = window.location.href.split('?');
if(params.length == 1){
  params.push('');
}
const targetUrl = 'https://study.antonantonov.com/method' + '?' + params[1];
window.location.replace(targetUrl);