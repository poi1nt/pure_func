export default function healthStatus(character) {
    let health = character.health;

    if (health >= 50) {
        return "healthy"
    }
    else if (health < 15) {
        return "critical"
    }
    else {
        return "wounded"
    }
}