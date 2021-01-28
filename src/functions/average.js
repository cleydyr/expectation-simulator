export default function average(data, simulations) {
    return data.reduce((acc, cur, i) => {
        return acc + i*cur/simulations;
    }, 0);
}