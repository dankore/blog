import React from "react"
import { rhythm, scale } from "../utils/typography"
import { withAssetPrefix } from "gatsby";

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
              color: "white",
              backgroundColor: "#007acc",
            }}
          >
            Subscribe
          </button>
          <br />
          <br />
          <p
            style={{
              fontSize: 12.5,
            }}
          >
            No spams. Unsubscribe at any time.
          </p>
        </form>
      </div>
    )
  }
}

export default Form
