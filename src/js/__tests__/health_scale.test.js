import healthStatus from "../health_scale"

test.each([
    [0, "critical"],
    [10, "critical"],
    [35, "wounded"],
    [50, "healthy"],
    [75, "healthy"],
    [100, "healthy"],
])("При здоровье %i",
(health, expected) => {
    const input = {name: 'Маг', health};
    const received = healthStatus(input);
    expect(received).toBe(expected);
});