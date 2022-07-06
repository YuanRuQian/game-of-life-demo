import { CSSProperties, ReactNode } from 'react'

const getEmojiCursorStyle = (children: ReactNode): CSSProperties => ({
  cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:1.5rem;'><text y='50%'>${children}</text></svg>"), auto`,
})

export const WandEmojiCursorStyle = getEmojiCursorStyle(`🪄`)

export const QuestionMarkEmojiCursorStyle = getEmojiCursorStyle(`❓`)

export const CrossEmojiCursorStyle = getEmojiCursorStyle(`❌`)

export const WrenchEmojiCursorStyle = getEmojiCursorStyle(`🔧`)
