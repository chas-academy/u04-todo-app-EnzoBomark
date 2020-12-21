data = document.querySelectorAll('.listsCollapsed');

for (let i = 0; i < data.length; i++) {
    let isCollapsed = data[i].getAttribute('data-collapsed') === 'true';

    if (isCollapsed) {
        data[i].style.height = 'auto';
    }
}