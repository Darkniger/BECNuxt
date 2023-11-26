import type { Block } from "./ServiceBlock"

export type Service = {
  name: string
  description: string
  slug: string
  blocks: Block[]
}
