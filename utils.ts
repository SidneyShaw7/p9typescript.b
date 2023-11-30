export const parseArguments = <T>(args: string[]): T => {
  if (args.length < 4) throw new Error('Not enough arguments');
  //   if (args.length > 4) throw new Error('Too many arguments');
  if (args.length === 4) {
    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
      return {
        value1: Number(args[2]),
        value2: Number(args[3]),
      } as T;
    } else {
      throw new Error('Provided values were not numbers!');
    }
  } else if (args.length > 4) {
    if (
      !isNaN(Number(args[2])) &&
      args.slice(3).every((value) => !isNaN(Number(value)))
    ) {
      return {
        value1: Number(args[2]),
        value2: args.slice(3).map((value) => Number(value)),
      } as T;
    } else {
      throw new Error('Some or all of the provided values were not numbers!');
    }
  }
};
