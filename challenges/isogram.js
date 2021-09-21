function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
}

function isIsogram(str) {
    const lower = [...str.toLowerCase()];
    for (let letter of lower) {
      const arrayOfElements = lower.filter(item => item === letter);
      if (arrayOfElements.length > 1) {
        return false;
      }
    }
    return true;
}
