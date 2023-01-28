const translations: Record<string, string> = {
  altitude: "Altitud",
  name: "Nombre",
  created_at: "Creado el",
  done_at: "Realizado el",
};

const t = (key: string) => {
  return translations[key] || key;
};

export default t;
