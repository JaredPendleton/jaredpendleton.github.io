let button = document.getElementById('change-scheme');
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


let blueGray = () => {
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
    styleName.innerHTML = "Prosperity: Sapphire Blue and Blue Gray."; 
    leadInZero.style.cssText = "color: #9fafca;transition: all 2s ease-in;";
}
let blueYellow = () => {
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
    styleName.innerHTML = "Optimism: Royal Blue and Yellow."; 
    leadInZero.style.cssText = "color: #fcc729;transition: all 2s ease-in;";
}

let blueOrange = () => {
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
}

let blueGreenPurple = () => {
    htmlElement.style.cssText = "background-color:#4b3d8f;transition:all 2s ease-in; ";  //bground prim color group 1
    greetingElement.style.cssText = "color:#4b3d8f; transition:all 2s ease-in;";        //body text color group 1
    //Secondary color elements
    ulZero.style.cssText = "color: #37A987;transition: all 2s ease-in;"; // nav header element about me
    ulOne.style.cssText = "color: #37A987;transition: all 2s ease-in;"; //nav header element projects
    ulTwo.style.cssText = "color: #37A987;transition: all 2s ease-in;"; //nav header element work
    ulThree.style.cssText = "color: #37A987;transition: all 2s ease-in;"; //nav header element work
    miNombre.style.cssText = "color: #37A987;transition: all 2s ease-in;"; //nav header element work
    bigContainerZero.style.cssText = "background-color: #37A987;transition: all 2s ease-in;"; //nav header element work
    // third level colors, will use second 
    bannerZero.style.cssText = "border-bottom:#b7b1d2 3px double;transition: all 2s ease-in;";         // banner border bottom move to tiriary if needed 
    styleName.style.cssText = "color: #b7b1d2;transition: all 2s ease-in;";
    styleName.innerHTML = "Creativity: Blue-Violet, Green Purple."; 
    leadInZero.style.cssText = "color: #b7b1d2;transition: all 2s ease-in;";
}

let blueBrown = () => {
    htmlElement.style.cssText = "background-color:#455073;transition:all 2s ease-in; ";  //bground prim color group 1
    greetingElement.style.cssText = "color:#455073; transition:all 2s ease-in;";        //body text color group 1
    //Secondary color elements
    ulZero.style.cssText = "color: #c0904d;transition: all 2s ease-in;"; // nav header element about me
    ulOne.style.cssText = "color: #c0904d;transition: all 2s ease-in;"; //nav header element projects
    ulTwo.style.cssText = "color: #c0904d;transition: all 2s ease-in;"; //nav header element work
    ulThree.style.cssText = "color: #c0904d;transition: all 2s ease-in;"; //nav header element work
    miNombre.style.cssText = "color: #c0904d;transition: all 2s ease-in;"; //nav header element work
    bigContainerZero.style.cssText = "background-color: #c0904d;transition: all 2s ease-in;"; //nav header element work
    // third level colors, will use second 
    bannerZero.style.cssText = "border-bottom:#6077c0 3px double;transition: all 2s ease-in;";         // banner border bottom move to tiriary if needed 
    styleName.style.cssText = "color: #6077c0;transition: all 2s ease-in;";
    styleName.innerHTML = "Compentent/Wholesome: Blue and Brown."; 
    leadInZero.style.cssText = "color: #6077c0;transition: all 2s ease-in;";
};

let brownTanOrange = () => {
    htmlElement.style.cssText = "background-color:#4d3277;transition:all 2s ease-in; ";  //bground prim color group 1
    greetingElement.style.cssText = "color:#4d3277; transition:all 2s ease-in;";        //body text color group 1
    //Secondary color elements
    ulZero.style.cssText = "color: #ebd999;transition: all 2s ease-in;"; // nav header element about me
    ulOne.style.cssText = "color: #ebd999;transition: all 2s ease-in;"; //nav header element projects
    ulTwo.style.cssText = "color: #ebd999;transition: all 2s ease-in;"; //nav header element work
    ulThree.style.cssText = "color: #ebd999;transition: all 2s ease-in;"; //nav header element work
    miNombre.style.cssText = "color: #ebd999;transition: all 2s ease-in;"; //nav header element work
    bigContainerZero.style.cssText = "background-color: #ebd999;transition: all 2s ease-in;"; //nav header element work
    // third level colors, will use second 
    bannerZero.style.cssText = "border-bottom:#cd7700 3px double;transition: all 2s ease-in;";         // banner border bottom move to tiriary if needed 
    styleName.style.cssText = "color: #cd7700;transition: all 2s ease-in;";
    styleName.innerHTML = "Trendy: Brown, Tan, and Orange."; 
    leadInZero.style.cssText = "color: #cd7700;transition: all 2s ease-in;";
};


let greenGrey = () => {
    htmlElement.style.cssText = "background-color:#3d4c41;transition:all 2s ease-in; ";  //bground prim color group 1
    greetingElement.style.cssText = "color:#3d4c41; transition:all 2s ease-in;";        //body text color group 1
    //Secondary color elements
    ulZero.style.cssText = "color: #999999;transition: all 2s ease-in;"; // nav header element about me
    ulOne.style.cssText = "color: #999999;transition: all 2s ease-in;"; //nav header element projects
    ulTwo.style.cssText = "color: #999999;transition: all 2s ease-in;"; //nav header element work
    ulThree.style.cssText = "color: #999999;transition: all 2s ease-in;"; //nav header element work
    miNombre.style.cssText = "color: #999999;transition: all 2s ease-in;"; //nav header element work
    bigContainerZero.style.cssText = "background-color: #999999;transition: all 2s ease-in;"; //nav header element work
    // third level colors, will use second 
    bannerZero.style.cssText = "border-bottom:#e6e6e6 3px double;transition: all 2s ease-in;";         // banner border bottom move to tiriary if needed 
    styleName.style.cssText = "color: #e6e6e6;transition: all 2s ease-in;";
    styleName.innerHTML = "Earnest: Green and Grey."; 
    leadInZero.style.cssText = "color: #e6e6e6;transition: all 2s ease-in;";
};

let grayGrayGray = () => {
    htmlElement.style.cssText = "background-color:#ebebde;transition:all 2s ease-in; ";  //bground prim color group 1
    greetingElement.style.cssText = "color:#ebebde; transition:all 2s ease-in;";        //body text color group 1
    //Secondary color elements
    ulZero.style.cssText = "color: #777764;transition: all 2s ease-in;"; // nav header element about me
    ulOne.style.cssText = "color: #777764;transition: all 2s ease-in;"; //nav header element projects
    ulTwo.style.cssText = "color: #777764;transition: all 2s ease-in;"; //nav header element work
    ulThree.style.cssText = "color: #777764;transition: all 2s ease-in;"; //nav header element work
    miNombre.style.cssText = "color: #777764;transition: all 2s ease-in;"; //nav header element work
    bigContainerZero.style.cssText = "background-color: #777764;transition: all 2s ease-in;"; //nav header element work
    // third level colors, will use second 
    bannerZero.style.cssText = "border-bottom:#4f4747 3px double;transition: all 2s ease-in;";         // banner border bottom move to tiriary if needed 
    styleName.style.cssText = "color: #4f4747;transition: all 2s ease-in;";
    styleName.innerHTML = "Dignified: Soft Gray, Green Gray, Deep Gray."; 
    leadInZero.style.cssText = "color: #4f4747;transition: all 2s ease-in;";
};

let brownYellowGreen = () => {
    htmlElement.style.cssText = "background-color:#388d5d;transition:all 2s ease-in; ";  //bground prim color group 1
    greetingElement.style.cssText = "color:#388d5d; transition:all 2s ease-in;";        //body text color group 1
    //Secondary color elements
    ulZero.style.cssText = "color: #d6a34a;transition: all 2s ease-in;"; // nav header element about me
    ulOne.style.cssText = "color: #d6a34a;transition: all 2s ease-in;"; //nav header element projects
    ulTwo.style.cssText = "color: #d6a34a;transition: all 2s ease-in;"; //nav header element work
    ulThree.style.cssText = "color: #d6a34a;transition: all 2s ease-in;"; //nav header element work
    miNombre.style.cssText = "color: #d6a34a;transition: all 2s ease-in;"; //nav header element work
    bigContainerZero.style.cssText = "background-color: #d6a34a;transition: all 2s ease-in;"; //nav header element work
    // third level colors, will use second 
    bannerZero.style.cssText = "border-bottom:#5a431b 3px double;transition: all 2s ease-in;";         // banner border bottom move to tiriary if needed 
    styleName.style.cssText = "color: #5a431b;transition: all 2s ease-in;";
    styleName.innerHTML = "Genuine: Browm, Mustard Yellow, Green."; 
    leadInZero.style.cssText = "color: #5a431b;transition: all 2s ease-in;";
};

let grayBlueYellow = () => {
    htmlElement.style.cssText = "background-color:#404040;transition:all 2s ease-in; ";  //bground prim color group 1
    greetingElement.style.cssText = "color:#404040; transition:all 2s ease-in;";        //body text color group 1
    //Secondary color elements
    ulZero.style.cssText = "color: #a0b6f7;transition: all 2s ease-in;"; // nav header element about me
    ulOne.style.cssText = "color: #a0b6f7;transition: all 2s ease-in;"; //nav header element projects
    ulTwo.style.cssText = "color: #a0b6f7;transition: all 2s ease-in;"; //nav header element work
    ulThree.style.cssText = "color: #a0b6f7;transition: all 2s ease-in;"; //nav header element work
    miNombre.style.cssText = "color: #a0b6f7;transition: all 2s ease-in;"; //nav header element work
    bigContainerZero.style.cssText = "background-color: #a0b6f7;transition: all 2s ease-in;"; //nav header element work
    // third level colors, will use second 
    bannerZero.style.cssText = "border-bottom:#f2f261 3px double;transition: all 2s ease-in;";         // banner border bottom move to tiriary if needed 
    styleName.style.cssText = "color: #f2f261;transition: all 2s ease-in;";
    styleName.innerHTML = "Responsible/Modern: Gray, Baby Blue, Canary Yellow."; 
    leadInZero.style.cssText = "color: #f2f261;transition: all 2s ease-in;";
};


let store = 1;
let colorChange = function(event) {
    let temp = Math.floor(Math.random() * 10);
    while (temp == store) {
        temp = Math.floor(Math.random() * 10);
        return temp;    
    }

    console.log(temp);
    if (temp == 0) {
        blueGray();
        store = 0;
    } else if (temp == 1) {
        blueYellow();
        store = 1;
    } else if (temp == 2) {
        blueOrange();
        store = 2; 
    } else if (temp == 3) {
        blueGreenPurple();
        store = 3;
    } else if (temp == 4) {
        blueBrown();
        store = 4;
    } else if (temp == 5) {
        brownTanOrange();
        store = 5;
    } else if (temp == 6) {
        greenGray();
        store = 6;
    } else if (temp == 7) {
        grayGrayGray();
        store = 7;
    } else if (temp == 8) {
        brownYellowGreen();
        store = 8;
    } else {
        grayBlueYellow();
        store = 9;
    };
};

button.onmousedown = colorChange;
