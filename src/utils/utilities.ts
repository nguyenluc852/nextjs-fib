class Utilities {
    static isEmptyObject = (obj: Object) => {
        return JSON.stringify(obj) === '{}'
    }
}

export default Utilities