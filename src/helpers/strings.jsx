export const percentToString = (value) =>`${Number(value).toFixed(2)} %`
  
export const callLatencyToString = (value)=>`${Number(value).toFixed(0)} ms`

export const indexLatencyToString = (value) => `${(Number(value) / 1000).toFixed(2)} s`
