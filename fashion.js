const checkbox = document.getElementById('myCheckbox');
const heading = document.getElementById('myHeading');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    heading.classList.add('change');
  } else {
    heading.classList.remove('change');
  }
});


const search =  document.querySelector('div .search');
const ovlSearch = document.querySelector('.overlay-search');

search.addEventListener('mouseover',function(){
      ovlSearch.classList.add('show');
})

const close_search = document.querySelector('#close-search');
console.log(close_search);
if (close_search) {
  close_search.addEventListener('click', function() {
        ovlSearch.classList.remove('show');
  });
} else {
  console.log("Không tìm thấy phần tử phù hợp");
}

const like = document.querySelector('#like');
const dv = document.querySelector('.like');
var k = 0;
like.addEventListener('click',function() {
    k++;
    dv.innerHTML = `
     <div class="like">
     ${k}
    <i style="color:blue" id="like" class="fa-regular fa-thumbs-up"></i>
    </div>`;
})
console.log(k);
const description  = document.querySelector('.replies');
const tgia = document.querySelector('.tgia');
const other = document.querySelector('.footer');
var chek = 0;
description.addEventListener('click',function() {
      chek++;
      if(chek ==1)
      {
          tgia.style.display = 'block';
           const height = tgia.offsetHeight;
          other.style.marginTop = `${20}px`;
        }
      if(chek >1)
      {
        tgia.style.display = 'none';
         const height = tgia.offsetHeight;
         other.style.marginTop = `${0}px`;
        chek=0;
      }
})


let setSize = document.querySelector('.page-nd');

setSize.addEventListener('resize',function () {
    alert('đã thay đổi kích thước');
})



let arrSearch = ['Quần Áo Nam ','Quần Áo Nữ','Giày Cao Cấp ','Nước Hoa Cao Cấp','Coffee Milk'];
var find =  document.querySelector('.tk');
let list = document.querySelector('.result ul');
find.addEventListener('click',function () {
   var searchInput = document.getElementById('ip-search').value;
   arrSearch.unshift(searchInput);
    var html = '';
    for(var i = 0 ; i<5 ; i++) {
        html+= `<li>${arrSearch[i]}</li>`;
    }
    list.innerHTML = html;
    document.getElementById('ip-search').value = '';
    document.getElementById('ip-search').focus();
    setTimeout(function() {
      ovlSearch.classList.remove('show');
    },1000)
    
})




