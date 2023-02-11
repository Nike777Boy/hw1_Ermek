const b=document.querySelector(".block")
const inp=document.querySelector('.inp')
const button=document.querySelector('.submit')

counter=0
function reversing(){
    if (counter<500){    
        b.style.left=`${counter}px`
        counter+=50
        return reversing()
    }
}

reversing()

const regExp=/\d/gi
button.onclick=()=>{
    if (inp.value.match(regExp).length==14){    
        alert('success')    
    }else{
        alert('error')
    }
    
}
