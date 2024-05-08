// Напишите функцию nodeChildCount которая получает на вход объект типа Node и возвращает число всех вложенных нодов,
// аргумент deep указывать глубину подсчета если не указан то бесконечно.
// Пример:
// const div = document.createElement('div')
// const p = document.createElement('p')
// const span = document.createElement('span')
// p.appendChild(span)
// div.appendChild(p)

// nodeChildCount(div) // 2
// nodeChildCount(div, 1) // 1
// nodeChildCount(div, 2) // 2

function nodeChildCount(node, deep = Infinity) {
    let count = 0;

    function countChildren(node, depth) {
        if (depth === 0 || !node.childNodes || node.childNodes.length === 0) {
            return;
        }
        
        count += node.childNodes.length;
        
        for (const childNode of node.childNodes) {
            countChildren(childNode, depth - 1);
        }
    }

    countChildren(node, deep);
    return count;
}

const div = document.createElement('div');
const p = document.createElement('p');
const span = document.createElement('span');
p.appendChild(span);
div.appendChild(p);

console.log(nodeChildCount(div));  // Виведе 2
console.log(nodeChildCount(div, 1));  // Виведе 1
console.log(nodeChildCount(div, 2));  // Виведе 2
