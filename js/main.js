const screenWidth = window.screen.width
const screenHeight = window.screen.height
let firstBigBlock = [].slice.call(document.getElementsByClassName('firstBigBlock'));
let mostWhidthBlocksContainer = [].slice.call(document.getElementsByClassName('mostWhidthBlocksContainer'));
let blockText = [].slice.call(document.getElementsByClassName('blockText'));

if(screenHeight>screenWidth){
    firstBigBlock.forEach(element => {
        element.style.setProperty('--mainWidth', screenHeight/100*80 +'px');
        element.style.setProperty('--mainHeight', screenHeight/100*80 +'px');
    });
    mostWhidthBlocksContainer.forEach(element => {
        element.style.setProperty('--mainWidth', screenHeight/100*80 +'px');
        element.style.setProperty('--mainHeight', screenHeight/100*80 +'px');
    });

}else{
    firstBigBlock.forEach(element => {
        element.style.setProperty('--mainWidth', screenHeight/100*49 +'px');
        element.style.setProperty('--mainHeight', screenHeight/100*49 +'px');
    });
    mostWhidthBlocksContainer.forEach(element => {
        element.style.setProperty('--mainWidth', screenHeight/100*49 +'px');
        element.style.setProperty('--mainHeight', screenHeight/100*49 +'px');
    });
}




blockText.forEach(element => {
    let rememberText = element.innerHTML;
    element.addEventListener('mouseover',()=>{
        element.textContent = `Read More`
    })
    element.addEventListener('mouseout',()=>{
        element.innerHTML = rememberText
    })
});

//Projects News
let tapFirstProj = document.getElementById('Tap');
let aside = document.getElementById('aside');
//let projectsBoxes = document.getElementById('projectsBoxes');
tapFirstProj.addEventListener('click',()=>{
    projectsBoxes.style.left = '130%';
    aside.style.height = 'fit-content';
    setTimeout(() => {
        if(localStorage.language == 'En'){  
        projectsBoxes.innerHTML = `
        <div id="tapText" style="width: 100%; height: 100%; color: white;">
            <h2 style="text-align: center;">Tap</h2>
            <div style="display: flex; justify-content: space-around;">            
            <p style="width: 30%;">Features:
                1. Free game: many skins and bonuses
                2. Simple ball control: tap the screen and fly the ball with one hand
                3. Catchy graphics: neon blocks painted in different colors
                4. Offline mode: there are absolutely no ads in offline mode
            </p>
                <img src="./assets/Games/Tap1.jpg" alt="">
            <p style="width: 30%;">
            How to play:
                1. Choose between casual, endless and level play
                2. Match red balls that will give you an extra life
                3. Find the best moment to hit
                4. Try to get better results and get more achievements
            </p>
            </div>
            
            <p style="text-align: center; align-self: center;">Tap is an addicting marksmanship game! Play it now, relax your brain and have a lot of fun passing the company!
            You need to hit the maximum number of balls in order to achieve the highest result and go to the next level.</p>
            <div style = "display: flex; justify-content: space-around;">
                <img src="./assets/Games/tapCompany.png" style=" min-height: 500px;" alt="">
                <img src="./assets/Games/tapSimple.png" style=" min-height: 500px;" alt="">
                <img src="./assets/Games/tapEndless.png" style=" min-height: 500px;" alt="">
            </div>

            <div style="display: flex; justify-content: space-around; width: 100%; height: 300px;">
            <p>In this fun addicting game you can unlock different balls and themes of different levels (legendary ones have their own abilities)! So if you have a lot of free time and you are bored, start the game.

                Just download the game and compete with your friends! Find out which one of you is better!
                And if you encounter any problems, please write to us at [gameweighteight@gmail.com] and we will help you.
            </p>
            </div>

            <img src="./assets/News/2.jpg" alt="">

            `;
        }
        projectsBoxes.style.background = '#efefef21';
        projectsBoxes.style.left = '0';
    }, 1000);
})






