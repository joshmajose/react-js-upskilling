function Menu() {
    const test = (n) => n;
    return (
        <div>
            text content
        </div>
    );
}


function SubMenu() {
    return (
        <div>
            text content 2
        </div>
    );
}



function ArrayMapExample() {
    const numbers = [65, 44, 12, 4];
    const arrayNew = numbers.map(
        (item) => <p>{item * 10}</p>
    )
    //create new array
    return arrayNew
}

function ArrayReduceExample() {
    const numberArray = [1, 2, 3]
    const numberNew = numberArray.reduce((total, currentItem) => {
        return total + (currentItem * 10)
    }
        , 0);

    return numberNew
}


function ArrayFilterExample(){
    const mark = [10,20,30,40,50]
    let passed = mark.filter(item => item > 20);
    passed = passed.map(
        (item) => <p>{item}</p>
    )
    return passed
}

export default Menu
export { SubMenu, ArrayMapExample, ArrayReduceExample, ArrayFilterExample }