// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст 
// заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const listItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${listItems.length}`)

listItems.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.children.length}`)
})



// Не звертайте уваги на те, що нижче, будь-ласка, я не дочитала домашку до кінця, тільки завдання, а тепер 
// кайнда хочу для себе зберегти написане нижче

// const titles = [...document.querySelectorAll('.item > h2')].map(el => el.textContent);
// const elementsList = [...document.querySelectorAll('.item > ul')].map(el => el.children.length);

// const objFromArray = titles.reduce((obj, item, i) => {
//     obj[item] = elementsList[i];
    
//     return obj;
//   }, {});

//   console.log(objFromArray);