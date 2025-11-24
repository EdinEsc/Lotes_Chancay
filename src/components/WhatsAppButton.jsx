import React from "react";

const WhatsAppButton = () => {
  const phone = "51999999999"; // 👉 Cambia por tu número con código de país
  const message = "¡Hola! Quisiera más información sobre sus terrenos.";

  const handleClick = () => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* 🔘 Luz pulsante */}
      <div className="absolute inset-0 w-16 h-16 rounded-full bg-green-500 opacity-75 animate-ping"></div>

      {/* 🟢 Botón principal */}
      <button
        onClick={handleClick}
        className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg transition-transform transform hover:scale-110"
      >
        {/* 🔔 Contador */}
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5 shadow-md">
          1
        </span>

        {/* 🔹 Icono de WhatsApp (SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M16.04 2.003c-7.732 0-14 6.268-14 14 0 2.471.647 4.871 1.873 7.001l-1.241 4.54 4.66-1.221A13.9 13.9 0 0 0 16.04 30c7.732 0 14-6.268 14-14s-6.268-13.997-14-13.997zm0 25.994a11.9 11.9 0 0 1-6.085-1.662l-.435-.257-2.763.723.738-2.699-.285-.444A11.91 11.91 0 0 1 4.04 16c0-6.617 5.383-12 12-12s12 5.383 12 12-5.383 12-12 12zm6.514-8.788c-.356-.179-2.103-1.037-2.429-1.155-.326-.119-.563-.178-.8.179s-.915 1.155-1.122 1.392-.414.268-.77.089-1.5-.553-2.86-1.764c-1.057-.944-1.77-2.111-1.977-2.467-.206-.356-.022-.548.155-.727.159-.157.356-.414.534-.621.179-.206.238-.356.357-.593.119-.238.06-.446-.03-.625-.089-.179-.8-1.923-1.096-2.636-.288-.692-.581-.598-.8-.609l-.683-.012c-.238 0-.625.089-.953.446s-1.25 1.22-1.25 2.975 1.278 3.45 1.456 3.688c.179.238 2.517 3.843 6.099 5.389.853.369 1.518.589 2.037.755.855.272 1.632.234 2.247.142.685-.102 2.103-.859 2.401-1.689.297-.83.297-1.542.208-1.69-.089-.148-.326-.237-.682-.416z" />
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppButton;
