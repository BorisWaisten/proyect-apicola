// components/NotFound/NotFound.jsx
import { useRouter } from 'next/router';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-secondary text-center">
      <h1 className="text-6xl font-title text-terciary mb-4">404</h1>
      <h2 className="text-3xl font-body text-terciary mb-6">Página no encontrada</h2>
      <p className="text-lg font-body text-terciary mb-8">
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <button
        onClick={() => router.push('/')}
        className="px-6 py-2 bg-primary text-white rounded-full font-body text-lg hover:bg-terciary transition-colors"
      >
        Volver al Home
      </button>
    </div>
  );
}
