function accum(s) {
    s = s.toUpperCase();
    let result = s[0];
	for (let i = 1; i < s.length; i++) {
        result += `-${s[i]}${s[i].toLowerCase().repeat(i)}`
    }
    return result;
}
console.log(accum("zpglnRxqenU"));