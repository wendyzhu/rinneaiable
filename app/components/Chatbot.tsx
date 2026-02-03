'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import apiClient from '@/app/lib/api'

interface ChatbotProps {
  projectName?: string
  apiUrl?: string
}

interface Message {
  role: 'user' | 'assistant'
  content: string
  sources?: string[]
  responseTime?: number
}

export default function Chatbot({
  projectName = 'rinneai',
  apiUrl,
}: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  
  const MAX_WORDS = 200

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [isOpen])

  const countWords = (text: string): number => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    const words = countWords(value)
    
    // Only allow input if under word limit
    if (words <= MAX_WORDS) {
      setInput(value)
      setWordCount(words)
    } else {
      // Truncate to last valid position
      const wordsArray = value.trim().split(/\s+/)
      const truncated = wordsArray.slice(0, MAX_WORDS).join(' ')
      setInput(truncated)
      setWordCount(MAX_WORDS)
    }
  }

  const sendMessage = async () => {
    if (!input.trim() || loading) return
    
    // Double-check word count before sending
    const words = countWords(input)
    if (words > MAX_WORDS) {
      return
    }

    const userMessage: Message = {
      role: 'user',
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    const currentInput = input
    setInput('')
    setWordCount(0)
    setLoading(true)

    const startTime = Date.now()

    try {
      const response = await apiClient.post(
        `/projects/${projectName}/chat`,
        {
          question: currentInput,
          top_k: 5,
        }
      )

      const responseTime = Date.now() - startTime

      const assistantMessage: Message = {
        role: 'assistant',
        content: response.data.answer,
        sources: response.data.sources,
        responseTime,
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error: any) {
      console.error('Chat error:', error)
      const errorMessage: Message = {
        role: 'assistant',
        content:
          error.response?.data?.detail ||
          'Failed to get response. Please try again.',
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage()
  }

  return (
    <>
      {/* Floating Chat Icon */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center z-50"
          aria-label="Open chat"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}

      {/* Chat Popup Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-2 sm:right-4 md:right-6 left-2 sm:left-auto w-auto sm:w-96 h-[400px] sm:h-[500px] bg-white rounded-xl shadow-2xl z-50 flex flex-col border border-slate-200">
          {/* Chat Header */}
          <div className="bg-blue-600 text-white px-6 py-4 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <MessageCircle className="w-5 h-5" />
              <h3 className="font-semibold text-lg">Knowledge Base Chatbot</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-slate-200 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.length === 0 && (
              <div className="text-sm text-slate-500 text-center">
                Start a conversation with us! Ask about our services, pricing, or how to get started.
              </div>
            )}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`px-4 py-2 rounded-lg max-w-[80%] ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-slate-200 text-slate-700'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  {message.sources && message.sources.length > 0 && (
                    <div className="mt-2 pt-2 border-t border-slate-300">
                      <p className="text-xs text-slate-500">Sources:</p>
                      <ul className="text-xs text-slate-400 mt-1">
                        {message.sources.map((source, idx) => (
                          <li key={idx}>• {source}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {message.responseTime && (
                    <p className="text-xs text-slate-400 mt-1">
                      Response time: {message.responseTime}ms
                    </p>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Area */}
          <div className="border-t border-slate-200 p-4 bg-white rounded-b-xl">
            <form onSubmit={handleSend} className="flex flex-col space-y-2">
              <div className="flex space-x-2">
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  rows={2}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center"
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <div className="flex justify-between items-center text-xs text-slate-500">
                <span>{wordCount} / {MAX_WORDS} words</span>
                {loading && <span>Thinking...</span>}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
