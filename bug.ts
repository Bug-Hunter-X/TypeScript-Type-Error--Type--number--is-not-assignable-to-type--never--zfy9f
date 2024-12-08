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