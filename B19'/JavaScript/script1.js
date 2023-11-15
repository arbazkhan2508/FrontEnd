   var arr=[
   {name:"asad",status:"strangers",prof:"singer",photo:"https://images.unsplash.com/photo-1662855802712-7e30ebfbb194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60%22,prof:%22singer%22,stat:%22strangers"},
   {name:"arbaz",status:"strangers",prof:"coder",photo:"https://images.unsplash.com/photo-1663179705527-72e54edf1537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60%22,prof:%22coder%22,stat:%22strangers"},
   {name:"a.k",status:"strangers",prof:"gamer",photo:"https://images.unsplash.com/photo-1663183142676-8718b7d0cc66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80%22,prof:%22gamer%22,stat:%22strangers"}
]
function show(){
   var clutter="";
   for(var i=0;i<3;i++){
      clutter+=`<div id="card">
      <div id="photo">
         <img src="${arr[i].photo}" alt="#">
      </div>
      <h2>${arr[i].name}</h2>
      <h3>${arr[i].prof}</h3>
      <h4 id="${arr[i].status.split(" ").join("")}">${arr[i].status}</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quia aliquid veritatis expedita, optio voluptatem?</p>
      <button class=${arr[i].status==="strangers"?"red":"blue"} id=${i}>${arr[i].status==="strangers"?"Add friend":"remove friend"}</button>
      </div>`
   }
   document.querySelector("#main").innerHTML=clutter;
}
show();
document.querySelector("#main").addEventListener("click",function(details){
      arr[details.target.id].status="friend request sent";
      show();
      setTimeout(function(){
         arr[details.target.id].status="friends";
         show();
      },2000)
})
