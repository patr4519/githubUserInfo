export function putUsers() {
    let arr = ['paul', 'gregory', 'albert', 'maria', 'jo', 'thomas', 'howard', 'martin', 'alfred', 'todd', 'kevin', 'peter', 'jesus', 'david', 'holly', 'bob', 'bobby', 'vincent', 'lisa', 'alice', 'mark', 'anna', 'alex', 'iliakan', 'patr4519', 'ilia', 'dmitry', 'max', 'maxim', 'demid', 'timur', 'darya', 'miron', 'pavel', 'igor', 'andrey', 'mikhail'];

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