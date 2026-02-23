let pronoun = ["the", "our", "my", "your", "his", "her", "it", "its", "our"];
let adj = ["fantastic", "wonderful", "awesome", "amazing", "incredible", "spectacular", "fabulous"];
let noun = ["dog", "driver", "phone", "robot", "book", "motorcycle", "city", "car", "house", "flower"];
let dominio = [".com", ".net", ".org", ".es"];

for (let a = 0; a < pronoun.length; a++) {
  for (let h = 0; h < adj.length; h++) {
    for (let n = 0; n < noun.length; n++) {
      for (let c = 0; c < dominio.length; c++) {
        console.log(pronoun[a] + adj[h] + noun[n] + dominio[c]);
      }
    }
  }
}
