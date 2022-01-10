let nombres = [10, 45, 75, 10, 24, 45];
// let monSet = new Set(nombres);
// console.log(monSet); //renvoi 10, 45, 75, 24 car ne renvoie pas les doublons

let monSet = new Set();
monSet.add('70')
monSet.add(87)
monSet.add(12)
//monSet.add(['mon', 'tableau', 'test'])
monSet.add(87)//non ajouté car deja existant
monSet.delete(87)
console.log(monSet);
console.log(monSet.size);

