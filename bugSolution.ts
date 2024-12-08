function calculateArea(shape: string, width: number, height: number): number {
  switch (shape) {
    case "rectangle":
      return width * height;
    case "triangle":
      return 0.5 * width * height; 
    default:
      throw new Error("Invalid shape");
  }
}

// Solution: Type assertion
// By using a type assertion, we explicitly tell TypeScript that the return value will always be a number.
function calculateAreaSolution(shape: string, width: number, height: number): number {
  let area: number;
  switch (shape) {
    case "rectangle":
      area = width * height;
      break;
    case "triangle":
      area = 0.5 * width * height;
      break;
    default:
      throw new Error("Invalid shape");
  }
  return area;
}

// Alternative solution: Using a union type
function calculateAreaUnion(shape: string, width: number, height: number): number | never {
    switch (shape) {
        case "rectangle":
            return width * height;
        case "triangle":
            return 0.5 * width * height;
        default:
            return never;
    }
} 