const server = Bun.serve({
    port: 1337,
    routes: {
        "/retornaok": new Response("Ok"),
        "/retornadunha": new Response("Dunhanada"),
        "/pghtml": Bun.file("public/index.html")
    },

    fetch(req) {
        return new Response("404")    
    }
})
console.log(`Servervidor rodando em ${server.url}`);
