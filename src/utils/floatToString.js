export function floatToString(value) {
  const stringValue = value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return stringValue;
};
