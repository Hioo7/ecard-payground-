document.getElementById('shareButton').addEventListener('click', function() {
    // Prepare the share data
    const shareData = {
        title: 'Achal N Murthy | BizVizCards',
        text: 'Check out Achal N Murthy\'s profile on BizVizCards!',
        url: 'https://bizvizcards.com/ecard/AchalN/',
    };

    // Fetch the image from the URL and convert it to a File object
    fetch('https://bizvizcards.com/ecard/AchalN/images/achal.png')
        .then(res => res.blob())
        .then(blob => {
            const file = new File([blob], 'achal.png', { type: blob.type });
            shareData.files = [file]; // Add the image file to the share data

            // Check if Web Share API is supported
            if (navigator.share) {
                navigator.share(shareData)
                    .then(() => console.log('Profile shared successfully!'))
                    .catch(err => console.error('Error sharing:', err));
            } else {
                alert('Web Share API not supported in this browser. You can copy the URL: ' + shareData.url);
            }
        })
        .catch(err => console.error('Error fetching the image:', err));
});
