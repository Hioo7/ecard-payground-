document.getElementById('shareButton').addEventListener('click', function() {
    const shareData = {
        title: 'Achal N Murthy | BizVizCards',
        text: 'Check out Achal N Murthy\'s profile on BizVizCards!',
        url: 'https://bizvizcards.com/ecard/AchalN/'
    };

    // Check if Web Share API is supported
    if (navigator.share) {
        navigator.share(shareData)
            .then(() => console.log('Profile shared successfully!'))
            .catch(err => console.error('Error sharing:', err));
    } else {
        alert('Web Share API not supported in this browser. You can copy the URL: ' + shareData.url);
    }
});
