let songList = document.querySelectorAll('.first');

let songArray = [{
    "id":0,
    "name" : "Baby.mp3",
    "link" : "song/Baby.mp3",
    "image" : "https://www.famousbirthdays.com/faces/bieber-justin-image.jpg",


}, 
{
    "id":1,
    "name" : "AThousandYears.mp3",
    "link" : "song/AThousandYears.mp3",
    "image" : "https://www.famousbirthdays.com/faces/bieber-justin-image.jpg",

}
];

function start(){
    // console.log(songList);
    
}
start();



// let mainBtn = document.getElementById('mainBtn');
// songList.addEventListener('click', function(e){
//     console.log(e.target);
//     if(e.target.tagName == 'I'){
//         let secBtn = e.target;
//         // console.log(secBtn)
//         let songName = e.target.parentElement.parentElement.children[1].innerHTML;
//         console.log(songName);
//         let song = new Audio("song/Baby.mp3");
//         if(songName == "Baby ft.Ludacris - JustinBieber"){
//             if(secBtn.classList.contains("fa-play")){
//                 console.log(secBtn.classList.contains("fa-play"))
//                 secBtn.classList.remove('fa-play');
//                 secBtn.classList.add('fa-pause');
//                 console.log("play");
//                 song.play();
//             }
//             else{
//                 song.pause();
//                 song = null;
//                 secBtn.classList.remove('fa-pause');
//                 secBtn.classList.add('fa-play');
//                 console.log("pause");
//             }
//         } 
        // else if(songName = "A Thousand Year - Christina Perri"){
        //         let song = new Audio("song/AThousandYears.mp3");
        //         if(secBtn.classList.contains("fa-play")){
        //             secBtn.classList.remove('fa-play');
        //             secBtn.classList.add('fa-pause');
        //             console.log("play");
        //             song.play();
        //         }
        //         else{
        //             song.pause();
        //             song = null;
        //             secBtn.classList.remove('fa-pause');
        //             secBtn.classList.add('fa-play');
        //             console.log("pause");
        //         }
        //     }   
        // else if(songName = "Ek Din Teri Rahoon - Dhruuv Dhir"){
        //         let song = new Audio("song/EkDinTeriRaahonMein.mp3");
        //         if(secBtn.classList.contains("fa-play")){
        //             secBtn.classList.remove('fa-play');
        //             secBtn.classList.add('fa-pause');
        //             console.log("play");
        //             song.play();
        //         }
        //         else{
        //             song.pause();
        //             song = null;
        //             secBtn.classList.remove('fa-pause');
        //             secBtn.classList.add('fa-play');
        //             console.log("pause");
        //         }
        //     } 
        // else if(songName = "Grow Old With You-George Jones"){
        //         let song = new Audio("song/IWannaGrowOldwithYou.mp3");
        //         if(secBtn.classList.contains("fa-play")){
        //             secBtn.classList.remove('fa-play');
        //             secBtn.classList.add('fa-pause');
        //             console.log("play");
        //             song.play();
        //         }
        //         else{
        //             song.pause();
        //             song = null;
        //             secBtn.classList.remove('fa-pause');
        //             secBtn.classList.add('fa-play');
        //             console.log("pause");
        //         }
        //     }
        // else if(songName = "Better To Be You - La Marseillaise"){
        //         let song = new Audio("song/BetterToBeYou.lrc");
        //         if(secBtn.classList.contains("fa-play")){
        //             secBtn.classList.remove('fa-play');
        //             secBtn.classList.add('fa-pause');
        //             console.log("play");
        //             song.play();
        //         }
        //         else{
        //             song.pause();
        //             song = null;
        //             secBtn.classList.remove('fa-pause');
        //             secBtn.classList.add('fa-play');
        //             console.log("pause");
        //         }
        //     }
        // else if(songName = "Beautiful In White - Christina La"){
        //         let song = new Audio("song/BeautifulInWhite.mp3");
        //         if(secBtn.classList.contains("fa-play")){
        //             secBtn.classList.remove('fa-play');
        //             secBtn.classList.add('fa-pause');
        //             console.log("play");
        //             song.play();
        //         }
        //         else{
        //             song.pause();
        //             song = null;
        //             secBtn.classList.remove('fa-pause');
        //             secBtn.classList.add('fa-play');
        //             console.log("pause");
        //         }
        //     }
        // else{
        //         let song = new Audio("song/MakeItRight.mp3");
        //         if(secBtn.classList.contains("fa-play")){
        //             secBtn.classList.remove('fa-play');
        //             secBtn.classList.add('fa-pause');
        //             console.log("play");
        //             song.play();
        //         }
        //         else{
        //             song.pause();
        //             song = null;
        //             secBtn.classList.remove('fa-pause');
        //             secBtn.classList.add('fa-play');
        //             console.log("pause");
        //         }
        //     }
            
            
//     }
// },false)



// mainBtn.addEventListener('click',function(e){
//     let music = new Audio("")
// },false);

// if(new Audio("song/baby.mp3")){
                //     console.log("already created")
                // }
                // else{
                //     let song = new Audio("song/baby.mp3");
                //     console.log("created")
                // }