const presentations = document.querySelectorAll(".presentation")
const containerButtons = document.querySelectorAll(".presentation__btn-box")

console.log(presentations)




let index = 0


containerButtons.forEach(con => {


    con.addEventListener("click",function(e) {
        const button = e.target.closest(".btn--carrousel")
       
        if(!button) return 

         const goto = Number(button.dataset.go)

        if(index == -2 && goto == 1 ){
            index = 1
            console.log("hey")
        }

      

        if( index - goto == 1 ){
            index =  -3
        }

        presentations.forEach(el => {

            const move = index - goto
            console.log(move)
            el.style.transform = `translateX(${move * 100}%)`



         })

        index -= goto
            console.log(index)
    })



})