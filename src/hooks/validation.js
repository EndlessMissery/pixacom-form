export const validateTitle = (value, maxLength = 80) => {
    if (!value || value.trim().length === 0) return 'Nadpis nesmí být prázdný';
    if (value.length < 5) return 'Nadpis musí mít alespoň 5 znaků';
    if (value.length > maxLength) return `Nadpis může mít maximálně ${maxLength} znaků`;
    return true;
  };
  
  export const validateBody = (value, minLength = 50, maxLength = 1000) => {
    const stripped = value.replace(/<(.|\n)*?>/g, '').trim();
    const length = stripped.length;
    if (length === 0) return 'Text nesmí být prázdný';
    if (length < minLength) return `Text musí mít alespoň ${minLength} znaků`;
    if (length > maxLength) return `Text může mít maximálně ${maxLength} znaků`;
    return true;
  };
  