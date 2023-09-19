const handleFromButton = () => {
    const fromList = document.getElementById('fromList');
    const fromListStyle = fromList.style.display;
    if(fromListStyle != 'block'){
        fromList.classList.remove('hidden')
        console.log('block hoyca');
    }
    else{
        fromListStyle == 'flex'
    }
}