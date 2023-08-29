let button = document.getElementById('change-scheme');
function selector () {
    return Math.floor(Math.random() * 3);
}
let colorChange = function() {
    let shuffle = selector();
    if (shuffle = 1) {
        //Primary color elements
        document.getElementById('html').style.cssText = "background-color:#0e387a;transition:all 2s ease-in; ";  //bground prim color group 1
        document.getElementById('greeting').style.cssText = "color:#0e387a; transition:all 2s ease-in;";        //body text color group 1
        //Secondary color elements
        document.getElementsByClassName('header-link')[0].style.cssText = "color: #9fafca;transition: all 2s ease-in;"; // nav header element about me
        document.getElementsByClassName('header-link')[1].style.cssText = "color: #9fafca;transition: all 2s ease-in;"; //nav header element projects
        document.getElementsByClassName('header-link')[2].style.cssText = "color: #9fafca;transition: all 2s ease-in;"; //nav header element work
        document.getElementsByClassName('header-link')[3].style.cssText = "color: #9fafca;transition: all 2s ease-in;"; //nav header element work
        document.getElementsByClassName('minombre')[0].style.cssText = "color: #9fafca;transition: all 2s ease-in;"; //nav header element work
        document.getElementsByClassName('big-container')[0].style.cssText = "background-color: #9fafca;transition: all 2s ease-in;"; //nav header element work
        // third level colors, will use second 
        document.getElementsByClassName('banner')[0].style.cssText = "border-bottom:#9fafca 3px double;transition: all 2s ease-in;";         // banner border bottom move to tiriary if needed 
        document.getElementById('style-name').style.cssText = "color: #9fafca;transition: all 2s ease-in;";
        document.getElementById('style-name').innerHTML = "Prosperity: Sapphire Blue and Blue Gray." + shuffle; 
        document.getElementsByClassName('lead-in')[0].style.cssText = "color: #9fafca;transition: all 2s ease-in;";
        return
    }   else if (shuffle = 2) {
        document.getElementById('html').style.cssText = "background-color:#337def;transition:all 2s ease-in; ";  //bground prim color group 1
        document.getElementById('greeting').style.cssText = "color:#337def; transition:all 2s ease-in;";        //body text color group 1
        //Secondary color elements
        document.getElementsByClassName('header-link')[0].style.cssText = "color: #fcc729;transition: all 2s ease-in;"; // nav header element about me
        document.getElementsByClassName('header-link')[1].style.cssText = "color: #fcc729;transition: all 2s ease-in;"; //nav header element projects
        document.getElementsByClassName('header-link')[2].style.cssText = "color: #fcc729;transition: all 2s ease-in;"; //nav header element work
        document.getElementsByClassName('header-link')[3].style.cssText = "color: #fcc729;transition: all 2s ease-in;"; //nav header element work
        document.getElementsByClassName('minombre')[0].style.cssText = "color: #fcc729;transition: all 2s ease-in;"; //nav header element work
        document.getElementsByClassName('big-container')[0].style.cssText = "background-color: #fcc729;transition: all 2s ease-in;"; //nav header element work
        // third level colors, will use second 
        document.getElementsByClassName('banner')[0].style.cssText = "border-bottom:#fcc729 3px double;transition: all 2s ease-in;";         // banner border bottom move to tiriary if needed 
        document.getElementById('style-name').style.cssText = "color: #fcc729;transition: all 2s ease-in;";
        document.getElementById('style-name').innerHTML = "Optimism: Royal Blue and Yello."; 
        document.getElementsByClassName('lead-in')[0].style.cssText = "color: #fcc729;transition: all 2s ease-in;";
        return
    }   else {
        document.getElementById('html').style.cssText = "background-color:#ABD1FF;transition:all 2s ease-in; ";  //bground prim color group 1
        document.getElementById('greeting').style.cssText = "color:#ABD1FF; transition:all 2s ease-in;";        //body text color group 1
        //Secondary color elements
        document.getElementsByClassName('header-link')[0].style.cssText = "color: #E54B22;transition: all 2s ease-in;"; // nav header element about me
        document.getElementsByClassName('header-link')[1].style.cssText = "color: #E54B22;transition: all 2s ease-in;"; //nav header element projects
        document.getElementsByClassName('header-link')[2].style.cssText = "color: #E54B22;transition: all 2s ease-in;"; //nav header element work
        document.getElementsByClassName('header-link')[3].style.cssText = "color: #E54B22;transition: all 2s ease-in;"; //nav header element work
        document.getElementsByClassName('minombre')[0].style.cssText = "color: #E54B22;transition: all 2s ease-in;"; //nav header element work
        document.getElementsByClassName('big-container')[0].style.cssText = "background-color: #E54B22;transition: all 2s ease-in;"; //nav header element work
        // third level colors, will use second 
        document.getElementsByClassName('banner')[0].style.cssText = "border-bottom:#E54B22 3px double;transition: all 2s ease-in;";         // banner border bottom move to tiriary if needed 
        document.getElementById('style-name').style.cssText = "color: #E54B22;transition: all 2s ease-in;";
        document.getElementById('style-name').innerHTML = "Balance: Cornflower Blue and Orioles Orange."; 
        document.getElementsByClassName('lead-in')[0].style.cssText = "color: #E54B22;transition: all 2s ease-in;";
        return
    }
};
button.onclick = colorChange;







let button = document.getElementById('change-scheme');
function selector () {
    return Math.floor(Math.random() * 2);
}
let colorChange = function(event) {
    let shuffle = selector();
    let primeOne = ""
    let accentOne = ""
    let phrase = ""
    if (shuffle = 0) {
        primeOne = "#ABD1FF"
        accentOne = "#E54B22"
        phrase = "Balance: Cornflower Blue and Orioles Orange."
    } else if (shuffle = 1) {
        primeOne = "#0e387a"
        accentOne = "#9fafca"
        phrase = "Prosperity: Sapphire Blue and Blue Gray."
    }
    
    document.getElementById('html').style.cssText = "background-color:"+primeOne+"transition:all 2s ease-in; ";  //bground prim color group 1
    document.getElementById('greeting').style.cssText = "color:"+primeOne+"; transition:all 2s ease-in;";        //body text color group 1
    //Secondary color elements
    document.getElementsByClassName('header-link')[0].style.cssText = "color: "+accentOne+";transition: all 2s ease-in;"; // nav header element about me
    document.getElementsByClassName('header-link')[1].style.cssText = "color: "+accentOne+";transition: all 2s ease-in;"; //nav header element projects
    document.getElementsByClassName('header-link')[2].style.cssText = "color: "+accentOne+";transition: all 2s ease-in;"; //nav header element work
    document.getElementsByClassName('header-link')[3].style.cssText = "color: "+accentOne+";transition: all 2s ease-in;"; //nav header element work
    document.getElementsByClassName('minombre')[0].style.cssText = "color: "+accentOne+";transition: all 2s ease-in;"; //nav header element work
    document.getElementsByClassName('big-container')[0].style.cssText = "background-color: "+accentOne+";transition: all 2s ease-in;"; //nav header element work
    // third level colors, will use second 
    document.getElementsByClassName('banner')[0].style.cssText = "border-bottom:"+accentOne+" 3px double;transition: all 2s ease-in;";         // banner border bottom move to tiriary if needed 
    document.getElementById('style-name').style.cssText = "color: "+accentOne+";transition: all 2s ease-in;";
    document.getElementById('style-name').innerHTML = phrase; 
    document.getElementsByClassName('lead-in')[0].style.cssText = "color: "+accentOne+";transition: all 2s ease-in;";
    return
};
button.addEventListener = colorChange;
