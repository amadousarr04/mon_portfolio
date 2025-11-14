import React, { useState, useEffect } from 'react'

export default function TypingEffect({ texts, typingSpeed = 100, deletingSpeed = 50, delayBetween = 2000 }) {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), delayBetween)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, delayBetween])

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-blink text-primary-400">|</span>
    </span>
  )
}
