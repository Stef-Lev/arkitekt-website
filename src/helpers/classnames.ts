export type classNames = (
    | string
    | [boolean | undefined, string]
    | [boolean | undefined, string, string]
    | undefined
  )[];
  
  export const cn = (...args: classNames): string =>
    args
      .map((classname) => {
        if (Array.isArray(classname)) {
          const [condition, trueClass, falseClass] = classname;
          return condition ? trueClass : falseClass || '';
        }
  
        return classname || '';
      })
      .filter(Boolean)
      .join(' ');
  