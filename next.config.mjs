/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { unoptimized: true },
    async headers() {
        return [
          {
            // matching all API routes
            source: "/api/:path*",  // Coincide con todas las rutas de API
            headers: [
              { key: "Access-Control-Allow-Credentials", value: "true" }, // Permitir credenciales
              { key: "Access-Control-Allow-Origin", value: "*" }, // Permitir todas las orígenes (mejor especificar un dominio en producción)
              { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" }, // Métodos permitidos
              { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" }, // Encabezados permitidos
            ]
          }
        ];
    }
};

export default nextConfig;
