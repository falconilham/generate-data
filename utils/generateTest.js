function generateData(arr, i) {
    // change first index into 'baris[index + 1]'
    const standarizeFirstIndex = arr.map((item, j) => j === 0 ? `Baris${i + 1}` : item)
    // check if current value is equal with previous value
    const filterArr = standarizeFirstIndex.map((item, j) => item === standarizeFirstIndex[j - 1] ? 'before' : item)
    return filterArr
}

export default generateData