const onMyBirthday = (isKayoSick) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isKayoSick) {
                resolve(5);
            } else {
                reject(0);
            }
       }, 2000)
    });
};

console.time("Timer");
onMyBirthday(false).then((result) => {
    console.timeLog("Timer");
    console.log(`I have ${result} cakes`);
});