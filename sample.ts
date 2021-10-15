async asyncFuncSample(data: string): Promise<String> {
  // if you want to test rejection then uncomment below line
  // trhow new Error("test error")

  return "success"
}
  
const [result, error] = await resolver(asyncFuncSample("Some data"))

if (error) {
  console.log(error)
  exit(0)
}
  
console.log(result);
