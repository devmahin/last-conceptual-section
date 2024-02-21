const addBtn = document.querySelectorAll(".add-btn");
let selectedCart = document.getElementById("selected-players-container");
const applyBtn = document.getElementById("apply-btn");


let total = 0;
let grand = 0;
let count = 0;
// console.log(addBtn)
for (let i = 0; i < addBtn.length; i++) {
  // console.log(addBtn[i])
  addBtn[i].addEventListener("click", function (e) {
    console.log(e.target.parentNode)


    // disabled
    // left function
    let left = numberConvat("left");
    if (left <= 0) {
      addBtn.forEach((btn) => {
        btn.setAttribute("disabled", true)
      })
      return alert("Maximum 6 cart allow")

    }
    let leftTotal = left - 1;
    innerSendFun("left", leftTotal)

    e.target.parentNode.classList.add("bg")
    addBtn[i].setAttribute("disabled", true)




    let priceItem = +e.target.parentNode.children[1].children[0].innerText;
    let itemName = e.target.parentNode.children[0].innerText;
    let category = e.target.parentNode.children[2].children[0].innerText;


    let ul = document.createElement("div");
    ul.className = "menu-container";

    let p = document.createElement("p");
    p.innerText = itemName;
    let p2 = document.createElement("p");
    p2.innerText = priceItem;
    let p3 = document.createElement("p");
    p3.innerText = category;

    ul.appendChild(p);
    ul.appendChild(p2);
    ul.appendChild(p3);
    selectedCart.appendChild(ul);





    // cart coutn
    count++;
    innerSendFun("cart", count);

    // total value 
    total += priceItem;
    innerSendFun("total-cost", total);
    //total grand value
    grand += priceItem;
    innerSendFun("grand-total", grand);

    // bugget function
    let bugget = numberConvat("budget");
    let extraBudget = bugget - priceItem;
    innerSendFun("budget", extraBudget)








  })
}

applyBtn.addEventListener("click", function (e) {
  let couponCode = document.getElementById("coupon-code").value;

  if (count >= 4 && total >= 1000) {
    if (couponCode === "love") {
      let grandTotal = numberConvat("grand-total");
      console.log(grandTotal)
      let discount = grand - (grandTotal * 10 / 100);
      innerSendFun("grand-total", discount);
      applyBtn.setAttribute("disabled", true)

    } else {
      alert("copoune is not match")
    }

  }
  else {
    alert(`minmun buy 4 cart and ammount minmum 1000`)
  }
})




function innerSendFun(id, value) {
  let idName = document.getElementById(id);
  idName.innerText = value;
}

function numberConvat(id) {
  let Number = document.getElementById(id).innerText;
  return parseInt(Number);
}