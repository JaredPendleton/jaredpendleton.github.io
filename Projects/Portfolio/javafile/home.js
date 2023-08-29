let button = document.getElementById('change-scheme');

let selector = () => {
    return Math.floor(Math.random() * 3);
}
let colorChange = function() {
    
    let htmlElement = document.getElementById('html');
    let greetingElement = document.getElementById('greeting');
    let ulZero = document.getElementsByClassName('header-link')[0];
    let ulOne = document.getElementsByClassName('header-link')[1];
    let ulTwo = document.getElementsByClassName('header-link')[2];
    let ulThree = document.getElementsByClassName('header-link')[3];
    let miNombre = document.getElementsByClassName('minombre')[0];
    let bigContainerZero = document.getElementsByClassName('big-container')[0];
    let bannerZero = document.getElementsByClassName('banner')[0];
    let styleName = document.getElementById('style-name');
    let leadInZero = document.getElementsByClassName('lead-in')[0];
    let shuffle = selector();
    if (shuffle = 1) {
        //Primary color elements
        htmlElement.style.cssText = "background-color:#0e387a;transition:all 2s ease-in; ";  //bground prim color group 1
        greetingElement.style.cssText = "color:#0e387a; transition:all 2s ease-in;";        //body text color group 1
        //Secondary color elements
        ulZero.style.cssText = "color: #9fafca;transition: all 2s ease-in;"; // nav header element about me
        ulOne.style.cssText = "color: #9fafca;transition: all 2s ease-in;"; //nav header element projects
        ulTwo.style.cssText = "color: #9fafca;transition: all 2s ease-in;"; //nav header element work
        ulThree.style.cssText = "color: #9fafca;transition: all 2s ease-in;"; //nav header element work
        miNombre.style.cssText = "color: #9fafca;transition: all 2s ease-in;"; //nav header element work
        bigContainerZero.style.cssText = "background-color: #9fafca;transition: all 2s ease-in;"; //nav header element work
        // third level colors, will use second 
        bannerZero.style.cssText = "border-bottom:#9fafca 3px double;transition: all 2s ease-in;";         // banner border bottom move to tiriary if needed 
        styleName.style.cssText = "color: #9fafca;transition: all 2s ease-in;";
        styleName.innerHTML = "Prosperity: Sapphire Blue and Blue Gray." + shuffle; 
        leadInZero.style.cssText = "color: #9fafca;transition: all 2s ease-in;";
        return
    }   else if (shuffle = 2) {
        htmlElement.style.cssText = "background-color:#337def;transition:all 2s ease-in; ";  //bground prim color group 1
        greetingElement.style.cssText = "color:#337def; transition:all 2s ease-in;";        //body text color group 1
        //Secondary color elements
        ulZero.style.cssText = "color: #fcc729;transition: all 2s ease-in;"; // nav header element about me
        ulOne.style.cssText = "color: #fcc729;transition: all 2s ease-in;"; //nav header element projects
        ulTwo.style.cssText = "color: #fcc729;transition: all 2s ease-in;"; //nav header element work
        ulThree.style.cssText = "color: #fcc729;transition: all 2s ease-in;"; //nav header element work
        miNombre.style.cssText = "color: #fcc729;transition: all 2s ease-in;"; //nav header element work
        bigContainerZero.style.cssText = "background-color: #fcc729;transition: all 2s ease-in;"; //nav header element work
        // third level colors, will use second 
        bannerZero.style.cssText = "border-bottom:#fcc729 3px double;transition: all 2s ease-in;";         // banner border bottom move to tiriary if needed 
        styleName.style.cssText = "color: #fcc729;transition: all 2s ease-in;";
        styleName.innerHTML = "Optimism: Royal Blue and Yello."; 
        leadInZero.style.cssText = "color: #fcc729;transition: all 2s ease-in;";
        return
    }   else {
        htmlElement.style.cssText = "background-color:#ABD1FF;transition:all 2s ease-in; ";  //bground prim color group 1
        greetingElement.style.cssText = "color:#ABD1FF; transition:all 2s ease-in;";        //body text color group 1
        //Secondary color elements
        ulZero.style.cssText = "color: #E54B22;transition: all 2s ease-in;"; // nav header element about me
        ulOne.style.cssText = "color: #E54B22;transition: all 2s ease-in;"; //nav header element projects
        ulTwo.style.cssText = "color: #E54B22;transition: all 2s ease-in;"; //nav header element work
        ulThree.style.cssText = "color: #E54B22;transition: all 2s ease-in;"; //nav header element work
        miNombre.style.cssText = "color: #E54B22;transition: all 2s ease-in;"; //nav header element work
        bigContainerZero.style.cssText = "background-color: #E54B22;transition: all 2s ease-in;"; //nav header element work
        // third level colors, will use second 
        bannerZero.style.cssText = "border-bottom:#E54B22 3px double;transition: all 2s ease-in;";         // banner border bottom move to tiriary if needed 
        styleName.style.cssText = "color: #E54B22;transition: all 2s ease-in;";
        styleName.innerHTML = "Balance: Cornflower Blue and Orioles Orange."; 
        leadInZero.style.cssText = "color: #E54B22;transition: all 2s ease-in;";
        return
    };
};
button.onclick = colorChange;