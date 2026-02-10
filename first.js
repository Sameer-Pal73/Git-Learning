// If I put const age =20; in original code then I do some changes in master branch where also I put const age=20; and then I make a new branch where I update const age=90;.
// So age does not change in master but it updated in new branch and if there is update on only one branch then git resolve automatically put latest code.
// If there is changes in both the branches then it will give merge conflict which I have to solve it manually.

const button="Added a Button";
console.log(button);