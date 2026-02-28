let friends = ["John", "Paul", "Sean"];
friends.push("Howard");
console.log(friends.length);
console.log(friends[0]);friends.unshift("May")
friends.pop()
friends.splice(1, 1, "Ringo");
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}