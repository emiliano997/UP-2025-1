// Clases
class Usuario {
  username;
  password;
  role;

  constructor(username, password, role) {
    this.username = username;
    this.password = password;
    this.role = role;
  }

  // Métodos
  login() {}
}

// Crear un objeto basado en la clase
// Instanciar -> Crear un objeto
const usuario1 = new Usuario("emiperez", "1234", "user");
console.log(usuario1);
