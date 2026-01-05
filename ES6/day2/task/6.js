

function* tipsGenerator() {
    const tips = [
        "be good",
        "be happy",
        "go forword",
        "stay hungry",
        1,
        2,
        3,
        4,
        5,
        6
    ]

    let index = 10;
    while(index--){
        for (let tip of tips) {
            yield tip;
        }
    }
}

const tipGen = tipsGenerator();

document.getElementById("showTips").addEventListener("click", () => {
    for (let tip of tipGen) {
        console.log(tip);
    }   
});

document.getElementById("showTipEvery3Seconds").addEventListener("click", () => {
    setInterval(() => {
        const nextTip = tipGen.next();
        if (!nextTip.done) {
            console.log(nextTip.value);
        }
    }, 3000);
});

