import React from 'react'
import { Link } from 'react-router'

const link = (link, index, route) => {
  const linkAttr = link.href.indexOf('http') > -1 || link.href.indexOf('mailto:') > -1
    ? { href: link.href }
    : { to: link.href }

  return (
    <li 
      key={index}
    >
      <Link
        {...linkAttr}
        activeClassName="active"
      >
        {link.name}
      </Link>
    </li>
  )
}

export default class extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            {
              this.props.links.map(link)
            }
          </ul>
        </nav>
      </header>
    )
  }
}
