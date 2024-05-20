import React from 'react';

function Index() {
    return (
        <body>
            <div class="grid-container header" id="uvod">
                <h1 class="item1">Chalupa u Markéty</h1>
                <h2 class="item3">Púrynky, Velké Bílovice</h2>
            </div>
            <div class="banner">
                <img src="imgs/banner1.jpg" alt="Banner"></img>
            </div>
            <div class="carousel">
                <div class="carousel-images">
                    <img src="imgs/front1.jpg" style={{width: "100%"}} alt=""></img>
                    <img src="imgs/front2.jpg" style={{width: "100%"}} alt=""></img>
                    <img src="imgs/back1.jpg" style={{width: "100%"}} alt=""></img>
                    <img src="imgs/back2.jpg" style={{width: "100%"}} alt=""></img>
                    <img src="imgs/back3.jpg" style={{width: "100%"}} alt=""></img>
                    <img src="imgs/inside1.jpg" style={{width: "100%"}} alt=""></img>
                    <img src="imgs/inside2.jpg" style={{width: "100%"}} alt=""></img>
                    <img src="imgs/inside3.jpg" style={{width: "100%"}} alt=""></img>
                    <img src="imgs/inside4.jpg" style={{width: "100%"}} alt=""></img>
                    <img src="imgs/inside5.jpg" style={{width: "100%"}} alt=""></img>
                    <img src="imgs/inside6.jpg" style={{width: "100%"}} alt=""></img>
                    <img src="imgs/room1.jpg" style={{width: "100%"}} alt=""></img>
                    <img src="imgs/room2.jpg" style={{width: "100%"}} alt=""></img>
                    <img src="imgs/room3.jpg" style={{width: "100%"}} alt=""></img>
                    <img src="imgs/room4.jpg" style={{width: "100%"}} alt=""></img>
                    <img src="imgs/panorama1.jpg" style={{width: "100%"}} alt=""></img>
                    <img src="imgs/panorama2.jpg" style={{width: "100%"}} alt=""></img>
                    <img src="imgs/panorama3.jpg" style={{width: "100%"}} alt=""></img>
                    <img src="imgs/panorama4.jpg" style={{width: "100%"}} alt=""></img>    
                </div>
                <button class="prev">&#10094;</button>
                <button class="next">&#10095;</button>
            </div>
            <div class="cenik" id="cenik">
                <h2 style={{textAlign: "center"}}>Pronájem celého objektu</h2>
                <div class="columns">
                    <ul class="price">
                        <li class="header header1" style={{backgroundColor: "#04AA6D;"}}>Na 1 noc</li>
                        <li class="grey grey1">1 500 Kč</li>
                    </ul>
                    <ul class="price">
                        <li class="header header2" style={{backgroundColor: "#04AA6D"}}>Na celý týden</li>
                        <li class="grey grey2"> 5 000 Kč</li>
                    </ul>
                    <li class="button-box price"><a href="rezervace.html" class="button-rezervace" style={{color: "white"}}>Rezervovat nyní</a></li>
                </div>
            </div>
            <div class="kontakt-page">
                <div class="kontakt"  id="kontakt">
                <h3>Adresa:</h3>
                <ul>
                    <li>Púrkynská 571</li>
                    <li>Velké Bílovice</li>
                    <li>691 02</li>
                </ul>
                <h3>GPS:</h3>
                <ul>
                    <li>xxx</li>
                </ul>
                <h3>Kontakt:</h3>
                <ul>
                    <li>Markéta Lilley</li>
                    <li>email: lilley@email.cz</li>
                    <li>tel: 723 818 944</li>
                </ul>
                </div>
                <iframe title="Map" id="map" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3427.8774088135365!2d16.89003206255426!3d48.86325120024424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zUMO6cnluc2vDoSA1NzEsIFZlbGvDqSBCw61sb3ZpY2U!5e1!3m2!1scs!2scz!4v1689609589920!5m2!1scs!2scz" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </body>
    );
}

export default Index;