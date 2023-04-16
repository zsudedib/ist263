walnuts = $(".walnut")
walnut3 = $("#walnut3")[0]


function wrong() {
    alert("Wrong. Try again")
}

function right() {
    walnut3.style.display = "none"
    alert("You won!")
}

walnuts[0].onclick =()=>{
    wrong()
}
walnuts[1].onclick =()=>{
    wrong()
}
walnut3.onclick = ()=>{
    right()
}


