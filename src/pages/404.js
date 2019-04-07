import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/Group_4.png';
import './404.css';

const IndexPage = () => (
  <div>
    <div className  = "Hero">
      <div className = "HeaderTitle">
          <h1>How It Works</h1>
      </div>

      <div className = "Hero p">
          <p>1 | Reading ahead: Suspecto reads the article as soon as you load the page, and checks to see if the article has been read before.</p>
          <br></br> <br></br>
          <p>2 | Skeptical once-over: If the article is new, our engine actually reads the article to understand sentiment, syntax, and bias across a variety of categories.</p>
          <br></br> <br></br>
          <p>3 | Thumbs up or down: Once Suspecto understands whether or not the content is trustworthy, a warning or reassurance is shown to the user.</p>
      </div>
      </div>



      <div className = "Horizontal">
      </div>

    </div>
)

export default IndexPage