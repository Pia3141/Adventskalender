const calendar = document.getElementById('calendar')

document.addEventListener("click", () => {
    document.getElementById("music").muted = false;
});

const links= {
    1: 'https://youtu.be/s4Hae8bQDts?si=tSO2TFUHcqqsnywC',                 // Video
    2: 'https://metamorphus.de/weihnachtsmarkt/', // Weihnachtsmarkt
    3: 'https://open.spotify.com/playlist/0DJ1MAN0lTZhYSaXHJ8ksX?si=1fcNX4hrQ5m0d0CbucpuGQ', // Playlist
    4: 'https://neal.fun/absurd-trolley-problems/', //Spiel
    5: 'https://diycarinchen.de/2019/12/rezept-super-leckere-spekulatiuscreme-selber-machen-perfektes-weihnachtsgeschenk/', // Süß
    6: 'https://www.buzzfeed.com/laughingduck465/plan-your-perfect-christmas-day-and-ill-tell-you', // Quiz
    7: 'https://youtu.be/IFZqDcFU4Ow?si=NM0juosvnQV-tfTm', // Musik
    8: 'https://www.zuckerjagdwurst.com/de/rezepte/vegane-entenkeulen-mit-kloessen-und-rotkraut', //Rezept
    9: 'https://www.archdaily.com/tag/top100/', //Architektur
    10: 'https://youtu.be/tU2GXvERtkk?si=Hjryr6OeJt85ipNe', // Basteln
    11: 'https://messenger.abeto.co/',  // Spiel   
    12: 'https://www.einfachbacken.de/rezepte/zimtsterne-klassisches-rezept', //süß
    13: 'https://murdle.com/',  // Rätsel
    14: 'https://youtu.be/EKkzbbLYPuI?si=GX0eVjj0Iy7-WXZz',  //  Musik
    15: 'https://www.gutekueche.de/malai-kofta-rezept-21203', // Rezept,
    16: 'https://youtu.be/Dp4mjdc575A?si=tikro-ImcSbM6fLN', // Häkeln
    17: 'https://picadera.de/pferdeleckerlis-selber-machen', // Pferde
    18: 'https://www.nytimes.com/games/wordle/index.html', //idek
    19: 'https://www.rewe.de/rezepte/spekulatius-trueffel/', //süß
    20: 'https://thewordsearch.com/puzzle/124/christmas/', //Kreuzworträtsel
    21: 'https://youtu.be/qJ_MGWio-vc?si=BE8oFqv47seuXHqe', // Musik
    22: 'https://www.youtube.com/watch?v=ehzRrvoYBxU', // Basteln
    23: 'https://www.jigsawplanet.com/?rc=play&pid=0e473a8aab54', // Puzzel
    24: 'https://www.ardmediathek.de/film/drei-haselnuesse-fuer-aschenbroedel/Y3JpZDovL3dkci5kZS9laW56ZWxzdHVlY2tlZnVlcmZpa3Rpb24vZmQxYmIwZmQtYTY4Ni00MWRiLTkxN2MtMmY3OGE0OWZlMjgz' //Film
}

for(let i = 1; i <= 24; i++){
    calendar.innerHTML += `<div class="door col" id=${i}>${i}</div>`;
}

let doors = Array.from(document.getElementsByClassName('door'));


let link = (e) =>{
    let id = e.target.id;
    let link = links[id];
    let today = new Date();
    let open = new Date(year=2025, month=10-1, day=id);
    console.log('date:' ,today);
    console.log('opens:', open)
    if (open <= today){
        if (id in links){
             window.location.href = link;
        }
    }
}

doors.forEach((d)=>{
    d.addEventListener('click', link);
})

