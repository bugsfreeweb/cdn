function installChromeApp() {
            chrome.webstore.install('', function() {
                // Success - app installed
            }, function (err) {
                // Error - app not installed
            });
        }
        window.addEventListener('DOMContentLoaded', function() {
            var isChrome = !!window.chrome;
            var isInstalled = window.navigator.standalone;
            if (isChrome && !isInstalled) {
                var installBtn = document.createElement('button');
                installBtn.textContent = 'Install Chrome Web App';
                installBtn.onclick = installChromeApp;
                document.body.appendChild(installBtn);
            }
        });
  
