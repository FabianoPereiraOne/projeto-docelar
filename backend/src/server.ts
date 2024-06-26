import swagger, { FastifyDynamicSwaggerOptions } from "@fastify/swagger"
import swaggerUI, { FastifySwaggerUiOptions } from "@fastify/swagger-ui"
import fastify, { FastifyInstance } from "fastify"
import { SwaggerDocConfig } from "./docs/swagger"
import { SwaggerUIDocConfig } from "./docs/swaggerUI"
import RoutesInitController from "./routes"

const server: FastifyInstance = fastify()
RoutesInitController(server)

server.register(
  swagger,
  () => SwaggerDocConfig() as FastifyDynamicSwaggerOptions
)
server.register(
  swaggerUI,
  () => SwaggerUIDocConfig() as FastifySwaggerUiOptions
)

server.listen({ port: 8080 }, err => {
  server.swagger()

  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log("Server is running...")
})
