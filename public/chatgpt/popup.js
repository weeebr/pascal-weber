var iframe = document.getElementById('external-website');
iframe.src = 'https://pweber.notion.site/ChatGPT-0270eae8a798401384bfb361da43b7c2';
iframe.addEventListener('load', function() {
  iframe.style.display = 'block';
  iframe.contentWindow.focus();
});
