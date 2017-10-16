
//card are hidden
document.getElementById('output').style.visibility='hidden';
document.getElementById('summation').style.visibility='hidden';

document.getElementById('eurInput').addEventListener('input', function (e) {
    //Cards are visible 
    document.getElementById('output').style.visibility='visible';

    let euro = e.target.value;

    document.getElementById('usdOutput').innerHTML = euro * 1.179507 + ' $';
    document.getElementById('jpyOutput').innerHTML = euro * 129.394810 + ' ¥';
    document.getElementById('gbpOutput').innerHTML = euro * 0.909391 + ' £';
    document.getElementById('czkOutput').innerHTML = euro * 26.115590 + ' Kč';
    document.getElementById('hufOutput').innerHTML = euro * 304.438646 + ' Ft';

});



function sums() {
    let arrayCurr = [];
    let correct = true;

    //usdToEur();
    let usdEur = document.getElementById('sumUsd').value;
    if(usdEur < 0){
        alert("Len kladne hodnoty!")
        correct = false; 
    }
    usdEur *= 0.8348;
    arrayCurr.push(usdEur);

    //jpyToEur();
    let jpyEur = document.getElementById('sumJpy').value;
    
    if(jpyEur < 0){
        alert("Len kladne hodnoty!")
        correct = false;

    }
    jpyEur *= 0.00764;
    arrayCurr.push(jpyEur);

    //gbpToEur();
    let gbpEur = document.getElementById('sumGbp').value;
    
    if(gbpEur < 0){
        alert("Len kladne hodnoty!")
        correct = false;

    }
    gbpEur *= 1.079;
    arrayCurr.push(gbpEur);

    //czkToEur();

    let czkEur = document.getElementById('sumCzk').value;
    
    if(czkEur < 0){
        alert("Len kladne hodnoty!")
        correct = false;

    }
    czkEur *= 0.0383;
    arrayCurr.push(czkEur);

    //hufToEur();

    let hufEur = document.getElementById('sumHuf').value;
    if(hufEur < 0){
        alert("Len kladne hodnoty!")
        correct = false;

    }
    hufEur *= 0.00328;
    arrayCurr.push(hufEur);

    if(correct === true) {
        document.getElementById('summation').style.visibility = 'visible';
        let sum = arrayCurr.reduce((a, b) => a + b);
        document.getElementById('sumOut').innerHTML = sum.toFixed(2) + ' €';
    }
}

/*function usdToEur() {

}
function jpyToEur() {


}
function gbpToEur() {


}
function czkToEur() {

}
function hufToEur() {


}
*/
    
