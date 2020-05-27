export default function removeSpaceString(string) {
    const stringProcessed = string.replace(/ /g, function (x) {
        return '_';
    });
    return stringProcessed;
}
