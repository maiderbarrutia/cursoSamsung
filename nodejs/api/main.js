//BASE DE DATOS MONGO
// Importar el cliente de MongoDB
const MongoClient = require("mongodb").MongoClient;
// Especificar la URL de conexión por defecto al servidor local
const url = "mongodb://localhost:27017";
// Nombre de la base de datos a la que conectarse
const dbName = "people-list";
// Crear una instancia del cliente de MongoDB
const client = new MongoClient(url, { useNewUrlParser: true });

//CREACIÓN DE SERVICIOS
// Requerir el interfaz http
const http = require("http");
// Definir el puerto a utilizar
const port = 3000;

//Querystring
const querystring = require("querystring");

// Definir documento
const document = {
  name: "Julian",
  phone: "111-222-3333",
};

//MONGO: Insertar documentos
const insertDocument = function (db, document, callback) {
  // Obtener la referencia a la colección
  const collection = db.collection(dbName);
  // Insertar documento
  collection.insertOne(document, function (err, result) {
    if (err) {
      console.log("Error insertando documento: ", err);
    }
    // Llamada a la función callback con el resultado final
    callback(err, result);
  });
};
//MONGO: Encontrar documentos
const findDocuments = function (db, callback) {
  // Obtener la referencia a la colección
  const collection = db.collection(dbName);
  // Recuperar documentos
  collection.find({}).toArray(function (err, docs) {
    if (err) {
      console.log("Error recuperando documentos: ", err);
    }
    callback(err, docs);
  });
};

// MONGO: Conectar el cliente al servidor
client.connect(function (err) {
  if (err) {
    console.log("Error al conectar al servidor: ", err);
    return;
  }
  console.log("Conectado con éxito al servidor");
  const db = client.db(dbName);

  // Llamar a la función para insertar,encontrar,actualizar y borrar
  insertDocument(db, document, function (err, result) {
    if (!err) {
      console.log("Resultado de la inserción: ", result);
    }
    findDocuments(db, function (err, result) {
      if (!err) {
        console.log("Documentos recuperados: ", result);
      }
      client.close();
    });
  });
});

// SERVICIOS: Crear el servidor y definir la respuesta que se le da a las peticiones
const server = http.createServer((request, response) => {
  // Extrear el contenido de la petición
  const { headers, method, url } = request;
  console.log("headers: ", headers);
  console.log("method: ", method);
  console.log("url: ", url);
  let body = [];
  request
    .on("error", (err) => {
      console.error(err);
    })
    .on("data", (chunk) => {
      // El cuerpo de la petición puede venir en partes, aquí se
      concatenan;
      body.push(chunk);
    })
    .on("end", () => {
      // El cuerpo de la petición está completo
      body = Buffer.concat(body).toString();
      console.log("body: ", body);

      //Código de estado HTTP que se devuelve
      response.statusCode = 200;
      // Encabezados de la respuesta, texto plano
      response.setHeader("Content-Type", "text/plain");
      // Contenido de la respuesta
      response.end("Hola Mundo");
    });
});

// Ejecutar el servicio para que permanezca a la espera de peticiones
server.listen(port, () => {
  console.log("Servidor ejecutándose...");
  console.log(`Servidor funcionando en http://localhost:${port}/`);
});
