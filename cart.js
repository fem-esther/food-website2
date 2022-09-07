var decreaseItem=document.querySelectorAll('.decrease-item');
var increaseItem=document.querySelectorAll('.increase-item');
var updateItem=document.querySelectorAll('.cart-amount');
let values=document.getElementsByClassName('value')

function increment (){
      console.log("increment");
}
function decrement (){
      console.log("decrement");
}
function update (){
      console.log("update");
}

// decreaseItem.addEventListener("click", decrement);
// increaseItem.addEventListener("click", increment);
// updateItem.addEventListener("click", update);

decreaseItem.forEach(val=>{
      val.addEventListener("click", (e)=> {
      // let myParent=e.target.parentNode.parentNode
      // console.log(myParent)
      // var one=parseInt(document.getElementById("one"));
      // number = parseInt(one.innerText)
      var sib=e.target.sibling
console.log(sib)
      // counter = one + 1
      // var value=counter++
      // one.innerText=2
      }) 
      })

      // increaseItem.forEach(val=>{
      //     val.addEventListener("click", (e)=>{
      //           let myParent=e.target.parentNode.parentNode
      //           console.log(myParent);
      //     })
      // })

// decreaseItem.forEach(val=>{
//       val.addEventListener("click", (e)=> decrement(e));
//       })
      
//       function decrement (e){
//             console.log("decrement");
//       }