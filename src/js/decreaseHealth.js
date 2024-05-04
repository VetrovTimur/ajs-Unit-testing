export default function sort(pers) {
    return pers.sort((a, b) => b.health - a.health);
}