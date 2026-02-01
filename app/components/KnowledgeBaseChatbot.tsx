'use client'

import { useState, useRef, useEffect } from 'react'
import Fuse from 'fuse.js'
import { MessageCircle, X, Send } from 'lucide-react'
import faqData from '@/rinneai_faq.json'

interface Message {
  type: 'user' | 'bot'
  text: string
}

export default function KnowledgeBaseChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Initialize Fuse.js with fuzzy matching options
  const fuse = new Fuse(faqData, {
    keys: [
      { name: 'question', weight: 0.7 },
      { name: 'answer', weight: 0.3 }
    ],
    threshold: 0.35, // Lower threshold = more strict matching, higher = more fuzzy
    includeScore: true,
    ignoreLocation: true,    // CRITICAL: Matches regardless of where the word is in the sentence
    useExtendedSearch: true, // Allows for advanced matching like "include" instead of just "fuzzy"
    //findAllMatches: true,
    minMatchCharLength: 2,
  })

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

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = { type: 'user', text: inputValue.trim() }
    setMessages((prev) => [...prev, userMessage])
    const originalInput = inputValue.trim();
  setInputValue('');

  // STEP 1: Try a direct search with the full original string
  let results = fuse.search(originalInput);

  // STEP 2: Fallback to flexible OR logic ONLY if direct search is weak
  if (results.length === 0 || (results[0].score && results[0].score > 0.3)) {
    const flexibleQuery = originalInput.split(' ').join(' | ');
    const flexibleResults = fuse.search(flexibleQuery);
    
    // Use the better result between the two
    if (flexibleResults.length > 0 && (!results[0] || (flexibleResults[0].score || 1) < (results[0].score || 1))) {
      results = flexibleResults;
    }
  }
    
    let botResponse: string
    // Use a stricter threshold (0.4) to ensure accuracy
  if (results.length > 0 && results[0].score !== undefined && results[0].score < 0.4) {
    botResponse = results[0].item.answer;
  } else {
      botResponse = "I couldn't find a precise match. To help you better, could you ask about our website design, maintenance services, or custom AI solutions?";
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { type: 'bot', text: botResponse }])
    }, 500)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
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
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`px-4 py-2 rounded-lg max-w-[80%] ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-slate-200 text-slate-700'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Area */}
          <div className="border-t border-slate-200 p-4 bg-white rounded-b-xl">
            <div className="flex space-x-2">
              <textarea
                ref={textareaRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={2}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
