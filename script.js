const semuatombol = document.querySelectorAll(".btn-tambah");

semuatombol.forEach (function (tombol){
    tombol.addEventListener("click",function(){
        tombol.textContent=" ✅di tambahkan" ;

        setTimeout(function(){
            tombol.textContent="tambah";
        },3000);
    });
})

// fitur kirim pesan sukses
const formkontak = document.getElementById ("form-kontak");
const pesansukses = document.getElementById("pesan-sukses")

formkontak.addEventListener("submit", function (event){
    event.preventDefault();
    pesansukses.style.display="block";
    formkontak.reset ();

    setTimeout(function(){
    pesansukses.style.display="none";    
    },5000)
})