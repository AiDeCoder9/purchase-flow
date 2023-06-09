// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function removeEmptyValueFromObject(object: any) {
  Object.entries(object).forEach((objectValue) => {
    if (objectValue[1] === '') {
      delete object[objectValue[0]];
    }
  });
  return object;
}
