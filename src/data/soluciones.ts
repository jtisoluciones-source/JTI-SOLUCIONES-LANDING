export const operationalProblems = [
  {
    title: "Fallas de sincronización",
    iconPath:
      "M12 1.75a8.25 8.25 0 1 0 8.25 8.25A8.26 8.26 0 0 0 12 1.75Zm0 3a5.25 5.25 0 1 1-5.25 5.25A5.26 5.26 0 0 1 12 4.75Zm-.75 3.5h1.5v4.5h-1.5Zm0 6h1.5v1.5h-1.5Z",
    iconColors: "bg-[#f3e8ff] text-[#7c5ef2]",
    symptoms: [
      "Discrepancia de datos entre sucursales.",
      "Pérdida intermitente de registros críticos.",
    ],
    solution:
      "Implementación de protocolos de redundancia y bases de datos distribuidas con validación de integridad en tiempo real.",
  },
  {
    title: "Incidencias de asistencia",
    iconPath:
      "M12 4a7 7 0 0 1 7 7v2.23l1.8 3.6A1 1 0 0 1 19.86 18H4.14a1 1 0 0 1-.94-1.17L5 13.23V11a7 7 0 0 1 7-7Zm0 18a2.5 2.5 0 0 1-2.45-2h4.9A2.5 2.5 0 0 1 12 22Zm-5.24-9.3V11a5.24 5.24 0 1 1 10.48 0v1.7L17.4 15H6.6Z",
    iconColors: "bg-[#ffe5eb] text-[#ff5d7a]",
    symptoms: [
      "Reportes manuales inconsistentes.",
      "Tiempo de respuesta de soporte técnico excedido.",
    ],
    solution:
      "Plataforma de monitoreo automatizado con sistema de tickets inteligente y escalamiento automático basado en SLAs.",
  },
  {
    title: "Lentitud de servidores",
    iconPath:
      "M13.5 3.25a1 1 0 0 0-2 0V5.3A7 7 0 0 0 5.3 11.5H3.25a1 1 0 0 0 0 2H5.3a7 7 0 0 0 6.2 6.2v2.05a1 1 0 1 0 2 0V19.9a7 7 0 0 0 6.2-6.2h2.05a1 1 0 1 0 0-2h-2.05A7 7 0 0 0 13.5 5.3Zm-1.5 5.25A2.75 2.75 0 1 1 14.75 11.25 2.75 2.75 0 0 1 12 8.5Z",
    iconColors: "bg-[#f0ebff] text-[#8168ff]",
    symptoms: [
      "Latencia excesiva en carga de aplicaciones.",
      "Cuellos de botella en el procesamiento de datos.",
    ],
    solution:
      "Optimización de arquitectura Cloud y On-premise, balanceo de carga avanzado y tuning de base de datos para alto rendimiento.",
  },
  {
    title: "Errores de red/configuración",
    iconPath:
      "M11.5 2.75a1 1 0 0 1 1 1v1.42c3.56.56 6.32 3.62 6.32 7.33a7.5 7.5 0 0 1-15 0c0-3.71 2.76-6.77 6.32-7.33V3.75a1 1 0 0 1 1-1Zm.5 5.75h-1v4.5h4.5v-1H12V8.5Zm-7.75 6.5a1 1 0 0 1 1-1h1.2a7.2 7.2 0 0 1 4.05-6.07V6.25H6.75a1 1 0 0 1-1-1V4.25a1 1 0 0 1 1-1h10.5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-3.75v1.18A7.2 7.2 0 0 1 18.75 15h1.2a1 1 0 0 1 0 2h-1.2a7.22 7.22 0 0 1-14.5 0H3.75a1 1 0 0 1-1-1Z",
    iconColors: "bg-[#f7e8ff] text-[#bb63ff]",
    symptoms: [
      "Desconexiones imprevistas de estaciones de trabajo.",
      "Conflictos de IPs y vulnerabilidades de seguridad expuestas.",
    ],
    solution:
      "Reestructuración de topología de red, segmentación VLAN y despliegue de firewalls de última generación para tráfico seguro.",
  },
];