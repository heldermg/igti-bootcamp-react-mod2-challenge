 const percentOptions = {
   style: 'percent',
   minimumFractionDigits: 2,
 }

 export const numberFormat = new Intl.NumberFormat('pt-BR')
 export const percentNumberFormat = Intl.NumberFormat('pt-BR', percentOptions)