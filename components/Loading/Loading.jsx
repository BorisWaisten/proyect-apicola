// components/Loading/Loading.jsx
export default function Loading() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-secondary">
        <div className="flex flex-col items-center">
          <div className="loader rounded-full border-t-4 border-primary w-16 h-16 mb-4 animate-spin"></div>
          <h1 className="text-terciary text-3xl font-title">Cargando...</h1>
        </div>
      </div>
    );
  }
  