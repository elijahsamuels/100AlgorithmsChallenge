export function addBorder(picture: string[]): string[] {
	let middle = picture.map(p => "*" + p.concat("*"));
	let topAndBottom = "*".repeat(middle[0].length);
	return new Array(topAndBottom, ...middle, topAndBottom)
	
}

console.log(addBorder(["abc", "ded"]));
console.log(addBorder(["abcde", "dedfef"]));