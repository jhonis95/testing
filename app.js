function isTouching(a,b){
    const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();
    return!(
        aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
    );
}
const avatar=document.querySelector('#player')
window.addEventListener('keyup',function(e){//ceaching the key that was press
    if(e.key==='ArrowDown'||e.key==='Down'){
        const currTop=extractPos(avatar.style.top);
        avatar.style.top=`${currTop+50}px`//moving the to Down
    }else if(e.key==='ArrowUp'||e.key==='Up'){
        const currTop=extractPos(avatar.style.top);
        avatar.style.top=`${currTop-50}px`//moving the to up
    }
    else if(e.key==='ArrowRight'||e.key==='Right'){
        const currLeft=extractPos(avatar.style.left);
        avatar.style.left=`${currLeft+50}px`//moving the to Right
        avatar.style.transform='scale(1,1)';//flipping the image
    }else if(e.key==='ArrowLeft'||e.key==='Left'){
        const currLeft=extractPos(avatar.style.left);
        avatar.style.left=`${currLeft-50}px`//moving the to Left
        avatar.style.transform='scale(-1,1)';//flipping the image
    }
})

const extractPos=(pos)=>{//to update the position
    if(!pos)return 100;//in case the pos is undefine we can get set that as 0
    return parseInt(pos.slice(0,-2))// eleminate the px of the string and turn the string to a number
};