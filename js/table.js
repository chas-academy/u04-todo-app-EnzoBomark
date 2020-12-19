let table = document.getElementById('list-table');
let cells = table.getElementsByTagName('td');

for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = function () {

        let newText;
        let classname = cells[i].className;
        let orgText = this.textContent;

        this.onblur = function () {
            newText = this.textContent;
            if (orgText !== newText) {
                loadText();
            }
        }

        function loadText() {
            const request = new XMLHttpRequest(); //Create xhr object
            request.open('POST', 'includes/sampletext.inc.php', true);
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            request.onload = function () {
                if (this.status == 200) {
                    console.log(this.responseText);
                }
            }

            let params = 'name=' + newText + ', class=' + classname;
            request.send(params);
        }
    }
}