function collapse(list) {

    let section = document.getElementById(list.classList[0]);

    if (section.getAttribute('data-collapsed') === 'false') {
        expandSection(section);
        section.setAttribute('data-collapsed', 'true');
        list.innerHTML = '<img src="img/chevron-up-outline.svg" alt="up">';

    } else {
        collapseSection(section);
        section.setAttribute('data-collapsed', 'false');
        list.innerHTML = '<img src="img/chevron-down-outline.svg" alt="down">';
    }

    loadData(section.getAttribute('data-collapsed'), list.classList[0], 'listsCollapsed');
}

function collapseSection(element) {
    // get the height of the element's inner content, regardless of its actual size
    let sectionHeight = element.scrollHeight;

    // temporarily disable all css transitions
    let elementTransition = element.style.transition;
    element.style.transition = '';

    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's height to its current pixel height, so we 
    // aren't transitioning out of 'auto'
    requestAnimationFrame(function () {
        element.style.height = sectionHeight + 'px';
        element.style.transition = elementTransition;

        // on the next frame (as soon as the previous style change has taken effect),
        // have the element transition to height: 0
        requestAnimationFrame(function () {
            element.style.height = 0 + 'px';
        });
    });

}

function expandSection(element) {
    // get the height of the element's inner content, regardless of its actual size
    let sectionHeight = element.scrollHeight;

    // have the element transition to the height of its inner content
    element.style.height = sectionHeight + 'px';

    // when the next css transition finishes (which should be the one we just triggered)
    element.addEventListener('transitionend', function (e) {

        // remove this event listener so it only gets triggered once
        element.removeEventListener('transitionend', arguments.callee);

        element.style.height = 'auto';
    });
}

// Onload

data = document.querySelectorAll('.listsCollapsed');

for (let i = 0; i < data.length; i++) {
    let isCollapsed = data[i].getAttribute('data-collapsed') === 'true';

    if (isCollapsed) {
        data[i].style.height = 'auto';
    }
}

function checkedValue(checkbox) {
    console.log();

    label = document.querySelector(`label[for="${checkbox.id}"]`);
    header = document.getElementsByClassName(`${checkbox.classList[0]} listsTitle wrapper-content`);
    collapseLink = document.getElementsByClassName(`${checkbox.classList[0]} collapse-link`);
    list = document.getElementById(checkbox.classList[0]);

    for (var i = 0; i < header.length; i++) {

        if (checkbox.checked) {
            label.innerHTML = '<img src="img/checkmark-outline.svg" alt="checkbox-checked">';
            checkedStyle(header[i], collapseLink[i]);
            if (list.getAttribute('data-collapsed') === 'true') {

                list.setAttribute('data-collapsed', 'true');
                collapse(checkbox);
                arrow = document.getElementsByClassName(`${checkbox.classList[0]} collapse-link`);
                arrow[0].innerHTML = '<img src="img/chevron-down-outline.svg" alt="down">';
            }

        } else {
            label.innerHTML = '<img src="img/ellipse-outline.svg" alt="checkbox-empty">';
            notCheckedStyle(header[i], collapseLink[i]);
        }
    }
}


function checkedStyle(header, collapseLink) {
    header.style.color = 'lightgray';
    header.style.textDecoration = 'line-through';
    header.style.textDecorationThickness = '2px';
    header.style.textDecorationColor = 'black';
    collapseLink.style.display = 'none';
}

function notCheckedStyle(header, collapseLink) {
    header.style.color = 'black';
    header.style.textDecoration = 'none';
    collapseLink.style.display = 'block';
}

// Onload

checkboxOnload = document.getElementsByClassName('listsCompleted wrapper-content');
headerOnload = document.getElementsByClassName('listsTitle wrapper-content');
collapseLinkOnload = document.getElementsByClassName('collapse-link');

for (var i = 0; i < checkboxOnload.length; i++) {

    if (checkboxOnload[i].checked) {
        checkedStyle(headerOnload[i], collapseLinkOnload[i]);
    } else {
        notCheckedStyle(headerOnload[i], collapseLinkOnload[i]);
    }
}