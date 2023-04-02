function capitalizeFromCamelCase(string = ''): string {
  return string
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
}

export { capitalizeFromCamelCase }
