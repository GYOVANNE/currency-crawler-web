const validators = new Map()
validators.set('string', /^([a-zA-Z]{3}(?:,[a-zA-Z]{3})*,?)*$/)
validators.set('number', /^(\d{3}(?:,\d{3})*,?)*$/)

export default validators