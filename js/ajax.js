let table = document.getElementById('list-table');
let cells = table.querySelectorAll('.wrapper-content');

for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = function () {
        let id = cells[i].classList[0];
        let type = cells[i].classList[1];

        if (cells[i].classList[1] == 'listsTitle') {
            let originalValue = this.innerHTML;

            this.onblur = function () {
                if (originalValue !== this.innerHTML) {
                    loadData(this.innerHTML, id, type);
                } else {
                    return this.innerHTML = originalValue;
                }
            }

        } else if (cells[i].classList[1] == 'listsBody') {

            let originalValue = this.innerHTML;

            this.onblur = function () {
                if (originalValue !== this.innerHTML) {
                    loadData(this.innerHTML, id, type);
                }
            }

        } else if (cells[i].classList[1] == 'listsCompleted') {

            loadData(cells[i].checked, id, type);

        } else if (cells[i].classList[1] == 'listsDueDate') {

            let originalValue = this.textContent;
            const validation = /^\d{4}-\d{2}-\d{2}$/;
            const noInput = '';

            this.onblur = function () {
                if (this.textContent === noInput) {
                    this.innerHTML = 'Not Set';
                    return loadData('Not Set', id, type);
                }

                if (!this.textContent.match(validation)) return this.innerHTML = originalValue;
                let date = new Date(this.textContent);
                let dateNumber = date.getTime();
                if (!dateNumber && dateNumber !== 0) return this.innerHTML = originalValue;

                if (date.toISOString().slice(0, 10) === this.textContent) {
                    loadData(this.textContent, id, type);
                }
            }
        }
    }
}

function loadData(value, id, type) {

    const request = new XMLHttpRequest(); //Create xhr object
    request.open('POST', 'includes/sampletext.inc.php', true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    request.onload = function () {
        if (this.status == 200) {
            console.log(this.responseText);
        }
    }

    let data = '' +
        'value=' + window.encodeURIComponent(value) +
        '&id=' + window.encodeURIComponent(id) +
        '&type=' + window.encodeURIComponent(type);

    request.send(data);
}