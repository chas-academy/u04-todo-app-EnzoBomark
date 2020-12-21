function collapse(list) {

    let section = document.getElementById(list.classList[0]);

    if (section.getAttribute('data-collapsed') === 'false') {
        expandSection(section);

    } else {
        collapseSection(section);
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

    element.setAttribute('data-collapsed', 'false');
}

function expandSection(element) {
    // get the height of the element's inner content, regardless of its actual size
    let sectionHeight = element.scrollHeight;

    // have the element transition to the height of its inner content
    element.style.height = sectionHeight + 'px';

    // when the next css transition finishes (which should be the one we just triggered)
    element.addEventListener('transitionend', function (e) {

        element.style.height = 'auto';
        // remove this event listener so it only gets triggered once
        element.removeEventListener('transitionend', arguments.callee);

    });

    element.setAttribute('data-collapsed', 'true');
}