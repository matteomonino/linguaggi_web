async function exampleFetch() {
    const response = await fetch('https://raw.githubusercontent.com/dariusk/corpora/master/data/technology/programming_languages_popular.json');
    const json = await response.json();
    console.log(json);

    let contenuto = "";
   
    for (let i=0; i<8; i++){
        contenuto += '<li id="nav-menu-item-14912" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-14838 current_page_item narrow"><a href="https://it.wikipedia.org/wiki/' + json.programming_languages_popular[i] + '" class=" current "><span class="item_outer"><span class="item_text">' + json.programming_languages_popular[i] + '</span></span></a></li>';
    }
    
    console.log(contenuto);

    document.getElementById("menu-menu-its").innerHTML = contenuto;
}

exampleFetch()

document.getElementsByClassName("eltdf-light-logo")[0].src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/300px-W3Schools_logo.svg.png";

document.getElementsByClassName("eltdf-normal-logo")[0].src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/300px-W3Schools_logo.svg.png";

document.getElementsByClassName("eltdf-dark-logo")[0].src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/300px-W3Schools_logo.svg.png";

