function areAnagrams(str1, str2) {
    str1 = str1.trim();
    str2 = str2.trim();

    str1 = [...str1].sort().toString();
    str2 = [...str2].sort().toString();

    return str1 === str2;
}

let res = areAnagrams('    race','care');
console.log(`${res ? 'they are anagrams' : 'they aren\'t anagrams'}`);