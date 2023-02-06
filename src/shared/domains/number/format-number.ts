const formatter = new Intl.NumberFormat('fa-IR',{notation: 'standard'});

export function formatNumber(number: number) {
    return formatter.format(number);
  }