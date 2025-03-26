const EN = {
  hello: "Hello",
} as const

export default EN as Record<keyof typeof EN, string>
