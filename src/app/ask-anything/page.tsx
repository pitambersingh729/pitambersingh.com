"use client"
import { useChat, Message } from "ai/react"
import styles from './ask.module.css'
import Image from 'next/image'

export default function ChatComponent() {
    // Vercel AI SDK (ai package) useChat()
    // useChat -> handles messages for us, user input, handling user submits, etc.
    const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat();
    // messages -> [user asks a question, gpt-4 response, user asks again, gpt-4 responds]
    console.log(messages);
    console.log(input);

    return (
      <div>
        <div className={styles.bannerArea}>
          <span className={styles.shape2}>
            <Image
              src="/bannershape2.png"
              alt="Ask Anything Banner"
              width={545}
              height={170}
            />            
          </span>
         
          <div className={styles.headForm}>
            <h1>Hello, Ask Me Anything</h1>
            <h2>Search here to get answers to your questions in a lightning speed</h2>
            <div className={styles.popularKeywords}>
              <span>Popular:</span>
              <small>React JS</small>
              <small>Next JS</small>
              <small>Wordpress</small>
            </div>
          </div>
        </div>

      <div className={styles.defaultPage}>
          <div className="container">
          {messages.map((message : Message) => {
            return (
              <div key={message.id}>
                {/*  Name of person talking */}
                {
                  message.role === "assistant"
                  ?
                  <h3>My Response:</h3>
                  :
                  <h3>Your Question:</h3>
                }
                
                {/* Formatting the message */}
                {message.content.split("\n").map((currentTextBlock: string, index : number) => {
                  if(currentTextBlock === "") {
                    return <p key={message.id + index}>&nbsp;</p> // " "
                  } else {
                    return <p key={message.id + index}>{currentTextBlock}</p> // "Cooper Codes is a YouTuber"
                  }
                })}
              </div>
            )
          })}

            <div className={styles.headForm}>
              <div className={styles.headFormIn}>
                <form onSubmit={handleSubmit}>
                  <input type="text" className={styles.searchfield} placeholder={"What are data structures and algorithims?"} value={input} onChange={handleInputChange} />
                  <button className={styles.searchsubmit}>Ask</button>
                </form>
              </div>
            </div>
          <div className={styles.askSuggestions}>
            <h3>Topic Suggestions:</h3>
            <ul>
              <li>
                <span>How to setup next.js in windows 10</span>
                  <p><strong>Synopsis: </strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
              </li>
              <li>
                <span>How to rename a folder in AWS S3</span>
                  <p><strong>Synopsis: </strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
              </li>
              <li>
                <span>How to update your react version</span>
                  <p><strong>Synopsis: </strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                </li>
              <li>
                <span>How to use context in AWS SDK</span>
                  <p><strong>Synopsis: </strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
              </li>
              <li>
                <span>How to merge Arrays in TypeScript</span>
                  <p><strong>Synopsis: </strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
              </li>
              <li>
                <span>How to Reset a File input in React</span>
                  <p><strong>Synopsis: </strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
              </li>
              <li>
                <span>How to check your Bootstrap version</span>
                  <p><strong>Synopsis: </strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
              </li>
              <li>
                <span>Change the color of an SVG in React</span>
                  <p><strong>Synopsis: </strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}