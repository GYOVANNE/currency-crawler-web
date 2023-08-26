export const formater = (type: string, value: string) => {
  const values: string[] = value.split(',').map((value) => value.trim().toLocaleUpperCase())
  if (type === 'number') {
    return values.length === 1 ? { number: values[0] } : { number_list: values }
  } else if (type === 'string') {
    return values.length === 1 ? { code: values[0] } : { code_list: values }
  }
}
