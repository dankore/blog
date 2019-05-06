import React from 'react'

 class Form extends React.Component {
     render() {
          return (
            <div
              style={{
                minWidth: 400,
                backgroundColor: "	#F5F5F5",
                padding: 5,
              }}
            >
              <form>
                <h2>Subscribe</h2>
                <input type="text" placeholder="First name"/>
                <br />
                <br />
                <input type="email" placeholder="Email address" />
                <br />
                <br />
                <input
                  style={{
                    width: 215,
                  }}
                  type="submit"
                />
              </form>
            </div>
          )
     }
 }

export default Form