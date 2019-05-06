import React from "react"
import { rhythm, scale } from "../utils/typography"

class Form extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#F5F5F5",
          padding: `${rhythm(0.1)} ${rhythm(1 / 4)}`,
        }}
      >
        <form>
          <h2>Subscribe</h2>
          <input type="text" placeholder="First name" />
          <br />
          <br />
          <input type="email" placeholder="Email address" />
          <br />
          <br />
          <button
            style={{
              width: 215,
            }}
          >
            Subscribe
          </button>
        </form>
      </div>
    )
  }
}

export default Form
