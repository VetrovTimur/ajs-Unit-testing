export default function calculationLife(obj) {
    const hp = obj.health
    if (hp > 50) {
        // Зеленый 
        return 'healthy';
    } else if (hp == 50 || hp >= 15) {
        // Желтый
        return 'critical';
    } else if (hp > 0) {
        // Красный
        return 'wounded';
    }
    return 'dead';
}