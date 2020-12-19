 let table = document.getElementById('list-table');
 let cells = table.getElementsByTagName('td');


 for (let i = 0; i < cells.length; i++) {
     cells[i].onclick = function () {
         if (this.hasAttribute('data-clicked')) return;

         //  this.setAttribute('data-clicked', 'true');
         //  this.setAttribute('data-text', this.innerHTML);

         //  let input = document.createElement('input');
         //  input.setAttribute('type', 'text');
         //  input.value = this.innerHTML;
         //  input.style.width = this.offsetWidth + "px";
         //  input.style.height = this.offsetHeight + "px";

         //  input.onblur = function () {
         //      let td = input.parentElement;
         //      let orig_text = input.parentElement.getAttribute('data-text');
         //      let current_text = this.value;

         //      if (orig_text !== current_text) {
         //          //Save data here.
         //          td.removeAttribute('data-clicked');
         //          td.removeAttribute('data-text');
         //          td.innerHTML = current_text;
         //          console.log(orig_text + ' is change to ' + current_text);
         //      } else {
         //          td.removeAttribute('data-clicked');
         //          td.removeAttribute('data-text');
         //          td.innerHTML = orig_text;
         //          console.log('no change');
         //      }
         //  }

         //  this.innerHTML = '';
         //  this.append(input);
         //  this.firstElementChild.select();

         let orgText = this.innerHTML;

         this.onblur = function () {

             if (orgText !== this.innerHTML) {
                 console.log(this.innerHTML);
             } else {
                 console.log('no change');
             }
         }
     }
 }