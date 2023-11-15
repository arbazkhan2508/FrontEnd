var arr=[
    {name:"asad",status:"strangers",prof:"coder",photo:"https://images.unsplash.com/photo-1663422075534-15a8f3951a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"},
    {name:"arbaz",status:"strangers",prof:"gamer",photo:"https://images.unsplash.com/photo-1663408645654-074ee1a2b18b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"},
    {name:"a.k",status:"strangers",prof:"singer",photo:"https://images.unsplash.com/photo-1662581871665-f299ba8ace07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"}
]
function asad(){
    var clutter="";
    for(var i=0;i<3;i++)
    {
        clutter+=`<div id="card">
        <div id="photo">
        <img src="${arr[i].photo}" alt="#">
        </div>
        <h1>${arr[i].name}</h1>
        <h3>${arr[i].prof}</h3>
        <h2 id="${arr[i].status.split(" ").join("")}">${arr[i].status}</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, obcaecati?</p>
         <button class=${arr[i].status==="strangers"?"red":"blue"} id=${i}>${arr[i].status==="strangers"?"Add friend":"remove friend"}</button>
    </div>`
    }
    document.querySelector("#main").innerHTML=clutter;
}
asad();
document.querySelector("#main").addEventListener("click",function(details){
     arr[details.target.id].status="friend request sent";
      asad();
    setTimeout(function(){
        arr[details.target.id].status="friends";
     asad();
     },2000)
})
// asad();
