function forwardUtmTags() {
  var domainsToDecorate = [
          'antonantonov.com',
          'onrender.com' // добавьте или удалите домены (без https и косой черты в конце)
      ],
      queryParams = [
          'utm_medium', // добавьте или удалите параметры запроса, которые вы хотите передать
          'utm_source',
          'utm_campaign',
          'utm_content',
          'utm_term'
      ]
  // не редактируйте ничего ниже этой строки
  var links = document.querySelectorAll('a'); 

// проверяем, содержат ли ссылки домен из массива domainsToDecorate, а затем оформляем ссылку (link decoration)
  for (var linkIndex = 0; linkIndex < links.length; linkIndex++) {
      for (var domainIndex = 0; domainIndex < domainsToDecorate.length; domainIndex++) { 
          if (links[linkIndex].href.indexOf(domainsToDecorate[domainIndex]) > -1 && links[linkIndex].href.indexOf("#") === -1) {
              links[linkIndex].href = decorateUrl(links[linkIndex].href);
          }
      }
  }
// оформление ссылки параметрами запроса
  function decorateUrl(urlToDecorate) {
      urlToDecorate = (urlToDecorate.indexOf('?') === -1) ? urlToDecorate + '?' : urlToDecorate + '&';
      var collectedQueryParams = [];
      for (var queryIndex = 0; queryIndex < queryParams.length; queryIndex++) {
          if (getQueryParam(queryParams[queryIndex])) {
              collectedQueryParams.push(queryParams[queryIndex] + '=' + getQueryParam(queryParams[queryIndex]))
          }
      }
      return urlToDecorate + collectedQueryParams.join('&');
  }

// функция, которая получает значение параметра запроса
  function getQueryParam(name) {
      if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(window.location.search))
          return decodeURIComponent(name[1]);
  }

}

document.addEventListener('DOMContentLoaded', function(){
  forwardUtmTags();
  window.onNuxtReady(forwardUtmTags);
});