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
        <div className={styles.container}>
          <div className={styles.headForm}>
            <div className={styles.headFormIn}>
              <form onSubmit={handleSubmit}>
                <input type="text" className={styles.searchfield} placeholder="Ask Me Anything Related To Tech...." value={input} onChange={handleInputChange} />
                <button className={styles.searchsubmit}>Ask</button>
              </form>
            </div>
          </div>

            <div className={styles.responses}>
              {messages.map((message: Message) => {
                return (
                  <div className={styles.responseUser} key={message.id}>
                    {/*  Name of person talking */}
                    {/* {
                        message.role === "assistant"
                          ?
                          <h3>My Response:</h3>
                          :
                          <h3>Your Question:</h3>
                      } */}

                    {/* Formatting the message */}
                    {message.content.split("\n").map((currentTextBlock: string, index: number) => {
                      if (currentTextBlock === "") {
                        return <p key={message.id + index}>&nbsp;</p>
                      } else {
                        return <p key={message.id + index}>{currentTextBlock}</p>
                      }
                    })}
                  </div>
                )
              })}
            </div>

          <div className={styles.containerMid}>
            <div className={styles.LeftPage}>
              <div className={styles.askSuggestions}>
                <h3>Topic Suggestions:</h3>
                <ul>
                  <li>
                    <span>How to merge two Arrays in React.js</span>
                    <p><strong>Synopsis: </strong>If you want to merge the current state array with another array, pass a function to the setState() method we get..</p>
                  </li>
                  <li>
                    <span>How to rename a folder in AWS S3</span>
                    <p><strong>Synopsis: </strong>To rename an S3 folder with the AWS CLI, run the s3 mv command, passing in the complete S3 URI of the current folder's..</p>
                  </li>
                  <li>
                    <span>How to update your react version</span>
                    <p><strong>Synopsis: </strong>To update your React version, install the latest versions of the react and react-dom packages by running npm..</p>
                    </li>
                  <li>
                    <span>How to use context in AWS SDK</span>
                    <p><strong>Synopsis: </strong>These key-value pairs are going to be available at synthesis time, which means that we can use them in our code..</p>
                  </li>
                  <li>
                    <span>How to merge Arrays in TypeScript</span>
                    <p><strong>Synopsis: </strong>Use the spread syntax to merge arrays in TypeScript. The spread syntax will unpack the values of the arrays into..</p>
                  </li>
                  <li>
                    <span>How to Reset a File input in React</span>
                    <p><strong>Synopsis: </strong>To reset a file input in React, set the input's value to null in your handleChange function, e.g. event.target..</p>
                  </li>
                  <li>
                    <span>How to check your Bootstrap version</span>
                    <p><strong>Synopsis: </strong>You can check your Bootstrap version by opening your bootstrap.css or bootstrap.min.css file.</p>
                  </li>
                  <li>
                    <span>Change the color of an SVG in React</span>
                    <p><strong>Synopsis: </strong>Fill and stroke will only be applied when set through the component props if they haven't been defined in the svg..</p>
                  </li>
                  <li>
                    <span>How to Clear an Object in JavaScript</span>
                    <p><strong>Synopsis: </strong>Use a for..in loop to clear an object and delete all its properties. The loop will iterate over all the enumerable properties..</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}