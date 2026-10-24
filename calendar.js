const calendar = document.getElementById('calendar')

const links= {
    1: 'https://open.spotify.com/playlist/37i9dQZF1DWWvHBEQLnV1N?si=ZQp-DarSS3eZ5rnZCtz1Qw', // 2 Playlist
    2: 'https://www.youtube.com/watch?v=whc5VDI1GOY',             //2 Video
    3: 'https://www.buzzfeed.com/littlebeebuzz913/christmas-persona-quiz', // 2 Quiz
    4: 'https://magnitudle.com/size-it-up', //2 Spiel
    5: 'https://www.einfachbacken.de/rezepte/gebrannte-mandeln-aus-dem-backofen-schnelles-rezept', //2 Süß
    6: 'https://www.youtube.com/watch?v=nxskfhynIZI', //2 Video
    7: 'https://www.youtube.com/watch?v=IFZqDcFU4Ow&list=RDIFZqDcFU4Ow&start_radio=1', //2 Musik
    8: 'https://www.lecker.de/klassische-kuerbissuppe-mit-hokkaido-79938.html', //2 Rezept
    9: 'https://www.youtube.com/watch?v=2A1way5QfGg&t=2s', //2 special
    10: 'https://www.youtube.com/watch?v=zlGwP2aCu7w', // 2 Sendung mit der Maus
    11: 'https://oskarstalberg.com/Townscaper/',  //2 Spiel   
    12: 'https://www.einfachbacken.de/rezepte/lebkuchen-muffins-sooo-saftig', //2 süß
    13: 'https://www.youtube.com/watch?v=rk6FPlcrivg',  //2 Video
    14: 'https://thewordsearch.com/puzzle/998/winter/',  //  2 Wordsearch
    15: 'https://sproutcoo.itch.io/cosy-bear-cafe', // 2 Video
    16: 'https://www.youtube.com/watch?v=NpBb5qFIaIY', // 2 Video
    17: 'https://www.youtube.com/watch?v=JnzY3niRZak', //2 origami 
    18: 'https://dailyorbs.com/', //2 Rätsel
    19: 'https://www.oetker.de/rezepte/r/lebkuchen-tiramisu', //2 süß
    20: 'https://www.youtube.com/watch?v=c_SOS595wtc', //  2 Video
    21: 'https://www.youtube.com/watch?v=PnzzhxjwtQg', //2 Shaun
    22: 'https://youtu.be/CHTawy6ja_c?si=T3OTEOOMChK3GTQN', //2 Basteln
    23: 'https://www.jigsawplanet.com/?rc=play&pid=32560445c572', //2 Puzzel
    24: '' //2  Märchen
}

for(let i = 1; i <= 24; i++){
    calendar.innerHTML += `<div class="door col" id=${i}>${i}</div>`;
}

let doors = Array.from(document.getElementsByClassName('door'));


let link = (e) =>{
    let id = e.target.id;
    let link = links[id];
    let today = new Date();
    let open = new Date(year=2026, month=12-1, day=id);
    console.log('date:' ,today);
    console.log('opens:', open);
    if (open <= today){
        if (id in links){
            // open in new tab if on laptop
            if (window.innerWidth > 800){
             window.open(link, "_blank");
            }
            else{
             window.location.href = link;   
            }
            // no new tab on phone (they sum up to quickly anyways)
        }
    }
}

doors.forEach((d)=>{
    d.addEventListener('click', link);
})

