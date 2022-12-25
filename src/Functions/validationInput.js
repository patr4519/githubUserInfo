export function validationInput(string) {
    function validation(str) {
        let pattern = /[A-Za-z0-9]+/g;
        return str.match(pattern)[0] === str;
    }

    try {
        let validArr = [];
        string = string.split(', ');
        string.map(item => {
            return validArr.push(validation(item))
        });
        if (validArr.includes(false)) return false;
        else return true;
    } catch (err) {
        return false;
    }
}