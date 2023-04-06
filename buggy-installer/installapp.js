// Select the form and input field for the app URL
const form = document.querySelector('form');
const urlInput = document.querySelector('#url');

// Listen for form submit events
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Get the value of the app URL input field
  const url = urlInput.value.trim();

  // Verify that the URL is valid and accessible
  // You can use an external library like "valid-url" to simplify this step
  // Here's an example using the built-in "fetch" function:
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Unable to download app');
      }
      return response.blob();
    })
    .then(blob => {
      // Download the app
      const a = document.createElement('a');
      const url = URL.createObjectURL(blob);
      a.href = url;
      a.download = 'app.crx';
      a.click();
      URL.revokeObjectURL(url);

      // Install the app using Chrome's Web App Install API
      if (window.chrome && chrome.webstore && chrome.webstore.install) {
        chrome.webstore.install(url, () => {
          console.log('App installed successfully');
        }, (error) => {
          console.error('Error installing app:', error);
        });
      } else {
        console.error('Web App Install API not supported');
      }
    })
    .catch(error => {
      console.error('Error downloading app:', error);
    });
});
