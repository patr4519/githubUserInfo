export function putUsers() {
    let arr = ['paul', 'gregory', 'erin', 'albert', 'maria', 'jo', 'thomas', 'howard', 'martin', 'alfred', 'todd', 'kevin', 'sarah', 'peter', 'jesus', 'david', 'holly', 'bob', 'bobby', 'vincent', 'lisa', 'alice', 'mark', 'anna', 'artiom', 'alex', 'iliakan', 'patr4519', 'ilia', 'dmitry', 'makar', 'evgenyi', 'max', 'maxim', 'demid', 'timur', 'darya', 'miron', 'pavel', 'vlad', 'igor', 'gleb', 'andrey', 'mikhail'];

    let str = '';

    let randomUsers = shuffle(arr);

    for (let i = 1; i < 9; i++) {
        str += `${randomUsers[i]}, `;
    }
    str += `${randomUsers[9]}`

    return str;

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}