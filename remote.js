document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById('introScreen').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
        populateChannelCards();
    }, 6000); // Intro duration: 6 seconds
});

function handleRemoteControl(event) {
    const key = event.key;

    if (key === "ArrowUp") {
        navigateChannels(-1);
    } else if (key === "ArrowDown") {
        navigateChannels(1);
    } else if (key === "Enter") {
        selectChannel();
    } else if (key === "Escape") {
        closePlayer();
    }
}

function navigateChannels(direction) {
    const channels = document.querySelectorAll('.channel-card');
    if (channels.length === 0) return;

    currentFocus = (currentFocus + direction + channels.length) % channels.length;
    channels[currentFocus].focus();
}

function selectChannel() {
    const channels = document.querySelectorAll('.channel-card');
    if (channels.length > 0) {
        channels[currentFocus].click();
    }
}

document.addEventListener("keydown", handleRemoteControl);